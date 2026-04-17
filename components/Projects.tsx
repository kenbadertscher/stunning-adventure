import SectionWithMockup from "@/components/blocks/section-with-mockup";

export default function Projects() {
  return (
    <div id="work">
      <SectionWithMockup
        label="Legal Tech"
        title={
          <>
            Massachusetts law,
            <br />
            made searchable.
          </>
        }
        description="Chapter 32 Wiki is a public reference tool for Massachusetts General Laws. Full-stack Next.js with Clerk auth, full-text search across law sections, memo tracking, and CMR document browsing — built to make dense public legal code actually usable."
        cta={{ text: "Visit Chapter32.com", href: "https://chapter32.com" }}
        primaryImageSrc="/chapter32-mockup.png"
        secondaryImageSrc="/chapter32-bg.png"
        background="#ffffff"
      />

      <SectionWithMockup
        label="SaaS Platform"
        title={
          <>
            A better experience
            <br />
            for arborists.
          </>
        }
        description="ArborSite Pro bundles a marketing site, SEO blog, and Stripe-powered customer portal into a single subscription product for tree service and landscaping companies. Customers can view invoices, track upcoming jobs, and pay — all without calling the office."
        primaryImageSrc="/arborsite-mockup.png"
        secondaryImageSrc="/arborsite-bg.png"
        reverseLayout
        background="#FAF8F5"
      />
    </div>
  );
}
