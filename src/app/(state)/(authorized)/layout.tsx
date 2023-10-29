'use client';
import { PropsWithChildren, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { URL_APP_STATIC } from '@/constants/app';
import { LayoutPage } from '@/components/layout-page/LayoutPage';
import { useIsLoggedIn } from '@/recoil/utils';
import { SkeletonForm } from '@/components/skeleton/SkeletonForm';
import { useIsHydrated } from '@/utils/useIsHydrated';

export default function AuthorizedLayout(props: PropsWithChildren) {
  const isHydrated = useIsHydrated();
  const isLoggedIn = useIsLoggedIn();
  const { replace } = useRouter();

  useEffect(() => {
    if (isLoggedIn === false) replace(URL_APP_STATIC.LOGIN);
  }, [isLoggedIn, replace]);

  return (
    <>
      {isHydrated && isLoggedIn === true ? (
        props.children
      ) : (
        <LayoutPage title="Loading ...">
          <SkeletonForm />
        </LayoutPage>
      )}
    </>
  );
}
