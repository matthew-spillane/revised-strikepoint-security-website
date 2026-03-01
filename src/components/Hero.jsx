const SAFELINK_URL = 'https://safelink.strikepointsec.com'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-20"
      style={{ backgroundColor: '#0a0a0a', overflow: 'hidden' }}
    >
      {/* Dark red radial glow — upper left */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '60vw',
          height: '60vw',
          maxWidth: '700px',
          maxHeight: '700px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(232,65,42,0.12) 0%, rgba(232,65,42,0.04) 40%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle grid texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span
            className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{
              color: '#e8412a',
              backgroundColor: 'rgba(232,65,42,0.1)',
              border: '1px solid rgba(232,65,42,0.2)',
              letterSpacing: '0.15em',
            }}
          >
            AI-Powered Threat Intelligence
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
          style={{ letterSpacing: '-0.03em', lineHeight: '1.05' }}
        >
          Human-readable AI verdicts,{' '}
          <span style={{ color: '#e8412a' }}>not raw signals.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: '#a0a0a0' }}
        >
          SafeLink analyzes suspicious URLs and delivers plain-English verdicts
          that analysts can act on immediately — not just raw scores and signal
          dumps.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={SAFELINK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded font-semibold text-base transition-all duration-200"
            style={{ backgroundColor: '#e8412a', color: '#ffffff' }}
            onMouseEnter={e =>
              (e.currentTarget.style.backgroundColor = '#b83220')
            }
            onMouseLeave={e =>
              (e.currentTarget.style.backgroundColor = '#e8412a')
            }
          >
            Launch SafeLink
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#ai-analyst"
            className="inline-flex items-center gap-2 px-8 py-4 rounded font-semibold text-base transition-all duration-200"
            style={{
              backgroundColor: 'transparent',
              color: '#ffffff',
              border: '1px solid #2a2a2a',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#4a4a4a'
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#2a2a2a'
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            See How It Works
          </a>
        </div>

        {/* Social proof strip */}
        <div
          className="flex items-center justify-center gap-6 mt-16 pt-8"
          style={{ borderTop: '1px solid #1a1a1a' }}
        >
          <span className="text-xs font-medium" style={{ color: '#6b6b6b' }}>
            Powered by
          </span>
          {['VirusTotal', 'Google Safe Browsing', 'Claude AI', 'URLscan.io'].map(
            name => (
              <span
                key={name}
                className="text-xs font-medium"
                style={{ color: '#4a4a4a' }}
              >
                {name}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  )
}
