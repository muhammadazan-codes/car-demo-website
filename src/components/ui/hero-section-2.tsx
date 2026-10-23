import React from 'react';
import { cn } from "@/lib/utils";
import { motion, type Variants } from 'framer-motion';
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
  backgroundImage: string;
  contactInfo?: {
    website: string;
    phone: string;
    address: string;
  };
  className?: string;
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, logo, title, subtitle, callToAction, secondaryCallToAction, backgroundImage }, ref) => {
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
                        <img src={logo.url} alt={logo.alt} className="h-10 hidden w-auto md:h-12 md:block md:-mt-24 "/>
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
          className="w-full min-h-[200px] bg-cover bg-center md:w-1/2 md:min-h-full lg:w-2/5"
          style={{ 
            backgroundImage: "url(" + backgroundImage + ")",
          }}
          initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
          animate={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
          transition={{ duration: 1.2, ease: "circOut" as const }}
        >
        </motion.div>
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };

