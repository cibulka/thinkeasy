import { LayoutPage } from '@/components/layout-page/LayoutPage';
import { PostList } from '@/components/post-list/PostList';
import { STATE } from '@/constants/common';
import { postsControllerGetAllPosts } from '@/orval/api';

export default async function Home() {
  const { data: posts } = await postsControllerGetAllPosts();
  return (
    <LayoutPage title="All posts">
      <PostList posts={posts} state={posts ? STATE.SUCCESS : STATE.FAILURE} />
    </LayoutPage>
  );
}
