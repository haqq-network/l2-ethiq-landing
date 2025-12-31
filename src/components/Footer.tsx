import videoBgWebm from '../assets/bg_1_blue_below.webm'
import videoBgMp4 from '../assets/bg_1_blue_below_.mp4'

const Footer = () => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Build', href: '#build' },
    { label: 'Bridge', href: '#bridge' },
    { label: 'Ecosystem', href: '#ecosystem' },
  ]

  return (
    <footer className="relative flex flex-col items-center gap-5 pt-10 md:pt-20 pb-5 px-5 w-full overflow-hidden md:aspect-[1280/317]">
      {/* Video Background */}
      <div className="absolute inset-0 mix-blend-lighten overflow-hidden pointer-events-none">
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
      <div className="hidden md:flex items-center justify-center relative">
        <div className="flex items-center w-[424px] justify-between">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-8 h-[17px]">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-medium text-[14px] text-ethiq-gray hover:text-white transition-colors leading-[1.2]"
                  style={{ 
                    position: index === 0 ? 'relative' : 'relative',
                  }}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Social Icons */}
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
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="flex md:hidden flex-col items-center gap-10 w-full relative">
        {/* Social Icons - Larger on mobile */}
        <div className="flex items-center justify-center gap-[60px]">
          <a
            href="https://twitter.com/ethiq"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[39px] h-[39px] opacity-70 hover:opacity-100 transition-opacity"
            aria-label="X (Twitter)"
          >
            <img src="/assets/icons/x-icon-large.svg" alt="" className="w-full h-full" />
          </a>
          <a
            href="https://discord.gg/ethiq"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[39px] h-[39px] opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Discord"
          >
            <img src="/assets/icons/discord-icon-large.svg" alt="" className="w-full h-full" />
          </a>
          <a
            href="https://t.me/ethiq"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[37px] h-[39px] opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Telegram"
          >
            <img src="/assets/icons/telegram-icon-large.svg" alt="" className="w-full h-full" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="relative font-normal text-[14px] text-ethiq-gray text-center md:text-right tracking-[-0.56px] leading-[1.2] w-[81px]">
        © 2025 Ethiq
      </p>
    </footer>
  )
}

export default Footer
