export default function SampleScan() {
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
            Sample Scan Results
          </p>
          <h2
            className="text-3xl md:text-4xl font-black text-white mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            See SafeLink in action.
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#a0a0a0' }}>
            Every scan delivers a clear verdict and AI-powered explanation —
            whether a link is dangerous or clean.
          </p>
        </div>

        {/* Screenshots grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Primary: Phishing result */}
          <div className="flex flex-col gap-4">
            {/* Label */}
            <div className="flex items-center gap-2.5">
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: '#e8412a' }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: '#e8412a', letterSpacing: '0.12em' }}
              >
                Threat Detected — Phishing
              </span>
            </div>
            {/* Screenshot */}
            <div
              className="rounded-xl overflow-hidden"
              style={{
                border: '1px solid rgba(232,65,42,0.25)',
                boxShadow:
                  '0 0 0 1px rgba(232,65,42,0.08), 0 24px 60px rgba(0,0,0,0.7), 0 4px 16px rgba(232,65,42,0.08)',
              }}
            >
              <img
                src="/safelink-phishing.png"
                alt="SafeLink scan result showing a phishing URL detected with a 95/100 risk score and Phishing verdict"
                className="w-full h-auto block"
                style={{ display: 'block' }}
              />
            </div>
            {/* Caption */}
            <p className="text-xs leading-relaxed" style={{ color: '#6b6b6b' }}>
              SafeLink flags a credential-harvesting URL with a{' '}
              <span style={{ color: '#e8412a', fontWeight: 600 }}>95/100 risk score</span> and
              a plain-English AI explanation detailing exactly why the link is dangerous.
            </p>
          </div>

          {/* Secondary: Safe result */}
          <div className="flex flex-col gap-4">
            {/* Label */}
            <div className="flex items-center gap-2.5">
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: '#4ade80' }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: '#4ade80', letterSpacing: '0.12em' }}
              >
                No Threat — Safe
              </span>
            </div>
            {/* Screenshot */}
            <div
              className="rounded-xl overflow-hidden"
              style={{
                border: '1px solid rgba(74,222,128,0.15)',
                boxShadow:
                  '0 0 0 1px rgba(74,222,128,0.05), 0 24px 60px rgba(0,0,0,0.7), 0 4px 16px rgba(74,222,128,0.05)',
              }}
            >
              <img
                src="/safelink-safe.png"
                alt="SafeLink scan result showing a safe URL with a 5/100 risk score and Safe verdict"
                className="w-full h-auto block"
                style={{ display: 'block' }}
              />
            </div>
            {/* Caption */}
            <p className="text-xs leading-relaxed" style={{ color: '#6b6b6b' }}>
              When a link is clean, SafeLink confirms it clearly — a{' '}
              <span style={{ color: '#4ade80', fontWeight: 600 }}>5/100 risk score</span> with
              AI reasoning explaining why the domain is considered safe.
            </p>
          </div>

        </div>

        {/* Bottom note */}
        <p
          className="text-center text-xs mt-12"
          style={{ color: '#4a4a4a' }}
        >
          Results shown are live outputs from SafeLink — no filters, no staging data.
        </p>
      </div>
    </section>
  )
}
