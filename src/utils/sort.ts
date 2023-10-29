import dayjs from 'dayjs';

import { PostResponse } from '@/orval/api';

export function sortByDateCreated(posts: PostResponse[]) {
  return [...posts].sort((a, b) => {
    return dayjs(b.createdAt).unix() - dayjs(a.createdAt).unix();
  });
}
