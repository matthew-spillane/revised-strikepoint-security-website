const SAFELINK_URL = 'https://safelink.strikepointsec.com'

export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
      style={{
        backgroundColor: 'rgba(10,10,10,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #1a1a1a',
      }}
    >
      {/* Logo + Wordmark */}
      <a href="/" className="flex items-center gap-3">
        <img
          src="/logoclose.png"
          alt="Strikepoint Security"
          className="h-9 w-9 object-contain"
        />
        <span
          className="text-white font-bold text-lg tracking-tight hidden sm:block"
          style={{ letterSpacing: '-0.02em' }}
        >
          Strikepoint Security
        </span>
      </a>

      {/* Nav Links */}
      <div className="flex items-center gap-6 md:gap-8">
        <a
          href="/"
          className="text-sm font-medium transition-colors duration-200"
          style={{ color: '#a0a0a0' }}
          onMouseEnter={e => (e.target.style.color = '#ffffff')}
          onMouseLeave={e => (e.target.style.color = '#a0a0a0')}
        >
          Home
        </a>
        <a
          href="#about"
          className="text-sm font-medium transition-colors duration-200 hidden md:block"
          style={{ color: '#a0a0a0' }}
          onMouseEnter={e => (e.target.style.color = '#ffffff')}
          onMouseLeave={e => (e.target.style.color = '#a0a0a0')}
        >
          About
        </a>
        <a
          href={SAFELINK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold px-4 py-2 rounded transition-colors duration-200"
          style={{
            backgroundColor: '#e8412a',
            color: '#ffffff',
          }}
          onMouseEnter={e => (e.target.style.backgroundColor = '#b83220')}
          onMouseLeave={e => (e.target.style.backgroundColor = '#e8412a')}
        >
          Launch SafeLink
        </a>
      </div>
    </nav>
  )
}
