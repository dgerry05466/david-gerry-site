const results = [
  'Carnegie Mellon (Full Scholarship)',
  'USC',
  'UT Austin',
  'UC San Diego',
  'Harvard',
  'Yale',
  'Johns Hopkins',
  'Northwestern',
  'Cornell',
  'UChicago',
  'Washington University in St. Louis',
];

export default function Page() {
  return (
    <main>
      <section className="hero section">
        <div className="container hero-grid">
          <div>
            <p className="kicker">College Admissions Strategy</p>
            <h1>Standout admissions guidance with David Gerry</h1>
            <p className="lead">
              David Gerry is a college admissions strategist who has helped students gain acceptance to top universities through stronger essays, sharper positioning, and meaningful extracurricular development.
            </p>
            <div className="actions">
              <a
                className="button"
                href="https://calendly.com/ivyathome/new-meeting"
                target="_blank"
                rel="noreferrer"
              >
                Schedule a Consultation
              </a>
              <a className="button-secondary" href="#services">
                Explore Services
              </a>
            </div>
          </div>

          <div className="headshot-card">
            <img className="headshot" src="/headshot.jpg" alt="David Gerry headshot" />
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container two-col">
          <div>
            <p className="kicker">About David</p>
            <h2>A personalized process built for highly competitive admissions</h2>
          </div>
          <div>
            <p className="copy">
              David’s approach goes far beyond editing essays. He helps students uncover the strongest parts of their story through deep self-reflection, then builds a compelling and strategically coherent application around those strengths. Every step is guided by how admissions officers actually evaluate candidates.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="section section-muted">
        <div className="container">
          <div style={{ maxWidth: 720 }}>
            <p className="kicker">Services</p>
            <h2>Comprehensive support across every part of the application</h2>
          </div>

          <div className="services-grid">
            <div className="card">
              <h3>Essay Strategy</h3>
              <p>
                From ideation to final polish, essays go through a rigorous multi-reader system designed to strengthen authenticity, structure, and admissions impact.
              </p>
            </div>
            <div className="card">
              <h3>Passion Projects</h3>
              <p>
                David helps students create meaningful projects that stand out, including international education initiatives, social impact organizations, research-driven programs, and startup ideas.
              </p>
            </div>
            <div className="card">
              <h3>Application Positioning</h3>
              <p>
                Strategic guidance on major selection, school fit, application themes, timelines, and activity positioning so every part of the application works together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container project-grid">
          <div className="card">
            <p className="kicker">Examples of project support</p>
            <ul className="list">
              <li>India–Korea pen pal and creative writing initiatives</li>
              <li>Social impact projects for blind and visually impaired communities</li>
              <li>Research-backed academic or entrepreneurial initiatives</li>
              <li>Strategic repositioning of existing activities into stronger narratives</li>
            </ul>
          </div>
          <div className="card dark-card">
            <p className="kicker">Why families choose David</p>
            <p className="copy" style={{ color: '#f8fafc' }}>
              Students receive individualized attention, honest strategic feedback, and a process that balances narrative depth with practical admissions results.
            </p>
            <div className="actions">
              <a className="button-secondary" href="mailto:davidgerry7017@gmail.com">
                Email David
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="section section-accent">
        <div className="container">
          <div style={{ maxWidth: 720 }}>
            <p className="kicker" style={{ color: '#b45309' }}>Results</p>
            <h2>Selected admissions outcomes</h2>
          </div>

          <div className="results-grid">
            {results.map((result) => (
              <div key={result} className="result-item">
                {result}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="brand">David Gerry</div>
            <div className="subtle">Personalized admissions strategy for ambitious students</div>
          </div>
          <a href="mailto:davidgerry7017@gmail.com">davidgerry7017@gmail.com</a>
        </div>
      </footer>
    </main>
  );
}
