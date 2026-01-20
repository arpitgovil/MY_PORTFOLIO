import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'RenewFit is a sustainable e-commerce platform that lets users buy, sell, and swap pre-loved fashion. With a modern, user-friendly interface and organized product categories, it offers a smooth shopping experience while promoting circular fashion and reducing textile waste.',
    tech: ['HTML', 'CSS', 'Tailwind', 'JavaScript'],
    github: 'https://github.com/arpitgovil/RenewFit',
    live: 'https://renewfit-arpit.vercel.app/',
  },
  {
    title: 'Animal Shelter Platform',
    description: 'Animal Haven is a modern, responsive web platform designed to connect animal shelters with volunteers, donors, and adopters. The application provides an intuitive interface for users to explore animal shelters, contribute, and support animal welfare initiatives.',
    tech: ['Next.js', 'TypeScript', 'OpenAI', 'WebSocket'],
    github: 'https://github.com/arpitgovil/Animal---Haven',
    live: 'https://animal-haven-dtd6.vercel.app/',
  },
  {
    title: 'MOSDAC AI Assistant ',
    description: 'Drag-and-drop portfolio builder with custom themes and SEO optimization features.',
    tech: ['JavaScript', 'Tailwind', 'Firebase'],
    github: 'https://github.com/arpitgovil/ISRO-CHATBOT',
    live: 'https://isro-chatbot.vercel.app/',
  },
  {
    title: 'Namo Bharat Website',
    description: 'This project is a user-friendly web interface designed to simplify access to information about the Regional Rapid Transit System (RRTS), developed under (NCRTC). It provides comprehensive details on routes, schedules, ticketing, and real-time updates for commuters.',
    tech: ['React', 'Tailwind', 'JavaScript', 'TypeScript'],
    github: 'https://github.com/arpitgovil/RRTS',
    live: 'https://arpitgovil.github.io/RRTS/',
  },
  {
    title: 'Smart India Hackathon Portal',
    description: 'This project is a fully functional web-based replica of the Smart India Hackathon (SIH), designed to digitally manage the complete hackathon workflow from college onboarding to idea submission and administrative approval.',
    tech: ['React', 'PostgreSQL', 'TypeScript', 'Taiwlind'],
    github: 'https://github.com/arpitgovil/SIH',
    live: 'https://arpitgovil.github.io/SIH/',
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animate project cards when they change
    if (projectsRef.current) {
      gsap.fromTo(
        projectsRef.current.children,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );
    }
  }, [showAll]);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <section ref={sectionRef} id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section title */}
        <h2
          ref={titleRef}
          className="font-syne text-4xl md:text-5xl font-bold text-translucent mb-16"
        >
          PROJECTS
        </h2>

        {/* Projects grid */}
        <div
          ref={projectsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-6 group hover:bg-[hsl(0_0%_100%/0.05)] transition-all duration-500"
            >
              {/* Project number */}
              <span
  className="
    absolute -top-2 -right-2
    font-syne font-bold text-6xl
    text-white/30
    group-hover:text-white
    transition-colors duration-300
  "
>
  {String(index + 1).padStart(2, '0')}
</span>

              <h3
  className="
    font-syne text-xl font-bold
    text-translucent
    group-hover:text-foreground
    group-hover:[text-shadow:0_0_0.5px_currentColor]
    mb-3 relative z-10
    transition-all duration-300
  "
>
                {project.title}
              </h3>
              <p className="text-muted-translucent mb-4 text-sm relative z-10">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  <ExternalLink size={16} />
                  <span>Live</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle button */}
        <div className="mt-12 text-center">
          <button
            onClick={handleToggle}
            className="glass-card px-8 py-4 font-syne text-sm tracking-widest text-translucent hover:text-foreground hover:bg-[hsl(0_0%_100%/0.08)] transition-all duration-300"
          >
            {showAll ? 'SHOW LESS' : 'SHOW MORE'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
