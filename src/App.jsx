import React from "react";
import { motion } from "framer-motion";

export default function App() {
  const projects = [
    {
      title: "LWC Sales Dashboard",
      desc: "Lightning Web Component for sales dashboard with Apex data service",
      link: "#",
    },
    {
      title: "Opportunity Automation Triggers",
      desc: "Efficient Apex trigger framework with handler classes and bulk-safe logic",
      link: "#",
    },
  ];

  const certifications = ["Salesforce CPQ Specialist", "Platform Developer I"];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HEADER */}
      <header className="border-b">
        <div className="mx-auto container-max px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
              SM
            </div>
            <div>
              <div className="text-lg font-semibold">Suraj Mahale</div>
              <div className="text-sm text-gray-600">Salesforce Developer</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-gray-700">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact" className="text-primary font-medium">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="py-16">
        <div className="mx-auto container-max px-6 flex flex-col md:flex-row items-center gap-10">
          {/* LEFT SIDE TEXT */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <h1 className="text-4xl font-bold">Suraj Mahale</h1>
            <p className="mt-3 text-gray-700 max-w-xl">
              Salesforce Developer with 3 years of experience building Apex
              classes, Lightning Web Components, and scalable automation.
              Passionate about clean code, maintainable architecture, and
              delivering business value.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="/resume.pdf"
                download
                className="px-4 py-2 border rounded-md text-sm"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-4 py-2 bg-primary text-white rounded-md text-sm"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE PHOTO */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="w-44 h-44 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="/images/profile.jpg"
              alt="Suraj Mahale"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-12 bg-gray-50">
        <div className="mx-auto container-max px-6">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 max-w-3xl">
            I'm a Salesforce Developer specializing in Apex, LWC, Flows, and
            Integrations. Experienced in building scalable business automation,
            reusable components, and high-quality backend logic with test
            coverage. I enjoy solving real-world business problems with smart,
            stable, and optimized Salesforce solutions.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-12">
        <div className="mx-auto container-max px-6">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Apex",
              "Lightning Web Components",
              "REST Integrations",
              "SOQL / SOSL",
              "Apex Triggers",
              "Test Classes",
              "Git / GitHub",
              "CI/CD",
            ].map((skill) => (
              <div
                key={skill}
                className="p-4 border rounded-md text-sm text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-12 bg-gray-50">
        <div className="mx-auto container-max px-6">
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>

          <div className="space-y-4">
            {/* JOB 1 */}
            <div className="p-4 border rounded-md">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium">
                    Salesforce Developer — Acme Corp
                  </div>
                  <div className="text-sm text-gray-600">
                    Jul 2023 — Present
                  </div>
                </div>
                <div className="text-sm text-gray-600">Pune, India</div>
              </div>

              <ul className="mt-2 text-sm text-gray-700 list-disc ml-5">
                <li>
                  Built optimized LWC components for Sales and Service teams.
                </li>
                <li>
                  Designed Apex trigger frameworks with bulk-safe patterns and
                  reusable methods.
                </li>
                <li>Created integrations using REST APIs and Named Credentials.</li>
              </ul>
            </div>

            {/* JOB 2 */}
            <div className="p-4 border rounded-md">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium">
                    Junior Salesforce Developer — XYZ Solutions
                  </div>
                  <div className="text-sm text-gray-600">
                    Aug 2022 — Jun 2023
                  </div>
                </div>
                <div className="text-sm text-gray-600">Remote</div>
              </div>

              <ul className="mt-2 text-sm text-gray-700 list-disc ml-5">
                <li>
                  Migrated complex automations from Process Builder to Flows.
                </li>
                <li>
                  Developed Apex classes for backend logic and data processing.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="py-12">
        <div className="mx-auto container-max px-6">
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>

          <div className="flex gap-4 flex-wrap">
            {certifications.map((c) => (
              <div key={c} className="px-3 py-2 border rounded-md text-sm">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-12 bg-gray-50">
        <div className="mx-auto container-max px-6">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <motion.a
                key={p.title}
                whileHover={{ y: -4 }}
                className="p-4 border rounded-md block"
                href={p.link}
              >
                <div className="font-medium">{p.title}</div>
                <div className="text-sm text-gray-700 mt-2">{p.desc}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="py-12">
        <div className="mx-auto container-max px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* LEFT */}
            <div>
              <h3 className="text-xl font-semibold">Get in touch</h3>
              <p className="text-gray-700 mt-2">
                Email:{" "}
                <a href="mailto:suraj@example.com" className="text-primary">
                  suraj@example.com
                </a>
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact</h3>

              <form
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
                className="space-y-3"
              >
                <div>
                  <label className="block text-sm">Name</label>
                  <input
                    name="name"
                    required
                    className="w-full border px-3 py-2 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full border px-3 py-2 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm">Message</label>
                  <textarea
                    name="message"
                    required
                    className="w-full border px-3 py-2 rounded-md"
                    rows="4"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-md"
                >
                  Send
                </button>
              </form>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Suraj Mahale — Salesforce Developer
          </div>
        </div>
      </footer>
    </div>
  );
}