import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-gray-50 px-4 py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-red-100 p-6 dark:bg-red-900/20">
            <FileQuestion className="h-12 w-12 text-red-600 dark:text-red-400" />
          </div>
        </div>
        
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          Documentation Not Found
        </h1>
        
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
          We couldn't find the documentation page you're looking for. It might have been moved, deleted, or never existed.
        </p>
        
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
          <Button asChild>
            <Link href="/documentation">
              Browse Documentation
            </Link>
          </Button>
          
          <Button variant="outline" asChild>
            <Link href="/">
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}