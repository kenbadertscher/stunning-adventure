"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionWithMockupProps {
  label?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  cta?: { text: string; href: string };
  primaryImageSrc: string;
  secondaryImageSrc: string;
  reverseLayout?: boolean;
  background?: string;
}

const SectionWithMockup: React.FC<SectionWithMockupProps> = ({
  label,
  title,
  description,
  cta,
  primaryImageSrc,
  secondaryImageSrc,
  reverseLayout = false,
  background = "#ffffff",
}) => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  const layoutClasses = reverseLayout
    ? "md:grid-cols-2 md:grid-flow-col-dense"
    : "md:grid-cols-2";

  const textOrderClass = reverseLayout ? "md:col-start-2" : "";
  const imageOrderClass = reverseLayout ? "md:col-start-1" : "";

  return (
    <section
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background }}
    >
      <div className="container max-w-5xl w-full px-6 md:px-10 relative z-10 mx-auto">
        <motion.div
          className={`grid grid-cols-1 gap-16 md:gap-8 w-full items-center ${layoutClasses}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Text Content */}
          <motion.div
            className={`relative z-20 flex flex-col items-start gap-4 mt-10 md:mt-0 max-w-[520px] mx-auto md:mx-0 ${textOrderClass}`}
            variants={itemVariants}
          >
            {label && (
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                {label}
              </p>
            )}
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight tracking-tight text-foreground">
              {title}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              {description}
            </p>
            {cta && (
              <a
                href={cta.href}
                target={cta.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  cta.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="inline-flex items-center gap-2 text-sm font-semibold mt-2 group"
                style={{ color: "#FF5500" }}
              >
                {cta.text}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M2.5 11.5L11.5 2.5M11.5 2.5H6.5M11.5 2.5V7.5" />
                </svg>
              </a>
            )}
          </motion.div>

          {/* Mockup */}
          <motion.div
            className={`relative mt-10 md:mt-0 mx-auto ${imageOrderClass} w-full max-w-[300px] md:max-w-[440px]`}
            variants={itemVariants}
          >
            {/* Decorative background card */}
            <motion.div
              className="absolute w-[300px] h-[317px] md:w-[440px] md:h-[470px] rounded-[28px] z-0 overflow-hidden"
              style={{
                top: reverseLayout ? "auto" : "10%",
                bottom: reverseLayout ? "10%" : "auto",
                left: reverseLayout ? "auto" : "-8%",
                right: reverseLayout ? "-8%" : "auto",
                filter: "blur(2px)",
                backgroundColor: "#f0ede8",
              }}
              initial={{ y: 0 }}
              whileInView={{ y: reverseLayout ? -20 : -30 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div
                className="relative w-full h-full bg-cover bg-center rounded-[28px]"
                style={{ backgroundImage: `url(${secondaryImageSrc})` }}
              />
            </motion.div>

            {/* Main mockup card */}
            <motion.div
              className="relative w-full h-[380px] md:h-[600px] rounded-[28px] z-10 overflow-hidden border border-zinc-200"
              style={{ backgroundColor: "#f8f6f3" }}
              initial={{ y: 0 }}
              whileInView={{ y: reverseLayout ? 20 : 30 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div
                className="w-full h-full bg-cover bg-top"
                style={{ backgroundImage: `url(${primaryImageSrc})` }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Section separator */}
      <div
        className="absolute w-full h-px bottom-0 left-0"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0,0,0,0.08) 0%, transparent 100%)",
        }}
      />
    </section>
  );
};

export default SectionWithMockup;
