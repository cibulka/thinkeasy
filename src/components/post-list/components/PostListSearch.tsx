import { IconSearch } from '@/icons/IconSearch';

export function PostListSearch(props: {
  className?: string;
  onChange: (v: string) => void;
  value: string;
}) {
  return (
    <div className={[props.className, 'sticky top-0', 'lgMax:top-16'].filter(Boolean).join(' ')}>
      <label
        className={[
          'bg-white p-2',
          'rounded-md border',
          'flex items-center gap-2',
          'focus-within:border-blue-500',
          '-ml-2 -mr-2 lgMax:-ml-4 lgMax:-mr-4',
        ].join(' ')}
      >
        <span className="w-8 h-8">
          <IconSearch />
        </span>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => props.onChange(e.target.value)}
          value={props.value}
          className="flex-1 outline-0"
        />
      </label>
    </div>
  );
}
