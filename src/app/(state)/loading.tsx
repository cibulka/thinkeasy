import { LayoutPage } from '@/components/layout-page/LayoutPage';
import { SkeletonPostList } from '@/components/skeleton/SkeletonPostList';

export default async function HomeLoading() {
  return (
    <LayoutPage title="All posts">
      <SkeletonPostList />
    </LayoutPage>
  );
}
