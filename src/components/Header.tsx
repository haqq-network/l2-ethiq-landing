const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-haqq-black/80 backdrop-blur-sm border-b border-haqq-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="shrink-0">
            <a href="/" className="text-xl md:text-2xl font-clash font-bold text-white">
              ETHIQ
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

