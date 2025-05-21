import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

// Get all blogs
export async function GET() {
  try {
    const blogsDirectory = path.join(process.cwd(), "contents/blogs");
    const fileNames = fs.readdirSync(blogsDirectory);

    const blogs = fileNames.map((fileName) => {
      // Remove the .md extension
      const slug = fileName.replace(/\.md$/, "");

      // Get file content
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Extract title from the first line (assuming it's a markdown h1)
      const title = fileContents.split("\n")[0].replace("# ", "");

      // Extract publish date
      const publishDateMatch = fileContents.match(/\*Published on (.*?)\*/);
      const publishDate = publishDateMatch
        ? publishDateMatch[1]
        : "Unknown date";

      // Generate a preview by taking the first paragraph after the title and date
      let preview = "";
      const contentParts = fileContents.split("\n\n");
      for (let i = 0; i < contentParts.length; i++) {
        if (
          !contentParts[i].includes("# ") &&
          !contentParts[i].includes("*Published on")
        ) {
          preview = contentParts[i].substring(0, 150) + "...";
          break;
        }
      }

      return {
        slug,
        title,
        publishDate,
        preview,
      };
    });

    // Sort by date (newest first)
    blogs.sort((a, b) => {
      const dateA = new Date(a.publishDate);
      const dateB = new Date(b.publishDate);
      return dateB - dateA;
    });

    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}
