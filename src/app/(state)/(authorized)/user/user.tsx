'use client';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { Button } from '@/components/button/Button';
import { Chip } from '@/components/chip/Chip';
import { URL_APP_STATIC } from '@/constants/app';
import { IconBook } from '@/icons/IconBook';
import { IconTime } from '@/icons/IconTime';
import { IconUser } from '@/icons/IconUser';
import { PostResponse, postsControllerUserPosts } from '@/orval/api';
import { User, UserAfterSignup } from '@/types/api';
import { isUserWithId } from '@/utils/typeGuards';
import { useResetTokens } from '@/recoil/utils';
import { useRecoilValue } from 'recoil';
import { atomTokens } from '@/recoil/atom';
import { STATE, State } from '@/constants/common';
import { PostList } from '@/components/post-list/PostList';

export function UserWithData(props: { user: User | UserAfterSignup }) {
  const [posts, setPosts] = useState<null | PostResponse[]>(null);
  const [postsState, setPostsState] = useState<State>(STATE.IDLE);

  const { accessToken } = useRecoilValue(atomTokens);
  const resetTokens = useResetTokens();
  const userWithId = isUserWithId(props.user) ? props.user : null;
  const userId = userWithId?.id;

  useEffect(() => {
    if (!userId) return;
    setPostsState(STATE.LOADING);
    postsControllerUserPosts(userId, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => {
        setPosts(res.data);
        setPostsState(STATE.SUCCESS);
      })
      .catch(() => {
        setPostsState(STATE.FAILURE);
      });
  }, [accessToken, userId]);

  return (
    <div className="flex flex-col gap-8">
      <ul className="mb-4">
        <li className="py-2 border-b">
          <Chip icon={<IconUser />}>{props.user.email}</Chip>
        </li>
        <li className="py-2 border-b">
          <Chip icon={<IconBook />}>
            {props.user.firstname || props.user.lastname
              ? [props.user.firstname, props.user.lastname].filter(Boolean).join(' ')
              : '---'}
          </Chip>
        </li>
        <li className="py-2 border-b">
          <Chip icon={<IconTime />}>
            Registered {dayjs(props.user.createdAt).format('D/M YYYY')}
          </Chip>
        </li>
      </ul>

      <div className="flex gap-4 justify-between">
        <Button href={URL_APP_STATIC.CREATE}>Create new post</Button>
        <Button variant="danger" onClick={resetTokens}>
          Logout
        </Button>
      </div>

      <div>
        <h2 className="font-bold text-2xl mb-8">Your posts</h2>
        {userId ? (
          <PostList posts={posts} state={postsState} />
        ) : (
          <div>
            <p>
              We need your unique ID to display that, but that is not available at signup. Please
              <button type="button" onClick={resetTokens} className="underline text-blue-500">
                logout and login back again
              </button>
              .
            </p>
            <p>Sorry for the inconvenince!</p>
          </div>
        )}
      </div>
    </div>
  );
}
