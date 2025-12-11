import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { toast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    domain: '',
    message: '',
  });

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

      // Form floating animation
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 100, rotationX: -10 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Continuous floating effect
      gsap.to(formRef.current, {
        y: -10,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message sent!',
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', domain: '', message: '' });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 relative bg-gradient-subtle">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-muted/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section title */}
        <h2
          ref={titleRef}
          className="font-syne text-4xl md:text-5xl font-bold text-translucent mb-16 text-center"
        >
          LET'S CONNECT
        </h2>

        {/* Floating form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto glass-card p-8 md:p-12"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label className="block text-muted-translucent text-sm mb-2 font-inter">
                NAME
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground/50 transition-colors"
                placeholder="Arpit Govil"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-muted-translucent text-sm mb-2 font-inter">
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground/50 transition-colors"
                placeholder="abc@example.com"
              />
            </div>
          </div>

          {/* Domain */}
          <div className="mb-6">
            <label className="block text-muted-translucent text-sm mb-2 font-inter">
              DOMAIN / SUBJECT
            </label>
            <input
              type="text"
              name="domain"
              value={formData.domain}
              onChange={handleChange}
              required
              className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground/50 transition-colors"
              placeholder="Project Collaboration"
            />
          </div>

          {/* Message */}
          <div className="mb-8">
            <label className="block text-muted-translucent text-sm mb-2 font-inter">
              MESSAGE
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground/50 transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-4 bg-foreground text-primary-foreground font-syne font-semibold tracking-widest rounded-lg hover:bg-foreground/90 transition-all duration-300 hover:scale-[1.02]"
          >
            SEND MESSAGE
          </button>
        </form>

        {/* Footer info */}
        <div className="mt-16 text-center">
          <p className="text-muted-translucent font-inter">
            Or reach out directly at{' '}
            <a
              href="mailto:arpitgovil@outlook.com"
              className="text-translucent hover:text-foreground transition-colors underline"
            >
              arpitgovil@outlook.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
