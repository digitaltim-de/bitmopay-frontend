import { MDXRemote } from "next-mdx-remote/rsc";
import axios from "axios";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { Article } from "@/components/shared/article";
import type { Metadata, ResolvingMetadata } from "next";

type Blog = {
  title: string;
  shortDescription: string;
  description: string;
  content: string;
  image?: {
    upload?: string;
  };
};

export const dynamicParams = true;

type Props = {
  params: { blogSlug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { blogSlug } = params;

  const response = await axios.get(`http://localhost:3000/api/blogs/${blogSlug}`);
  const blog: Blog = response.data;
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: blog.title,
    description: blog.shortDescription,
    openGraph: {
      images: blog.image?.upload
        ? [blog.image.upload, ...previousImages]
        : previousImages,
    },
  };
}

export default async function BlogPage({ params: { blogSlug } }: Props) {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/blogs/${blogSlug}`
    );
    const blog: Blog = response.data;

    if (!blog) {
      notFound();
    }

    const { content } = matter(blog.content);

    return (
      <Article>
        <MDXRemote source={content} />
      </Article>
    );
  } catch (error: unknown) {
    notFound();
  }
}
