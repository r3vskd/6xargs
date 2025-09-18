export default function HomePage() {
  return (
    <div>
      <div className="grid-background"></div>
      <div className="silhouettes-container"></div>

      <nav>
        <img src="/6xargs-logo-purple-tech.jpg" alt="6xargs Logo" className="logo" />
        <div className="menu-icon">
          <i className="fa fa-bars fa-2x"></i>
        </div>
        <ul className="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="https://www.discord.com/">Community</a>
          </li>
        </ul>
      </nav>

      <br />
      <br />

      <header>
        <div className="container">
          <h1 className="hero-title-hover" id="hero-title">
            White label AI layer
          </h1>

          <h2 className="hero-subtitle" id="hero-subtitle">
            Agentic-AI Powered Hacking. Faster Pentesting. Faster Triage times. Easier than ever. Protect the internet
            with us.
          </h2>

          <img src="/6xargs-logo-cybersecurity-ai-tech-purple.jpg" alt="6xargs Logo" className="hero-logo" />

          <div className="mental-map-container">
            {/* Card 1 - Top Left */}
            <div className="mental-map-card" data-position="top-left">
              <div className="card-title">Community Driven</div>
              <div className="card-content">Growing network of ethical hackers and security experts</div>
            </div>

            {/* Card 2 - Top Right */}
            <div className="mental-map-card" data-position="top-right">
              <div className="card-title">API</div>
              <div className="card-content">
                Connect your own platform with the world first Ethical Hacking Agentic AI
              </div>
            </div>

            {/* Card 3 - Center Left */}
            <div className="mental-map-card" data-position="center-left">
              <div className="card-title">HITL</div>
              <div className="card-content">Human In The Loop reduces response time by 50%</div>
            </div>

            {/* Card 4 - Center Right */}
            <div className="mental-map-card" data-position="center-right">
              <div className="card-title">AI-Powered Security</div>
              <div className="card-content">CAI WEB CLI - World First AI Powered Web Application Security Agent</div>
            </div>

            {/* Card 5 - Bottom Left */}
            <div className="mental-map-card" data-position="bottom-left">
              <div className="card-title">Enterprise Solutions</div>
              <div className="card-content">Scalable security solutions for organizations of all sizes</div>
            </div>

            {/* Card 6 - Bottom Right */}
            <div className="mental-map-card" data-position="bottom-right">
              <div className="card-title">Real-time Analysis</div>
              <div className="card-content">Instant vulnerability assessment and prioritization</div>
            </div>

            {/* Connection Lines */}
            <div className="mental-map-arrow" data-connect="top-left">
              <svg viewBox="0 0 120 80" style={{ transform: "rotate(30deg)", transformOrigin: "center" }}>
                <path
                  d="M 10 40 Q 50 20 90 25 Q 110 30 120 40"
                  stroke="#6450ff"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="8 4"
                />
              </svg>
            </div>

            <div className="mental-map-arrow" data-connect="top-right">
              <svg viewBox="0 0 120 80" style={{ transform: "rotate(118deg)", transformOrigin: "center" }}>
                <path
                  d="M 10 40 Q 50 20 90 25 Q 110 30 120 40"
                  stroke="#6450ff"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="8 4"
                />
              </svg>
            </div>

            <div className="mental-map-arrow" data-connect="center-left">
              <svg viewBox="0 0 100 60">
                <path
                  d="M 0 30 Q 30 30 60 30 Q 80 30 100 30"
                  stroke="#6450ff"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="8 4"
                />
              </svg>
            </div>

            <div className="mental-map-arrow" data-connect="center-right">
              <svg viewBox="0 0 120 80" style={{ transform: "rotate(-10deg)", transformOrigin: "center" }}>
                <path
                  d="M 10 40 Q 50 50 90 45 Q 110 40 120 30"
                  stroke="#6450ff"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="8 4"
                />
              </svg>
            </div>

            <div className="mental-map-arrow" data-connect="bottom-left">
              <svg viewBox="0 0 120 80" style={{ transform: "rotate(-20deg)", transformOrigin: "center" }}>
                <path
                  d="M 10 40 Q 50 50 90 45 Q 110 40 120 30"
                  stroke="#6450ff"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="8 4"
                />
              </svg>
            </div>

            <div className="mental-map-arrow" data-connect="bottom-right">
              <svg viewBox="0 0 120 80" style={{ transform: "rotate(50deg)", transformOrigin: "center" }}>
                <path
                  d="M 10 40 Q 50 20 90 25 Q 110 30 120 40"
                  stroke="#6450ff"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="8 4"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <br />
      <br />
      <br />
      <br />
      <br />

      <section className="how-it-works-section">
        <div className="how-it-works-container">
          <div className="how-it-works-card">
            <div className="workflow-container">
              <div className="workflow-step" data-step="1">
                <div className="workflow-box">
                  <div className="step-number">1</div>
                  <div className="step-title">API Integration</div>
                  <div className="step-description">
                    Platforms like HackerOne or Bugcrowd connect the CAI API with their own programs and security
                    policies.
                  </div>
                </div>
                <div className="workflow-arrow" data-from="1">
                  <svg viewBox="0 0 250 60">
                    <path d="M 10 30 Q 80 15 140 30 Q 200 45 240 30" />
                    <polygon points="235,25 245,30 235,35" />
                  </svg>
                </div>
              </div>

              <div className="workflow-step" data-step="2">
                <div className="workflow-box">
                  <div className="step-number">2</div>
                  <div className="step-title">CLI Access for Hackers</div>
                  <div className="step-description">
                    Hackers use a web-based CLI inside the platform, powered by CAI Agentic AI.
                  </div>
                </div>
                <div className="workflow-arrow" data-from="2">
                  <svg viewBox="0 0 250 60">
                    <path d="M 10 30 Q 80 45 140 30 Q 200 15 240 30" />
                    <polygon points="235,25 245,30 235,35" />
                  </svg>
                </div>
              </div>

              <div className="workflow-step" data-step="3">
                <div className="workflow-box">
                  <div className="step-number">3</div>
                  <div className="step-title">Secure Command Execution</div>
                  <div className="step-description">
                    Hackers can run commands or prompts. CAI enforces program-specific restrictions and safety controls.
                  </div>
                </div>
                <div className="workflow-arrow" data-from="3">
                  <svg viewBox="0 0 120 55">
                    <path d="M 2 70 Q 130 2 120 40" />
                    <polygon points="105,25 115,30 105,35 105,60 115,65" />
                  </svg>
                </div>
              </div>

              <div className="workflow-step" data-step="4">
                <div className="workflow-box">
                  <div className="step-number">4</div>
                  <div className="step-title">Validation & Logs</div>
                  <div className="step-description">
                    Every action is validated and stored in secure, auditable logs (Railway + PostgreSQL).
                  </div>
                </div>
                <div className="workflow-arrow" data-from="4">
                  <svg viewBox="0 10 250 50">
                    <path d="M 240 30 Q 160 10 120 30 Q 60 50 5 30" />
                    <polygon points="10,25 0,30 10,35" />
                  </svg>
                </div>
              </div>

              <div className="workflow-step" data-step="5">
                <div className="workflow-box">
                  <div className="step-number">5</div>
                  <div className="step-title">Insights & Reporting</div>
                  <div className="step-description">
                    Results are summarized and shared directly in the company's triage workflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="how-it-works-text">
            <h2>How the API Works</h2>
            <p>
              With CAI API, any bug bounty platform can empower hackers with an AI-driven CLI directly in their
              workflow. Built-in security policies, command restrictions, and audit-ready logs streamline the
              vulnerability research and reporting process.
            </p>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />

      <section className="agent-sneak-peek-section">
        <div className="agent-sneak-peek-container">
          <div className="agent-sneak-peek-card">
            <div className="cli-container">
              <div className="terminal-container">
                <div className="terminal-header">
                  <div className="terminal-controls">
                    <div className="control-button close"></div>
                    <div className="control-button minimize"></div>
                    <div className="control-button maximize"></div>
                  </div>
                  <div className="terminal-title">6xargs CLI - AI Security Agent</div>
                </div>
                <div className="terminal-body" id="terminal-output">
                  <div className="terminal-line output"></div>
                  <div className="terminal-input-line">
                    <span className="prompt">$</span>
                    <span className="cursor">|</span>
                    <input type="text" className="terminal-input" placeholder=" " readOnly />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="agent-sneak-peek-text">
            <h2>AI Agent CLI Demo</h2>
            <p>
              Experience our AI-powered security CLI in action. This interactive terminal demonstrates the power of
              automated vulnerability scanning and intelligent threat analysis.
            </p>
          </div>
        </div>
      </section>

      <main>
        <section className="cards-section">
          <div className="section-left">
            <div className="card form-card">
              <h2>Hackers</h2>
              <p className="subtitle">Search for a bug bounty program</p>
            </div>
          </div>
          <div className="section-right">
            <div className="card business-card">
              <h2>Enterprises</h2>
              <p className="subtitle">Register with us</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Social Media</h3>
            <ul className="horizontal-list">
              <li>
                <a href="https://twitter.com/">Twitter</a>
              </li>
              <li>
                <a href="https://www.discord.com/">Discord</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Menu</h3>
            <ul className="horizontal-list">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="https://www.discord.com/">Community</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Support</h3>
            <ul className="horizontal-list">
              <li>
                <a href="#contact">Contact 6xargs</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <ul className="horizontal-list">
              <li>
                <a href="https://www.github.com/">GitHub</a>
              </li>
              <li>
                <a href="#terms">Terms and Conditions</a>
              </li>
              <li>
                <a href="#privacy">Privacy & Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>©2025 6xargs All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}
