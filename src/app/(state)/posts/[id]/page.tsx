import { notFound } from 'next/navigation';

import { LayoutPage } from '@/components/layout-page/LayoutPage';
import { postsControllerGetAllPosts, postsControllerPost } from '@/orval/api';
import { PostListItemFooter } from '@/components/post-list-item-footer/PostListItemFooter';
import { PostList } from '@/components/post-list/PostList';
import { STATE } from '@/constants/common';
import { MS_REVALIDATE_FETCH } from '@/constants/app';

export const revalidate = MS_REVALIDATE_FETCH;

export default async function PagePost(props: { params: { id: string } }) {
  const { id } = props.params;
  const { data: posts } = await postsControllerGetAllPosts();
  const { data: post } = await postsControllerPost(id);
  if (!post) notFound();

  return (
    <LayoutPage title={post.title}>
      <div className="mb-12">
        <div className="text-xl mb-4">{post.content}</div>
        <PostListItemFooter post={post} />
      </div>
      <section>
        <h2 className="text-2xl font-bold mb-8">More posts from author</h2>
        <PostList isSearchHidden posts={posts} authorId={post.authorId} state={STATE.SUCCESS} />
      </section>
    </LayoutPage>
  );
}
