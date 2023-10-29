export const URL_API_BASE = 'https://frontend-test-be.stage.thinkeasy.cz';

export const URL_API_STATIC = {
  AUTH_SIGNUP: '/auth/signup',
  AUTH_LOGIN: '/auth/login',
  AUTH_REFRESH_TOKEN: '/auth/refresh-token',
  POSTS: '/posts',
} as const;

export const URL_API_DYNAMIC = {
  POSTS_POST: (id: string) => `/posts/${id}`,
  USER: (id: string) => `/posts/user/${id}`,
} as const;
