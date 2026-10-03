export const SITE_CONFIG = {
  name: 'Lumea X Medical Aesthetics',
  tagline: 'Your Destination for Advanced Cosmetic Care in North York, Toronto',
  description: 'Expert Botox, fillers, and aesthetic treatments by Dr. Faranak Roshan with over 10 years of experience.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
} as const

export const CONTACT_INFO = {
  phone: process.env.NEXT_PUBLIC_PHONE || '+1 (672) 272-8223',
  email: process.env.NEXT_PUBLIC_EMAIL || 'info@lumeaxaesthetics.ca',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '16722728223',
  location: 'North York, Toronto, Ontario, Canada',
} as const

export const SOCIAL_LINKS = {
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM || 'https://instagram.com/dr.faranakroshan',
  facebook: process.env.NEXT_PUBLIC_FACEBOOK || 'https://facebook.com/dr.faranakroshan',
} as const

export const HOURS = {
  weekdays: '9:00 AM - 6:00 PM',
  saturday: '10:00 AM - 4:00 PM',
  sunday: 'Closed',
} as const
