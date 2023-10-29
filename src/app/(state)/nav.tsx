'use client';
import Link from 'next/link';

import { NavLink } from '@/components/nav-link/NavLink';
import { URL_APP_STATIC, URL_CIBULKA, URL_THINKEASY } from '@/constants/app';
import { IconBook } from '@/icons/IconBook';
import { IconLightbulb } from '@/icons/IconLightbulb';
import { IconOnion } from '@/icons/IconOnion';
import { IconPen } from '@/icons/IconPen';
import { IconUser } from '@/icons/IconUser';
import { IconUsers } from '@/icons/IconUsers';
import { getAppUrlStatic } from '@/utils/getUrl';
import { IconLockOn } from '@/icons/IconLockOn';
import { useIsLoggedIn } from '@/recoil/utils';
import { useIsHydrated } from '@/utils/useIsHydrated';

import styles from './nav.module.css';

export function Nav() {
  const isLoggedIn = useIsLoggedIn();
  const isHydrated = useIsHydrated();

  return (
    <nav className={styles.nav}>
      <header className="lgMax:hidden">
        <div className="flex gap-12">
          <a href={URL_CIBULKA} className="w-20 h-20">
            <IconOnion className="fill-emerald-500" />
          </a>
          <a href={URL_THINKEASY} className="w-20 h-20">
            <IconLightbulb className="fill-orange-500" />
          </a>
        </div>
        <Link href={URL_APP_STATIC.HOME}>
          <h1 className="text-xl mt-6 font-bold text-center">Cibulka for ThinkEasy</h1>
        </Link>
      </header>
      <ul className={styles.menu}>
        <li>
          <NavLink href={getAppUrlStatic('HOME')} icon={<IconBook />}>
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink href={getAppUrlStatic('AUTHORS')} icon={<IconUsers />}>
            Authors
          </NavLink>
        </li>
        {isHydrated && isLoggedIn ? (
          <>
            <li>
              <NavLink href={getAppUrlStatic('CREATE')} icon={<IconPen />}>
                New post
              </NavLink>
            </li>
            <li>
              <NavLink href={getAppUrlStatic('USER')} icon={<IconUser />}>
                Profile
              </NavLink>
            </li>
          </>
        ) : (
          <li>
            <NavLink href={getAppUrlStatic('LOGIN')} icon={<IconLockOn />}>
              Log in
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
