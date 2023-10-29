import { LayoutPage } from '@/components/layout-page/LayoutPage';
import { PostList } from '@/components/post-list/PostList';
import { MS_REVALIDATE_FETCH } from '@/constants/app';
import { STATE } from '@/constants/common';
import { postsControllerGetAllPosts } from '@/orval/api';

export const revalidate = MS_REVALIDATE_FETCH;

export default async function PageUser(props: { params: { id: string } }) {
  const { id } = props.params;
  const { data: posts } = await postsControllerGetAllPosts();

  return (
    <LayoutPage
      title={
        <span className="flex">
          <span>User</span>
          &nbsp;
          <span className="flex-1 truncate" title={id}>
            {id}
          </span>
          &nbsp;
          <span className="font-normal">({posts.filter((p) => p.authorId === id).length})</span>
        </span>
      }
    >
      <PostList
        posts={posts}
        authorId={props.params.id}
        state={posts ? STATE.SUCCESS : STATE.FAILURE}
      />
    </LayoutPage>
  );
}
