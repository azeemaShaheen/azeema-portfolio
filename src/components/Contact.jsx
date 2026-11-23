const contactLinks = [
  {
    id: "01",
    category: "Email",
    title: "Send a message",
    description: "Let's start a conversation.",
    href: "mailto:azeemashaheen136@gmail.com",
    external: false,
  },
  {
    id: "02",
    category: "Professional Network",
    title: "LinkedIn",
    description: "Connect with me professionally.",
    href: "https://www.linkedin.com/in/azeema-shaheen7",
    external: true,
  },
  {
    id: "03",
    category: "Code & Projects",
    title: "GitHub",
    description: "Explore my repositories and work.",
    href: "https://github.com/azeemaShaheen",
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#480f1b] text-[#f5ebdf] px-6 md:px-14 pt-20 pb-8 scroll-mt-20"
    >
      <div className="max-w-[1328px] mx-auto">

        {/* Section Heading */}

        <div className="flex items-center gap-6">

          <div className="flex-1 h-px bg-[#bb9380]/50" />

          <span className="font-label text-[10px] tracking-[0.3em] uppercase text-center">
            ✧ Get In Touch ✧
          </span>

          <div className="flex-1 h-px bg-[#bb9380]/50" />

        </div>

        {/* Main Contact Content */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 py-16 md:py-24 items-center">

          {/* Left Section */}

          <div>

            <p className="font-label text-[11px] uppercase tracking-[0.25em] text-[#d1ad98] mb-7">
              Have something in mind?
            </p>

            <h2 className="font-editorial text-5xl md:text-7xl lg:text-8xl leading-[1.05]">

              Let's create

              <br />

              something

              <br />

              <span className="italic text-[#c69c86]">
                meaningful.
              </span>

            </h2>

            <p className="text-[#e0c8ba] leading-[1.9] max-w-md mt-8 text-sm md:text-base">
              I'm open to new opportunities, exciting projects
              and collaborations. Whether you have a project
              in mind or simply want to connect, I'd love
              to hear from you.
            </p>

            <div className="flex items-center gap-3 mt-8">

              <span className="relative flex h-2 w-2">

                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d1ad98] opacity-75" />

                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d1ad98]" />

              </span>

              <span className="font-label text-[10px] tracking-widest uppercase">
                Available for opportunities
              </span>

            </div>

          </div>

          {/* Right Section - Contact Links */}

          <div className="md:pl-8">

            <p className="font-label text-[10px] tracking-[0.25em] text-[#d1ad98] uppercase mb-5">
              Find me online
            </p>

            {contactLinks.map((link, index) => (

              <a
                key={link.id}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`group flex items-center justify-between gap-5 border-t border-[#bb9380]/40 py-7 transition-colors duration-300 hover:bg-[#ffffff]/5 ${
                  index === contactLinks.length - 1
                    ? "border-b"
                    : ""
                }`}
              >

                <div>

                  <p className="font-label text-[10px] uppercase tracking-widest text-[#d1ad98]">
                    {link.id} / {link.category}
                  </p>

                  <h3 className="font-editorial text-3xl md:text-4xl mt-2 group-hover:text-[#d1ad98] transition-colors">
                    {link.title}
                  </h3>

                  <p className="text-sm text-[#d1ad98] mt-2">
                    {link.description}
                  </p>

                </div>

                <span
                  aria-hidden="true"
                  className="flex shrink-0 items-center justify-center w-12 h-12 rounded-full border border-[#bb9380]/50 text-2xl group-hover:bg-[#f5ebdf] group-hover:text-[#480f1b] group-hover:-translate-y-1 transition-all duration-300"
                >
                  ↗
                </span>

              </a>

            ))}

          </div>

        </div>

        {/* Decorative Divider */}

        <div className="flex items-center gap-6 mb-12">

          <div className="flex-1 h-px bg-[#bb9380]/40" />

          <span className="text-[#d1ad98] text-xl">
            ✧
          </span>

          <div className="flex-1 h-px bg-[#bb9380]/40" />

        </div>

        {/* Signature */}

        <div className="text-center pb-16">

          <p className="font-signature text-5xl md:text-7xl text-[#c69c86]">
            Azeema Shaheen
          </p>

          <p className="font-label text-[10px] uppercase tracking-[0.3em] mt-5 text-[#d1ad98]">
            Design · Code · Create
          </p>

          <p className="font-editorial italic text-xl text-[#d1ad98] mt-4">
            Good design. Clean code. Meaningful experiences.
          </p>

        </div>

        {/* Footer */}

        <footer className="border-t border-[#bb9380]/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <a
            href="#home"
            aria-label="Return to home"
            className="font-editorial text-4xl"
          >
            AS<span className="text-[#c69c86]">.</span>
          </a>

          <p className="text-xs text-[#d1ad98] text-center leading-relaxed">
            © {new Date().getFullYear()} Azeema Shaheen.
            <br />
            Designed & Developed with Purpose.
          </p>

          <a
            href="#home"
            className="font-label text-[10px] uppercase tracking-widest flex items-center gap-3 hover:text-[#d1ad98] transition-colors"
          >
            Back to top
            <span aria-hidden="true" className="text-lg">
              ↑
            </span>
          </a>

        </footer>

      </div>

    </section>
  );
}