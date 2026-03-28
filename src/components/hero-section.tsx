"use client";

import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShoppingBag, Handshake, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    title: "Crispy Pata",
    subtitle: "Buy 2 Promo",
    description:
      "Get our signature Crispy Pata at an unbeatable price. Golden, crispy perfection in every bite!",
    price: "₱899.00",
    cta: "Order Now",
    ctaLink: "/menu",
    icon: ShoppingBag,
    bgImage: "/images/hero/crispy-pata.png",
    accent: "#F5B820",
    fit: "cover" as const,
  },
  {
    title: "Free Foodcart",
    subtitle: "Start Your Business",
    description:
      "Get a FREE Mr. Fryman branded foodcart when you avail our Ka Negosyo Partner packages!",
    price: "Starting at ₱29,999",
    cta: "Learn More",
    ctaLink: "/packages",
    icon: Handshake,
    bgImage: "/images/hero/food-cart.png",
    accent: "#F5B820",
    fit: "contain" as const,
  },
  {
    title: "Ka Negosyo Partner",
    subtitle: "Be Your Own Boss",
    description:
      "Join our growing family of successful Ka Negosyo Partners across Metro Manila and beyond.",
    price: "Multiple Packages Available",
    cta: "View Packages",
    ctaLink: "/packages",
    icon: Handshake,
    bgImage: "/images/hero/start-negosyo.png",
    accent: "#F5B820",
    fit: "cover" as const,
  },
];

function FloatingShape({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

function GridPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#8B6914" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-grid)" />
    </svg>
  );
}

export function HeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);
  const scrollTo = useCallback((index: number) => api?.scrollTo(index), [api]);

  return (
    <motion.section
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[480px] sm:h-[500px] md:h-[560px] lg:h-[640px] xl:h-[680px] overflow-hidden bg-white">
                {/* ===== FULL-WIDTH SHARED LAYERS (span both sides) ===== */}

                {/* Base gradient — clean white */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FFF8E7] to-white" />

                {/* Grid pattern — visible golden lines */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id={`grid-${index}`} width="50" height="50" patternUnits="userSpaceOnUse">
                      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#8B6914" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
                </svg>

                {/* Diagonal scanlines */}
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, transparent, transparent 4px, rgba(139,105,20,0.12) 4px, rgba(139,105,20,0.12) 5px)",
                  }}
                />

                {/* Dot pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id={`dots-${index}`} width="28" height="28" patternUnits="userSpaceOnUse">
                      <circle cx="3" cy="3" r="1.2" fill="#8B6914" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#dots-${index})`} />
                </svg>

                {/* Animated gradient orbs */}
                <motion.div
                  className="absolute top-[-100px] left-[20%] w-[500px] h-[500px] rounded-full blur-[120px]"
                  style={{ background: "radial-gradient(circle, rgba(245,184,32,0.15), transparent 70%)" }}
                  animate={{ x: [-60, 60, -60], y: [-30, 30, -30] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute bottom-[-60px] right-[30%] w-[400px] h-[400px] rounded-full blur-[100px]"
                  style={{ background: "radial-gradient(circle, rgba(139,105,20,0.1), transparent 70%)" }}
                  animate={{ x: [40, -40, 40], y: [20, -20, 20] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute top-[30%] left-[40%] w-[350px] h-[350px] rounded-full blur-[100px]"
                  style={{ background: "radial-gradient(circle, rgba(245,184,32,0.08), transparent 70%)" }}
                  animate={{ x: [-30, 30, -30], scale: [1, 1.2, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Floating geometric shapes — golden tones */}
                <FloatingShape
                  className="absolute top-16 left-[52%] w-20 h-20 border-2 border-[#8B6914]/[0.08] rounded-2xl rotate-12"
                  delay={0}
                />
                <FloatingShape
                  className="absolute bottom-24 left-[40%] w-14 h-14 border-2 border-[#8B6914]/[0.06] rounded-full"
                  delay={1.5}
                />
                <FloatingShape
                  className="absolute top-[30%] left-[15%] w-10 h-10 bg-[#F5B820]/[0.05] rounded-xl rotate-45"
                  delay={3}
                />
                <FloatingShape
                  className="absolute bottom-[35%] left-[25%] w-6 h-6 bg-[#8B6914]/[0.06] rounded-full"
                  delay={2}
                />
                <FloatingShape
                  className="absolute top-[20%] left-[35%] w-16 h-16 border-2 border-[#F5B820]/[0.07] rounded-xl -rotate-12"
                  delay={4}
                />
                <FloatingShape
                  className="absolute bottom-[20%] left-[10%] w-8 h-8 bg-[#F5B820]/[0.04] rounded-lg rotate-12"
                  delay={2.5}
                />
                <FloatingShape
                  className="absolute top-[60%] left-[45%] w-5 h-5 bg-[#8B6914]/[0.07] rounded-full"
                  delay={1}
                />

                {/* Decorative diagonal lines */}
                <div className="absolute top-0 left-[30%] w-px h-full bg-gradient-to-b from-transparent via-[#8B6914]/[0.06] to-transparent rotate-[12deg]" />
                <div className="absolute top-0 left-[45%] w-px h-full bg-gradient-to-b from-transparent via-[#8B6914]/[0.04] to-transparent rotate-[8deg]" />
                <div className="absolute top-0 left-[55%] w-px h-full bg-gradient-to-b from-transparent via-[#F5B820]/[0.05] to-transparent rotate-[10deg]" />

                {/* ===== RIGHT SIDE - Image (md+) ===== */}
                <div className="hidden md:block absolute right-0 top-0 md:w-[45%] lg:w-[40%] h-full">
                  <Image
                    src={slide.bgImage}
                    alt={slide.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 45vw, 40vw"
                    priority={index === 0}
                  />
                </div>

                {/* ===== MOBILE IMAGE (< md) - subtle background ===== */}
                <div className="md:hidden absolute inset-0 z-[1]">
                  <Image
                    src={slide.bgImage}
                    alt={slide.title}
                    fill
                    className="object-cover object-center opacity-10"
                    sizes="100vw"
                    priority={index === 0}
                  />
                </div>

                {/* ===== LEFT SIDE - Content ===== */}
                <div className="relative z-20 w-full md:w-[55%] lg:w-[60%] h-full flex items-center">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={current}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="relative px-6 sm:px-10 lg:px-16 space-y-5 max-w-xl"
                    >
                      <div className="inline-flex items-center gap-2 bg-[#8B6914]/60 backdrop-blur-md rounded-full px-5 py-2 text-[#FFF8E7] text-sm font-medium border border-[#8B6914]/20">
                        <slide.icon className="h-4 w-4" />
                        {slide.subtitle}
                      </div>

                      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#8B6914] font-heading leading-[1.05] drop-shadow-[0_2px_10px_rgba(245,184,32,0.3)]">
                        {slide.title}
                      </h1>

                      <p className="text-base sm:text-lg text-[#8B6914]/80 max-w-md leading-relaxed">
                        {slide.description}
                      </p>

                      <div className="inline-flex items-center gap-3">
                        <div className="text-2xl sm:text-3xl font-bold text-[#8B6914] font-heading">
                          {slide.price}
                        </div>
                        <div className="h-8 w-px bg-[#8B6914]/20" />
                        <div className="text-xs text-[#8B6914]/50 uppercase tracking-wider font-semibold">
                          Best Price
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 pt-2">
                        <Link href={slide.ctaLink}>
                          <Button
                            size="lg"
                            className="bg-[#8B6914] hover:bg-[#8B6914]/90 text-[#FFF8E7] rounded-full px-8 text-base shadow-lg shadow-[#8B6914]/30 hover:shadow-[#8B6914]/50 transition-all hover:scale-[1.02]"
                          >
                            {slide.cta}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                        <Link href="/about">
                          <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full px-8 text-base border-[#8B6914]/30 text-[#8B6914] hover:bg-[#8B6914]/10 bg-[#8B6914]/[0.05] backdrop-blur-sm hover:scale-[1.02] transition-all"
                          >
                            Learn More
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Navigation */}
        <div className="absolute bottom-6 left-6 sm:left-10 lg:left-16 z-20 flex items-center gap-4">
          {/* Slide indicators */}
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`transition-all duration-300 rounded-full ${
                  current === index
                    ? "w-8 h-2 bg-[#8B6914]"
                    : "w-2 h-2 bg-[#8B6914]/25 hover:bg-[#8B6914]/40"
                }`}
              />
            ))}
          </div>

          {/* Divider */}
          <div className="h-4 w-px bg-[#8B6914]/15" />

          {/* Prev/Next */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={scrollPrev}
              className="w-9 h-9 rounded-full border border-[#8B6914]/15 bg-[#8B6914]/[0.06] backdrop-blur-sm flex items-center justify-center text-[#8B6914]/60 hover:text-[#8B6914] hover:border-[#8B6914]/30 hover:bg-[#8B6914]/10 transition-all"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={scrollNext}
              className="w-9 h-9 rounded-full border border-[#8B6914]/15 bg-[#8B6914]/[0.06] backdrop-blur-sm flex items-center justify-center text-[#8B6914]/60 hover:text-[#8B6914] hover:border-[#8B6914]/30 hover:bg-[#8B6914]/10 transition-all"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Slide counter */}
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#8B6914]/40 font-mono">
            <span className="text-[#8B6914]/70 text-sm">{String(current + 1).padStart(2, "0")}</span>
            <span>/</span>
            <span>{String(slides.length).padStart(2, "0")}</span>
          </div>
        </div>
      </Carousel>
    </motion.section>
  );
}
