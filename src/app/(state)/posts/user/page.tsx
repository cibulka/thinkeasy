import { AuthorsList } from '@/components/authors-list/AuthorsList';
import { LayoutPage } from '@/components/layout-page/LayoutPage';
import { PostResponse, postsControllerGetAllPosts } from '@/orval/api';
import { Author } from '@/types/app';

function postsToAuthors(posts: PostResponse[]) {
  let result: Author[] = [];
  posts.forEach((post) => {
    const indexExisting = result.findIndex((a) => a.id === post.authorId);
    if (indexExisting !== -1) {
      result[indexExisting].countPosts += 1;
    } else {
      result = [
        ...result,
        {
          id: post.authorId,
          countPosts: 1,
        },
      ];
    }
  });
  return result;
}

export default async function PageUsers() {
  const { data: posts } = await postsControllerGetAllPosts();
  const authors = postsToAuthors(posts);

  return (
    <LayoutPage title="Our authors">
      <AuthorsList authors={authors} />
    </LayoutPage>
  );
}
