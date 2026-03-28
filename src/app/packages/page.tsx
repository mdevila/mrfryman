import { packages, formatPrice } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  ArrowRight,
  Sparkles,
  Phone,
  HelpCircle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const faqs = [
  {
    question: "How do I become a Ka Negosyo Partner?",
    answer:
      "Simply choose a package that fits your budget, contact us, and we'll guide you through the entire onboarding process. It typically takes 2-3 weeks from signup to your first sale.",
  },
  {
    question: "Do I need prior business experience?",
    answer:
      "Not at all! Our comprehensive training program covers everything from food preparation to business management. We'll make sure you're fully equipped before you start.",
  },
  {
    question: "What is the expected ROI?",
    answer:
      "Most of our partners see their return on investment within 3-6 months, depending on location and effort. Our Business Package partners average 8-12 months for full ROI.",
  },
  {
    question: "Can I choose my location?",
    answer:
      "Yes! We'll help you evaluate potential locations and provide guidance on the best areas. Premium Partners get exclusive territory rights.",
  },
  {
    question: "What ongoing support do you provide?",
    answer:
      "We provide continuous product supply, marketing support, business consultations, and access to our partner community. Higher packages get priority support and a dedicated mentor.",
  },
];

export default function PackagesPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-[#8B6914] py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block text-gold font-medium text-sm tracking-wider uppercase mb-2">
            Ka Negosyo Partner Program
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white">
            Franchise Packages
          </h1>
          <p className="text-white/70 mt-3 max-w-lg mx-auto">
            Start your own food business with Mr. Fryman&apos;s proven model. Choose
            the package that fits your goals.
          </p>
        </div>
      </div>

      {/* Packages */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
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

                  <Link href="/contact">
                    <Button
                      className={`w-full rounded-full ${
                        pkg.popular
                          ? "bg-brand hover:bg-brand/90 text-white shadow-lg shadow-brand/25"
                          : "bg-[#8B6914] hover:bg-[#8B6914]/90 text-white"
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

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-brand font-medium text-sm tracking-wider uppercase mb-2">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Choose a Package",
                desc: "Select the package that matches your budget and goals.",
              },
              {
                step: "02",
                title: "Sign Up & Train",
                desc: "Complete registration and attend our training program.",
              },
              {
                step: "03",
                title: "Set Up Your Cart",
                desc: "We help you set up your branded food cart at your location.",
              },
              {
                step: "04",
                title: "Start Earning",
                desc: "Begin selling and watch your business grow with our support.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand/10 text-brand text-xl font-bold font-heading">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="inline-block text-brand font-medium text-sm tracking-wider uppercase mb-2">
              <HelpCircle className="inline h-4 w-4 mr-1" />
              Got Questions?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">
              Have more questions? We&apos;d love to hear from you!
            </p>
            <Link href="/contact">
              <Button
                className="rounded-full bg-brand hover:bg-brand/90 text-white px-8"
              >
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
