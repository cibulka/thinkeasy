import { ErrorView } from '@/components/error-view/ErrorView';

export default function PageNotFound() {
  return <ErrorView className="absolute inset-0" title="404" subTitle="Not found" />;
}
