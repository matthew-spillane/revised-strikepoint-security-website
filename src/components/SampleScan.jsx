export default function SampleScan() {
  return (
    <section
      className="px-6 py-24 md:py-32"
      style={{
        backgroundColor: '#0a0a0a',
        borderTop: '1px solid #111111',
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#e8412a', letterSpacing: '0.15em' }}
          >
            Sample Scan Result
          </p>
          <h2
            className="text-3xl md:text-4xl font-black text-white mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            See SafeLink catch phishing in real time.
          </h2>
          <p className="text-base" style={{ color: '#a0a0a0' }}>
            A realistic example of what every SafeLink analysis looks like.
          </p>
        </div>

        {/* Mock Scan UI */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: '1px solid #2a2a2a',
            boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
          }}
        >
          {/* Window chrome */}
          <div
            className="flex items-center gap-2 px-5 py-3"
            style={{ backgroundColor: '#0d0d0d', borderBottom: '1px solid #1a1a1a' }}
          >
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff5f57' }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ffbd2e' }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28c840' }} />
            <div
              className="ml-4 flex-1 max-w-sm rounded px-3 py-1 text-xs"
              style={{ backgroundColor: '#1a1a1a', color: '#4a4a4a' }}
            >
              safelink.strikepointsec.com
            </div>
          </div>

          {/* Scan Input Bar */}
          <div className="px-6 py-5" style={{ backgroundColor: '#0f0f0f', borderBottom: '1px solid #1a1a1a' }}>
            <div className="flex items-center gap-3">
              <div
                className="flex-1 flex items-center gap-3 px-4 py-3 rounded-lg"
                style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M10.667 10.667L14 14M1.333 6.667a5.333 5.333 0 1 0 10.667 0 5.333 5.333 0 0 0-10.667 0Z"
                    stroke="#4a4a4a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-sm font-mono" style={{ color: '#e8412a' }}>
                  http://secure-paypal-verify-account.tk/login?ref=5928c1
                </span>
              </div>
              <div
                className="px-4 py-3 rounded-lg text-sm font-semibold"
                style={{ backgroundColor: '#e8412a', color: '#fff' }}
              >
                Analyze
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="p-6 md:p-8" style={{ backgroundColor: '#0f0f0f' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-7">
              {/* Risk Score */}
              <div
                className="rounded-xl p-5 text-center"
                style={{ backgroundColor: '#111111', border: '1px solid #2a2a2a' }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#6b6b6b' }}>
                  Risk Score
                </p>
                <div className="relative inline-flex items-center justify-center">
                  <svg width="80" height="80" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="34" fill="none" stroke="#1a1a1a" strokeWidth="8" />
                    <circle
                      cx="40"
                      cy="40"
                      r="34"
                      fill="none"
                      stroke="#e8412a"
                      strokeWidth="8"
                      strokeDasharray={`${2 * Math.PI * 34 * 0.87} ${2 * Math.PI * 34 * 0.13}`}
                      strokeDashoffset={2 * Math.PI * 34 * 0.25}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span
                    className="absolute text-2xl font-black"
                    style={{ color: '#e8412a' }}
                  >
                    87
                  </span>
                </div>
                <p className="text-xs mt-1" style={{ color: '#4a4a4a' }}>out of 100</p>
              </div>

              {/* Verdict */}
              <div
                className="rounded-xl p-5 flex flex-col items-center justify-center"
                style={{
                  backgroundColor: 'rgba(232,65,42,0.06)',
                  border: '1px solid rgba(232,65,42,0.15)',
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#6b6b6b' }}>
                  Verdict
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 2L3 6V10C3 14.4 6.1 18.5 10 19.5C13.9 18.5 17 14.4 17 10V6L10 2Z"
                      fill="rgba(232,65,42,0.2)"
                      stroke="#e8412a"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 8V11M10 13.5H10.01"
                      stroke="#e8412a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-2xl font-black" style={{ color: '#e8412a' }}>
                    Phishing
                  </span>
                </div>
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: 'rgba(232,65,42,0.1)',
                    color: '#e8412a',
                    border: '1px solid rgba(232,65,42,0.2)',
                  }}
                >
                  High Confidence
                </span>
              </div>

              {/* Detection Summary */}
              <div
                className="rounded-xl p-5"
                style={{ backgroundColor: '#111111', border: '1px solid #2a2a2a' }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#6b6b6b' }}>
                  Detections
                </p>
                <ul className="space-y-2.5">
                  {[
                    { label: 'VirusTotal', value: '19/90', flagged: true },
                    { label: 'Google Safe Browsing', value: 'Flagged', flagged: true },
                    { label: 'URLscan.io', value: 'Malicious', flagged: true },
                    { label: 'Domain Age', value: '2 days', flagged: true },
                  ].map(({ label, value, flagged }) => (
                    <li key={label} className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: '#6b6b6b' }}>
                        {label}
                      </span>
                      <span
                        className="text-xs font-semibold"
                        style={{ color: flagged ? '#e8412a' : '#4ade80' }}
                      >
                        {value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* AI Explanation Block */}
            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: '#111111', border: '1px solid #2a2a2a' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#e8412a' }} />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: '#6b6b6b', letterSpacing: '0.12em' }}
                >
                  AI Analyst Explanation
                </span>
                <span
                  className="ml-auto text-xs px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: 'rgba(232,65,42,0.08)',
                    color: '#e8412a',
                    border: '1px solid rgba(232,65,42,0.15)',
                  }}
                >
                  Claude AI
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-3" style={{ color: '#a0a0a0' }}>
                This URL is a high-confidence phishing attempt targeting PayPal users. The
                domain{' '}
                <code
                  className="text-xs px-1 py-0.5 rounded font-mono"
                  style={{ backgroundColor: '#1a1a1a', color: '#e8412a' }}
                >
                  secure-paypal-verify-account.tk
                </code>{' '}
                is a classic typosquat combining brand keywords with a low-cost{' '}
                <code
                  className="text-xs px-1 py-0.5 rounded font-mono"
                  style={{ backgroundColor: '#1a1a1a', color: '#a0a0a0' }}
                >
                  .tk
                </code>{' '}
                TLD frequently abused by threat actors due to free registration.
              </p>
              <p className="text-sm leading-relaxed mb-3" style={{ color: '#a0a0a0' }}>
                The domain was registered 2 days ago with WHOIS privacy enabled. The
                registration pattern, combined with the URL path structure (
                <code
                  className="text-xs px-1 py-0.5 rounded font-mono"
                  style={{ backgroundColor: '#1a1a1a', color: '#a0a0a0' }}
                >
                  /login?ref=
                </code>
                ), is consistent with credential-harvesting kits distributed in underground
                forums. The{' '}
                <code
                  className="text-xs px-1 py-0.5 rounded font-mono"
                  style={{ backgroundColor: '#1a1a1a', color: '#a0a0a0' }}
                >
                  ref=
                </code>{' '}
                parameter is used to track phishing campaign sources.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#a0a0a0' }}>
                19 out of 90 VirusTotal engines flag this URL as malicious, and Google
                Safe Browsing has added it to the phishing blocklist. URLscan.io analysis
                shows the page rendering a PayPal login clone with exfiltration scripts
                pointing to an attacker-controlled server in Eastern Europe.{' '}
                <strong style={{ color: '#ffffff' }}>
                  Do not visit this URL. Block at the perimeter and report to your threat
                  intelligence platform.
                </strong>
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5 pt-4" style={{ borderTop: '1px solid #1a1a1a' }}>
                {[
                  'Credential Harvesting',
                  'Brand Spoofing',
                  'Free TLD',
                  '19/90 VT',
                  'New Domain',
                  'Exfil Script',
                ].map(tag => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded"
                    style={{
                      backgroundColor: '#1a1a1a',
                      color: '#6b6b6b',
                      border: '1px solid #2a2a2a',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
