"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#A67C00] via-[#8B6914] to-[#A67C00] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.2) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(236,195,31,0.3) 0%, transparent 40%)",
          }}
        />
      </div>

      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 4px, rgba(255,255,255,0.08) 4px, rgba(255,255,255,0.08) 5px)" }} />
        <motion.div className="absolute top-[10%] right-[10%] w-[550px] h-[550px] rounded-full blur-[80px]" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.12), transparent 55%)" }} animate={{ x: [35, -35, 35], y: [-15, 15, -15] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-[5%] left-[10%] w-[450px] h-[450px] rounded-full blur-[80px]" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.08), transparent 55%)" }} animate={{ x: [-25, 25, -25], y: [10, -10, 10] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight">
            Ready to Start Your
            <br />
            Food Business Journey?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Join over 100+ successful Ka Negosyo Partners. Low investment, high
            returns, and full support from the Mr. Fryman team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href="/packages">
              <Button
                size="lg"
                className="bg-white text-brand hover:bg-white/90 rounded-full px-8 text-base shadow-lg"
              >
                View Packages
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 text-base border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
              >
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
