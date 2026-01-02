import videoBgMp4 from '../assets/bg_1_blue_below_.mp4'
import { navLinks, socialLinks } from '../config/links'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer 
      className="relative flex flex-col items-center gap-5 pt-10 md:pt-20 pb-5 px-5 w-full overflow-hidden md:aspect-[1280/317]"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Video Background */}
      <div className="hidden md:block absolute inset-0 mix-blend-lighten overflow-hidden pointer-events-none" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 top-[-127.11%] w-full h-[227.13%] max-w-none rotate-180 scale-y-[-1]"
        >
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
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
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
                  aria-label={`Follow Haqq Network on ${social.label}`}
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
