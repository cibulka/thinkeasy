import { PropsWithChildren } from 'react';

export function LayoutPage(props: PropsWithChildren & { title: JSX.Element | string }) {
  return (
    <section className="flex flex-col h-full">
      <h1 className="text-4xl font-bold mb-8">{props.title}</h1>
      {props.children}
    </section>
  );
}
