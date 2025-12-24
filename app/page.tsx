"use client";

import { useState } from "react";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen mesh-bg relative overflow-hidden">
      {/* Global floating orbs - city pop sunset palette */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="orb w-[600px] h-[600px] top-[-150px] right-[-100px]" style={{ background: 'rgba(248, 165, 194, 0.5)' }} />
        <div className="orb orb-slow w-[500px] h-[500px] bottom-[10%] left-[-150px]" style={{ background: 'rgba(129, 236, 236, 0.4)', animationDelay: '-5s' }} />
        <div className="orb w-[400px] h-[400px] top-[30%] right-[5%]" style={{ background: 'rgba(162, 155, 254, 0.45)', animationDelay: '-10s' }} />
        <div className="orb orb-slow w-[450px] h-[450px] bottom-[-100px] right-[25%]" style={{ background: 'rgba(247, 215, 148, 0.5)', animationDelay: '-15s' }} />
        <div className="orb w-[350px] h-[350px] top-[50%] left-[15%]" style={{ background: 'rgba(243, 166, 131, 0.45)', animationDelay: '-8s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-xl border-b border-minna-sakura/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full status-pulse" style={{ background: 'linear-gradient(135deg, #f78fb3, #f3a683)' }} />
            <span className="text-xl sm:text-2xl font-display font-bold text-minna-ink">minna</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-8">
            <a href="#how-it-works" className="hidden sm:block text-sm font-medium text-minna-slate hover:text-minna-ink transition-colors">
              How it works
            </a>
            <a href="#pricing" className="hidden sm:block text-sm font-medium text-minna-slate hover:text-minna-ink transition-colors">
              Pricing
            </a>
            <a 
              href="#waitlist" 
              className="px-4 py-2 sm:px-5 sm:py-2.5 text-sm font-semibold text-white rounded-full transition-all hover:scale-105"
              style={{ 
                background: "linear-gradient(135deg, #f8a5c2 0%, #f78fb3 50%, #f3a683 100%)",
                boxShadow: "0 4px 16px rgba(247, 143, 179, 0.3)"
              }}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Creative Layout */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 pt-24 sm:pt-20">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        
        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Typography */}
            <div className="space-y-6">
              {/* Eyebrow */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-minna-sakura/30 opacity-0 animate-fade-in"
                style={{ animationFillMode: "forwards" }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#f78fb3' }} />
                <span className="text-xs font-mono text-minna-slate uppercase tracking-widest">
                  Local-first • Encrypted
                </span>
              </div>

              {/* Main headline - Mixed typography */}
              <div 
                className="opacity-0 animate-fade-in-up delay-100"
                style={{ animationFillMode: "forwards" }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-minna-ink leading-none">
                  Long-term
                </h1>
                <h1 
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-serif italic gradient-text-cool"
                  style={{ lineHeight: '1.2', paddingBottom: '0.1em' }}
                >
                  memory
                </h1>
                <div className="flex items-baseline gap-2 sm:gap-4">
                  <span className="text-lg sm:text-xl md:text-2xl font-body text-minna-slate">for</span>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-minna-ink">
                    AI agents
                  </h1>
                </div>
              </div>

              {/* Description */}
              <p 
                className="text-lg text-minna-slate max-w-md leading-relaxed opacity-0 animate-fade-in-up delay-200"
                style={{ animationFillMode: "forwards" }}
              >
                Minna indexes your digital footprint into a secure local database. 
                Your AI tools connect via MCP and never start from zero.
              </p>

              {/* CTA */}
              <div 
                className="flex flex-wrap items-center gap-4 pt-4 opacity-0 animate-fade-in-up delay-300"
                style={{ animationFillMode: "forwards" }}
              >
                <a 
                  href="#waitlist"
                  className="px-8 py-4 text-base font-semibold text-white rounded-full transition-all hover:-translate-y-1 hover:scale-105"
                  style={{ 
                    background: "linear-gradient(135deg, #f8a5c2 0%, #f78fb3 25%, #e77f8c 50%, #f3a683 75%, #f7d794 100%)",
                    boxShadow: "0 8px 32px rgba(247, 143, 179, 0.35)"
                  }}
                >
                  Request Early Access
                </a>
                <a 
                  href="#how-it-works"
                  className="px-8 py-4 text-base font-semibold rounded-full transition-all hover:-translate-y-0.5 group"
                  style={{
                    background: "linear-gradient(135deg, #a29bfe 0%, #81ecec 100%)",
                    color: "#2d3436",
                    boxShadow: "0 6px 24px rgba(162, 155, 254, 0.3)"
                  }}
                >
                  See how it works <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Right side - Visual element */}
            <div 
              className="relative opacity-0 animate-fade-in delay-400"
              style={{ animationFillMode: "forwards" }}
            >
              {/* Decorative card stack */}
              <div className="relative">
                {/* Background card */}
                <div 
                  className="absolute top-8 -left-4 w-full h-full rounded-3xl rotate-3"
                  style={{ background: 'linear-gradient(135deg, rgba(162, 155, 254, 0.4), rgba(129, 236, 236, 0.4))' }}
                />
                {/* Main card - Menu bar mockup */}
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl border border-white/50 p-8 shadow-2xl -rotate-1">
                  {/* macOS dots */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full" style={{ background: '#f78fb3' }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: '#f7d794' }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: '#81ecec' }} />
                  </div>
                  
                  {/* Content */}
                  <div className="bg-gradient-to-br from-minna-paper to-white rounded-2xl p-6 border border-minna-sakura/10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full status-pulse" style={{ background: 'linear-gradient(135deg, #f78fb3, #f3a683)' }} />
                        <span className="font-display font-bold text-xl text-minna-ink">minna</span>
                      </div>
                      <span 
                        className="text-xs font-mono px-3 py-1 rounded-full"
                        style={{ background: 'rgba(248, 165, 194, 0.3)', color: '#e77f8c' }}
                      >
                        Indexing...
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { name: 'Slack', count: '2,847 msgs', color: '#a29bfe' },
                        { name: 'GitHub', count: '156 PRs', color: '#81ecec' },
                        { name: 'Linear', count: '89 issues', color: '#f7d794' },
                        { name: 'Gmail', count: '1,203 threads', color: '#f8a5c2' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-3 border-t border-minna-sakura/10">
                          <span className="text-minna-slate font-medium">{item.name}</span>
                          <span 
                            className="font-mono text-sm px-3 py-1 rounded-lg text-minna-ink"
                            style={{ background: `${item.color}30` }}
                          >
                            {item.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Problem Section - Editorial Layout */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 section-gradient-1 backdrop-blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-20 max-w-4xl px-4 sm:px-0">
            <p className="text-sm font-mono text-minna-muted uppercase tracking-widest mb-4">The Problem</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-minna-ink leading-tight mb-6">
              AI has an<br />
              <span 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif italic gradient-text-cool inline-block my-3"
                style={{ lineHeight: '1.1' }}
              >
                amnesia
              </span>
              <br />problem
            </h2>
            <p className="text-xl text-minna-slate leading-relaxed max-w-2xl">
              Every chat starts from zero. Your AI can&apos;t remember yesterday, 
              let alone decisions from three months ago.
            </p>
          </div>

          {/* Problem cards - staggered layout */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="md:mt-12">
              <div className="p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-minna-sakura/30 card-hover shadow-lg transform hover:rotate-1 transition-transform">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: 'linear-gradient(135deg, #a29bfe, #81ecec)' }}
                >
                  <span className="text-3xl">🐠</span>
                </div>
                <h3 className="text-3xl font-display font-bold text-minna-ink mb-4">
                  The Goldfish Effect
                </h3>
                <p className="text-minna-slate leading-relaxed text-lg">
                  Models lack object permanence. They can&apos;t connect your current task to 
                  decisions made in Slack, Linear, or GitHub three months ago.
                </p>
              </div>
            </div>

            <div className="md:-mt-8">
              <div className="p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-minna-sky/30 card-hover shadow-lg transform hover:-rotate-1 transition-transform">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: 'linear-gradient(135deg, #f8a5c2, #f3a683)' }}
                >
                  <span className="text-3xl">📄</span>
                </div>
                <h3 className="text-3xl font-display font-bold text-minna-ink mb-4">
                  Static Context
                </h3>
                <p className="text-minna-slate leading-relaxed text-lg">
                  ChatGPT Projects, Claude Skills — they all rely on frozen files. PDFs, screenshots, 
                  docs uploaded once and never updated. Your work moves on; your context doesn&apos;t.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Kept more structured */}
      <section id="how-it-works" className="relative py-32 px-6">
        <div className="absolute inset-0 section-gradient-2" />
        
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm font-mono text-minna-muted uppercase tracking-widest mb-4">How It Works</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-minna-ink mb-6">
              The <span className="font-serif italic gradient-text-cool">invisible</span> layer
            </h2>
            <p className="text-xl text-minna-slate max-w-2xl mx-auto">
              Minna indexes locally, exposes via MCP. Headless by design.
            </p>
          </div>

          <ArchitectureDiagram />

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-24">
            {[
              { 
                title: "Delta Sync", 
                desc: "Only fetches new data. Minimal CPU & battery.",
                icon: "⚡",
                color: "#f8a5c2"
              },
              { 
                title: "SQLCipher", 
                desc: "Encrypted at rest. Key from macOS Keychain.",
                icon: "🔐",
                color: "#a29bfe"
              },
              { 
                title: "MCP Native", 
                desc: "Instant compatibility with Claude, Cursor, ChatGPT.",
                icon: "🔌",
                color: "#81ecec"
              },
            ].map((item, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 card-hover text-center"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${item.color}40` }}
                >
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-minna-ink mb-2">{item.title}</h3>
                <p className="text-minna-slate">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status Indicator Section - Creative */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 section-gradient-1" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Large typography */}
            <div>
              <p className="text-sm font-mono text-minna-muted uppercase tracking-widest mb-4">Set & Forget</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-minna-ink mb-8">
                One light.<br />
                <span className="font-serif italic gradient-text">That&apos;s it.</span>
              </h2>
              <p className="text-xl text-minna-slate leading-relaxed mb-8 max-w-md">
                Minna lives in your menu bar with a single purpose: stay out of your way.
              </p>

              {/* Status indicators */}
              <div className="space-y-4">
                <div className="flex items-center gap-6 p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-minna-sakura/20">
                  <div 
                    className="w-5 h-5 rounded-full status-pulse flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #f78fb3, #f3a683)' }}
                  />
                  <div>
                    <span className="font-display font-bold text-minna-ink text-lg">Pink</span>
                    <span className="text-minna-slate ml-2">— Indexing, processing</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-minna-mint/30">
                  <div 
                    className="w-5 h-5 rounded-full flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #81ecec, #a29bfe)' }}
                  />
                  <div>
                    <span className="font-display font-bold text-minna-ink text-lg">Teal</span>
                    <span className="text-minna-slate ml-2">— Synced, ready</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Giant status light */}
            <div className="relative flex items-center justify-center">
              <div 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full status-pulse"
                style={{ 
                  background: 'linear-gradient(135deg, #f8a5c2, #f78fb3, #f3a683)',
                  boxShadow: '0 0 120px rgba(247, 143, 179, 0.5)'
                }}
              />
              <div 
                className="absolute w-48 h-48 md:w-60 md:h-60 rounded-full"
                style={{ 
                  background: 'linear-gradient(135deg, #f8a5c2, #f78fb3)',
                  boxShadow: 'inset 0 0 60px rgba(255, 255, 255, 0.4)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Clean but with character */}
      <section id="pricing" className="relative py-32 px-6">
        <div className="absolute inset-0 section-gradient-2" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-sm font-mono text-minna-muted uppercase tracking-widest mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-minna-ink mb-6">
            <span className="font-serif italic gradient-text">Free</span> forever
          </h2>
          <p className="text-xl text-minna-slate mb-16 max-w-xl mx-auto">
            Bring your own API key. No limits. No catch.
          </p>

          <div className="max-w-lg mx-auto">
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-3xl rotate-2"
                style={{ background: 'linear-gradient(135deg, rgba(248, 165, 194, 0.5), rgba(162, 155, 254, 0.5))' }}
              />
              <div className="relative p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/50 shadow-2xl -rotate-1">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-display font-bold text-minna-ink">Minna Core</h3>
                  <div className="text-right">
                    <span 
                      className="text-6xl font-display font-bold"
                      style={{ background: 'linear-gradient(135deg, #f78fb3, #f3a683)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                    >
                      $0
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 text-left">
                  {[
                    "Unlimited local indexing",
                    "BYOK (Bring Your Own Key)",
                    "Slack, GitHub, Linear, Gmail",
                    "MCP for Claude, Cursor, ChatGPT",
                    "SQLCipher encryption",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <span 
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm"
                        style={{ background: 'linear-gradient(135deg, #81ecec40, #a29bfe40)' }}
                      >
                        ✓
                      </span>
                      <span className="text-minna-ink text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="#waitlist"
                  className="block w-full py-5 text-center text-lg font-semibold text-white rounded-full transition-all hover:scale-[1.02]"
                  style={{ 
                    background: "linear-gradient(135deg, #f8a5c2 0%, #f78fb3 25%, #e77f8c 50%, #f3a683 75%, #f7d794 100%)",
                    boxShadow: "0 8px 32px rgba(247, 143, 179, 0.3)"
                  }}
                >
                  Join the Waitlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist - Big and bold */}
      <section id="waitlist" className="relative py-32 px-6">
        <div className="absolute inset-0 section-gradient-1" />
        
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-minna-ink mb-2">
            Remember
          </h2>
          <h2 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[9rem] font-serif italic gradient-text-cool mb-8"
            style={{ lineHeight: '1.15' }}
          >
            everything
          </h2>
          <p className="text-xl text-minna-slate mb-12 max-w-lg mx-auto">
            We&apos;re rolling out gradually. Get notified when Minna is ready.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="flex-1 px-6 py-5 bg-white border-2 border-gray-200 rounded-full text-minna-ink text-lg placeholder:text-gray-400 focus:outline-none focus:border-pink-300 focus:ring-4 focus:ring-pink-100 transition-all"
                style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)" }}
              />
              <button
                type="submit"
                className="px-10 py-5 text-lg font-semibold text-white rounded-full transition-all whitespace-nowrap hover:scale-105"
                style={{ 
                  background: "linear-gradient(135deg, #f8a5c2 0%, #f78fb3 25%, #e77f8c 50%, #f3a683 75%, #f7d794 100%)",
                  boxShadow: "0 8px 32px rgba(247, 143, 179, 0.35)"
                }}
              >
                Request Access
              </button>
            </form>
          ) : (
            <div 
              className="inline-flex items-center gap-3 px-8 py-5 rounded-full"
              style={{ background: 'linear-gradient(135deg, rgba(129, 236, 236, 0.3), rgba(162, 155, 254, 0.3))' }}
            >
              <span className="text-2xl">✨</span>
              <span className="text-minna-ink text-xl font-medium">You&apos;re on the list!</span>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-minna-sakura/20">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div 
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: 'linear-gradient(135deg, #81ecec, #a29bfe)' }}
            />
            <span className="font-display font-bold text-minna-ink">minna</span>
            <span className="text-minna-muted">© 2025</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm text-minna-slate hover:text-minna-ink transition-colors">Privacy</a>
            <a href="#" className="text-sm text-minna-slate hover:text-minna-ink transition-colors">Terms</a>
            <a href="#" className="text-sm text-minna-slate hover:text-minna-ink transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
