import { useState } from 'react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-haqq-black/80 backdrop-blur-sm border-b border-haqq-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl md:text-2xl font-clash font-bold text-white">
              ETHIQ
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a
              href="#about"
              className="text-white hover:text-haqq-orange transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#features"
              className="text-white hover:text-haqq-orange transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#technology"
              className="text-white hover:text-haqq-orange transition-colors duration-200"
            >
              Technology
            </a>
            <a
              href="#community"
              className="text-white hover:text-haqq-orange transition-colors duration-200"
            >
              Community
            </a>
            <button className="bg-haqq-orange hover:bg-haqq-bigfoot-feet text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-haqq-orange transition-colors duration-200"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-haqq-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#about"
                className="block px-3 py-2 text-white hover:text-haqq-orange hover:bg-haqq-blue/20 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#features"
                className="block px-3 py-2 text-white hover:text-haqq-orange hover:bg-haqq-blue/20 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#technology"
                className="block px-3 py-2 text-white hover:text-haqq-orange hover:bg-haqq-blue/20 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Technology
              </a>
              <a
                href="#community"
                className="block px-3 py-2 text-white hover:text-haqq-orange hover:bg-haqq-blue/20 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Community
              </a>
              <button
                className="w-full mt-4 bg-haqq-orange hover:bg-haqq-bigfoot-feet text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

