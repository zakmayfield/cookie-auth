import supabase from '@/utils/supabase';
import RealtimePosts, { Post } from './RealtimePosts';

export const revalidate = 0;

export default async function Posts() {
  const { data } = await supabase.from('posts').select();

  return <RealtimePosts serverPosts={(data as Post[]) ?? []} />;
}
