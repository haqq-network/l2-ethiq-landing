export const navLinks = [
  { 
    label: 'About', 
    href: '#about',
    external: false
  },
  { 
    label: 'Build', 
    href: 'https://docs.ethiq.network',
    external: true
  },
  { 
    label: 'Bridge', 
    href: 'https://shell.haqq.network/bridge',
    external: true
  },
  { 
    label: 'Ecosystem', 
    href: '#ecosystem',
    external: false
  },
] as const

export const socialLinks = [
  { 
    label: 'X (Twitter)', 
    href: 'https://x.com/The_HaqqNetwork',
    icon: '/assets/icons/x-icon.svg',
    iconLarge: '/assets/icons/x-icon-large.svg',
    iconSize: 'w-[14px] h-[12px]',
    iconSizeLarge: 'w-[39px] h-[39px]'
  },
  { 
    label: 'Discord', 
    href: 'https://discord.gg/Vengxp9fDB',
    icon: '/assets/icons/discord-icon.svg',
    iconLarge: '/assets/icons/discord-icon-large.svg',
    iconSize: 'w-[12px] h-[12px]',
    iconSizeLarge: 'w-[39px] h-[39px]'
  },
  { 
    label: 'Telegram', 
    href: 'https://t.me/islamic_coin',
    icon: '/assets/icons/telegram-icon.svg',
    iconLarge: '/assets/icons/telegram-icon-large.svg',
    iconSize: 'w-[16px] h-[11px]',
    iconSizeLarge: 'w-[37px] h-[39px]'
  },
] as const

export const ctaLinks = {
  bridge: {
    href: 'https://shell.haqq.network/bridge',
    label: 'Bridge to Ethiq',
    ariaLabel: 'Bridge to Ethiq blockchain'
  },
  build: {
    href: 'https://docs.ethiq.network',
    label: 'Start building',
    ariaLabel: 'Start building on Ethiq'
  }
} as const

