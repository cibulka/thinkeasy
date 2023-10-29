export function SkeletonPostListItem() {
  return (
    <div className="flex flex-col gap-4 animate-pulse">
      <div className="flex items-center h-4 w-1/2 bg-neutral-300" />
      <div className="flex flex-col gap-4">
        {['w-3/4', , 'w-full', 'w-2/3'].map((w, i) => (
          <div key={i} className={['bg-neutral-300 h-1', w].join(' ')} />
        ))}
      </div>
      <div className="flex gap-8">
        {[...Array(2)].map((_el, i) => (
          <div className="flex items-center gap-2" key={i}>
            <span className="w-2 h-2 rounded-full bg-neutral-300" />
            <span className="h-1 w-12 bg-neutral-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
