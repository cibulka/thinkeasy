import { LayoutPage } from '@/components/layout-page/LayoutPage';
import { SkeletonPostList } from '@/components/skeleton/SkeletonPostList';

export default function PagePostLoading() {
  return (
    <LayoutPage title="Loading posts...">
      <SkeletonPostList />
    </LayoutPage>
  );
}
