import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

type PostProps = { userId: string; id: string; title: string; body: string };

// Function to fetch post data
async function fetchPostById(slug: string): Promise<PostProps | null> {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${slug}`,
      {
        method: "GET",
        cache: "no-store", // Ensures fresh data on each request
      }
    );
    if (!response.ok) {
      return null; // Return null if the post is not found
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

// Generates dynamic paths for each post based on IDs from jsonplaceholder
export async function generateStaticParams() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    });
    if (!response.ok) throw new Error("Failed to fetch posts");
    const posts = await response.json();
    return posts.map((post: { id: string }) => ({
      slug: post.id.toString(),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// Page component that fetches post data server-side
export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  // Ensure that params is awaited properly
  const { slug } = await params; // This is the fix for ensuring params are awaited

  const post = await fetchPostById(slug);

  if (!post) {
    notFound(); // Trigger a 404 if post is not found
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <nav>
        <Link href="/post/1">Post 1</Link> <br />
        <Link href="/post/2">Post 2</Link> <br />
        <Link href="/post/3">Post 3</Link>
      </nav>
    </div>
  );
}

// ISR: Revalidate every 10 seconds
export const revalidate = 10;
