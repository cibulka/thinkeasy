'use client';
import { useState } from 'react';
import Link from 'next/link';

import { IconUser } from '@/icons/IconUser';
import { Author } from '@/types/app';

import { Chip } from '@/components/chip/Chip';
import { getAppUrlDynamic } from '@/utils/getUrl';

import { AuthorsListFilterButton } from './component/AuthorsListFilterButton';

import styles from './AuthorsList.module.css';
import { IconBook } from '@/icons/IconBook';

type SortType = 'id' | 'count';

export function AuthorsList(props: { authors: Author[] }) {
  const [sortType, setSortType] = useState<SortType>('id');
  const [isDesc, setIsDesc] = useState(false);

  function onClickFilter(sortTypeCurrent: SortType) {
    if (sortTypeCurrent == sortType) {
      setIsDesc((old) => !old);
    } else {
      setSortType(sortTypeCurrent);
      setIsDesc(false);
    }
  }

  const authorsSorted = [...props.authors].sort((a, b) => {
    switch (sortType) {
      case 'count':
        return isDesc ? a.countPosts - b.countPosts : b.countPosts - a.countPosts;
      case 'id':
        return isDesc ? a.id.localeCompare(b.id) : b.id.localeCompare(a.id);
      default:
        return 0;
    }
  });

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>
            <AuthorsListFilterButton
              onClick={() => onClickFilter('id')}
              isActive={sortType === 'id'}
              isDesc={isDesc}
            >
              Author ID
            </AuthorsListFilterButton>
          </th>
          <th>
            <AuthorsListFilterButton
              onClick={() => onClickFilter('count')}
              isActive={sortType === 'count'}
              isDesc={isDesc}
            >
              <span className="w-6 h-6">
                <IconBook />
              </span>
            </AuthorsListFilterButton>
          </th>
        </tr>
      </thead>
      <tbody>
        {authorsSorted.map((author) => (
          <tr key={author.id}>
            <td className="relative">
              <Chip
                icon={<IconUser />}
                href={getAppUrlDynamic('AUTHOR', author.id)}
                className="absolute top-1 bottom-1 left-0 right-4"
              >
                {author.id}
                {author.id}
                {author.id}
              </Chip>
            </td>
            <td className="text-center font-bold">{author.countPosts}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
