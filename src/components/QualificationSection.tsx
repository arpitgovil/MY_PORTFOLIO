import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const qualifications = [
  {
    title: 'Bachelor of Computer Applications',
    institution: 'IIMT University, Meerut',
    year: '2023 - 2026',
    description: 'Computer Science & Engineering',
  },
  {
    title: 'Higher Secondary Education',
    institution: 'Mercy Memorial School, Kanpur',
    year: '2019 - 2023',
    description: 'Science Stream - 76%',
  },
];

const achievements = [
  'Girl Script Summer of Code Participant,2025',
  'Smart India Hackathon Participant',
  '50+ Published Blogs on Medium & Tumblr',
  '100+ Problems Solved on LeetCode',
];

const QualificationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const typewriterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with typewriter effect
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Typewriter text reveal
      if (typewriterRef.current) {
        gsap.fromTo(
          typewriterRef.current,
          { width: 0 },
          {
            width: '100%',
            duration: 2,
            ease: 'steps(30)',
            scrollTrigger: {
              trigger: typewriterRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Cards stagger animation
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, x: -50, rotationY: -15 },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Achievements pop animation
      if (achievementsRef.current) {
        gsap.fromTo(
          achievementsRef.current.children,
          { opacity: 0, scale: 0.8, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: achievementsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="qualification" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section title */}
        <div className="mb-16">
          <h2
            ref={titleRef}
            className="font-syne text-4xl md:text-5xl font-bold text-translucent mb-4"
          >
            QUALIFICATION
          </h2>
          <div className="overflow-hidden">
            <div
              ref={typewriterRef}
              className="font-inter text-muted-translucent text-lg border-r-2 border-foreground/50 whitespace-nowrap overflow-hidden"
            >
              Education & Achievements that define my journey
            </div>
          </div>
        </div>

        {/* Qualification cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 mb-16">
          {qualifications.map((qual, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:bg-[hsl(0_0%_100%/0.05)] transition-all duration-500"
            >
              <span className="text-muted-foreground text-sm tracking-wider">
                {qual.year}
              </span>
              <h3 className="font-syne text-2xl font-bold text-translucent mt-2 mb-1">
                {qual.title}
              </h3>
              <p className="text-foreground/80 font-medium mb-2">
                {qual.institution}
              </p>
              <p className="text-muted-translucent">{qual.description}</p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-16">
          <h3 className="font-syne text-2xl font-bold text-translucent mb-8">
            ACHIEVEMENTS
          </h3>
          <div
            ref={achievementsRef}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-muted to-accent flex items-center justify-center">
                  <span className="text-foreground font-syne font-bold">
                    {index + 1}
                  </span>
                </div>
                <p className="text-translucent font-inter text-sm">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
