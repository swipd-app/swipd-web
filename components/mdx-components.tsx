"use client";

import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer2/hooks";

const mdxComponents: MDXComponents = {
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto -mx-4 px-4">
      <table {...props}>{children}</table>
    </div>
  ),
  a: ({ href, children, ...props }) => {
    if (href?.startsWith("/")) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
  img: ({ src, alt, width, height, ...props }) => (
    <Image
      src={src || ""}
      alt={alt || ""}
      width={Number(width) || 800}
      height={Number(height) || 400}
      className="rounded-lg"
      {...props}
    />
  ),
};

export function MdxContent({ code }: { code: string }) {
  const MDXContent = useMDXComponent(code);
  return <MDXContent components={mdxComponents} />;
}
