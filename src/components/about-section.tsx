"use client";

import { Award, Users, MapPin, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Award, value: "5+", label: "Years of Excellence" },
  { icon: Users, value: "100+", label: "Ka Negosyo Partners" },
  { icon: MapPin, value: "50+", label: "Locations Nationwide" },
  { icon: TrendingUp, value: "98%", label: "Partner Satisfaction" },
];

export function AboutSection() {
  return (
    <section className="py-16 md:py-20 bg-card relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 4px, rgba(139,105,20,0.1) 4px, rgba(139,105,20,0.1) 5px)" }} />
        <motion.div className="absolute top-[15%] left-[50%] w-[600px] h-[600px] rounded-full blur-[80px]" style={{ background: "radial-gradient(circle, rgba(245,184,32,0.3), transparent 60%)" }} animate={{ x: [-50, 50, -50], y: [-20, 20, -20] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-[5%] left-[5%] w-[450px] h-[450px] rounded-full blur-[80px]" style={{ background: "radial-gradient(circle, rgba(139,105,20,0.2), transparent 60%)" }} animate={{ x: [30, -30, 30], y: [10, -10, 10] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <span className="inline-block text-brand font-medium text-sm tracking-wider uppercase">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark leading-tight">
              Bringing Filipino Flavors
              <br />
              <span className="text-brand">To Every Table</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Mr. Fryman started with a simple mission: serve the crispiest,
              most delicious pata in Metro Manila. What began as a single food
              cart has grown into a thriving network of Ka Negosyo Partners
              across the Philippines.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe in empowering Filipinos through food entrepreneurship.
              Our Ka Negosyo Partner program provides everything you need —
              from equipment and training to ongoing support — so you can build a
              successful food business with a proven brand.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 bg-muted/50 rounded-xl p-4"
                >
                  <div className="bg-brand/10 text-brand rounded-lg p-2.5">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-dark font-heading">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-brand/10 to-gold/10 rounded-3xl p-8 lg:p-12">
              <div className="bg-card rounded-2xl shadow-xl p-8 space-y-6">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center justify-center bg-brand rounded-full p-4 mx-auto">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-brand-dark">
                    Why Choose Mr. Fryman?
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Premium quality ingredients sourced locally",
                    "Proven business model with high ROI",
                    "Comprehensive training and mentorship",
                    "Marketing and operational support",
                    "Exclusive territory protection",
                    "Growing brand with loyal customers",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full mt-2 shrink-0" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 grid grid-cols-4 gap-2 opacity-20">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-brand rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
