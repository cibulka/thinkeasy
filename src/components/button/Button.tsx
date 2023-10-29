import Link from 'next/link';
import { PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren & {
  className?: string;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'danger';
};

export function ButtonWrap(props: ButtonProps) {
  const { disabled, href, onClick, children, type, ...rest } = props;
  return href ? (
    <Link href={href} {...rest}>
      {children}
    </Link>
  ) : (
    <button disabled={disabled} type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

export function Button(props: ButtonProps) {
  const variant = props.variant || 'primary';
  return (
    <ButtonWrap
      {...props}
      className={[
        props.className,
        'rounded-md py-2 px-4 font-semibold',
        variant === 'primary' && 'bg-blue-500 text-white',
        variant === 'danger' && 'bg-red-500 text-white',
        props.disabled && 'opacity-50',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {props.children}
    </ButtonWrap>
  );
}
