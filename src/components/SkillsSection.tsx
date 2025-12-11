import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Java', level: 75 },
  { name: 'MongoDB', level: 70 },
  { name: 'PostgreSQL', level: 75 },
];

const tools = [
  'VS Code',
  'Git',
  'Docker',
  'AWS',
  'Figma',
  'Postman',
  'Linux',
  'Webpack',
];

const languages = [
  { name: 'JavaScript', icon: 'JS', hoverColor: '#F7DF1E' },
  { name: 'TypeScript', icon: 'TS', hoverColor: '#3178C6' },
  { name: 'Python', icon: 'PY', hoverColor: '#3776AB' },
  { name: 'Java', icon: 'JA', hoverColor: '#ED8B00' },
  { name: 'C', icon: 'C', hoverColor: '#A8B9CC' },
  { name: 'SQL', icon: 'DB', hoverColor: '#4479A1' },
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const skillBarsRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const languagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Skill bars animation
      if (skillBarsRef.current) {
        const bars = skillBarsRef.current.querySelectorAll('.skill-bar-fill');
        bars.forEach((bar) => {
          const width = bar.getAttribute('data-width');
          gsap.fromTo(
            bar,
            { width: 0 },
            {
              width: `${width}%`,
              duration: 1.5,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: bar,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }

      // Tools grid animation
      if (toolsRef.current) {
        gsap.fromTo(
          toolsRef.current.children,
          { opacity: 0, scale: 0.5, rotation: -10 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: toolsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Languages animation
      if (languagesRef.current && languagesRef.current.children.length > 0) {
          gsap.fromTo(
            languagesRef.current.children,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: languagesRef.current,
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
    <section ref={sectionRef} id="skills" className="py-24 relative bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section title */}
        <h2
          ref={titleRef}
          className="font-syne text-4xl md:text-5xl font-bold text-translucent mb-16"
        >
          SKILLS & TOOLS
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skill bars */}
          <div ref={skillBarsRef}>
            <h3 className="font-syne text-xl font-semibold text-translucent mb-8">
              TECHNOLOGIES
            </h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-inter text-translucent">{skill.name}</span>
                    <span className="text-muted-translucent">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="skill-bar-fill h-full bg-gradient-to-r from-muted-foreground to-foreground rounded-full"
                      data-width={skill.level}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Languages */}
          <div>
            {/* Languages */}
            <h3 className="font-syne text-xl font-semibold text-translucent mb-8">
              LANGUAGES
            </h3>
            <div ref={languagesRef} className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-12">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="glass-card p-4 text-center hover:scale-110 transition-all duration-300 group"
                  style={{ '--brand-color': lang.hoverColor } as React.CSSProperties}
                >
                  <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-accent flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--brand-color)]">
                    <span className="font-syne font-bold text-sm text-foreground transition-colors duration-300 group-hover:text-background">
                      {lang.icon}
                    </span>
                  </div>
                  <span className="text-xs text-muted-translucent group-hover:text-[var(--brand-color)] transition-colors duration-300">{lang.name}</span>
                </div>
              ))}
            </div>

            {/* Tools */}
            <h3 className="font-syne text-xl font-semibold text-translucent mb-8">
              TOOLS
            </h3>
            <div ref={toolsRef} className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="glass-card px-4 py-2 text-sm text-translucent hover:text-foreground hover:bg-[hsl(0_0%_100%/0.08)] transition-all duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
