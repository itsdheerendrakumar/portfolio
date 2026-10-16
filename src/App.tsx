import { useState, useEffect } from 'react';
import { Moon, Sun, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from './assets/profile-image.jpeg';
import {
  SiJavascript, SiTypescript, SiReact, SiCss, SiTailwindcss, SiHtml5, SiRedux, SiReactquery,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiPrisma, SiRedis,
  SiGit, SiGithub, SiDocker, SiSocketdotio
} from 'react-icons/si';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}

const projects = [
  {
    title: "Task Management",
    stack: "Full Stack (MERN), Socket.io, @dnd-kit, TanStack, ApexCharts",
    desc: "Built a collaborative workspace where teams can manage tasks using a drag-and-drop Kanban board and chat in real-time via Socket.io. I also integrated role-based access control (RBAC) and analytics dashboards to track progress, all backed by secure JWT auth.",
    live: "https://task-management-frontend-opal-kappa.vercel.app/",
    frontend: "https://github.com/itsdheerendrakumar/task-management-frontend",
    backend: "https://github.com/itsdheerendrakumar/task-management-backend"
  },
  {
    title: "Online Job Portal",
    stack: "Full Stack (MERN), Cloudinary, RBAC",
    desc: "Architected multi-role panels with secure backend authentication, authorization, and Role-Based Access Control (RBAC). Integrated Cloudinary API for media storage.",
    live: "https://job-portal-frontend-p3a9.vercel.app/",
    frontend: "https://github.com/itsdheerendrakumar/jobPortalFrontend",
    backend: "https://github.com/itsdheerendrakumar/jobPortalBackend"
  },
  {
    title: "Blog App",
    stack: "Full Stack (MERN)",
    desc: "Developed a full-stack platform featuring comprehensive RESTful CRUD operations and secure user authentication.",
    live: "https://blog-frontend-eta-silk.vercel.app/",
    frontend: "https://github.com/itsdheerendrakumar/BlogFrontend",
    backend: "https://github.com/itsdheerendrakumar/BlogBackend"
  }
];

const experiences = [
  {
    role: "Software Engineer",
    company: "Creative Buffer Consultancy Pvt. Ltd.",
    date: "Sep 2024 - Present",
    desc: "Built Apollo360 (EHR Patient Panel) using React, TanStack Query, and Shadcn UI. Engineered a real-time doctor-patient chat and an RPM dashboard. Developed Oasis Notes with dynamic form fields and role-based authorization."
  }
];

const skills = [
  {
    category: "Frontend",
    tech: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "TanStack Query", icon: SiReactquery, color: "#FF4154" },
      { name: "WebSocket", icon: SiSocketdotio },
    ]
  },
  {
    category: "Backend",
    tech: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Prisma", icon: SiPrisma },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ]
  },
  {
    category: "Tools & Version Control",
    tech: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
    ]
  }
];

function SectionHeading({ children, id }: { children: React.ReactNode, id: string }) {
  return (
    <h2 id={id} className="text-xl font-semibold mb-6 text-foreground tracking-tight">
      {children}
    </h2>
  );
}

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 hidden dark:block">
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-violet-600/10 blur-[120px] animate-blob" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-600/10 blur-[120px] animate-blob" style={{ animationDelay: '2s' }} />
    </div>
  );
}

export default function App() {
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = ((formData.get("name") as string) || "").trim();
    const email = ((formData.get("email") as string) || "").trim();
    const subjectInput = ((formData.get("subject") as string) || "").trim();
    const message = ((formData.get("message") as string) || "").trim();

    const tag = subjectInput.startsWith("[") && subjectInput.endsWith("]")
      ? subjectInput
      : `[${subjectInput}]`;
    const subject = `${tag} Message from ${name}`;

    const body = `Subject: ${subjectInput}\nFrom: ${name} (${email})\n\nMessage:\n${message}`;

    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
      navigator.userAgent
    );

    if (isMobile) {
      const mailtoUrl = `mailto:dheerendra16kumar@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      const link = document.createElement("a");
      link.href = mailtoUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=dheerendra16kumar@gmail.com&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, "_blank", "noopener,noreferrer");
    }

    form.reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground relative z-0">
      <AnimatedBackground />

      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-lg font-semibold tracking-tight hover:text-primary/80 transition-colors">
            Dheerendra Kumar
          </a>
          <nav className="flex items-center gap-4 text-sm font-medium">
            <a href="#work" className="hidden sm:block text-muted-foreground hover:text-foreground transition-colors">Work</a>
            <a href="#experience" className="hidden sm:block text-muted-foreground hover:text-foreground transition-colors">Experience</a>
            <a href="#contact" className="hidden sm:block text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 pt-12 pb-12 md:pt-16 md:pb-20">
        <main className="space-y-24">

          <section id="intro">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 md:gap-12 mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="shrink-0 relative"
              >
                <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-tr from-violet-600 via-primary to-cyan-600 shadow-xl">
                  <div className="w-full h-full bg-background rounded-full overflow-hidden border-4 border-background">
                    <img
                      src={profileImage}
                      alt="Dheerendra Kumar"
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-600/40 to-cyan-600/40 blur-3xl -z-10" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1 text-center sm:text-left"
              >
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
                  Dheerendra Kumar
                </h1>
                <p className="text-xl md:text-2xl text-primary mb-6 font-medium">
                  Software Engineer
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto sm:mx-0">
                  Software Engineer with a strong foundation in building exceptional user interfaces. While my core expertise lies in the frontend (React.js, Tailwind), I have proven experience developing robust backend systems (Node.js, Express, MongoDB). I am passionate about owning the entire product lifecycle—from scalable APIs to pixel-perfect UIs.
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm font-medium text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Based in India
                  </span>
                  <span>&middot;</span>
                  <a href="/dheerendra_kumar_resume.pdf" target="_blank" className="flex items-center gap-1 text-foreground hover:text-primary transition-colors bg-secondary/50 hover:bg-secondary px-4 py-2 rounded-full border border-border/50">
                    Résumé <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          <section id="work">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading id="work-heading">Work</SectionHeading>
              <div className="space-y-12">
                {projects.map((project, idx) => (
                  <div key={idx} className="group relative">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
                      <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm font-medium">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Live <ArrowUpRight className="w-3 h-3" />
                        </a>
                        <a
                          href={project.frontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Frontend Code <ArrowUpRight className="w-3 h-3" />
                        </a>
                        <a
                          href={project.backend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Backend Code <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {project.desc}
                    </p>
                    <p className="text-xs font-mono text-muted-foreground/80">
                      {project.stack}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          <section id="experience">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading id="experience-heading">Experience</SectionHeading>
              <div className="space-y-12">
                {experiences.map((exp, idx) => (
                  <div key={idx}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
                      <h3 className="text-lg font-medium text-foreground">
                        {exp.role} <span className="text-muted-foreground">at {exp.company}</span>
                      </h3>
                      <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                        {exp.date}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          <section id="stack">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading id="stack-heading">Skills</SectionHeading>
              <div className="space-y-8">
                {skills.map((skill, idx) => (
                  <div key={idx}>
                    <h3 className="text-base font-medium text-foreground mb-4">
                      {skill.category}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3">
                      {skill.tech.map((t, i) => (
                        <div key={i} className="flex items-center justify-center gap-2 px-3 py-1.5 bg-secondary/30 rounded-md border border-border/50 text-sm font-medium text-secondary-foreground hover:bg-secondary/70 transition-colors">
                          <t.icon className="w-4 h-4 shrink-0" color={t.color} />
                          <span className="flex items-center leading-none mt-[1px]">{t.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          <section id="education">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading id="education-heading">Education</SectionHeading>
              <div>
                <h3 className="text-base font-medium text-foreground mb-1">
                  Bachelor’s in Computer Science
                </h3>
                <p className="text-muted-foreground text-sm">
                  RRSIMT, Amethi, Uttar Pradesh
                </p>
              </div>
            </motion.div>
          </section>

          <section id="contact">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading id="contact-heading">Contact</SectionHeading>
              <p className="text-muted-foreground text-sm mb-6">
                Feel free to reach out to me via email or use the contact form below.
              </p>

              <form className="mb-12 space-y-4 max-w-md" onSubmit={handleContactSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <input id="name" name="name" type="text" required className="w-full px-3 py-2 bg-transparent border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input id="email" name="email" type="email" required className="w-full px-3 py-2 bg-transparent border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                  <input id="subject" name="subject" type="text" required placeholder="e.g. Job Opportunity, Project Inquiry" className="w-full px-3 py-2 bg-transparent border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <textarea id="message" name="message" rows={4} required className="w-full px-3 py-2 bg-transparent border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none" />
                </div>
                <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors w-full sm:w-auto">
                  Send message
                </button>
              </form>

              <div className="flex items-center gap-6">
                <a href="https://github.com/itsdheerendrakumar" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium">
                  GitHub <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com/in/itsdheerendrakumar" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium">
                  LinkedIn <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </section>

        </main>

        <footer className="mt-24 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Dheerendra Kumar</p>
          <a href="#" className="hover:text-foreground transition-colors flex items-center gap-1">
            Back to top <ArrowUpRight className="w-3 h-3 rotate-[-45deg]" />
          </a>
        </footer>

      </div>
    </div>
  );
}
