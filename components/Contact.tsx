"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="border-t border-border py-28 md:py-36">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-8">
            Available for select work
          </p>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05] mb-6 max-w-2xl">
            Building something 
		<p className="" style= {{ color: "#FF5500" }}> amazing? </p>
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            I've always got my ear to the ground for interesting projects.
	  </p>
	  <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-12">
            If you've got something you're passionate about, say hi.
          </p>

          <a
            href="mailto:ken@kenb.dev"
            className="group inline-flex items-center gap-3 font-display text-2xl sm:text-3xl font-semibold transition-opacity hover:opacity-75"
            style={{ color: "#FF5500" }}
          >
            ken@kenb.dev
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M5 23L23 5M23 5H11M23 5V17" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
