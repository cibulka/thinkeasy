import { SESSION_STORAGE } from '@/constants/app';
import { User, UserAfterSignup } from '@/types/api';
import { atom } from 'recoil';

const ATOM_KEYS = {
  TOKEN: 'TOKEN',
  USER: 'USER',
};

export const atomTokens = atom({
  key: ATOM_KEYS.TOKEN,
  default: {
    accessToken: '',
    refreshToken: '',
    isSessionStorageReady: false,
  },
  effects: [
    (methods) => {
      methods.onSet((tokens) => {
        if (!window.sessionStorage) return;
        window.sessionStorage.setItem(SESSION_STORAGE.TOKEN_ACCESS, tokens.accessToken);
        window.sessionStorage.setItem(SESSION_STORAGE.TOKEN_REFRESH, tokens.refreshToken);
      });
    },
  ],
});

export const atomUser = atom<User | UserAfterSignup | null>({
  key: ATOM_KEYS.USER,
  default: null,
});
