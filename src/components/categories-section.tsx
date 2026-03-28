"use client";

import Image from "next/image";
import { categories } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";

export function CategoriesSection() {
  return (
    <section className="py-16 md:py-20 bg-card relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 4px, rgba(139,105,20,0.1) 4px, rgba(139,105,20,0.1) 5px)" }} />
        <motion.div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full blur-[80px]" style={{ background: "radial-gradient(circle, rgba(245,184,32,0.35), transparent 60%)" }} animate={{ x: [-40, 40, -40], y: [-20, 20, -20] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-[5%] right-[10%] w-[500px] h-[500px] rounded-full blur-[80px]" style={{ background: "radial-gradient(circle, rgba(139,105,20,0.2), transparent 60%)" }} animate={{ x: [30, -30, 30], y: [15, -15, 15] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-brand font-medium text-sm tracking-wider uppercase mb-2">
            Browse Our Selection
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark">
            Food Categories
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            From our signature crispy pata to family bundles, find your perfect
            Filipino feast.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {categories.map((category) => (
            <Link key={category.id} href={`/menu?category=${category.id}`}>
              <Card className="group cursor-pointer border-0 shadow-none hover:shadow-lg transition-all duration-300 bg-muted/50 hover:bg-card py-0 overflow-hidden">
                <CardContent className="flex flex-col items-center text-center p-3">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 14vw"
                    />
                  </div>
                  <h3 className="font-semibold text-sm text-foreground group-hover:text-brand transition-colors">
                    {category.name}
                  </h3>
                  <span className="text-xs text-muted-foreground mt-1">
                    {category.productCount} items
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
