import { PropsWithChildren } from 'react';

import { IconChevronDown } from '@/icons/IconChevronDown';

export function AuthorsListFilterButton(
  props: PropsWithChildren & { isActive: boolean; isDesc: boolean; onClick: () => void },
) {
  return (
    <button
      type="button"
      className={['flex items-center gap-2', props.isActive && 'text-emerald-500'].join(' ')}
      onClick={props.onClick}
    >
      {props.children}
      <span
        className={[
          'w-4 h-4',
          'transform transition-transform',
          props.isDesc ? 'rotate-180' : 'rotate0',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <IconChevronDown />
      </span>
    </button>
  );
}
