import supabase from '@/utils/supabase';
import { notFound } from 'next/navigation';
import RealtimePost from '../RealtimePost';
import type { Post } from '../RealtimePosts';

export const revalidate = 0;

export default async function Post({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data: serverPost } = await supabase
    .from('posts')
    .select()
    .match({ id })
    .single();

  if (!serverPost) {
    notFound();
  }

  return <RealtimePost serverPost={(serverPost as Post) ?? {}} />;
}
