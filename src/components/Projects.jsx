import { useState } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    id: "01",
    name: "Heavy Lift",
    category: "FINAL YEAR PROJECT",
    subtitle: "Heavy Machinery Rental Marketplace",
    image: "heavylift.jpg",
    liveUrl: null,
    demoUrl: "https://youtu.be/sUr0JfbrmU8",
    description:
      "A database-driven marketplace designed to connect heavy machinery owners with customers through a centralized rental platform.",
    technologies: ["Oracle APEX", "SQL", "PL/SQL"],
    features: [
      "User authentication and registration",
      "Role-based access control",
      "Machinery listing and rental management",
      "Booking management",
      "Database design and business logic",
    ],
  },
  {
    id: "02",
    name: "Estate CRM",
    category: "FULL STACK WEB APPLICATION",
    subtitle: "Real Estate Management System",
    image: "estate.png",
    liveUrl: "https://final-project-estate-crm.vercel.app/",
    description:
      "A real estate management application designed to simplify property management, user interactions and administrative workflows.",
    technologies: ["React", "JavaScript", "Firebase"],
    features: [
      "Responsive user interfaces",
      "User authentication",
      "Role-based dashboards",
      "Property management",
      "Applicant management",
    ],
  },
  {
    id: "03",
    name: "PickBazar",
    category: "E-COMMERCE APPLICATION",
    subtitle: "Online Shopping Experience",
    image: "pickbazar.jpg",
    liveUrl: "https://pickbazar-app-using-react.vercel.app/",
    description:
      "A modern e-commerce application focused on intuitive product discovery, responsive design and a seamless shopping experience.",
    technologies: ["React", "Redux Toolkit", "Firebase"],
    features: [
      "Product catalogue and categories",
      "Dynamic shopping cart",
      "State management",
      "API integration",
      "Responsive web design",
    ],
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="mt-16">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => {
          const isOpen = expanded === project.id;

          const projectUrl =
            project.demoUrl || project.liveUrl;

          const buttonLabel = project.demoUrl
            ? "Watch Demo"
            : "Visit Live Website";

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="group"
            >

              {/* Project Image */}

              <div className="relative border border-[#b89582]/50 p-2">

                <div className="relative aspect-[16/11] overflow-hidden bg-[#291217]">

                  <img
                    src={`${import.meta.env.BASE_URL}${project.image}`}
                    alt={`${project.name} project preview`}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Project Number */}

                  <div className="absolute top-3 left-3 bg-[#f4eadd] text-[#48101b] px-3 py-2 text-xs">
                    {project.id}
                  </div>

                  {/* Demo Video Label */}

                  {project.demoUrl && (
                    <div className="absolute top-3 right-3 bg-[#48101b]/90 text-[#f4eadd] px-3 py-2 font-label text-[9px] uppercase tracking-widest">
                      Video Demo
                    </div>
                  )}

                  {/* Website or Video Button */}

                  {projectUrl ? (
                    <a
                      href={projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`${buttonLabel} - ${project.name}`}
                      aria-label={`${buttonLabel} - ${project.name}`}
                      className="absolute bottom-3 right-3 rounded-full w-10 h-10 flex items-center justify-center bg-[#f4eadd] text-[#48101b] hover:bg-white hover:scale-110 transition-all duration-300"
                    >
                      <ArrowUpRight size={19} />
                    </a>
                  ) : (
                    <button
                      type="button"
                      title="View project details"
                      aria-label={`Explore ${project.name}`}
                      aria-expanded={isOpen}
                      onClick={() =>
                        setExpanded(isOpen ? null : project.id)
                      }
                      className="absolute bottom-3 right-3 rounded-full w-10 h-10 flex items-center justify-center bg-[#f4eadd] text-[#48101b] hover:bg-white hover:scale-110 transition-all duration-300"
                    >
                      <ArrowUpRight size={19} />
                    </button>
                  )}

                </div>

              </div>

              {/* Project Information */}

              <div className="pt-6">

                <p className="font-label text-[10px] tracking-[0.2em] text-[#d1ad98]">
                  {project.category}
                </p>

                <h3 className="font-editorial text-4xl text-[#f4eadd] mt-3">
                  {project.name}
                </h3>

                <p className="text-sm text-[#d1ad98] mt-2">
                  {project.subtitle}
                </p>

                <p className="text-sm text-[#e5cfc0] leading-relaxed mt-5">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="border border-[#d1ad98]/40 px-3 py-2 text-[10px] text-[#f4eadd]"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Explore Project Button */}

                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setExpanded(isOpen ? null : project.id)
                  }
                  className="w-full flex justify-between items-center border-t border-[#d1ad98]/40 mt-7 pt-5 text-[#f4eadd] hover:text-[#d1ad98] transition-colors"
                >

                  <span className="font-label text-[10px] tracking-widest uppercase">
                    {isOpen
                      ? "Close Project Details"
                      : "Explore Project"}
                  </span>

                  <ArrowDown
                    size={17}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />

                </button>

                {/* Expandable Project Details */}

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-5 border border-[#d1ad98]/30 p-5"
                  >

                    <h4 className="font-editorial text-2xl text-[#f4eadd] mb-4">
                      Key Features
                    </h4>

                    <div className="space-y-3">

                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex gap-3 text-sm text-[#e5cfc0]"
                        >
                          <span>✧</span>
                          <span>{feature}</span>
                        </div>
                      ))}

                    </div>

                    {/* Demo Video Information */}

                    {project.demoUrl && (
                      <div className="mt-6 border-t border-[#d1ad98]/30 pt-5">

                        <h4 className="font-editorial text-2xl text-[#f4eadd] mb-3">
                          Project Demonstration
                        </h4>

                        <p className="text-sm text-[#e5cfc0] leading-relaxed">
                          Explore the original working application
                          through a recorded walkthrough showcasing
                          its interface, functionality and core
                          features.
                        </p>

                        <p className="text-xs text-[#d1ad98] mt-3">
                          Full project walkthrough · 11 min 55 sec
                        </p>

                      </div>
                    )}

                    {/* Watch Demo or Visit Website */}

                    {projectUrl && (
                      <a
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 mt-6 px-5 py-3 bg-[#f4eadd] text-[#48101b] font-label text-[10px] uppercase tracking-widest hover:bg-white transition-colors"
                      >
                        {buttonLabel}
                        <ArrowUpRight size={16} />
                      </a>
                    )}

                  </motion.div>
                )}

              </div>

            </motion.article>
          );
        })}

      </div>

      {/* Section Footer */}

      <div className="flex items-center gap-6 mt-20">

        <div className="flex-1 h-px bg-[#d1ad98]/40" />

        <p className="font-editorial italic text-xl text-[#d1ad98] text-center">
          Designed with intention. Developed with purpose.
        </p>

        <div className="flex-1 h-px bg-[#d1ad98]/40" />

      </div>

    </div>
  );
}