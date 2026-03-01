const capabilities = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 2C6.03 2 2 6.03 2 11C2 15.97 6.03 20 11 20C15.97 20 20 15.97 20 11C20 6.03 15.97 2 11 2Z"
          stroke="#e8412a"
          strokeWidth="1.5"
        />
        <path
          d="M11 7V11L14 13"
          stroke="#e8412a"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: 'URL Reputation Analysis',
    body:
      'Cross-references every URL against VirusTotal and Google Safe Browsing, aggregating results from 90+ detection engines into a single, actionable risk signal.',
    badges: ['VirusTotal', 'Google Safe Browsing'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M3 6L11 2L19 6V11C19 15.5 15.5 19.5 11 20.5C6.5 19.5 3 15.5 3 11V6Z"
          stroke="#e8412a"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M8 11L10 13L14 9"
          stroke="#e8412a"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'AI Analyst Verdict',
    body:
      'Claude AI synthesizes all collected signals and produces a human-readable verdict — explaining the threat, the confidence level, and the recommended action.',
    badges: ['Claude AI', 'Plain English'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M4 11H18M4 11L8 7M4 11L8 15"
          stroke="#e8412a"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 7H18V15H14"
          stroke="#e8412a"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Redirect Chain Inspection',
    body:
      "Follows every hop in a URL's redirect chain to expose the true final destination — catching threat actors who use link shorteners and multi-stage redirects to evade detection.",
    badges: ['Multi-hop', 'Evasion Detection'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect
          x="3"
          y="3"
          width="16"
          height="16"
          rx="2"
          stroke="#e8412a"
          strokeWidth="1.5"
        />
        <path
          d="M7 7H15M7 11H12M7 15H10"
          stroke="#e8412a"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: 'Domain & IP Intelligence',
    body:
      'Retrieves WHOIS registration data, IP geolocation, hosting provider, ASN, and historical reputation — surfacing newly registered domains and suspicious infrastructure patterns.',
    badges: ['WHOIS', 'IP Geolocation', 'ASN'],
  },
]

export default function Capabilities() {
  return (
    <section
      className="px-6 py-24 md:py-32"
      style={{
        backgroundColor: '#0a0a0a',
        borderTop: '1px solid #111111',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#e8412a', letterSpacing: '0.15em' }}
          >
            Capabilities
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5"
            style={{ letterSpacing: '-0.02em' }}
          >
            Purpose-built for phishing analysis.
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: '#a0a0a0' }}>
            Every feature in SafeLink exists to answer one question: is this URL
            safe — and why?
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {capabilities.map(({ icon, title, body, badges }) => (
            <div
              key={title}
              className="rounded-xl p-7 transition-all duration-300"
              style={{
                backgroundColor: '#111111',
                border: '1px solid #2a2a2a',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#3a3a3a'
                e.currentTarget.style.backgroundColor = '#141414'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#2a2a2a'
                e.currentTarget.style.backgroundColor = '#111111'
              }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-5"
                style={{ backgroundColor: 'rgba(232,65,42,0.08)' }}
              >
                {icon}
              </div>
              <h3
                className="text-base font-bold text-white mb-3"
                style={{ letterSpacing: '-0.01em' }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#a0a0a0' }}>
                {body}
              </p>
              <div className="flex flex-wrap gap-2">
                {badges.map(badge => (
                  <span
                    key={badge}
                    className="text-xs font-medium px-2.5 py-1 rounded"
                    style={{
                      backgroundColor: 'rgba(232,65,42,0.07)',
                      color: '#e8412a',
                      border: '1px solid rgba(232,65,42,0.15)',
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
