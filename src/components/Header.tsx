import { useState } from 'react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Build', href: '#build' },
    { label: 'Bridge', href: '#bridge' },
    { label: 'Ecosystem', href: '#ecosystem' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ethiq-nav backdrop-blur-[32px] border-b-[0.5px] border-ethiq">
      <div className="flex items-center justify-between h-[60px] px-5">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <img 
            src="/assets/icons/ethiq-logo.svg" 
            alt="ETHIQ" 
            className="h-4 w-[77px]"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-medium text-[14px] text-ethiq-gray hover:text-white transition-colors leading-[1.2]"
            >
              {item.label}
            </a>
          ))}
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com/ethiq"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[17px] h-[17px] flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              aria-label="X (Twitter)"
            >
              <img src="/assets/icons/x-icon.svg" alt="" className="w-[14px] h-[12px]" />
            </a>
            <a
              href="https://discord.gg/ethiq"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[17px] h-[17px] flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Discord"
            >
              <img src="/assets/icons/discord-icon.svg" alt="" className="w-[12px] h-[12px]" />
            </a>
            <a
              href="https://t.me/ethiq"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[17px] h-[17px] flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Telegram"
            >
              <img src="/assets/icons/telegram-icon.svg" alt="" className="w-[16px] h-[11px]" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-6 h-6 flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <img src="/assets/icons/menu-icon.svg" alt="" className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-ethiq-nav border-t border-ethiq-light overflow-hidden">
          <div className="flex flex-col px-5 pb-5 gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-[18px] text-white py-3 border-b border-ethiq-lighter last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            {/* Social Icons Mobile */}
            <div className="flex items-center gap-8 pt-4">
              <a
                href="https://twitter.com/ethiq"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="X (Twitter)"
              >
                <img src="/assets/icons/x-icon-large.svg" alt="" className="w-[39px] h-[39px]" />
              </a>
              <a
                href="https://discord.gg/ethiq"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Discord"
              >
                <img src="/assets/icons/discord-icon-large.svg" alt="" className="w-[39px] h-[39px]" />
              </a>
              <a
                href="https://t.me/ethiq"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Telegram"
              >
                <img src="/assets/icons/telegram-icon-large.svg" alt="" className="w-[37px] h-[39px]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header
