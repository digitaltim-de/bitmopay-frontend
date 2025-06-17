import { Metadata } from "next";
import { notFound } from "next/navigation";
import { loadApiReferenceBySlug, loadAllApiReference } from "@/lib/load-api-reference";
import { ApiReferenceLayout } from "@/components/api-reference/api-reference-layout";
import { ScrollToTopButton } from "@/components/shared/scroll-to-top";

interface ApiReferencePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ApiReferencePageProps): Promise<Metadata> {
  const apiReference = await loadApiReferenceBySlug(params.slug);

  if (!apiReference) {
    return {
      title: "API Reference Not Found | Bitmopay",
    };
  }

  return {
    title: `${apiReference.title} - API Reference | Bitmopay`,
    description: apiReference.description,
  };
}

export async function generateStaticParams() {
  const allApiReference = await loadAllApiReference();

  return allApiReference.map((api) => ({
    slug: api.slug,
  }));
}

export default async function ApiReferenceSlugPage({ params }: ApiReferencePageProps) {
  const apiReference = await loadApiReferenceBySlug(params.slug);
  const allApiReference = await loadAllApiReference();

  if (!apiReference) {
    notFound();
  }

  return (
    <>
      <ApiReferenceLayout apiReference={apiReference} allApiReference={allApiReference} />
      <ScrollToTopButton />
    </>
  );
}
