"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Globe,
  MessageCircle,
  Share2,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <PageHeader
        label="Get in Touch"
        title="Contact Us"
        description="Have questions about our menu or franchise packages? We'd love to hear from you!"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-heading text-brand-dark">
                Reach Out To Us
              </h2>
              <p className="text-muted-foreground">
                Whether you want to order, inquire about our franchise packages,
                or just say hello — we&apos;re here for you.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "0927 132 2115",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@mrfrymankanegosyo.com",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Metro Manila, Philippines",
                  },
                  {
                    icon: Clock,
                    label: "Hours",
                    value: "Open Daily: 7 AM - 7 PM",
                  },
                ].map((item) => (
                  <Card key={item.label} className="border-0 shadow-sm">
                    <CardContent className="flex items-center gap-4 py-4">
                      <div className="bg-brand/10 text-brand rounded-xl p-2.5 shrink-0">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">
                          {item.label}
                        </div>
                        <div className="font-medium text-foreground">
                          {item.value}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {[
                    { icon: Globe, label: "Facebook" },
                    { icon: Share2, label: "Instagram" },
                    { icon: MessageCircle, label: "Messenger" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href="#"
                      className="bg-brand/10 hover:bg-brand hover:text-white text-brand p-2.5 rounded-full transition-all"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2 border-0 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold font-heading text-brand-dark mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Full Name
                      </label>
                      <Input
                        placeholder="Juan Dela Cruz"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="juan@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Phone Number
                      </label>
                      <Input
                        placeholder="09XX XXX XXXX"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Subject
                      </label>
                      <Input
                        placeholder="e.g., Franchise Inquiry"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      placeholder="Tell us how we can help you..."
                      className="w-full min-h-[140px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full sm:w-auto rounded-full bg-brand hover:bg-brand/90 text-white px-8"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
