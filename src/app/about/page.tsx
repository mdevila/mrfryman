import { Award, Users, MapPin, TrendingUp, Heart, Shield, Truck } from "lucide-react";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";

const stats = [
  { icon: Award, value: "5+", label: "Years of Excellence" },
  { icon: Users, value: "100+", label: "Ka Negosyo Partners" },
  { icon: MapPin, value: "50+", label: "Locations Nationwide" },
  { icon: TrendingUp, value: "98%", label: "Partner Satisfaction" },
];

const values = [
  {
    icon: Heart,
    title: "Passion for Filipino Food",
    description:
      "Every dish we serve is made with love and pride in our Filipino culinary heritage.",
  },
  {
    icon: Shield,
    title: "Quality & Consistency",
    description:
      "We maintain the highest standards in food preparation, from ingredients to serving.",
  },
  {
    icon: Users,
    title: "Empowering Entrepreneurs",
    description:
      "Our KNP program gives aspiring business owners the tools and support to succeed.",
  },
  {
    icon: Truck,
    title: "Reliable Service",
    description:
      "From order to delivery, we ensure a seamless and satisfying experience every time.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-[#8B6914] py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block text-gold font-medium text-sm tracking-wider uppercase mb-2">
            Get to Know Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white">
            About Mr. Fryman
          </h1>
          <p className="text-white/70 mt-3 max-w-lg mx-auto">
            From a humble food cart to a nationwide brand — our story of passion,
            flavor, and Filipino entrepreneurship.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold font-heading text-brand-dark">
              Our Story
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Mr. Fryman started with a simple dream: to serve the crispiest, most
              flavorful pata in Metro Manila. Founded by a team of passionate food
              enthusiasts, what began as a single food cart in a busy Manila street
              quickly became a local sensation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Word spread fast — customers couldn&apos;t get enough of our perfectly
              golden, incredibly crispy pata with its signature sauces. As demand
              grew, so did our vision. We launched the Ka Negosyo Partner (KNP)
              program to share our success with aspiring Filipino entrepreneurs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, Mr. Fryman Ka Negosyo has grown into a network of over 100+
              partners across Metro Manila and beyond. But our mission remains the
              same: serve amazing food and empower Filipinos to build their own
              successful food businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center space-y-2 bg-card rounded-2xl p-6 shadow-sm"
              >
                <div className="inline-flex items-center justify-center bg-brand/10 text-brand rounded-xl p-3 mx-auto">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-brand-dark font-heading">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-brand font-medium text-sm tracking-wider uppercase mb-2">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center space-y-3 bg-muted/50 rounded-2xl p-6"
              >
                <div className="inline-flex items-center justify-center bg-brand/10 text-brand rounded-xl p-3 mx-auto">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </>
  );
}
