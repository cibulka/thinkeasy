import { PropsWithChildren } from 'react';
import Link from 'next/link';

type NavIconProps = PropsWithChildren & { href?: string; onClick?: () => void };

function NavIconEl(props: NavIconProps & { className: string }) {
  if (props.href)
    return (
      <Link href={props.href} className={props.className}>
        {props.children}
      </Link>
    );

  return (
    <button className={props.className} type="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export function NavIcon(props: NavIconProps & { icon: JSX.Element; label: string }) {
  return (
    <NavIconEl href="/" className="flex flex-1 flex-col items-center justify-center p-2">
      <span className="text-neutral-500 w-8 h-8">{props.icon}</span>
      <span className="mt-1 font-bold text-xs">{props.label}</span>
    </NavIconEl>
  );
}
