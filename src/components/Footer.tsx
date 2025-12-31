import videoBgWebm from '../assets/bg_1_blue_below.webm'
import videoBgMp4 from '../assets/bg_1_blue_below_.mp4'

const Footer = () => {
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
    <footer className="relative flex flex-col items-center gap-5 pt-10 md:pt-20 pb-5 px-5 w-full overflow-hidden mt-[120px] md:mt-0" style={{ aspectRatio: 'auto', minHeight: '317px' }}>
      {/* Video Background */}
      <div className="absolute inset-0 mix-blend-lighten overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute h-[227%] w-full left-0 top-[-127%] object-cover rotate-180 scale-y-[-1]"
        >
          <source src={videoBgWebm} type="video/webm" />
          <source src={videoBgMp4} type="video/mp4" />
        </video>
      </div>

      {/* Desktop Footer */}
      <div className="hidden md:flex items-center justify-center relative">
        <div className="flex items-center gap-8">
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
      </div>

      {/* Mobile Footer */}
      <div className="flex md:hidden flex-col items-center gap-10 w-full relative">
        {/* Social Icons - Larger on mobile */}
        <div className="flex items-center justify-center gap-[60px]">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[39px] h-[39px] opacity-70 hover:opacity-100 transition-opacity"
              aria-label={link.label}
            >
              <img src={link.icon} alt="" className="w-full h-full" />
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <p className="relative font-normal text-[14px] text-ethiq-gray text-center tracking-[-0.56px] leading-[1.2]">
        © 2025 Ethiq
      </p>
    </footer>
  )
}

export default Footer
