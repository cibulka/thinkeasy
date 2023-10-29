import { useRecoilValue, useResetRecoilState } from 'recoil';

import { atomTokens } from './atom';
import { selectTokens } from './selector';

export function useIsLoggedIn() {
  const { accessToken, refreshToken, isSessionStorageReady } = useRecoilValue(selectTokens);
  if (!isSessionStorageReady) return null;
  return Boolean(accessToken && refreshToken);
}

export function useResetTokens() {
  const resetTokens = useResetRecoilState(atomTokens);

  return () => {
    if (window.sessionStorage) window.sessionStorage.clear();
    resetTokens();
  };
}

export function useLogout() {
  const resetTokens = useResetTokens();
  return () => {
    resetTokens();
    if (window.location) window.location.reload();
  };
}
