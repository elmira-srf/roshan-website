export interface Service {
  id: string
  title: string
  description: string
  icon: string
  category: 'face' | 'body' | 'wellness'
  price?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image?: string
}
