"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
}

export function Footer({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg",
    alt: "Logo",
    title: "Shadcnblocks.com",
  },
}: FooterProps) {
  return (
    <footer className="py-10 bg-muted mt-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between gap-10 text-center lg:text-left">
          {/* Logo & Description */}
          <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-1/3">
            <a href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                alt={logo.alt}
                title={logo.title}
                className="h-8"
              />
              <h2 className="text-xl font-semibold">{logo.title}</h2>
            </a>
            <p className="text-sm text-muted-foreground">
              A collection of 100+ responsive HTML templates for your startup
              business or side project.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary">
                <Instagram className="size-6" />
              </a>
              <a href="#" className="hover:text-primary">
                <Facebook className="size-6" />
              </a>
              <a href="#" className="hover:text-primary">
                <Twitter className="size-6" />
              </a>
              <a href="#" className="hover:text-primary">
                <Linkedin className="size-6" />
              </a>
            </div>
          </div>

          {/* Section Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full lg:w-2/3">
            {sections.map((section, i) => (
              <div key={i}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <a
                        href={link.href}
                        className="hover:text-primary font-medium"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t pt-6 text-sm text-muted-foreground">
          <p>© 2025 Shadcnblocks.com. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary">
              Terms and Conditions
            </a>
            <a href="#" className="hover:text-primary">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
