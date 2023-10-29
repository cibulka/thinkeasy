import Link from 'next/link';

import { URL_APP_STATIC } from '@/constants/app';
import { useLogout } from '@/recoil/utils';

export function UserWithoutData() {
  const logout = useLogout();

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xl">
        <strong>Hello there!</strong> You continue to be logged in and you still can{' '}
        <Link href={URL_APP_STATIC.CREATE} className="text-blue-500 underline">
          create new posts
        </Link>
        , however there is no way to get data about your account after the page refresh.
      </p>
      <h2 className="text-xl font-bold">What to do about this?</h2>
      <p>
        <button type="button" onClick={logout} className="underline text-blue-500">
          Logout from your account
        </button>{' '}
        and login again, you will se your user data back where it was.
      </p>
      <h2 className="text-xl font-bold">Why is that? (to speak technically)</h2>
      <p>
        This page stores your <code>accessToken</code> and <code>refreshToken</code> in session
        storage of your browser. The autologin after page refresh is done with the endpoint{' '}
        <code>POST /auth/refresh-token</code>, which unfortunately returns no data about the current
        user.
      </p>
    </div>
  );
}
