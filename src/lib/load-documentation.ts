import fs from 'fs';
import path from 'path';
import type { Documentation } from './types';

// Function to get all documentation files
export async function getDocumentationFiles() {
  const documentationDirectory = path.join(process.cwd(), 'src/contents/documentation');
  
  try {
    const fileNames = fs.readdirSync(documentationDirectory);
    return fileNames.filter(fileName => fileName.endsWith('.json'));
  } catch (error) {
    console.error('Error reading documentation directory:', error);
    return [];
  }
}

// Function to load a specific documentation file by slug
export async function loadDocumentationBySlug(slug: string): Promise<Documentation | null> {
  try {
    const filePath = path.join(process.cwd(), 'src/contents/documentation', `${slug}.json`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents) as Documentation;
    
    return data;
  } catch (error) {
    console.error(`Error loading documentation for slug ${slug}:`, error);
    return null;
  }
}

// Function to load all documentation data
export async function loadAllDocumentation(): Promise<Documentation[]> {
  const fileNames = await getDocumentationFiles();
  
  const documentationList = await Promise.all(
    fileNames.map(async (fileName) => {
      // Remove .json extension to get the slug
      const slug = fileName.replace(/\.json$/, '');
      
      // Load the documentation data
      const documentation = await loadDocumentationBySlug(slug);
      
      return documentation;
    })
  );
  
  // Filter out any null values and sort by title
  return documentationList
    .filter((doc): doc is Documentation => doc !== null)
    .sort((a, b) => {
      // Custom sort order
      const order = [
        'getting-started',
        'authentication',
        'create-payment',
        'subscriptions',
        'webhooks',
        'faqs'
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

// Function to get documentation navigation items
export async function getDocumentationNavigation() {
  const documentation = await loadAllDocumentation();
  
  return documentation.map(doc => ({
    title: doc.title,
    slug: doc.slug,
    icon: doc.icon,
    description: doc.description
  }));
}