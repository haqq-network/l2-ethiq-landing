import { useState, useEffect, useCallback } from 'react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Build', href: '#build' },
    { label: 'Bridge', href: '#bridge' },
    { label: 'Ecosystem', href: '#ecosystem' },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-ethiq-nav/95 backdrop-blur-[32px] shadow-lg' 
          : 'bg-ethiq-nav backdrop-blur-[32px]'
      } border-b-[0.5px] border-ethiq`}
    >
      <nav 
        className="flex items-center justify-between h-[60px] px-5"
        role="navigation"
        aria-label="Main navigation"
      >
          {/* Logo */}
        <a 
          href="/" 
          className="shrink-0 transition-transform hover:scale-105"
          aria-label="ETHIQ - Go to homepage"
        >
          <img 
            src="/assets/icons/ethiq-logo.svg" 
            alt="ETHIQ" 
            className="h-4 w-[77px]"
            width="77"
            height="16"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-medium text-[14px] text-ethiq-gray hover:text-white transition-colors leading-[1.2] relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          
          {/* Social Icons */}
          <div 
            className="flex items-center gap-4"
            role="list"
            aria-label="Social media links"
          >
            <a
              href="https://twitter.com/ethiq"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[17px] h-[17px] flex items-center justify-center opacity-70 hover:opacity-100 transition-all hover:scale-110"
              aria-label="Follow ETHIQ on X (Twitter)"
            >
              <img src="/assets/icons/x-icon.svg" alt="" className="w-[14px] h-[12px]" aria-hidden="true" />
            </a>
            <a
              href="https://discord.gg/ethiq"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[17px] h-[17px] flex items-center justify-center opacity-70 hover:opacity-100 transition-all hover:scale-110"
              aria-label="Join ETHIQ Discord community"
            >
              <img src="/assets/icons/discord-icon.svg" alt="" className="w-[12px] h-[12px]" aria-hidden="true" />
            </a>
            <a
              href="https://t.me/ethiq"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[17px] h-[17px] flex items-center justify-center opacity-70 hover:opacity-100 transition-all hover:scale-110"
              aria-label="Join ETHIQ Telegram channel"
            >
              <img src="/assets/icons/telegram-icon.svg" alt="" className="w-[16px] h-[11px]" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center -mr-2 transition-transform active:scale-95"
          onClick={toggleMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <img src="/assets/icons/menu-icon.svg" alt="" className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`md:hidden bg-ethiq-nav border-t border-ethiq-light overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col px-5 pb-5 gap-6">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className="font-medium text-[18px] text-white py-3 border-b border-ethiq-lighter last:border-0 transition-colors hover:text-ethiq-gray"
              onClick={closeMenu}
              tabIndex={isMobileMenuOpen ? 0 : -1}
              style={{ 
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'opacity 0.3s ease, transform 0.3s ease'
              }}
            >
              {item.label}
            </a>
          ))}
          
          {/* Social Icons Mobile */}
          <div 
            className="flex items-center gap-8 pt-4"
            role="list"
            aria-label="Social media links"
          >
            <a
              href="https://twitter.com/ethiq"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-all hover:scale-110"
              aria-label="Follow ETHIQ on X (Twitter)"
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              <img src="/assets/icons/x-icon-large.svg" alt="" className="w-[39px] h-[39px]" aria-hidden="true" />
            </a>
            <a
              href="https://discord.gg/ethiq"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-all hover:scale-110"
              aria-label="Join ETHIQ Discord community"
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              <img src="/assets/icons/discord-icon-large.svg" alt="" className="w-[39px] h-[39px]" aria-hidden="true" />
            </a>
            <a
              href="https://t.me/ethiq"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-all hover:scale-110"
              aria-label="Join ETHIQ Telegram channel"
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              <img src="/assets/icons/telegram-icon-large.svg" alt="" className="w-[37px] h-[39px]" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
