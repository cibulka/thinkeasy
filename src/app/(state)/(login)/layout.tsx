'use client';
import { PropsWithChildren, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { URL_APP_STATIC } from '@/constants/app';
import { useIsLoggedIn } from '@/recoil/utils';
import { LayoutPage } from '@/components/layout-page/LayoutPage';
import { SkeletonForm } from '@/components/skeleton/SkeletonForm';
import { useIsHydrated } from '@/utils/useIsHydrated';

export default function LoginLayout(props: PropsWithChildren) {
  const isHydrated = useIsHydrated();
  const isLoggedIn = useIsLoggedIn();

  const { replace } = useRouter();
  useEffect(() => {
    if (isLoggedIn === true) replace(URL_APP_STATIC.USER);
  }, [isLoggedIn, replace]);

  if (!isHydrated || isLoggedIn !== false) {
    return (
      <LayoutPage title="Login">
        <SkeletonForm />
      </LayoutPage>
    );
  }

  return props.children;
}
