import { LayoutPage } from '@/components/layout-page/LayoutPage';
import { SkeletonAuthorsTable } from '@/components/skeleton/SkeletonAuthorsTable';

export default function PageUsersLoading() {
  return (
    <LayoutPage title="Our authors">
      <SkeletonAuthorsTable />
    </LayoutPage>
  );
}
