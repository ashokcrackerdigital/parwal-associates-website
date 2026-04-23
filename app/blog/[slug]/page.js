import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import {
  blogPosts,
  getAllSlugs,
  getPostBySlug,
} from "../../../data/blogPosts";

function formatDate(iso) {
  const d = new Date(`${iso}T12:00:00`);
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article | Parwal & Associates" };
  return {
    title: `${post.title} | Parwal & Associates`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="bg-white">
      <div className="border-b border-zinc-100 bg-zinc-50">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-secondary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to blogs
          </Link>
        </div>
      </div>

      <header className="mx-auto max-w-4xl px-4 pt-10 sm:px-6 sm:pt-14">
        <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
          {post.categories.join(" · ")}
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-[2.5rem]">
          {post.title}
        </h1>
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-600">
          <span className="inline-flex items-center gap-1.5">
            <User className="h-4 w-4 text-primary" aria-hidden />
            {post.author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-primary" aria-hidden />
            {formatDate(post.publishedAt)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-primary" aria-hidden />
            {post.readTime}
          </span>
        </div>
      </header>

      <div className="mx-auto mt-10 max-w-4xl px-4 sm:px-6">
        <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border-2 border-primary/15 shadow-lg shadow-zinc-200/80 sm:aspect-[2/1]">
          <Image
            src={post.image}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-lg font-medium leading-relaxed text-zinc-700">
          {post.excerpt}
        </p>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-zinc-700">
          {post.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/5 to-secondary/5 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-primary">
            Need advice on this topic?
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            Parwal &amp; Associates supports clients on tax, audit, and
            corporate matters from Jaipur, across Rajasthan and India.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-xl bg-third px-6 py-3 text-sm font-semibold text-white transition hover:bg-secondary"
          >
            Contact us
          </Link>
        </div>
      </div>
    </article>
  );
}
