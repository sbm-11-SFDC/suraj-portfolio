import React from "react";

export default function App() {
  const projects = [
    {
      title: "LWC Sales Dashboard",
      desc: "Lightning Web Component for sales dashboard with Apex data service",
      link: "#",
    },
    {
      title: "Opportunity Automation Triggers",
      desc: "Efficient Apex trigger framework with bulk-safe patterns",
      link: "#",
    },
  ];

  const certifications = ["Salesforce CPQ Specialist", "Platform Developer I"];

  return (
    <div>
      {/* Header */}
      <header>
        <div className="container header-inner">
          <div className="brand">
            <div className="avatar">SM</div>
            <div>
              <div style={{ fontWeight: 700 }}>Suraj Mahale</div>
              <div style={{ color: "#6b7280", fontSize: 13 }}>Salesforce Developer</div>
            </div>
          </div>

          <nav className="nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a className="contact" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="hero">
        <div className="container hero-grid">
          <div className="hero-left">
            <h1>Suraj Mahale</h1>
            <p className="lead">
              Salesforce Developer with 3 years of experience building Apex classes,
              Lightning Web Components, and scalable automation. Passionate about clean
              code, test coverage, and delivering business value.
            </p>

            <div className="actions">
              <a className="btn btn-outline" href="Suraj_Mahale_Resume.pdf" download="Suraj_Mahale_Resume.pdf">
              Download Resume
              </a>

              <a className="btn btn-primary" href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-right" aria-hidden="true">
          <img
            src="images/profile.jpg"
            alt="Suraj Mahale"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p style={{ color: "#374151", maxWidth: 900 }}>
            I'm a Salesforce Developer specializing in Apex, LWC, Flows, and Integrations.
            Experienced in building scalable business automation, reusable components,
            and high-quality backend logic with test coverage. I enjoy solving real-world
            business problems with smart, stable, and optimized Salesforce solutions.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div className="container">
          <h3 className="section-title">Skills</h3>
          <div className="skills-grid" role="list">
            {[
              "Apex",
              "Lightning Web Components",
              "REST Integrations",
              "SOQL / SOSL",
              "Apex Triggers",
              "Test Classes",
              "Git / GitHub",
              "CI/CD",
            ].map((s) => (
              <div key={s} className="skill" role="listitem">
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience">
        <div className="container">
          <h3 className="section-title">Experience</h3>

          <div className="exp-item">
            <div className="exp-meta">
              <div style={{ fontWeight: 700 }}>Salesforce Developer — Acme Corp</div>
              <div>Jul 2023 — Present · Pune, India</div>
            </div>
            <ul>
              <li>Built LWC components for Sales and Service pages.</li>
              <li>Designed bulk-safe Apex trigger framework and handler classes.</li>
              <li>Integrated external systems using REST APIs and Named Credentials.</li>
            </ul>
          </div>

          <div className="exp-item">
            <div className="exp-meta">
              <div style={{ fontWeight: 700 }}>Junior Salesforce Developer — XYZ Solutions</div>
              <div>Aug 2022 — Jun 2023 · Remote</div>
            </div>
            <ul>
              <li>Migrated automations from Process Builder to Flows.</li>
              <li>Created Apex classes for backend processing and test coverage.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications">
        <div className="container">
          <h3 className="section-title">Certifications</h3>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {certifications.map((c) => (
              <div key={c} className="project-card" style={{ padding: 10 }}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="container">
          <h3 className="section-title">Projects</h3>
          <div className="projects-grid">
            {projects.map((p) => (
              <a key={p.title} className="project-card" href={p.link}>
                <div style={{ fontWeight: 700, marginBottom: 8 }}>{p.title}</div>
                <div style={{ color: "#374151" }}>{p.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact">
        <div className="container">
          <h3 className="section-title">Get in touch</h3>

          <div className="contact-grid">
            <div>
              <p style={{ marginBottom: 8 }}>
                Email:{" "}
                <a href="mailto:suraj@example.com" style={{ color: "#0a4d8c" }}>
                  suraj@example.com
                </a>
              </p>

              <p>
                <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                  GitHub
                </a>{" "}
                ·{" "}
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </p>
            </div>

            <div>
              <form
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
                className="card"
              >
                <label htmlFor="name">Name</label>
                <input id="name" name="name" required />

                <label htmlFor="email" style={{ marginTop: 8 }}>Email</label>
                <input id="email" name="email" type="email" required />

                <label htmlFor="message" style={{ marginTop: 8 }}>Message</label>
                <textarea id="message" name="message" rows={4} required />

                <div style={{ marginTop: 10 }}>
                  <button type="submit" className="btn btn-primary">Send</button>
                </div>
              </form>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 20, color: "#6b7280" }}>
            © {new Date().getFullYear()} Suraj Mahale — Salesforce Developer
          </div>
        </div>
      </footer>
    </div>
  );
}