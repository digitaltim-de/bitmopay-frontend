import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

interface BlogPost {
  slug: string;
  title: string;
  publishDate: string;
  content: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
): Promise<NextResponse> {
  try {
    const slug = params.slug;
    const blogsDirectory = path.join(process.cwd(), "contents/blogs");
    const fullPath = path.join(blogsDirectory, `${slug}.md`);

    // Check if the file exists
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    // Read the file content
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Extract title from the first line
    const title = fileContents.split("\n")[0].replace("# ", "");

    // Extract publish date
    const publishDateMatch = fileContents.match(/\*Published on (.*?)\*/);
    const publishDate = publishDateMatch ? publishDateMatch[1] : "Unknown date";

    // Return the blog post data
    const blogPost: BlogPost = {
        slug,
        title,
        publishDate,
        content: fileContents,
      };

    return NextResponse.json(blogPost, { status: 200 });
  } catch (error: unknown) {
    console.error("Error fetching blog post:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog post" },
      { status: 500 }
    );
  }
}
