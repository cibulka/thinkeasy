import { LayoutPage } from '@/components/layout-page/LayoutPage';
import { SkeletonPostListItem } from '@/components/skeleton/SkeletonPostListItem';

export default function PagePostLoading() {
  return (
    <LayoutPage title="Loading post...">
      <SkeletonPostListItem />
    </LayoutPage>
  );
}
