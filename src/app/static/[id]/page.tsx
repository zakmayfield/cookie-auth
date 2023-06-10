import supabase from '@/utils/supabase';

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

  return <pre>{JSON.stringify(post, null, 2)}</pre>;
}
