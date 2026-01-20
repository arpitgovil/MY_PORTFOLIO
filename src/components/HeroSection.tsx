import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import profilePhoto from '@/assets/profile-photo.jpg';

const socialLinks = [
  { name: 'LinkedIn', icon: 'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z', href: 'https://linkedin.com/in/arpit-govil-ds-solve', hoverColor: '#0077B5' },
  { name: 'GitHub', icon: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z', href: 'https://github.com/arpitgovil', hoverColor: '#ffffff' },
  { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z', href: 'https://www.instagram.com/arpit_govil__', hoverColor: '#E4405F' },
  { name: 'LeetCode', icon: 'M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.038-1.901l-2.609-2.636a5.055 5.055 0 00-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z', href: 'https://leetcode.com/u/shameless8236', hoverColor: '#FFA116' },
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for hero animations
      const tl = gsap.timeline({ delay: 1.2 });

      tl.fromTo(
        nameRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      )
        .fromTo(
          titleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          imageRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)' },
          '-=0.5'
        );

      // Animate floating icons
      if (iconsRef.current) {
        gsap.fromTo(
          iconsRef.current.children,
          { scale: 0, opacity: 0, rotation: -180 },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.7)',
            delay: 2.5,
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-muted/30 via-background to-background" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <h1
              ref={nameRef}
              className="font-syne text-5xl md:text-7xl lg:text-8xl font-bold text-translucent mb-4 text-shadow-glow"
            >
              Arpit Govil
            </h1>
            <p
              ref={titleRef}
              className="font-inter text-xl md:text-2xl text-muted-translucent tracking-wide"
            >
              Full Stack Developer & UI/UX Designer
            </p>
            
            {/* CTA Button */}
            <div className="mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
              <a
                href="src/assets/CV.pdf"
                className="inline-block glass-card px-8 py-4 font-syne text-sm tracking-widest text-translucent hover:text-foreground hover:bg-[hsl(0_0%_100%/0.08)] transition-all duration-300"
              >
                VIEW MY RESUME
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div ref={imageRef} className="flex-shrink-0 relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-radial from-muted/50 to-transparent blur-3xl" />
              
              <div className="relative w-full h-full rounded-full overflow-hidden glass-card p-2">
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating social icons */}
      <div
        ref={iconsRef}
        className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-4"
      >
        {socialLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-icon group"
            style={{ animationDelay: `${index * 0.5}s`, ['--brand-color' as string]: link.hoverColor }}
            title={link.name}
          >
            <svg
              className="w-5 h-5 text-muted-foreground transition-colors duration-300 group-hover:[color:var(--brand-color)]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d={link.icon} />
            </svg>
          </a>
        ))}
      </div>

      {/* Scroll indicator */}
    </section>
  );
};

export default HeroSection;
