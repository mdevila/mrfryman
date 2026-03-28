"use client";

import { testimonials } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 4px, rgba(139,105,20,0.1) 4px, rgba(139,105,20,0.1) 5px)" }} />
        <motion.div className="absolute top-[10%] right-[10%] w-[550px] h-[550px] rounded-full blur-[80px]" style={{ background: "radial-gradient(circle, rgba(245,184,32,0.3), transparent 60%)" }} animate={{ x: [-35, 35, -35], y: [-15, 15, -15] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-[10%] left-[15%] w-[450px] h-[450px] rounded-full blur-[80px]" style={{ background: "radial-gradient(circle, rgba(139,105,20,0.18), transparent 60%)" }} animate={{ x: [25, -25, 25], y: [10, -10, 10] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-brand font-medium text-sm tracking-wider uppercase mb-2">
            What People Say
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark">
            Customer Testimonials
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Hear from our satisfied customers and successful Ka Negosyo Partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 relative"
            >
              <CardContent className="pt-8">
                <Quote className="h-8 w-8 text-brand/20 absolute top-6 right-6" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-brand/10 text-brand text-sm font-semibold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
