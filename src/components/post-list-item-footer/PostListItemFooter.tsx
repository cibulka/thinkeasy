import dayjs from 'dayjs';

import { Chip } from '@/components/chip/Chip';
import { IconTime } from '@/icons/IconTime';
import { IconUser } from '@/icons/IconUser';
import { PostResponse } from '@/orval/api';
import { URL_APP_DYNAMIC } from '@/constants/app';

export function PostListItemFooter(props: { post: PostResponse }) {
  return (
    <footer className="flex gap-8 text-sm font-semibold">
      <Chip icon={<IconTime />}>{dayjs(props.post.createdAt).format('D/M YYYY')}</Chip>
      <Chip icon={<IconUser />} href={URL_APP_DYNAMIC.AUTHOR(props.post.authorId)}>
        <span className="block truncate w-32">{props.post.authorId}</span>
      </Chip>
    </footer>
  );
}
