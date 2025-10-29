import React from 'react';

const projects = [
  {
    title: 'Neon Grid Brand System',
    tag: 'Branding',
    img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Minimalist Poster Series',
    tag: 'Print Design',
    img: 'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Motion Title Cards',
    tag: 'Motion Graphics',
    img: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function PortfolioPreview() {
  return (
    <section id="work" className="relative py-20 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Selected Work</h2>
            <p className="mt-2 text-white/60 text-sm sm:text-base">A glimpse into recent brand, print, and motion projects.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm text-white/80 hover:text-white underline underline-offset-4">See all projects</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-flex rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/80 backdrop-blur">
                    {p.tag}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold leading-tight">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <a href="#" className="inline-block text-sm text-white/80 hover:text-white underline underline-offset-4">See all projects</a>
        </div>
      </div>
    </section>
  );
}
