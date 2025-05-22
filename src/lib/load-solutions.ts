import fs from 'fs';
import path from 'path';
import type { Solution } from './types';

// Function to get all solution files
export async function getSolutionFiles() {
  const solutionsDirectory = path.join(process.cwd(), 'src/contents/solutions');
  
  try {
    const fileNames = fs.readdirSync(solutionsDirectory);
    return fileNames.filter(fileName => fileName.endsWith('.json'));
  } catch (error) {
    console.error('Error reading solutions directory:', error);
    return [];
  }
}

// Function to load solution data from JSON files
export async function loadSolutionsData(): Promise<Solution[]> {
  const fileNames = await getSolutionFiles();
  
  const solutions = fileNames.map(fileName => {
    // Remove .json extension to get the slug
    const slug = fileName.replace(/\.json$/, '');
    
    // Read the JSON file
    const filePath = path.join(process.cwd(), 'src/contents/solutions', fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    // Extract the required fields for the Solution type
    return {
      title: data.title,
      description: data.subtitle || data.description,
      icon: data.icon || getIconForSlug(slug),
      link: `/solutions/${slug}`
    };
  });
  
  // Add the "View More" option
  solutions.push({
    title: "View More Use Cases",
    description: "Explore additional use cases and custom solutions for your business needs.",
    icon: "Plus",
    link: "/contact"
  });
  
  return solutions;
}

// Helper function to determine icon based on slug if not specified in JSON
function getIconForSlug(slug: string): string {
  const iconMap: Record<string, string> = {
    'ecommerce': 'ShoppingCart',
    'saas': 'Repeat',
    'donations': 'Heart',
    'membership': 'Users',
    'invoicing': 'FileText',
    'digital-downloads': 'Download',
    'reseller': 'RefreshCw'
  };
  
  return iconMap[slug] || 'File';
}