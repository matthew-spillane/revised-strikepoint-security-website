const painPoints = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L2 7L12 12L22 7L12 2Z"
          stroke="#e8412a"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 17L12 22L22 17"
          stroke="#e8412a"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12L12 17L22 12"
          stroke="#e8412a"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Alert Fatigue',
    body:
      'Security teams are drowning in thousands of alerts daily. Without triage context, every alert looks identical — leading to critical threats being buried or ignored.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="#e8412a"
          strokeWidth="1.5"
        />
        <path
          d="M12 8V12M12 16H12.01"
          stroke="#e8412a"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: 'No Context',
    body:
      'Raw threat feeds flood dashboards with IPs, hashes, and domain names — but nothing explains why something is dangerous. Analysts waste hours correlating signals manually.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="2"
          stroke="#e8412a"
          strokeWidth="1.5"
        />
        <path
          d="M9 12H15M9 8H15M9 16H12"
          stroke="#e8412a"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: 'Raw Scores Without Reasoning',
    body:
      "A risk score of 73/100 means nothing without explanation. Tools tell you something is suspicious, but not why — leaving analysts to guess at the right response.",
  },
]

export default function Problem() {
  return (
    <section className="px-6 py-24 md:py-32" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#e8412a', letterSpacing: '0.15em' }}
          >
            The Problem
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            Security teams are overwhelmed.
            <br />
            <span style={{ color: '#6b6b6b' }}>The tools aren't helping.</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#a0a0a0' }}
          >
            Modern threat detection generates more noise than signal. Analysts
            spend more time decoding alerts than responding to them.
          </p>
        </div>

        {/* Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {painPoints.map(({ icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl p-7 transition-all duration-300"
              style={{
                backgroundColor: '#111111',
                border: '1px solid #2a2a2a',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#3a3a3a'
                e.currentTarget.style.backgroundColor = '#151515'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#2a2a2a'
                e.currentTarget.style.backgroundColor = '#111111'
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{ backgroundColor: 'rgba(232,65,42,0.08)' }}
              >
                {icon}
              </div>
              <h3
                className="text-lg font-bold text-white mb-3"
                style={{ letterSpacing: '-0.01em' }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#a0a0a0' }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
