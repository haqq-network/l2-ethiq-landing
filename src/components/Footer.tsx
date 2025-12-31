import videoBgWebm from '../assets/bg_1_blue_below.webm'
import videoBgMp4 from '../assets/bg_1_blue_below_.mp4'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Build', href: '#build' },
    { label: 'Bridge', href: '#bridge' },
    { label: 'Ecosystem', href: '#ecosystem' },
  ]

  const socialLinks = [
    { 
      label: 'X (Twitter)', 
      href: 'https://twitter.com/ethiq',
      icon: '/assets/icons/x-icon.svg',
      iconLarge: '/assets/icons/x-icon-large.svg',
      iconSize: 'w-[14px] h-[12px]',
      iconSizeLarge: 'w-[39px] h-[39px]'
    },
    { 
      label: 'Discord', 
      href: 'https://discord.gg/ethiq',
      icon: '/assets/icons/discord-icon.svg',
      iconLarge: '/assets/icons/discord-icon-large.svg',
      iconSize: 'w-[12px] h-[12px]',
      iconSizeLarge: 'w-[39px] h-[39px]'
    },
    { 
      label: 'Telegram', 
      href: 'https://t.me/ethiq',
      icon: '/assets/icons/telegram-icon.svg',
      iconLarge: '/assets/icons/telegram-icon-large.svg',
      iconSize: 'w-[16px] h-[11px]',
      iconSizeLarge: 'w-[37px] h-[39px]'
    },
  ]

  return (
    <footer 
      className="relative flex flex-col items-center gap-5 pt-10 md:pt-20 pb-5 px-5 w-full overflow-hidden md:aspect-[1280/317]"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Video Background */}
      <div className="absolute inset-0 mix-blend-lighten overflow-hidden pointer-events-none" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover rotate-180 scale-y-[-1]"
        >
          <source src={videoBgWebm} type="video/webm" />
          <source src={videoBgMp4} type="video/mp4" />
        </video>
      </div>

      {/* Desktop Footer */}
      <nav 
        className="hidden md:flex items-center justify-center relative scroll-fade-up"
        aria-label="Footer navigation"
      >
        <div className="flex items-center w-[424px] justify-between">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-8 h-[17px]">
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
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[17px] h-[17px] flex items-center justify-center opacity-70 hover:opacity-100 transition-all hover:scale-110"
                  aria-label={`Follow ETHIQ on ${social.label}`}
                >
                  <img 
                    src={social.icon} 
                    alt="" 
                    className={social.iconSize}
                    aria-hidden="true"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Footer */}
      <div className="flex md:hidden flex-col items-center gap-10 w-full relative scroll-fade-up">
        {/* Social Icons - Larger on mobile */}
        <nav 
          className="flex items-center justify-center gap-[60px]"
          aria-label="Social media links"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.iconSizeLarge} opacity-70 hover:opacity-100 transition-all hover:scale-110`}
              aria-label={`Follow ETHIQ on ${social.label}`}
            >
              <img 
                src={social.iconLarge} 
                alt="" 
                className="w-full h-full"
                aria-hidden="true"
                loading="lazy"
              />
            </a>
          ))}
        </nav>
      </div>

      {/* Copyright */}
      <p className="relative font-normal text-[14px] text-ethiq-gray text-center md:text-right tracking-[-0.56px] leading-[1.2]">
        <small>© {currentYear} Ethiq. All rights reserved.</small>
      </p>
    </footer>
  )
}

export default Footer
