import supabase from '@/utils/supabase';
import { notFound } from 'next/navigation';

export const revalidate = 0;

export default async function Post({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data: post } = await supabase
    .from('posts')
    .select()
    .match({ id })
    .single();

  if (!post) {
    notFound();
  }

  return <pre>{JSON.stringify(post, null, 2)}</pre>;
}
