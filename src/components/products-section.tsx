"use client";

import Image from "next/image";
import { featuredProducts, formatPrice } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Eye } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function ProductsSection() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 4px, rgba(139,105,20,0.1) 4px, rgba(139,105,20,0.1) 5px)" }} />
        <motion.div className="absolute top-[5%] right-[5%] w-[600px] h-[600px] rounded-full blur-[80px]" style={{ background: "radial-gradient(circle, rgba(245,184,32,0.3), transparent 60%)" }} animate={{ x: [40, -40, 40], y: [-20, 20, -20] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] rounded-full blur-[80px]" style={{ background: "radial-gradient(circle, rgba(139,105,20,0.2), transparent 60%)" }} animate={{ x: [-30, 30, -30], y: [15, -15, 15] }} transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-brand font-medium text-sm tracking-wider uppercase mb-2">
            Customer Favorites
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark">
            Featured Products
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Our most loved dishes, handpicked for you. Order now and taste the
            difference!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 py-0 gap-0"
            >
              <div className="relative h-52 bg-gradient-to-br from-brand/5 to-gold/5 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Badge */}
                {product.badge && (
                  <Badge className="absolute top-3 left-3 bg-brand text-white border-0 shadow-md">
                    {product.badge}
                  </Badge>
                )}

                {/* Quick actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-8 w-8 rounded-full shadow-md bg-white/90 hover:bg-white"
                  >
                    <Eye className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    size="icon"
                    className="h-8 w-8 rounded-full shadow-md bg-brand hover:bg-brand/90 text-white"
                  >
                    <ShoppingCart className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-5 space-y-2.5">
                <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                  {product.category}
                </span>

                <h3 className="font-bold text-lg text-foreground group-hover:text-brand-dark transition-colors line-clamp-1 font-heading">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-brand text-brand"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>

                <p className="text-base text-muted-foreground line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-brand-dark">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-base text-muted-foreground line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/menu">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 text-base border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white"
            >
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
