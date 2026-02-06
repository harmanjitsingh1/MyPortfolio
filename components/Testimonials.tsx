import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Card from './Card';

const testimonials = [
  {
    text: "We saw a 140% lift in conversions within the first 30 days. The psychological hooks are absolutely real.",
    name: "Alex Rivera",
    role: "CEO of TechStream",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    text: "The most beautiful website I've ever owned. But more importantly, it actually makes me money while I sleep.",
    name: "Sarah Chen",
    role: "Founder of GlowUp",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  },
  {
    text: "Their process is elite. They understood our enterprise needs and delivered a high-converting masterpiece.",
    name: "Jameson Blake",
    role: "VP Marketing, Velocity",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    text: "Simply incredible work. The attention to detail in the UI animations completely elevated our brand perception.",
    name: "Marcus Thorne",
    role: "Director, Apex Digital",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
  }
];

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Adjust scroll distance
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-brand-dark border-t border-brand-border relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-primary">
              Client Success Stories
            </h2>
            <p className="text-brand-muted text-lg">
              Don't just take my word for it. Trusted by industry leaders.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-brand-border bg-brand-surface hover:border-brand-primary hover:text-brand-primary transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-brand-border bg-brand-surface hover:border-brand-primary hover:text-brand-primary transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="min-w-[350px] md:min-w-[450px] snap-center"
            >
              <Card className="h-full bg-brand-surface hover:bg-brand-surface/80 transition-colors pt-10 pb-8 flex flex-col justify-between group border-brand-border">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-brand-primary text-brand-primary"
                      />
                    ))}
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed mb-8 font-light">
                    "{t.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-brand-border/50">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border border-brand-border"
                  />
                  <div>
                    <div className="font-bold text-white group-hover:text-brand-primary transition-colors">
                      {t.name}
                    </div>
                    <div className="text-xs font-bold tracking-wider text-brand-primary uppercase">
                      {t.role}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;