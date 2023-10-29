import { IconBook } from '@/icons/IconBook';
import { IconChevronDown } from '@/icons/IconChevronDown';

export function SearchBar(props: { onChange: (v: string) => void; value: string }) {
  return (
    <label className="flex items-center">
      <span className="w-8 h-8">
        <IconBook />
      </span>
      <input type="text" placeholder="Search" />
    </label>
  );
}
