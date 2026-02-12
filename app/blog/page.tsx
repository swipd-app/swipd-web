import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { allPosts } from "contentlayer/generated";
import { APP_NAME, SITE_URL } from "@/lib/constants";
import { Card } from "@/components/ui/card";
import { Calendar, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: `Tips, guides, and product insights from the ${APP_NAME} team.`,
  openGraph: {
    title: `Blog - ${APP_NAME}`,
    description: `Tips, guides, and product insights from the ${APP_NAME} team.`,
    url: `${SITE_URL}/blog`,
  },
};

export default function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Blog</h1>
        <p className="text-muted-foreground mb-8">
          Tips, guides, and product insights
        </p>

        {posts.length === 0 ? (
          <p className="text-muted-foreground">No posts yet. Stay tuned!</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={post.url}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                  {post.coverImage && (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      width={600}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6 space-y-3">
                    <h2 className="text-xl font-semibold line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      {post.tags.length > 0 && (
                        <span className="flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          {post.tags[0]}
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
