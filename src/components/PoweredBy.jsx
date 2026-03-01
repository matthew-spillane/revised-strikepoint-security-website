const partners = [
  {
    name: 'VirusTotal',
    description: 'Multi-engine threat intelligence aggregator',
    logo: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#1a1a1a" />
        <path d="M16 6L26 11V21L16 26L6 21V11L16 6Z" fill="#394AF6" />
        <path d="M12 16L15 19L20 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Google Safe Browsing',
    description: 'Real-time phishing & malware blocklist',
    logo: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#1a1a1a" />
        <path d="M24 16.5C24 16.5 21.5 22 16 22C10.5 22 8 16.5 8 16.5C8 16.5 10.5 11 16 11C21.5 11 24 16.5 24 16.5Z" stroke="#4285F4" strokeWidth="1.5" />
        <circle cx="16" cy="16.5" r="2.5" fill="#EA4335" />
      </svg>
    ),
  },
  {
    name: 'Claude AI',
    description: 'AI reasoning engine for analyst-grade verdicts',
    logo: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#1a1a1a" />
        <path
          d="M16 8C11.58 8 8 11.58 8 16C8 20.42 11.58 24 16 24C20.42 24 24 20.42 24 16C24 11.58 20.42 8 16 8Z"
          fill="#D4602A"
        />
        <path d="M13 16C13 14.34 14.34 13 16 13C17.66 13 19 14.34 19 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'URLscan.io',
    description: 'Live URL scanner and behavioral analysis',
    logo: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#1a1a1a" />
        <circle cx="16" cy="16" r="7" stroke="#00B4D8" strokeWidth="1.5" />
        <path d="M13 16H19M16 13V19" stroke="#00B4D8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function PoweredBy() {
  return (
    <section
      className="px-6 py-20"
      style={{
        backgroundColor: '#0a0a0a',
        borderTop: '1px solid #111111',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <p
          className="text-center text-xs font-semibold uppercase tracking-widest mb-12"
          style={{ color: '#4a4a4a', letterSpacing: '0.15em' }}
        >
          Powered By Industry-Leading Intelligence Sources
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {partners.map(({ name, description, logo }) => (
            <div
              key={name}
              className="rounded-xl p-6 text-center flex flex-col items-center gap-3 transition-all duration-300"
              style={{
                backgroundColor: '#111111',
                border: '1px solid #2a2a2a',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#3a3a3a'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#2a2a2a'
              }}
            >
              <div className="mb-1">{logo}</div>
              <p className="text-sm font-bold text-white">{name}</p>
              <p className="text-xs leading-snug" style={{ color: '#6b6b6b' }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
