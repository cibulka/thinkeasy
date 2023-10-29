import { URL_API_DYNAMIC } from './api';

export const URL_CIBULKA = 'https://www.cibulka.codes';
export const URL_THINKEASY = 'https://thinkeasy.cz/';

export const SEARCH_QUERY_MIN_LENGTH = 3;

export const URL_APP_STATIC = {
  AUTHORS: '/posts/user',
  CREATE: '/create',
  LOGIN: '/login',
  SIGNUP: '/signup',
  USER: '/user',
  HOME: '/',
} as const;

export const URL_APP_DYNAMIC = {
  POST: URL_API_DYNAMIC.POSTS_POST,
  AUTHOR: (id: string) => `/posts/user/${id}`,
} as const;

export const POSTS_PER_PAGE = 10;

export const SESSION_STORAGE = {
  TOKEN_ACCESS: 'SESSION_STORAGE_TOKEN_ACCESS',
  TOKEN_REFRESH: 'SESSION_STORAGE_TOKEN_REFRESH',
};

export const MIN_PASSWORD_LENGTH = 8;

export const MS_REFRESH_TOKEN_INTERVAL = 60 * 1000;

export const MS_REVALIDATE_FETCH = 1;
