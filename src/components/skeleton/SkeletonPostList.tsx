import { POSTS_PER_PAGE } from '@/constants/app';

import { SkeletonPostListItem } from './SkeletonPostListItem';

export function SkeletonPostList() {
  return (
    <div className="flex flex-col gap-8">
      {[...Array(POSTS_PER_PAGE)].map((_el, i) => (
        <SkeletonPostListItem key={i} />
      ))}
    </div>
  );
}
