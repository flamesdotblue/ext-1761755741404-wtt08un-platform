import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-sm text-white/60">© "GD" Portfolio — All rights reserved.</p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="mailto:hello@example.com" className="text-white/80 hover:text-white">Email</a>
            <span className="text-white/20">•</span>
            <a href="#" className="text-white/80 hover:text-white">GitHub</a>
            <span className="text-white/20">•</span>
            <a href="#" className="text-white/80 hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
