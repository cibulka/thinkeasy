import { ErrorView } from '@/components/error-view/ErrorView';
import { SkeletonPostList } from '@/components/skeleton/SkeletonPostList';
import { STATE, State } from '@/constants/common';
import { PostResponse } from '@/orval/api';

import { PostListWithData } from './components/PostListWithData';

export function PostList(props: {
  authorId?: string;
  className?: string;
  isSearchHidden?: boolean;
  posts: PostResponse[] | null;
  state: State;
}) {
  return (
    <div className={[props.className].filter(Boolean).join(' ')}>
      {props.state === STATE.IDLE || props.state === STATE.LOADING ? (
        <SkeletonPostList />
      ) : props.state === STATE.SUCCESS && props.posts ? (
        <PostListWithData
          authorId={props.authorId}
          isSearchHidden={props.isSearchHidden}
          posts={props.posts}
        />
      ) : (
        <ErrorView />
      )}
    </div>
  );
}
