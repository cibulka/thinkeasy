import { selector } from 'recoil';

import { SESSION_STORAGE } from '@/constants/app';

import { atomTokens } from './atom';

const SELECTOR_KEYS = {
  TOKEN: 'TOKEN_S',
};

export const selectTokens = selector({
  key: SELECTOR_KEYS.TOKEN,
  get: ({ get }) => {
    const result = { ...get(atomTokens) };
    if (typeof window !== 'undefined') {
      result.isSessionStorageReady = true;
      if ((!result.refreshToken || !result.accessToken) && window.sessionStorage) {
        result.accessToken = window.sessionStorage.getItem(SESSION_STORAGE.TOKEN_ACCESS) || '';
        result.refreshToken = window.sessionStorage.getItem(SESSION_STORAGE.TOKEN_REFRESH) || '';
      }
    }
    return result;
  },
});
