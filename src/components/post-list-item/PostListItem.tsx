import Link from 'next/link';

import { PostListItemFooter } from '@/components/post-list-item-footer/PostListItemFooter';
import { getAppUrlDynamic } from '@/utils/getUrl';
import { PostResponse } from '@/orval/api';

export function PostListItem(props: { post: PostResponse }) {
  return (
    <article className="flex flex-col gap-2">
      <Link href={getAppUrlDynamic('POST', props.post.id)}>
        <h2 className="text-xl font-semibold underline">{props.post.title}</h2>
      </Link>
      <p className="line-clamp-3">{props.post.content}</p>
      <PostListItemFooter post={props.post} />
    </article>
  );
}
