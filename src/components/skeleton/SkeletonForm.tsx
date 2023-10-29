import { Fragment } from 'react';

export function SkeletonForm(props: { fields?: number }) {
  const fields = props.fields || 2;
  return (
    <div className="flex flex-col gap-4">
      {[...Array(fields)].map((_el, i) => (
        <Fragment key={i}>
          <div className="flex flex-col gap-2">
            <div className="w-20 h-2 bg-neutral-300" />
          </div>
          <div className="h-12 bg-white rounded-md" />
        </Fragment>
      ))}
      <div className="mt-4 bg-blue-300 w-full h-12 rounded-md" />
    </div>
  );
}
