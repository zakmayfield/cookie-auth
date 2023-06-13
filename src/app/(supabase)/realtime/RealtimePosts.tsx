'use client';

import { useEffect, useState } from 'react';
import { Database } from '@/lib/database.types';
import supabase from '@/utils/supabase';

export type Post = Database['public']['Tables']['posts']['Row'];

export default function RealtimePosts({
  serverPosts,
}: {
  serverPosts: Post[];
}) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    const channel = supabase
      .channel('realtime posts')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'posts',
        },
        (payload) => {
          console.log({ payload });
          setPosts([...posts, payload.new as Post]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [posts, setPosts]);

  return <pre>{JSON.stringify(posts, null, 2)}</pre>;
}
