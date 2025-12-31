import { useState } from 'react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Build', href: '#build' },
    { label: 'Bridge', href: '#bridge' },
    { label: 'Ecosystem', href: '#ecosystem' },
  ]

  const socialLinks = [
    { 
      icon: '/assets/icons/x-icon.svg', 
      href: 'https://twitter.com/ethiq', 
      label: 'X (Twitter)' 
    },
    { 
      icon: '/assets/icons/discord-icon.svg', 
      href: 'https://discord.gg/ethiq', 
      label: 'Discord' 
    },
    { 
      icon: '/assets/icons/telegram-icon.svg', 
      href: 'https://t.me/ethiq', 
      label: 'Telegram' 
    },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ethiq-nav backdrop-blur-[32px] border-b border-ethiq-border/50">
      <div className="flex items-center justify-between h-[60px] px-5">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <img 
            src="/assets/icons/ethiq-logo.svg" 
            alt="ETHIQ" 
            className="h-4 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-medium text-sm text-ethiq-gray hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          
          {/* Social Icons */}
          <div className="flex items-center gap-4 ml-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[17px] h-[17px] opacity-70 hover:opacity-100 transition-opacity"
                aria-label={link.label}
              >
                <img src={link.icon} alt="" className="w-full h-full" />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-ethiq-nav border-t border-ethiq-border/50">
          <div className="flex flex-col p-5 gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-lg text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            {/* Social Icons Mobile */}
            <div className="flex items-center gap-6 pt-4 border-t border-ethiq-border/50">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity"
                  aria-label={link.label}
                >
                  <img src={link.icon} alt="" className="w-full h-full" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header
