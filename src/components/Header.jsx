import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-400/90 to-cyan-500/90 ring-1 ring-white/20 flex items-center justify-center text-black font-bold">GD</div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm text-white/60">Graphic Designer</span>
                <span className="text-base font-semibold tracking-wide">Portfolio</span>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="mailto:hello@example.com" aria-label="Email" className="p-2.5 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors">
                <Mail size={18} />
              </a>
              <a href="#" aria-label="GitHub" className="p-2.5 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2.5 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors">
                <Linkedin size={18} />
              </a>
              <a
                href="#contact"
                className="ml-2 inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-white/90 transition-colors"
              >
                Let’s Talk
              </a>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 p-2.5 hover:bg-white/5 hover:border-white/20 transition-colors"
              aria-label="Toggle Menu"
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <a href="mailto:hello@example.com" aria-label="Email" className="p-2.5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors">
                  <Mail size={18} />
                </a>
                <a href="#" aria-label="GitHub" className="p-2.5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors">
                  <Github size={18} />
                </a>
                <a href="#" aria-label="LinkedIn" className="p-2.5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="ml-auto inline-flex items-center gap-2 rounded-lg bg-white text-black px-3 py-2 text-sm font-semibold hover:bg-white/90 transition-colors"
                >
                  Let’s Talk
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
