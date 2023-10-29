'use client';
import { useRecoilValue } from 'recoil';

import { LayoutPage } from '@/components/layout-page/LayoutPage';
import { MS_REVALIDATE_FETCH } from '@/constants/app';
import { atomUser } from '@/recoil/atom';

import { UserWithData } from './user';
import { UserWithoutData } from './user-without-data';

export const revalidate = MS_REVALIDATE_FETCH;

export default function PageUser() {
  const user = useRecoilValue(atomUser);

  return (
    <LayoutPage title="Hello!">
      {user ? <UserWithData user={user} /> : <UserWithoutData />}
    </LayoutPage>
  );
}
