import path from 'path';

import { URL_API_BASE, URL_API_DYNAMIC, URL_API_STATIC } from '@/constants/api';
import { URL_APP_DYNAMIC, URL_APP_STATIC } from '@/constants/app';

function getUrl(urlPath: string, base = '') {
  return path.join(base || '/', urlPath);
}

export function getApiUrlStatic(pathName: keyof typeof URL_API_STATIC) {
  const path = URL_API_STATIC[pathName];
  return getUrl(path, URL_API_BASE);
}

export function getApiUrlDynamic(pathName: keyof typeof URL_API_DYNAMIC, id: string) {
  const path = URL_API_DYNAMIC[pathName](id);
  return getUrl(path, URL_API_BASE);
}

export function getAppUrlStatic(pathName: keyof typeof URL_APP_STATIC) {
  const path = URL_APP_STATIC[pathName];
  return getUrl(path);
}

export function getAppUrlDynamic(pathName: keyof typeof URL_APP_DYNAMIC, id: string) {
  const path = URL_APP_DYNAMIC[pathName](id);
  return getUrl(path);
}
