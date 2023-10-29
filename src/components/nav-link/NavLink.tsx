import { PropsWithChildren } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavLink(props: PropsWithChildren & { href: string; icon: JSX.Element }) {
  const pathname = usePathname();
  return (
    <Link
      href={props.href}
      className={['flex gap-2 py-2 px-4', pathname === props.href && 'text-emerald-500 font-bold']
        .filter(Boolean)
        .join(' ')}
    >
      <span
        className={['w-6 h-6', pathname !== props.href && 'text-neutral-500']
          .filter(Boolean)
          .join(' ')}
      >
        {props.icon}
      </span>
      <span>{props.children}</span>
    </Link>
  );
}
