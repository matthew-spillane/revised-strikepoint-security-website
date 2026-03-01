export default function AIAnalyst() {
  return (
    <section
      id="ai-analyst"
      className="px-6 py-24 md:py-32"
      style={{
        backgroundColor: '#0a0a0a',
        borderTop: '1px solid #111111',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: '#e8412a', letterSpacing: '0.15em' }}
            >
              Artificial Intelligence
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6"
              style={{ letterSpacing: '-0.02em', lineHeight: '1.1' }}
            >
              Every scan reviewed by an AI threat analyst.
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#a0a0a0' }}>
              SafeLink doesn't just run a URL through a database lookup. It
              deploys an AI analyst that correlates signals across multiple
              intelligence sources, identifies behavioral patterns consistent
              with phishing or malware, and delivers SOC-style reasoning in
              plain English.
            </p>
            <ul className="space-y-4">
              {[
                'Correlates VirusTotal, Google Safe Browsing, URLscan.io, and domain intelligence',
                'Explains exactly why a URL is flagged — not just that it is',
                'Delivers analyst-grade verdicts readable by any team member',
                'Identifies redirect chains, spoofed brands, and evasion techniques',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(232,65,42,0.15)' }}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                    >
                      <path
                        d="M2 5L4 7L8 3"
                        stroke="#e8412a"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: '#a0a0a0' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Mock AI Verdict Card */}
          <div>
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                backgroundColor: '#111111',
                border: '1px solid #2a2a2a',
                boxShadow: '0 0 60px rgba(0,0,0,0.5)',
              }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: '#e8412a' }}
                  />
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: '#6b6b6b', letterSpacing: '0.12em' }}
                  >
                    AI Analyst Verdict
                  </span>
                </div>
                <span
                  className="text-xs font-medium px-2 py-1 rounded"
                  style={{
                    backgroundColor: 'rgba(232,65,42,0.1)',
                    color: '#e8412a',
                    border: '1px solid rgba(232,65,42,0.2)',
                  }}
                >
                  Claude AI
                </span>
              </div>

              {/* Verdict row */}
              <div
                className="flex items-center gap-4 mb-6 p-4 rounded-lg"
                style={{ backgroundColor: 'rgba(232,65,42,0.06)', border: '1px solid rgba(232,65,42,0.12)' }}
              >
                <div>
                  <p className="text-xs font-medium mb-1" style={{ color: '#6b6b6b' }}>
                    Verdict
                  </p>
                  <p className="text-xl font-black" style={{ color: '#e8412a' }}>
                    Likely Phishing
                  </p>
                </div>
                <div
                  className="ml-auto text-right"
                  style={{ borderLeft: '1px solid #2a2a2a', paddingLeft: '1.5rem' }}
                >
                  <p className="text-xs font-medium mb-1" style={{ color: '#6b6b6b' }}>
                    Confidence
                  </p>
                  <p className="text-xl font-black text-white">High</p>
                </div>
              </div>

              {/* AI Explanation */}
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: '#4a4a4a', letterSpacing: '0.12em' }}
                >
                  Analysis
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#a0a0a0' }}>
                  This URL exhibits multiple behavioral indicators consistent with
                  credential harvesting. The domain{' '}
                  <code
                    className="text-xs px-1 py-0.5 rounded"
                    style={{ backgroundColor: '#1a1a1a', color: '#e8412a' }}
                  >
                    secure-login-verify.net
                  </code>{' '}
                  was registered 3 days ago via a privacy-shielded registrar and
                  resolves to infrastructure previously associated with phishing
                  campaigns targeting financial institutions.
                </p>
                <p className="text-sm leading-relaxed mt-3" style={{ color: '#a0a0a0' }}>
                  The page mimics a banking login portal with a spoofed favicon
                  and forged SSL certificate. The redirect chain passes through
                  two URL shorteners before reaching the final payload, a common
                  evasion technique to bypass static blocklists. VirusTotal flags
                  this domain across 14 detection engines.
                </p>
              </div>

              {/* Footer tags */}
              <div className="flex flex-wrap gap-2 mt-6 pt-5" style={{ borderTop: '1px solid #1a1a1a' }}>
                {['Domain Age: 3 days', '14 VT Detections', 'Redirect Chain', 'Brand Spoofing'].map(
                  tag => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded"
                      style={{ backgroundColor: '#1a1a1a', color: '#6b6b6b', border: '1px solid #2a2a2a' }}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
