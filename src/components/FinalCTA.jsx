const SAFELINK_URL = 'https://safelink.strikepointsec.com'

export default function FinalCTA() {
  return (
    <section
      className="px-6 py-24 md:py-36 relative overflow-hidden"
      style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid #111111' }}
    >
      {/* Red glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70vw',
          height: '40vw',
          maxWidth: '800px',
          maxHeight: '400px',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse, rgba(232,65,42,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-5"
          style={{ color: '#e8412a', letterSpacing: '0.15em' }}
        >
          Get Started
        </p>
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
          style={{ letterSpacing: '-0.03em', lineHeight: '1.05' }}
        >
          Ready to analyze your first link?
        </h2>
        <p
          className="text-lg md:text-xl max-w-lg mx-auto mb-10 leading-relaxed"
          style={{ color: '#a0a0a0' }}
        >
          Paste any suspicious URL and get a full AI-powered threat analysis in
          seconds — no account required.
        </p>
        <a
          href={SAFELINK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 rounded text-base font-bold transition-all duration-200"
          style={{ backgroundColor: '#e8412a', color: '#ffffff' }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#b83220'
            e.currentTarget.style.transform = 'translateY(-1px)'
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(232,65,42,0.3)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#e8412a'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Launch SafeLink
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M3.75 9H14.25M14.25 9L10.5 5.25M14.25 9L10.5 12.75"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <p className="text-xs mt-5" style={{ color: '#4a4a4a' }}>
          safelink.strikepointsec.com — Free to use. No sign-up needed.
        </p>
      </div>
    </section>
  )
}
