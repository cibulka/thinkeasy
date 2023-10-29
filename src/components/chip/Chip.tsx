import Link from 'next/link';
import { CSSProperties, PropsWithChildren } from 'react';

type ChipProps = {
  className?: string;
  href?: string;
  style?: CSSProperties;
};

export function ChipWrap(props: PropsWithChildren & ChipProps) {
  return props.href ? (
    <Link {...props} href={props.href}>
      {props.children}
    </Link>
  ) : (
    <span {...props}>{props.children}</span>
  );
}

export function Chip(
  props: PropsWithChildren &
    ChipProps & {
      icon: JSX.Element;
    },
) {
  const { href } = props;
  return (
    <ChipWrap
      href={href}
      className={['flex items-center gap-2 flex-shrink-0', props.className]
        .filter(Boolean)
        .join(' ')}
      style={props.style}
    >
      <span className="w-6 h-6 text-neutral-500 flex-shrink-0">{props.icon}</span>
      <span className="flex-1 truncate">{props.children}</span>
    </ChipWrap>
  );
}
