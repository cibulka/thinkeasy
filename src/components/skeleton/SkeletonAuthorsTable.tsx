export function SkeletonAuthorsTable() {
  return (
    <div className="animate-pulse">
      <div className="flex items-center justify-between py-4">
        <div className="bg-emerald-500 h-2 w-20" />
        <div className="bg-neutral-300 h-2 w-12" />
      </div>
      {[...Array(20)].map((_el, i) => (
        <div key={i} className="flex items-center gap-4 h-8">
          <div className="flex-1 h-0.5 bg-neutral-300" />
          <div className="w-3 h-3 rounded-full bg-neutral-500" />
        </div>
      ))}
    </div>
  );
}
