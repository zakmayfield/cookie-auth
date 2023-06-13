import { Database } from '@/lib/database.types';

export type Post = Database['public']['Tables']['posts']['Row'];

export default function RealtimePosts({
  serverPosts,
}: {
  serverPosts: Post[];
}) {
  console.log(serverPosts);
  return <pre>{JSON.stringify(serverPosts, null, 2)}</pre>;
}
