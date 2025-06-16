import { Metadata } from "next";
import { loadAllApiReference } from "@/lib/load-api-reference";
import { ApiReferenceLayout } from "@/components/api-reference/api-reference-layout";
import { ScrollToTopButton } from "@/components/shared/scroll-to-top";

export const metadata: Metadata = {
  title: "API Reference | Bitmopay",
  description: "Complete API reference for Bitmopay's cryptocurrency payment gateway.",
};

export default async function ApiReferencePage() {
  // Load all API reference data
  const apiReferenceList = await loadAllApiReference();

  // Default to the first API reference item
  const defaultApiReference = apiReferenceList[0];

  return (
    <>
      <ApiReferenceLayout apiReference={defaultApiReference} allApiReference={apiReferenceList} />
      <ScrollToTopButton />
    </>
  );
}
