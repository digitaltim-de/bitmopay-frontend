import { Metadata } from "next";
import { loadAllDocumentation } from "@/lib/load-documentation";
import { DocumentationLayout } from "@/components/documentation/documentation-layout";
import { ScrollToTopButton } from "@/components/shared/scroll-to-top";

export const metadata: Metadata = {
  title: "API Documentation | Bitmopay",
  description: "Learn how to integrate Bitmopay's cryptocurrency payment gateway into your application.",
};

export default async function DocumentationPage() {
  // Load all documentation data
  const documentationList = await loadAllDocumentation();
  
  // Default to the first documentation item (getting-started)
  const defaultDocumentation = documentationList[0];
  
  return (
    <>
      <DocumentationLayout 
        documentation={defaultDocumentation} 
        allDocumentation={documentationList} 
      />
      <ScrollToTopButton />
    </>
  );
}