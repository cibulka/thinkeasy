import { Button } from '@/components/button/Button';
import { IconHourGlass } from '@/icons/IconHourGlass';
import { PropsWithChildren } from 'react';

export function ButtonSubmit(
  props: PropsWithChildren & { className?: string; isLoading?: boolean },
) {
  return (
    <Button className={props.className} type="submit" disabled={props.isLoading}>
      <span className="flex gap-2">
        {props.isLoading && <IconHourGlass className="w-6 h-6" />}
        <span>{props.children}</span>
      </span>
    </Button>
  );
}
