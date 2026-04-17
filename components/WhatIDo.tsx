const pillars = [
  {
    number: "01",
    title: "Full-Stack Development",
    description:
      "JavaScript, Python, any framework the job calls for. From database schema to deployed UI — I own the whole thing.",
  },
  {
    number: "02",
    title: "AI-Powered Workflows",
    description:
      "I build with AI as a core tool, not an afterthought. Automated content pipelines, Claude-powered agents, and workflow systems that actually reduce toil.",
  },
  {
    number: "03",
    title: "Enterprise Systems",
    description:
      "My day job is running production-grade financial software for pension administrators. I know what it means to build things that can't go down.",
  },
];

export default function WhatIDo() {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-12">
          What I do
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.number}>
              <span
                className="block font-display text-sm font-semibold mb-4"
                style={{ color: "#FF5500" }}
              >
                {pillar.number}
              </span>
              <h3 className="font-display text-xl font-semibold mb-3 tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
