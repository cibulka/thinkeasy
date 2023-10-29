'use client';
import { PropsWithChildren } from 'react';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { URL_CIBULKA } from '@/constants/app';

import { Nav } from './nav';
import { RefreshToken } from './refresh-token';

export default function LayoutWithState(props: PropsWithChildren) {
  return (
    <RecoilRoot>
      <RefreshToken />
      <div className={['relative', 'flex flex-row-reverse gap-12', 'lgMax:flex-col'].join(' ')}>
        <Nav />
        <div
          className="flex flex-col max-w-xl lg:pt-12 relative"
          style={{ width: 'calc(100vw - 2em)' }}
        >
          <main className="flex-1" id="main">
            {props.children}
          </main>
          <footer className="mt-12 py-2 border-t text-center">
            <a href={URL_CIBULKA} className="underline text-blue-500">
              {URL_CIBULKA.replace('https://', '')}
            </a>
          </footer>
          <ToastContainer position="bottom-left" draggable />
        </div>
      </div>
    </RecoilRoot>
  );
}
