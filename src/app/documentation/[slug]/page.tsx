import { Metadata } from "next";
import { notFound } from "next/navigation";
import { loadDocumentationBySlug, loadAllDocumentation } from "@/lib/load-documentation";
import { DocumentationLayout } from "@/components/documentation/documentation-layout";
import { ScrollToTopButton } from "@/components/shared/scroll-to-top";

interface DocumentationPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: DocumentationPageProps): Promise<Metadata> {
  const documentation = await loadDocumentationBySlug(params.slug);
  
  if (!documentation) {
    return {
      title: "Documentation Not Found | Bitmopay",
      description: "The requested documentation page could not be found.",
    };
  }
  
  return {
    title: `${documentation.title} | Bitmopay API Documentation`,
    description: documentation.description,
  };
}

export async function generateStaticParams() {
  const documentationList = await loadAllDocumentation();
  
  return documentationList.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function DocumentationPage({ params }: DocumentationPageProps) {
  const documentation = await loadDocumentationBySlug(params.slug);
  
  if (!documentation) {
    notFound();
  }
  
  // Load all documentation for the sidebar
  const allDocumentation = await loadAllDocumentation();
  
  return (
    <>
      <DocumentationLayout 
        documentation={documentation} 
        allDocumentation={allDocumentation} 
      />
      <ScrollToTopButton />
    </>
  );
}