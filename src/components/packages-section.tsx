"use client";

import { packages, formatPrice } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function PackagesSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#8B6914] to-[#A67C00] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 4px, rgba(255,255,255,0.08) 4px, rgba(255,255,255,0.08) 5px)" }} />
        <motion.div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] rounded-full blur-[80px]" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.12), transparent 55%)" }} animate={{ x: [-40, 40, -40], y: [-20, 20, -20] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-[5%] right-[5%] w-[500px] h-[500px] rounded-full blur-[80px]" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.08), transparent 55%)" }} animate={{ x: [30, -30, 30], y: [15, -15, 15] }} transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-gold font-medium text-sm tracking-wider uppercase mb-2">
            Ka Negosyo Partner Program
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">
            Start Your Own Business
          </h2>
          <p className="text-white/70 mt-3 max-w-lg mx-auto">
            Choose a package that fits your budget and start earning with Mr.
            Fryman&apos;s proven business model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`relative overflow-hidden border-0 py-0 gap-0 ${
                pkg.popular
                  ? "shadow-2xl shadow-brand/20 ring-2 ring-brand scale-[1.02]"
                  : "shadow-lg"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0">
                  <Badge className="rounded-none rounded-bl-lg bg-brand text-white border-0 px-3 py-1.5">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="text-xl font-heading text-brand-dark">
                  {pkg.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {pkg.description}
                </p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-brand font-heading">
                    {formatPrice(pkg.price)}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="pb-8">
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href="/packages">
                  <Button
                    className={`w-full rounded-full ${
                      pkg.popular
                        ? "bg-brand hover:bg-brand/90 text-white shadow-lg shadow-brand/25"
                        : "bg-brand-dark hover:bg-brand-dark/90 text-white"
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
