import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { blogPosts } from "../data/blogPosts";
import {
  PA_PHOTO_HERO_IMAGE_CLASS,
  PA_PHOTO_HERO_INNER,
  PA_PHOTO_HERO_OVERLAY,
  PA_PHOTO_HERO_SECTION,
} from "../lib/pageHero";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=2400&q=85";

function formatDate(iso) {
  const d = new Date(`${iso}T12:00:00`);
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPageContent() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className={PA_PHOTO_HERO_SECTION}>
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          className={PA_PHOTO_HERO_IMAGE_CLASS}
          sizes="100vw"
        />
        <div className={PA_PHOTO_HERO_OVERLAY} aria-hidden />
        <div className={PA_PHOTO_HERO_INNER}>
          <p className="pa-hero-eyebrow mb-4 sm:mb-5">News &amp; insights</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Blogs
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Practical updates on tax, audit, GST, and corporate compliance —
            written for businesses and professionals across India.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-12 sm:py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
            Parwal &amp; Associates
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-snug text-primary sm:text-3xl md:text-4xl">
            Latest insights and updates from our practice in Jaipur
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
            Articles our team prepares for clients and colleagues — clear,
            current, and grounded in decades of experience since 1983.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((post) => (
              <li key={post.slug}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-md shadow-zinc-200/40 transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/10">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative block aspect-[16/10] overflow-hidden border-b-2 border-primary/20 bg-gradient-to-br from-sky-50 to-primary/5"
                  >
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent opacity-90" />
                    <p className="absolute bottom-0 left-0 right-0 p-4 text-sm font-semibold leading-snug text-white drop-shadow-sm line-clamp-3">
                      {post.title}
                    </p>
                  </Link>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      {post.categories.join(" · ")}
                    </p>
                    <h3 className="mt-2 text-lg font-bold leading-snug text-zinc-900 transition group-hover:text-primary sm:text-xl">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-primary/80 sm:text-sm">
                      <span className="inline-flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5 shrink-0" aria-hidden />
                        {post.author}
                      </span>
                      <span className="text-zinc-300" aria-hidden>
                        /
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-zinc-500">
                        <Calendar className="h-3.5 w-3.5 shrink-0" aria-hidden />
                        {formatDate(post.publishedAt)}
                      </span>
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-third transition hover:text-secondary"
                    >
                      Read article
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
