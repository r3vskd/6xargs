import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";
import Navigation from "~/components/Navigation";
import TerminalAnimation from "~/components/TerminalAnimation";
import ThreeScene from "~/components/ThreeScene";

export const meta: MetaFunction = () => {
  return [
    { title: "6xargs | AI Assisted Bug Bounty Platform" },
    { name: "description", content: "White label AI layer. Agentic-AI Powered Hacking. Faster Pentesting. Faster Triage times. Easier than ever. Protect the internet with us." },
  ];
};

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Hero title letter effect
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
      const text = heroTitle.textContent;
      if (text) {
        const lines = text.trim().split('\n');
        let wrappedHTML = '';
        
        lines.forEach((line) => {
          if (line.trim() !== '') {
            const trimmedLine = line.trim();
            let lineHTML = '<div class="title-line">';
            
            for (let i = 0; i < trimmedLine.length; i++) {
              const char = trimmedLine[i];
              if (char === ' ') {
                lineHTML += '<span class="space"> </span>';
              } else {
                lineHTML += `<span class="letter">${char}</span>`;
              }
            }
            
            lineHTML += '</div>';
            wrappedHTML += lineHTML;
          }
        });
        
        heroTitle.innerHTML = wrappedHTML;
      }
    }
    
    // Hero subtitle letter effect
    const heroSubtitle = document.getElementById('hero-subtitle');
    if (heroSubtitle) {
      const text = heroSubtitle.textContent;
      if (text) {
        let wrappedText = '';
        
        for (let i = 0; i < text.length; i++) {
          const char = text[i];
          if (char === ' ') {
            wrappedText += '<span class="space"> </span>';
          } else if (char === '\n' || char === '\r') {
            wrappedText += '<br>';
          } else {
            wrappedText += `<span class="letter">${char}</span>`;
          }
        }
        
        heroSubtitle.innerHTML = wrappedText;
      }
    }
  }, []);

  const goToIndex = () => {
    window.location.href = '/';
  };

  const redirectToLogin = () => {
    window.location.href = '/login';
  };

  const redirectToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen bg-black text-white font-varela overflow-x-hidden">
      {/* Grid Background */}
      <div className="grid-background fixed top-0 left-0 w-full h-full opacity-5 pointer-events-none z-0"></div>
      
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <header className="h-screen flex justify-left items-center relative overflow-hidden pr-96">
        <div className="container max-w-7xl mx-auto px-4">
          <h1 
            className="hero-title-hover text-6xl font-bold leading-tight mb-6 text-left" 
            id="hero-title"
          >
            White label AI layer
          </h1>

          <h2 
            className="hero-subtitle text-xl font-bold text-gray-400 leading-relaxed -ml-64" 
            id="hero-subtitle"
          >
            Agentic-AI Powered Hacking.{"\n"}
            Faster Pentesting.{"\n"}
            Faster Triage times.{"\n"}
            Easier than ever.{"\n"}
            Protect the internet with us.
          </h2>
          
          {/* Three.js Scene */}
          <div className="absolute top-0 right-0 w-1/2 h-full">
            <ThreeScene />
          </div>
          
          {/* Hero Logo */}
          <img 
            src="/images/6xargs_logo.jpg" 
            alt="6xargs Logo" 
            className="hero-logo absolute top-1/2 right-1/4 transform -translate-y-1/2 w-80 h-auto opacity-100 rounded-3xl border-4 border-dashed border-purple-500 transition-all duration-300 hover:opacity-100 hover:cursor-pointer filter contrast-125 brightness-110 z-15"
          />
          
          {/* Mental Map Container */}
          <div className="mental-map-container absolute top-0 left-0 w-full h-full pointer-events-none">
            {/* Mental Map Cards */}
            <div className="mental-map-card absolute opacity-0 animate-fade-in pointer-events-auto cursor-pointer" data-position="top-left" style={{top: '20%', left: 'calc(32% + 35rem)', animationDelay: '0s'}}>
              <div className="card-title text-base font-semibold text-white text-center mb-2">Community Driven</div>
              <div className="card-content text-sm text-gray-300 text-center leading-snug">Growing network of ethical hackers and security experts</div>
            </div>
            
            <div className="mental-map-card absolute opacity-0 animate-fade-in pointer-events-auto cursor-pointer" data-position="top-right" style={{top: '20%', right: 'calc(22% - 20rem)', animationDelay: '0s'}}>
              <div className="card-title text-base font-semibold text-white text-center mb-2">API</div>
              <div className="card-content text-sm text-gray-300 text-center leading-snug">Connect your own platform with the world first Ethical Hacking Agentic AI</div>
            </div>
            
            <div className="mental-map-card absolute opacity-0 animate-fade-in pointer-events-auto cursor-pointer" data-position="center-left" style={{top: '50%', left: 'calc(22% + 37rem)', transform: 'translateY(-50%)', animationDelay: '0s'}}>
              <div className="card-title text-base font-semibold text-white text-center mb-2">HITL</div>
              <div className="card-content text-sm text-gray-300 text-center leading-snug">Human In The Loop reduces response time by 50%</div>
            </div>
            
            <div className="mental-map-card absolute opacity-0 animate-fade-in pointer-events-auto cursor-pointer" data-position="center-right" style={{top: '50%', right: 'calc(22% - 25.5rem)', transform: 'translateY(-50%)', animationDelay: '0s'}}>
              <div className="card-title text-base font-semibold text-white text-center mb-2">AI-Powered Security</div>
              <div className="card-content text-sm text-gray-300 text-center leading-snug">CAI WEB CLI - World First AI Powered Web Application Security Agent</div>
            </div>
            
            <div className="mental-map-card absolute opacity-0 animate-fade-in pointer-events-auto cursor-pointer" data-position="bottom-left" style={{bottom: '20%', left: 'calc(32% + 35rem)', animationDelay: '0s'}}>
              <div className="card-title text-base font-semibold text-white text-center mb-2">Enterprise Solutions</div>
              <div className="card-content text-sm text-gray-300 text-center leading-snug">Scalable security solutions for organizations of all sizes</div>
            </div>
            
            <div className="mental-map-card absolute opacity-0 animate-fade-in pointer-events-auto cursor-pointer" data-position="bottom-right" style={{bottom: '20%', right: 'calc(22% - 20rem)', animationDelay: '0s'}}>
              <div className="card-title text-base font-semibold text-white text-center mb-2">Real-time Analysis</div>
              <div className="card-content text-sm text-gray-300 text-center leading-snug">Instant vulnerability assessment and prioritization</div>
            </div>
          </div>
        </div>
      </header>

      {/* How It Works Section */}
      <section className="how-it-works-section bg-black p-8 max-w-7xl mx-auto my-8 rounded-2xl border-2 border-gray-700 shadow-2xl flex justify-left items-center">
        <div className="how-it-works-container max-w-full flex gap-12 items-center justify-between">
          <div className="how-it-works-card flex-2 bg-gray-900/70 rounded-2xl p-8 transition-all duration-300 overflow-hidden shadow-lg border border-gray-800/30 min-h-80 max-w-4xl flex items-center justify-center hover:bg-gray-800/70 hover:shadow-xl hover:border-white/10">
            <div className="workflow-container w-full flex justify-center items-center">
              <div className="workflow-steps grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="workflow-step">
                  <div className="workflow-box bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                    <div className="step-number bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">1</div>
                    <div className="step-title text-lg font-semibold text-white mb-2">API Integration</div>
                    <div className="step-description text-sm text-gray-300 leading-relaxed">Platforms like HackerOne or Bugcrowd connect the CAI API with their own programs and security policies.</div>
                  </div>
                </div>
                
                <div className="workflow-step">
                  <div className="workflow-box bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                    <div className="step-number bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">2</div>
                    <div className="step-title text-lg font-semibold text-white mb-2">CLI Access for Hackers</div>
                    <div className="step-description text-sm text-gray-300 leading-relaxed">Hackers use a web-based CLI inside the platform, powered by CAI Agentic AI.</div>
                  </div>
                </div>
                
                <div className="workflow-step">
                  <div className="workflow-box bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                    <div className="step-number bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">3</div>
                    <div className="step-title text-lg font-semibold text-white mb-2">Secure Command Execution</div>
                    <div className="step-description text-sm text-gray-300 leading-relaxed">Hackers can run commands or prompts. CAI enforces program-specific restrictions and safety controls.</div>
                  </div>
                </div>
                
                <div className="workflow-step">
                  <div className="workflow-box bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                    <div className="step-number bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">4</div>
                    <div className="step-title text-lg font-semibold text-white mb-2">Validation & Logs</div>
                    <div className="step-description text-sm text-gray-300 leading-relaxed">Every action is validated and stored in secure, auditable logs (Railway + PostgreSQL).</div>
                  </div>
                </div>
                
                <div className="workflow-step">
                  <div className="workflow-box bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                    <div className="step-number bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">5</div>
                    <div className="step-title text-lg font-semibold text-white mb-2">Insights & Reporting</div>
                    <div className="step-description text-sm text-gray-300 leading-relaxed">Results are summarized and shared directly in the company's triage workflow.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="how-it-works-text flex-1 flex flex-col gap-6 max-w-4xl">
            <h2 className="text-4xl font-semibold tracking-wide relative inline-block mb-4">How the API Works</h2>
            <p className="text-xl text-gray-300 leading-relaxed">With CAI API, any bug bounty platform can empower hackers with an AI-driven CLI directly in their workflow. Built-in security policies, command restrictions, and audit-ready logs streamline the vulnerability research and reporting process.</p>
          </div>
        </div>
      </section>

      {/* Agent Sneak Peek Section */}
      <section className="agent-sneak-peek-section bg-black p-20 max-w-7xl mx-auto my-20 rounded-2xl border-2 border-gray-700 shadow-2xl flex justify-center items-center">
        <div className="agent-sneak-peek-container max-w-6xl flex gap-16 items-center justify-center">
          <div className="agent-sneak-peek-card flex-1 bg-gray-900/70 rounded-xl p-8 transition-all duration-300 overflow-hidden shadow-lg border border-white/5 flex justify-center items-center hover:bg-gray-800/85 hover:shadow-xl hover:border-purple-500/20">
            <div className="cli-container w-full flex justify-center items-center">
              <div className="terminal-container bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-700 max-w-2xl w-full">
                <div className="terminal-header bg-gray-800 px-4 py-3 flex items-center justify-between">
                  <div className="terminal-controls flex space-x-2">
                    <div className="control-button w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="control-button w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="control-button w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="terminal-title text-gray-300 text-sm font-mono">6xargs CLI - AI Security Agent</div>
                </div>
                <div className="terminal-body bg-black p-4 font-mono text-sm">
                  <TerminalAnimation />
                </div>
              </div>
            </div>
          </div>
          <div className="agent-sneak-peek-text flex-1 flex flex-col gap-6">
            <h2 className="text-4xl font-semibold tracking-wide text-purple-400 mb-4">AI Agent CLI Demo</h2>
            <p className="text-xl text-gray-300 leading-relaxed">Experience our AI-powered security CLI in action. This interactive terminal demonstrates the power of automated vulnerability scanning and intelligent threat analysis.</p>
          </div>
        </div>
      </section>

      {/* Main Cards Section */}
      <main className="py-52 px-52 flex justify-center items-center">
        <section className="cards-section max-w-5xl flex gap-16 items-center justify-center">
          <div className="section-left flex-1 flex flex-col gap-16" onClick={redirectToLogin}>
            <div className="card form-card relative bg-gray-900/70 rounded-xl p-12 transition-all duration-300 text-center overflow-hidden shadow-lg border border-white/5 max-h-48 hover:bg-black/85 hover:shadow-xl hover:cursor-pointer hover:border-white/10 hover:-translate-y-1">
              <h2 className="text-3xl font-semibold mb-3 relative inline-block">Hackers</h2>
              <p className="subtitle text-xl text-gray-400 transition-colors">Search for a bug bounty program</p>
            </div>
          </div>
          <div className="section-right flex-1 flex flex-col gap-16" onClick={redirectToContact}>
            <div className="card business-card relative bg-gray-900/70 rounded-xl p-12 transition-all duration-300 text-center overflow-hidden shadow-lg border border-white/5 max-h-48 hover:bg-black/85 hover:shadow-xl hover:cursor-pointer hover:border-white/10 hover:-translate-y-1">
              <h2 className="text-3xl font-semibold mb-3 relative inline-block">Enterprises</h2>
              <p className="subtitle text-xl text-gray-400 transition-colors">Register with us</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800/30 pt-12 bg-black/20">
        <div className="footer-content flex justify-around flex-wrap max-w-7xl mx-auto px-4">
          <div className="footer-section mb-8 ml-10">
            <h3 className="text-white mb-4 text-lg font-semibold">Social Media</h3>
            <ul className="horizontal-list flex flex-wrap gap-4 text-center">
              <li><a href="https://twitter.com/" className="text-gray-400 hover:text-purple-400 transition-colors">Twitter</a></li>
              <li><a href="https://www.discord.com/" className="text-gray-400 hover:text-purple-400 transition-colors">Discord</a></li>
            </ul>
          </div>
          <div className="footer-section mb-8 ml-10">
            <h3 className="text-white mb-4 text-lg font-semibold">Menu</h3>
            <ul className="horizontal-list flex flex-wrap gap-4 text-center">
              <li><a href="/about" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="https://www.discord.com/" className="text-gray-400 hover:text-purple-400 transition-colors">Community</a></li>
            </ul>
          </div>
          <div className="footer-section mb-8 ml-10">
            <h3 className="text-white mb-4 text-lg font-semibold">Support</h3>
            <ul className="horizontal-list flex flex-wrap gap-4 text-center">
              <li><a href="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact 6xargs</a></li>
            </ul>
          </div>
          <div className="footer-section mb-8 ml-10">
            <h3 className="text-white mb-4 text-lg font-semibold">Resources</h3>
            <ul className="horizontal-list flex flex-wrap gap-4 text-center">
              <li><a href="https://www.github.com/" className="text-gray-400 hover:text-purple-400 transition-colors">GitHub</a></li>
              <li><a href="/terms-and-conditions" className="text-gray-400 hover:text-purple-400 transition-colors">Terms and Conditions</a></li>
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy & Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom text-center py-8 border-t border-white/10 justify-center items-center">
          <p className="text-gray-400">©2025 6xargs All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}