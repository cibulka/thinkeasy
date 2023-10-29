import { useRecoilState } from 'recoil';

import { authControllerRefreshToken } from '@/orval/api';
import { atomTokens } from '@/recoil/atom';
import { useResetTokens } from '@/recoil/utils';

export function usePostRefreshToken() {
  const [_tokens, setTokens] = useRecoilState(atomTokens);
  const resetTokens = useResetTokens();

  return (accessToken: string, refreshToken: string) => {
    authControllerRefreshToken(
      { token: refreshToken },
      { headers: { Authorization: `Bearer ${accessToken}` } },
    )
      .then((res) => {
        setTokens((old) => ({ ...old, accessToken: res.data.access_token }));
      })
      .catch(() => {
        resetTokens();
      });
  };
}
