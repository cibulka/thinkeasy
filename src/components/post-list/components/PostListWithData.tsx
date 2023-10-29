'use client';
import { useState } from 'react';

import { Button } from '@/components/button/Button';
import { PostListItem } from '@/components/post-list-item/PostListItem';
import { POSTS_PER_PAGE, SEARCH_QUERY_MIN_LENGTH } from '@/constants/app';
import { PostResponse } from '@/orval/api';
import { sortByDateCreated } from '@/utils/sort';
import { normalizeString } from '@/utils/string';

import { PostListSearch } from './PostListSearch';

export function PostListWithData(props: {
  authorId?: string;
  isSearchHidden?: boolean;
  posts: PostResponse[];
}) {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  let postsFiltered = sortByDateCreated(props.posts);
  if (props.authorId) {
    postsFiltered = postsFiltered.filter((p) => {
      return p.authorId === props.authorId;
    });
  }
  if (searchQuery && searchQuery.length >= SEARCH_QUERY_MIN_LENGTH) {
    postsFiltered = postsFiltered.filter((post) => {
      return (
        normalizeString(post.title).includes(searchQuery) ||
        normalizeString(post.content).includes(searchQuery)
      );
    });
  }

  const startIndex = 0;
  const endIndex = (startIndex + POSTS_PER_PAGE) * page;
  const maxPage = Math.ceil(postsFiltered.length / POSTS_PER_PAGE);

  const postsShown = postsFiltered.slice(startIndex, endIndex);

  return (
    <section className="relative">
      {!props.isSearchHidden && props.posts.length > 0 && (
        <PostListSearch
          className="mb-12"
          onChange={(v) => {
            setSearchQuery(normalizeString(v));
          }}
          value={searchQuery}
        />
      )}
      {postsShown.length === 0 ? (
        <div>No posts matching criteria!</div>
      ) : (
        <section>
          <ul className="flex flex-col gap-4 mb-8">
            {postsShown.map((post) => (
              <li key={post.id} className="pb-4 border-b border-dashed">
                <PostListItem post={post} />
              </li>
            ))}
          </ul>
          <footer className="flex gap-4 items-center justify-between">
            {page < maxPage && (
              <Button type="button" className="text-xl" onClick={() => setPage((old) => old + 1)}>
                Load more posts
              </Button>
            )}
            <span>
              Page {page} of {maxPage}
            </span>
          </footer>
        </section>
      )}
    </section>
  );
}
