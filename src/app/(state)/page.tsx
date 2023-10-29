import { LayoutPage } from '@/components/layout-page/LayoutPage';
import { PostList } from '@/components/post-list/PostList';
import { MS_REVALIDATE_FETCH } from '@/constants/app';
import { STATE } from '@/constants/common';
import { postsControllerGetAllPosts } from '@/orval/api';

export const revalidate = MS_REVALIDATE_FETCH;

export default async function Home() {
  const { data: posts } = await postsControllerGetAllPosts();
  return (
    <LayoutPage title="All posts">
      <PostList posts={posts} state={posts ? STATE.SUCCESS : STATE.FAILURE} />
    </LayoutPage>
  );
}
