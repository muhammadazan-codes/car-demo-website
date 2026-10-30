import React from 'react';
import { cn } from "@/lib/utils";
import { motion, type Variants, useReducedMotion } from 'framer-motion';
import { ShinyButton } from "@/components/ui/shiny-button";

interface HeroSectionProps {
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: {
    text: string;
    href: string;
  };
  secondaryCallToAction?: {
    text: string;
    href: string;
  };
  contactInfo?: {
    website: string;
    phone: string;
    address: string;
  };
  className?: string;
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, logo, title, subtitle, callToAction, secondaryCallToAction }, ref) => {
    const isReducedMotion = useReducedMotion();
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const entranceX = isMobile ? 120 : 240;

    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    const itemVariants: Variants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut" as const,
        },
      },
    };

    return (
      <motion.section
        id="home"
        ref={ref}
        className={cn(
          "relative flex w-full flex-col scroll-mt-24 overflow-hidden bg-background text-foreground md:flex-row md:min-h-screen",
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex w-full flex-col justify-between p-6 md:w-1/2 md:p-12 lg:w-3/5 lg:py-32 lg:px-16 md:gap-8">
            <div>
                <motion.header className="mb-8 md:mb-16" variants={itemVariants}>
                    {logo && (
                        <img src={logo.url} alt={logo.alt} className="h-10 hidden w-32 md:h-14 md:block md:-mt-26 "/>
                    )}
                </motion.header>

                <motion.main variants={containerVariants} className='md:mt-8 mt-16'>
                    <motion.h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl" variants={itemVariants}>
                        {title}
                    </motion.h1>
                    <motion.div className="my-6 h-1 w-20 bg-primary" variants={itemVariants}></motion.div>
                    <motion.p className="mb-8 max-w-md text-base text-muted-foreground" variants={itemVariants}>
                        {subtitle}
                    </motion.p>
                    <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
                        <ShinyButton label={callToAction.text} fillColor="#111113" labelColor="#FFFFFF" accentColor="#E32636" accentSoftColor="#D91F2D" onClick={() => { window.location.hash = callToAction.href; }} />
                        {secondaryCallToAction && (
                            <ShinyButton label={secondaryCallToAction.text} fillColor="#111113" labelColor="#FFFFFF" accentColor="#E32636" accentSoftColor="#D91F2D" onClick={() => { window.location.hash = secondaryCallToAction.href; }} />
                        )}
                    </motion.div>
                </motion.main>
            </div>
        </div>

        <motion.div
          className="relative w-full min-h-[200px] md:w-1/2 md:min-h-full lg:w-1/2"
          initial={
            isReducedMotion
              ? { x: 0, opacity: 1 }
              : { x: entranceX, opacity: 0 }
          }
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: isMobile ? 1.2 : 1.4,
            ease: [0.25, 1, 0.5, 1] as const,
          }}
        >
          {/* Subtle smoke beneath the tyres, stays behind the car */}
          <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none" aria-hidden="true">
            {[
              { left: "40%", bottom: 0, width: 64, height: 44, delay: "0s", duration: "5s" },
              { left: "50%", bottom: 6, width: 50, height: 36, delay: "1.6s", duration: "5.4s" },
              { left: "60%", bottom: 2, width: 40, height: 28, delay: "3.2s", duration: "5.8s" },
            ].map((puff, index) => (
              <div
                key={index}
                className={cn(
                  "absolute -translate-x-1/2 rounded-full blur-[22px] bg-zinc-600/30",
                  isReducedMotion ? "opacity-50" : "",
                )}
                aria-hidden="true"
                style={{
                  left: puff.left,
                  bottom: puff.bottom,
                  width: puff.width,
                  height: puff.height,
                  animation: isReducedMotion
                    ? undefined
                    : `smokePuff ${puff.duration} ease-in-out infinite`,
                  animationDelay: puff.delay,
                }}
              />
            ))}
          </div>

          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <img
              src="/car image.png"
              alt="Premium showcase car"
              width={1672}
              height={941}
              style={{ aspectRatio: 1672 / 941 }}
              className="max-w-full max-h-full object-contain"
              loading="eager"
            />
          </div>
        </motion.div>
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };

