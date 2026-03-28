import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Globe, MessageCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-[#8B6914] text-[#FFF8E7]">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Mr. Fryman Ka Negosyo"
                width={160}
                height={70}
                className="drop-shadow-lg"
              />
            </div>
            <p className="text-[#FFF8E7]/70 text-sm leading-relaxed">
              Serving the best crispy pata and Filipino cuisine. Join our Ka
              Negosyo Partner program and start your own food business today!
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-[#FFF8E7]/10 hover:bg-brand hover:text-[#8B6914] p-2 rounded-full transition-colors"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-[#FFF8E7]/10 hover:bg-brand hover:text-[#8B6914] p-2 rounded-full transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-brand">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/menu", label: "Our Menu" },
                { href: "/packages", label: "Franchise Packages" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#FFF8E7]/70 hover:text-brand text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-brand">Information</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms & Conditions" },
                { href: "/shipping", label: "Shipping & Returns" },
                { href: "/faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#FFF8E7]/70 hover:text-brand text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-brand">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-[#FFF8E7]/70">
                <Phone className="h-4 w-4 mt-0.5 text-brand shrink-0" />
                <span>0927 132 2115</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#FFF8E7]/70">
                <Mail className="h-4 w-4 mt-0.5 text-brand shrink-0" />
                <span>info@mrfrymankanegosyo.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#FFF8E7]/70">
                <MapPin className="h-4 w-4 mt-0.5 text-brand shrink-0" />
                <span>Metro Manila, Philippines</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#FFF8E7]/70">
                <Clock className="h-4 w-4 mt-0.5 text-brand shrink-0" />
                <span>Open Daily: 7 AM - 7 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-[#FFF8E7]/10" />

      {/* Bottom bar */}
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#FFF8E7]/50">
          <span>&copy; {new Date().getFullYear()} Mr. Fryman Ka Negosyo. All rights reserved.</span>
          <span>Proudly Filipino</span>
        </div>
      </div>
    </footer>
  );
}
