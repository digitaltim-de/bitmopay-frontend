import { Skeleton } from "@/components/ui/skeleton";

export function ArticleSkeleton() {
  return (
    <div className="container max-w-[65ch] py-10">
      <div className="mx-auto max-w-2xl p-4">
        <Skeleton className="mb-4 h-8 w-3/4" />

        <Skeleton className="mb-2 h-4 w-full" />
        <Skeleton className="mb-4 h-4 w-5/6" />

        <Skeleton className="mb-3 h-6 w-1/2" />

        <div className="space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-5/6" />
        </div>

        <Skeleton className="mt-6 mb-3 h-6 w-1/3" />

        <Skeleton className="mb-2 h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
}
