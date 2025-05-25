"use client";

export function DashboardLoader() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="h-8 w-64 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700"></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-24 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"></div>
        ))}
      </div>
      <div className="mt-2 h-80 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"></div>
    </div>
  );
}
