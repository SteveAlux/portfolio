import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, Mail, Phone, MapPin, Github, Linkedin, FileDown,
  Cpu, Database, CloudSun, Shield, Wrench, Languages, Award, Network, GitBranch
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// ---- Helper Components ----
const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6"
    >
      {title}
    </motion.h2>
    {children}
  </section>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium bg-neutral-900/60 border-neutral-800 text-neutral-200">
    {children}
  </span>
);

// ---- Data ----
const CONTACT = {
  name: "Steve Velasco",
  title: "Talent Acquisition & Technology Support Specialist",
  location: "Milwaukee, WI",
  email: "Steve16velasco@gmail.com",
  phone: "(414) 534-4061",
  links: {
    github: "#", // add your GitHub URL
    linkedin: "#", // add your LinkedIn URL
    resume: "#", // add your hosted PDF resume URL
  },
};

const SKILLS = [
  {
    group: "Programming & Scripting",
    items: ["Python", "SQL", "Bash", "C++", "JavaScript", "HTML5", "CSS", "React"],
    icon: <Cpu className="w-4 h-4" />,
  },
  {
    group: "Data & Visualization",
    items: ["Pandas", "Matplotlib", "Excel", "Power BI", "Smartsheet"],
    icon: <Database className="w-4 h-4" />,
  },
  {
    group: "Systems, Networking & Tools",
    items: ["Linux", "DHCP/DNS", "System Monitoring", "Troubleshooting", "Git", "IIS"],
    icon: <Wrench className="w-4 h-4" />,
  },
  {
    group: "Recruiting Tech",
    items: ["ATS: iCIMS, Taleo, Bullhorn", "LinkedIn Recruiter", "CRM"],
    icon: <Briefcase className="w-4 h-4" />,
  },
  {
    group: "IoT & Embedded",
    items: ["ESP32", "Arduino Mega 2560", "Circuit Prototyping", "Sensors", "LCD"],
    icon: <GitBranch className="w-4 h-4" />,
  },
  {
    group: "Languages",
    items: ["English", "Spanish (Fluent)"],
    icon: <Languages className="w-4 h-4" />,
  },
];

const EXPERIENCE = [
  {
    role: "Police Officer",
    company: "West Allis & Madison Police Departments, WI",
    dates: "2023 – May 2025",
    bullets: [
      "Led investigations and managed high-pressure incidents with process rigor and documentation discipline.",
      "Applied structured communication and problem-solving skills transferable to HR/IT operations.",
    ],
  },
  {
    role: "Talent Operations Coordinator",
    company: "ManpowerGroup, Milwaukee, WI",
    dates: "Jul 2024 – Jan 2025",
    bullets: [
      "Supported enterprise recruiting applications; partnered with engineering to triage/resolve platform issues.",
      "Authored user documentation and guided internal users on tools and workflows.",
      "Led a coordinator team to hit talent goals; built ATS-driven reports to illuminate trends.",
    ],
  },
  {
    role: "Public Safety Officer",
    company: "Advocate Aurora Health, West Allis, WI",
    dates: "Apr 2024 – Jul 2024",
    bullets: [
      "Worked cross-functionally with emergency services and internal departments to support procedures and reporting.",
    ],
  },
  {
    role: "Talent Acquisition Coordinator",
    company: "ManpowerGroupUS, Milwaukee, WI",
    dates: "Mar 2020 – Apr 2022",
    bullets: [
      "Owned scheduling and candidate experience; managed full-cycle coordination for technical/admin roles.",
      "Built hiring dashboards and recruitment metric reports; trained new coordinators on ATS workflows.",
    ],
  },
  {
    role: "Associate Recruiter",
    company: "ManpowerGroup, Milwaukee, WI",
    dates: "Jul 2017 – Mar 2020",
    bullets: [
      "Sourced talent via job boards, databases, and social media; conducted technical screenings.",
      "Maintained accurate ATS records and KPIs to improve pipeline health.",
    ],
  },
];

const PROJECTS = [
  {
    title: "SMART Traffic Light — IoT & Embedded Systems",
    icon: <CloudSun className="w-4 h-4" />,
    tags: ["Arduino IDE", "ESP32", "Arduino Mega 2560", "LEDs", "LCD", "Sensors", "Web Control"],
    summary: [
      "Engineered a network-enabled two-way traffic system with crosswalk controls and emergency override.",
      "Programmed embedded software to control sequences, detect inputs, and trigger remote emergency mode.",
      "Integrated ultrasonic sensors, active buzzers, LCD displays, and push buttons; applied IoT networking for monitoring.",
    ],
  },
  {
    title: "Linux & Operating Systems Administration — Final Project",
    icon: <Shield className="w-4 h-4" />,
    tags: ["Linux", "Bash", "Filesystem", "User/Group Mgmt", "DHCP/DNS", "Performance Monitoring"],
    summary: [
      "Administered Linux environments: filesystem navigation, file management, absolute/relative pathing.",
      "Developed Bash scripts, configured permissions, and persisted PATH for automation.",
      "Configured network interfaces and executed troubleshooting; monitored CPU/memory, users, and bandwidth.",
    ],
  },
  {
    title: "Weather Data Analytics — Python & SQL",
    icon: <Database className="w-4 h-4" />,
    tags: ["Python", "Pandas", "Matplotlib", "SQLite", "ETL", "CSV/Excel"],
    summary: [
      "Built Python ETL to ingest, cleanse, and transform weather data into structured DB records.",
      "Authored SQL queries for temperature/humidity analysis; exported results to CSV/Excel.",
      "Produced visualizations and short-range predictions using historical datasets.",
    ],
  },
];

const CERTS = [
  "Google: Operating Systems and You — Oct 2024",
  "Google: The Bits and Bytes of Computer Networking — Oct 2024",
  "Google: Technical Support Fundamentals — Oct 2024",
  "CompTIA Security+ — In Progress",
  "Real Estate License — Jan 2022 – Apr 2022",
];

// ---- Page ----
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Top Nav */}
      <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-900">
        <nav className="max-w-6xl mx-auto flex items-center gap-3 px-4 sm:px-6 lg:px-8 h-14 text-sm">
          <span className="font-semibold tracking-tight">Steve Velasco</span>
          <div className="ml-auto hidden sm:flex items-center gap-3">
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#skills" className="hover:opacity-80">Skills</a>
            <a href="#experience" className="hover:opacity-80">Experience</a>
            <a href="#projects" className="hover:opacity-80">Projects</a>
            <a href="#certs" className="hover:opacity-80">Certs</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </div>
        </nav>
      </div>

      {/* Hero */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-5 gap-8 items-center"
        >
          <div className="md:col-span-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              {CONTACT.name}
            </h1>
            <p className="mt-3 text-lg text-neutral-300">
              {CONTACT.title}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-neutral-300">
              <Pill><MapPin className="w-3.5 h-3.5 mr-2"/>{CONTACT.location}</Pill>
              <Pill><Mail className="w-3.5 h-3.5 mr-2"/>{CONTACT.email}</Pill>
              <Pill><Phone className="w-3.5 h-3.5 mr-2"/>{CONTACT.phone}</Pill>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-2xl">
                <a href={CONTACT.links.resume} target="_blank" rel="noreferrer">
                  <FileDown className="w-4 h-4 mr-2"/> Download Resume
                </a>
              </Button>
              <Button variant="secondary" asChild className="rounded-2xl">
                <a href={CONTACT.links.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="w-4 h-4 mr-2"/> LinkedIn
                </a>
              </Button>
              <Button variant="secondary" asChild className="rounded-2xl">
                <a href={CONTACT.links.github} target="_blank" rel="noreferrer">
                  <Github className="w-4 h-4 mr-2"/> GitHub
                </a>
              </Button>
            </div>
          </div>

          <Card className="md:col-span-2 bg-gradient-to-br from-neutral-900 to-neutral-950 border-neutral-800 rounded-2xl">
            <CardContent className="p-6">
              <p className="text-sm leading-relaxed text-neutral-300">
                Talent professional turned tech builder. I blend **recruiting systems** expertise with
                **IT support** and **hands-on programming**, creating efficient workflows and data-driven
                insights. Open to roles across Talent Ops, IT Support, and entry-level Software/Data.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge className="bg-neutral-800 border-neutral-700">ATS</Badge>
                <Badge className="bg-neutral-800 border-neutral-700">Linux</Badge>
                <Badge className="bg-neutral-800 border-neutral-700">Python</Badge>
                <Badge className="bg-neutral-800 border-neutral-700">SQL</Badge>
                <Badge className="bg-neutral-800 border-neutral-700">IoT</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </header>

      {/* About */}
      <Section id="about" title="About">
        <div className="grid lg:grid-cols-3 gap-6 text-neutral-300">
          <div className="lg:col-span-2 space-y-4">
            <p>
              Talent Acquisition and Technology Support Specialist with 7+ years in recruiting,
              candidate operations, and IT systems support. Proven success improving ATS workflows,
              building analytics, and troubleshooting platforms. Strong foundation in Information
              Technology & Networking, bilingual in English and Spanish.
            </p>
            <p>
              I enjoy building practical tools—scripts, dashboards, and small apps—that reduce manual work
              and surface insights. Recent work includes Linux administration labs, Python data analytics,
              and an IoT traffic system using Arduino/ESP32.
            </p>
          </div>
          <Card className="bg-neutral-900/60 border-neutral-800 rounded-2xl">
            <CardContent className="p-5 space-y-3">
              <div className="text-sm text-neutral-400">Open to</div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Talent Operations / People Tech",
                  "IT Support / Help Desk",
                  "Systems / Network Admin (Junior)",
                  "Data / Analytics (Junior)",
                ].map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Technical Skills">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map(({ group, items, icon }) => (
            <Card key={group} className="bg-neutral-900/60 border-neutral-800 rounded-2xl">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="opacity-80">{icon}</div>
                  <h3 className="font-medium">{group}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <Badge key={s} className="bg-neutral-800 border-neutral-700">{s}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Professional Experience">
        <div className="grid gap-6">
          {EXPERIENCE.map((job, idx) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-neutral-900/60 border-neutral-800 rounded-2xl">
                <CardContent className="p-5">
                  <div className="flex flex-wrap items-end justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-medium">{job.role}</h3>
                      <div className="text-neutral-400">{job.company}</div>
                    </div>
                    <div className="text-sm text-neutral-400">{job.dates}</div>
                  </div>
                  <ul className="mt-3 space-y-2 text-neutral-300 text-sm list-disc list-inside">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects & Technical Experience">
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <Card key={p.title} className="bg-neutral-900/60 border-neutral-800 rounded-2xl">
              <CardContent className="p-5">
                <div className="flex items-center gap-2">
                  <div className="opacity-80">{p.icon}</div>
                  <h3 className="font-medium">{p.title}</h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} className="bg-neutral-800 border-neutral-700">{t}</Badge>
                  ))}
                </div>
                <ul className="mt-4 space-y-2 text-neutral-300 text-sm list-disc list-inside">
                  {p.summary.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section id="certs" title="Certifications">
        <Card className="bg-neutral-900/60 border-neutral-800 rounded-2xl">
          <CardContent className="p-5">
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-neutral-300">
              {CERTS.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <Award className="w-4 h-4 opacity-70"/>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <Card className="bg-neutral-900/60 border-neutral-800 rounded-2xl">
          <CardContent className="p-5 text-neutral-300 text-sm">
            <div className="font-medium">Associate of Applied Science, Information Technology & Networking</div>
            <div className="text-neutral-400">DeVry University, Naperville, IL — Jul 2022 – Jul 2024</div>
          </CardContent>
        </Card>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <Card className="bg-neutral-900/60 border-neutral-800 rounded-2xl">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="text-sm text-neutral-400">Let’s connect</div>
                <h3 className="text-xl font-medium">Open to roles & collaboration</h3>
                <p className="text-neutral-300 text-sm">
                  Feel free to reach out for opportunities in Talent Operations, IT Support, or
                  junior Software/Data roles. I’m happy to share more project code and walk
                  through my approach.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button asChild className="rounded-2xl">
                    <a href={`mailto:${CONTACT.email}`}><Mail className="w-4 h-4 mr-2"/> Email</a>
                  </Button>
                  <Button variant="secondary" asChild className="rounded-2xl">
                    <a href={CONTACT.links.linkedin} target="_blank" rel="noreferrer"><Linkedin className="w-4 h-4 mr-2"/> LinkedIn</a>
                  </Button>
                  <Button variant="secondary" asChild className="rounded-2xl">
                    <a href={CONTACT.links.github} target="_blank" rel="noreferrer"><Github className="w-4 h-4 mr-2"/> GitHub</a>
                  </Button>
                </div>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <div className="text-sm text-neutral-400 mb-2">Quick facts</div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="space-y-1">
                    <div className="text-neutral-400">Location</div>
                    <div>{CONTACT.location}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-neutral-400">Bilingual</div>
                    <div>English & Spanish</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-neutral-400">Areas</div>
                    <div>Talent Ops, IT Support, Data</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-neutral-400">Education</div>
                    <div>A.A.S. IT & Networking</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      <footer className="border-t border-neutral-900 py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} {CONTACT.name}. Built with React, Tailwind, and shadcn/ui.
      </footer>
    </div>
  );
}
