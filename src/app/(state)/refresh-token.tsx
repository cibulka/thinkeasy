import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { SESSION_STORAGE } from '@/constants/app';
import { authControllerRefreshToken } from '@/orval/api';
import { atomTokens } from '@/recoil/atom';

export function RefreshToken() {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [isSessionStorageReady, setIsSessionStorageReady] = useState(false);
  const [_tokens, setTokens] = useRecoilState(atomTokens);

  useEffect(() => {
    const accessTokenCached = window.sessionStorage
      ? window.sessionStorage.getItem(SESSION_STORAGE.TOKEN_ACCESS)
      : null;
    const refreshTokenCached = window.sessionStorage
      ? window.sessionStorage.getItem(SESSION_STORAGE.TOKEN_REFRESH)
      : null;

    if (accessTokenCached && refreshTokenCached) {
      authControllerRefreshToken(
        { token: refreshTokenCached },
        { headers: { Authorization: `Bearer ${accessTokenCached}` } },
      ).then((res) => {
        setAccessToken(res.data.access_token);
        setRefreshToken(refreshTokenCached);
        setIsSessionStorageReady(true);
      });
    } else {
      setIsSessionStorageReady(true);
    }
  }, []);

  useEffect(() => {
    if (!isSessionStorageReady) return;
    setTokens({
      isSessionStorageReady: true,
      accessToken,
      refreshToken,
    });
  }, [isSessionStorageReady, accessToken, refreshToken, setTokens]);

  return null;
}
