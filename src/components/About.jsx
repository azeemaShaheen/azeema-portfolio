import {
  Code2,
  Database,
  Server,
  GraduationCap,
  ArrowUpRight,
  Download,
} from "lucide-react";

import { motion } from "motion/react";

const skills = [
  {
    number: "01",
    icon: Code2,
    title: "Frontend Development",
    description:
      "Creating responsive, intuitive and visually engaging web interfaces.",
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux Toolkit",
    ],
  },
  {
    number: "02",
    icon: Database,
    title: "Backend & Databases",
    description:
      "Building structured, reliable and database-driven applications.",
    technologies: [
      "Oracle APEX",
      "SQL",
      "PL/SQL",
      "MySQL",
      "PHP",
      "Firebase",
    ],
  },
  {
    number: "03",
    icon: Server,
    title: "Tools & Deployment",
    description:
      "Exploring application deployment, server management and infrastructure.",
    technologies: [
      "Git",
      "GitHub",
      "Linux",
      "Apache",
      "Ansible",
      "Prometheus",
      "Grafana",
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#f4eadd] text-[#48101b] py-24 scroll-mt-20"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Section Heading */}

        <div className="flex items-center gap-6">

          <div className="flex-1 h-px bg-[#bb9380]/60" />

          <span className="font-label text-[10px] tracking-[0.3em] uppercase text-center">
            ✧ Behind the Code ✧
          </span>

          <div className="flex-1 h-px bg-[#bb9380]/60" />

        </div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-editorial text-5xl md:text-7xl text-center mt-8"
        >
          More than just{" "}
          <span className="italic text-[#a47562]">
            code.
          </span>
        </motion.h2>

        <p className="text-center text-[#805b50] text-sm mt-5 max-w-xl mx-auto leading-relaxed">
          A blend of technical curiosity, creative thinking
          and a passion for building meaningful digital experiences.
        </p>

        {/* Main Layout */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20">

          {/* About Me */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="font-label text-[10px] tracking-[0.25em] uppercase text-[#a47562]">
              01 / About Me
            </p>

            <h3 className="font-editorial text-4xl md:text-6xl leading-tight mt-6">
              A curious mind.
              <br />
              <span className="italic text-[#a47562]">
                A creative developer.
              </span>
            </h3>

            <div className="border-l border-[#bb9380] pl-6 mt-8 space-y-5 text-[#805b50] leading-loose text-sm md:text-base">

              <p>
                I'm Azeema Shaheen, a Computer Science
                graduate from COMSATS University Islamabad,
                Wah Campus, with a strong interest in
                frontend Development and
                database-driven applications.
              </p>

              <p>
                I enjoy transforming ideas into functional
                digital experiences by combining thoughtful
                design, clean code and practical
                problem-solving.
              </p>

              <p>
                My technical journey extends beyond web
                development into Linux, cloud infrastructure,
                server monitoring and automation. I believe
                that understanding how applications work
                behind the scenes makes me a better developer.
              </p>

              <p>
                I am continuously learning, experimenting
                and improving my skills to build solutions
                that are both functional and visually refined.
              </p>

            </div>

            {/* Education */}

            <div className="mt-10 border border-[#bb9380]/60 p-6 flex items-start gap-5">

              <div className="w-12 h-12 border border-[#bb9380]/60 flex items-center justify-center shrink-0">
                <GraduationCap size={24} />
              </div>

              <div>

                <p className="font-label text-[10px] uppercase tracking-widest text-[#a47562]">
                  Education
                </p>

                <h4 className="font-editorial text-2xl mt-2">
                  BS Computer Science
                </h4>

                <p className="text-sm text-[#805b50] mt-2">
                  COMSATS University Islamabad
                </p>

                <p className="text-xs text-[#a47562] mt-1">
                  Wah Campus · Data Science Track
                </p>

              </div>

            </div>

            {/* Resume Button */}

            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="#contact"
                className="bg-[#48101b] text-[#f4eadd] flex items-center gap-4 px-6 py-4 font-label uppercase text-[10px] tracking-widest hover:bg-[#682333] transition-colors"
              >
                Let's Connect
                <ArrowUpRight size={17} />
              </a>

            </div>

          </motion.div>

          {/* Technical Skills */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:border-l lg:border-[#bb9380]/50 lg:pl-14"
          >

            <p className="font-label text-[10px] tracking-[0.25em] uppercase text-[#a47562]">
              02 / My Toolkit
            </p>

            <h3 className="font-editorial text-4xl md:text-5xl mt-6">
              Skills & Expertise
            </h3>

            <p className="text-sm text-[#805b50] leading-relaxed mt-4">
              The technologies and tools I use to bring
              ideas to life.
            </p>

            <div className="mt-8">

              {skills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15,
                    }}
                    className="border-b border-[#bb9380]/60 py-7"
                  >

                    <div className="flex items-start gap-5">

                      <div className="w-12 h-12 border border-[#bb9380]/60 rounded-full flex items-center justify-center shrink-0">
                        <Icon size={21} strokeWidth={1.5} />
                      </div>

                      <div className="flex-1">

                        <div className="flex items-center justify-between gap-4">

                          <h4 className="font-editorial text-2xl md:text-3xl">
                            {skill.title}
                          </h4>

                          <span className="font-label text-xs text-[#a47562]">
                            {skill.number}
                          </span>

                        </div>

                        <p className="text-sm text-[#805b50] leading-relaxed mt-2">
                          {skill.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-4">

                          {skill.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-2 border border-[#bb9380]/60 text-[11px] hover:bg-[#48101b] hover:text-[#f4eadd] transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}

                        </div>

                      </div>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </motion.div>

        </div>

        {/* Section Footer */}

        <div className="flex items-center gap-6 mt-20">

          <div className="flex-1 h-px bg-[#bb9380]/60" />

          <p className="font-editorial italic text-xl md:text-2xl text-[#a47562] text-center">
            Always learning. Always creating.
          </p>

          <div className="flex-1 h-px bg-[#bb9380]/60" />

        </div>

      </div>
    </section>
  );
}