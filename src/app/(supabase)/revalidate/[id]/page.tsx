import supabase from '@/utils/supabase';
import { notFound } from 'next/navigation';

export const revalidate = 60;

export async function generateStaticParams() {
  const { data: posts } = await supabase.from('posts').select('id');
  return posts ?? [];
}

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
