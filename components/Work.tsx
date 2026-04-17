const projects = [
  {
    name: "Chapter32",
    category: "Legal Tech",
    description:
      "A public reference tool for Massachusetts General Laws. Full-stack Next.js with Clerk auth, full-text search, law section browsing, memos, and CMR document management.",
    tags: ["Next.js", "PostgreSQL", "Clerk", "TypeScript"],
    link: "https://chapter32.com",
    status: "live" as const,
  },
  {
    name: "ArborSite Pro",
    category: "SaaS Platform",
    description:
      "A customer experience platform for arborists and landscaping companies. Bundles a marketing site, SEO blog, and Stripe-powered customer portal — sold as a single subscription product.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "TypeScript"],
    link: null,
    status: "building" as const,
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-12">
          Selected work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative flex flex-col p-8 rounded-xl border border-border bg-card hover:border-foreground/20 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl font-semibold tracking-tight mt-1">
                    {project.name}
                  </h3>
                </div>

                {project.status === "live" && project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-lg border border-border hover:bg-secondary transition-colors flex-shrink-0"
                    aria-label={`Visit ${project.name}`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2.5 11.5L11.5 2.5M11.5 2.5H6.5M11.5 2.5V7.5" />
                    </svg>
                  </a>
                ) : (
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full border border-border text-muted-foreground flex-shrink-0">
                    In progress
                  </span>
                )}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
