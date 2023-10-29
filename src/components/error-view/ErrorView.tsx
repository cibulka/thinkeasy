import { IconError } from '@/icons/IconError';
import { IconUser } from '@/icons/IconUser';

export function ErrorView(props: { className?: string; title?: string; subTitle?: string }) {
  return (
    <div className={[props.className, 'flex gap-2 flex-col items-center justify-center'].join(' ')}>
      <span className="w-20 h-20">
        <IconError className="fill-red-500" />
      </span>
      <h1 className="text-4xl font-bold">{props.title || 'Something went wrong'}</h1>
      <h2>{props.subTitle || 'Let me know please!'}</h2>
    </div>
  );
}
