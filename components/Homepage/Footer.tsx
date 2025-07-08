"use client";

import React from "react";
import { Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const navLinks = [
    { label: "Home", href: "#hero", type: "section" },
    { label: "Who Should Join", href: "#who-should-join", type: "section" },
    { label: "How It Works", href: "#how-we-do-it", type: "section" },
    { label: "Benefits", href: "#benefits", type: "section" },
    { label: "Privacy & Ownership", href: "/privacy", type: "route" },
    { label: "Our Mission", href: "/our-mission", type: "route" },
  ];

  const handleSectionClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary via-primary-dark to-purple-800 text-white pt-20 pb-10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Branding */}
          <div>
            <div className="relative">
              <div className="h-10 w-auto flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  1upX
                </span>
              </div>
            </div>
            <p className="text-neutral-200 mb-6 leading-relaxed">
              Your personal AI workmate that learns how you think, work, and
              create.
            </p>
            <div className="flex space-x-4 mt-4">
              {[
                { icon: Twitter, href: "https://x.com/team1upx" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/company/1upx-xyz/about/?viewAsMember=true",
                },
              ].map(({ icon: Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform hover:text-accent text-white"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-neutral-300">
              {navLinks.map(({ label, href, type }) => (
                <li key={label}>
                  {type === "route" ? (
                    <Link
                      href={href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleSectionClick(href)}
                      className="hover:text-white transition-colors duration-200 text-left"
                    >
                      {label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>
                Email:{" "}
                <a
                  href="mailto:1upx.contact@gmail.com"
                  className="hover:text-white"
                >
                  1upx.contact@gmail.com
                </a>
              </li>
              <li>Pune, Maharashtra</li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-6 border-t border-white/20 text-sm text-center text-neutral-400">
          <p>&copy; 2025 1upX. Powered by Skynet.</p>
          <div className="mt-3 flex justify-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
