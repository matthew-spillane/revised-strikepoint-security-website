const SAFELINK_URL = 'https://safelink.strikepointsec.com'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="px-6 py-10 md:px-12"
      style={{
        backgroundColor: '#0a0a0a',
        borderTop: '1px solid #1a1a1a',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + wordmark */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logoclose.png"
            alt="Strikepoint Security"
            className="h-8 w-8 object-contain"
          />
          <span className="text-white font-bold text-base" style={{ letterSpacing: '-0.01em' }}>
            Strikepoint Security
          </span>
        </a>

        {/* Center links */}
        <div className="flex items-center gap-6">
          <a
            href={SAFELINK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors duration-200"
            style={{ color: '#6b6b6b' }}
            onMouseEnter={e => (e.target.style.color = '#a0a0a0')}
            onMouseLeave={e => (e.target.style.color = '#6b6b6b')}
          >
            SafeLink
          </a>
          <a
            href="#ai-analyst"
            className="text-sm transition-colors duration-200"
            style={{ color: '#6b6b6b' }}
            onMouseEnter={e => (e.target.style.color = '#a0a0a0')}
            onMouseLeave={e => (e.target.style.color = '#6b6b6b')}
          >
            About
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs" style={{ color: '#4a4a4a' }}>
          &copy; {year} Strikepoint Security. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
