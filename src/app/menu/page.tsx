"use client";

import { useState } from "react";
import Image from "next/image";
import { featuredProducts, categories, formatPrice } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Star, Search, SlidersHorizontal } from "lucide-react";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = featuredProducts.filter((product) => {
    const matchesCategory =
      activeCategory === "all" ||
      product.category.toLowerCase().includes(activeCategory.replace("-", " "));
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Page Header */}
      <div className="bg-[#8B6914] py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block text-gold font-semibold text-base tracking-wider uppercase mb-2">
            Explore Our Selection
          </span>
          <h1 className="text-5xl md:text-6xl font-bold font-heading text-white">
            Our Menu
          </h1>
          <p className="text-white/70 mt-4 max-w-lg mx-auto text-lg">
            Discover the best Filipino cuisine — from our signature crispy pata
            to hearty family bundles.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search menu..."
              className="pl-10 h-12 text-base bg-card"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="gap-2 h-12 text-base bg-card">
            <SlidersHorizontal className="h-5 w-5" />
            Filters
          </Button>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            className={`rounded-full text-base px-6 py-2.5 h-auto ${
              activeCategory === "all"
                ? "bg-[#8B6914] hover:bg-[#8B6914]/90 text-white"
                : "bg-card hover:text-brand-dark hover:border-brand-dark"
            }`}
            onClick={() => setActiveCategory("all")}
          >
            All Items
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              className={`rounded-full text-base px-6 py-2.5 h-auto ${
                activeCategory === cat.id
                  ? "bg-[#8B6914] hover:bg-[#8B6914]/90 text-white"
                  : "bg-card hover:text-brand-dark hover:border-brand-dark"
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all duration-300 py-0 gap-0 bg-card"
            >
              <div className="relative h-60 bg-gradient-to-br from-brand/5 to-gold/5 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {product.badge && (
                  <Badge className="absolute top-3 left-3 bg-[#8B6914] text-white border-0 shadow-md text-sm px-3 py-1">
                    {product.badge}
                  </Badge>
                )}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    className="rounded-full bg-[#8B6914] hover:bg-[#8B6914]/90 text-white shadow-lg gap-2 text-base px-5"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
              <CardContent className="p-5 space-y-2.5">
                <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                  {product.category}
                </span>
                <h3 className="font-bold text-lg text-foreground group-hover:text-brand-dark transition-colors font-heading">
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
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-xl font-bold text-brand-dark">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-base text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-xl">
              No products found. Try a different search or category.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
