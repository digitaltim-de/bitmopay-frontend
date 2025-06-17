import fs from "fs";
import path from "path";
import type { ApiReference } from "./types";

// Function to get all API reference files
export async function getApiReferenceFiles() {
  const apiReferenceDirectory = path.join(process.cwd(), "src/contents/api-reference");

  try {
    const fileNames = fs.readdirSync(apiReferenceDirectory);
    return fileNames.filter((fileName) => fileName.endsWith(".json"));
  } catch (error) {
    console.error("Error reading API reference directory:", error);
    return [];
  }
}

// Function to load a specific API reference file by slug
export async function loadApiReferenceBySlug(slug: string): Promise<ApiReference | null> {
  try {
    const filePath = path.join(process.cwd(), "src/contents/api-reference", `${slug}.json`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents) as ApiReference;

    return data;
  } catch (error) {
    console.error(`Error loading API reference for slug ${slug}:`, error);
    return null;
  }
}

// Function to load all API reference data
export async function loadAllApiReference(): Promise<ApiReference[]> {
  const fileNames = await getApiReferenceFiles();

  const apiReferenceList = await Promise.all(
    fileNames.map(async (fileName) => {
      // Remove .json extension to get the slug
      const slug = fileName.replace(/\.json$/, "");

      // Load the API reference data
      const apiReference = await loadApiReferenceBySlug(slug);

      return apiReference;
    }),
  );

  // Filter out any null values and sort by title
  return apiReferenceList
    .filter((api): api is ApiReference => api !== null)
    .sort((a, b) => {
      // Custom sort order
      const order = [
        "authentication",
        "payments",
        "transactions",
        "subscriptions",
        "webhooks",
        "errors",
      ];

      const indexA = order.indexOf(a.slug);
      const indexB = order.indexOf(b.slug);

      // If both items are in the order array, sort by their position
      if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB;
      }

      // If only one item is in the order array, prioritize it
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;

      // Otherwise, sort alphabetically by title
      return a.title.localeCompare(b.title);
    });
}

// Function to get API reference navigation items
export async function getApiReferenceNavigation() {
  const apiReference = await loadAllApiReference();

  return apiReference.map((api) => ({
    title: api.title,
    slug: api.slug,
    icon: api.icon,
    description: api.description,
  }));
}
