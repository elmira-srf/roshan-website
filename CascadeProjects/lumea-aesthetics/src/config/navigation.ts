export const NAVIGATION = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const

export const FOOTER_LINKS = {
  quick: [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
  services: [
    { href: '/services#botox', label: 'Botox' },
    { href: '/services#fillers', label: 'Dermal Fillers' },
    { href: '/services#facials', label: 'Facial Treatments' },
    { href: '/services#wellness', label: 'Sexual Wellness' },
  ],
} as const
