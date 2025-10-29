import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[80vh] sm:h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />

      <div className="relative z-10 mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Crafting modern visual identities
            </h1>
            <p className="mt-4 text-white/70 text-base sm:text-lg">
              I’m a graphic designer specializing in brand systems, motion, and digital product visuals. Clean, bold, and memorable.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#work"
                className="pointer-events-auto inline-flex items-center gap-2 rounded-xl bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
              >
                View Selected Work
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="pointer-events-auto inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/0 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
