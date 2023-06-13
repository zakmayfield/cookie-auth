'use client';

import { useEffect, useState } from 'react';
import supabase from '@/utils/supabase';
import { Post } from './RealtimePosts';

export default function RealtimePost({ serverPost }: { serverPost: Post }) {
  const [post, setPost] = useState(serverPost);

  useEffect(() => {
    const channel = supabase
      .channel('realtime posts')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'posts',
          filter: `id=eq.${post.id}`,
        },
        (payload) => {
          setPost(payload.new as Post);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [post, setPost]);

  return <pre>{JSON.stringify(post, null, 2)}</pre>;
}
