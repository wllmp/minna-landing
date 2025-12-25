"use client";

import { IntegrationLogo } from "./IntegrationLogo";

export function ArchitectureDiagram() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="flex flex-col items-center justify-center">
        {/* Sources Row */}
        <div className="flex items-center justify-center gap-4 md:gap-8 mb-8">
          {(["slack", "github", "linear", "gmail"] as const).map((source, i) => (
            <div
              key={source}
              className="flex flex-col items-center gap-3 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "forwards" }}
            >
              <div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/50 flex items-center justify-center card-hover shadow-lg"
              >
                <IntegrationLogo name={source} className="w-8 h-8 md:w-10 md:h-10 text-minna-slate" />
              </div>
              <span className="text-xs font-mono text-minna-muted uppercase tracking-wider">
                {source}
              </span>
            </div>
          ))}
        </div>

        {/* Flow Arrow Down */}
        <div className="flex flex-col items-center gap-2 mb-6 opacity-0 animate-fade-in delay-400" style={{ animationFillMode: "forwards" }}>
          <div 
            className="w-1 h-12 rounded-full"
            style={{ background: 'linear-gradient(180deg, rgba(248, 165, 194, 0.3), rgba(247, 143, 179, 0.6))' }}
          />
          <svg className="w-5 h-5" style={{ color: '#f78fb3' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        {/* Minna Core */}
        <div 
          className="relative opacity-0 animate-fade-in delay-500"
          style={{ animationFillMode: "forwards" }}
        >
          <div 
            className="absolute inset-0 rounded-3xl blur-2xl"
            style={{ background: 'linear-gradient(135deg, rgba(248, 165, 194, 0.4), rgba(162, 155, 254, 0.4))' }}
          />
          <div className="relative px-10 py-7 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/50 shadow-2xl">
            <div className="flex items-center gap-3">
              <img src="/icon.png" alt="Minna" className="rounded-xl" style={{ width: '56px', height: '56px' }} />
              <div>
                <h3 className="text-xl font-display font-bold text-minna-ink">minna</h3>
                <p className="text-xs font-mono text-minna-muted">sqlite-vec • encrypted</p>
              </div>
            </div>
          </div>
        </div>

        {/* Flow Arrow Down + MCP badge */}
        <div className="flex flex-col items-center gap-2 my-6 opacity-0 animate-fade-in delay-600" style={{ animationFillMode: "forwards" }}>
          <svg className="w-5 h-5 rotate-180" style={{ color: '#a29bfe' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <div 
            className="w-1 h-8 rounded-full"
            style={{ background: 'linear-gradient(180deg, rgba(162, 155, 254, 0.6), rgba(129, 236, 236, 0.4))' }}
          />
          <div 
            className="px-4 py-2 rounded-full font-mono text-xs font-semibold uppercase tracking-wider"
            style={{ background: 'linear-gradient(135deg, #a29bfe40, #81ecec40)', color: '#1a1b3a' }}
          >
            MCP
          </div>
          <div 
            className="w-1 h-8 rounded-full"
            style={{ background: 'linear-gradient(180deg, rgba(129, 236, 236, 0.4), rgba(162, 155, 254, 0.3))' }}
          />
          <svg className="w-5 h-5" style={{ color: '#81ecec' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        {/* Destinations Row */}
        <div className="flex items-center justify-center gap-4 md:gap-8 mt-2">
          {(["cursor", "claude", "chatgpt"] as const).map((dest, i) => (
            <div
              key={dest}
              className="flex flex-col items-center gap-3 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${700 + i * 100}ms`, animationFillMode: "forwards" }}
            >
              <div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/50 flex items-center justify-center card-hover shadow-lg"
              >
                <IntegrationLogo name={dest} className="w-8 h-8 md:w-10 md:h-10 text-minna-ink" />
              </div>
              <span className="text-xs font-mono text-minna-muted uppercase tracking-wider">
                {dest}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
