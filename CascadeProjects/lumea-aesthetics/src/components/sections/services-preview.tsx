import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Sparkles, Droplet, Target, Heart } from 'lucide-react'

const services = [
  {
    title: 'Botox',
    description: 'Reduce fine lines and wrinkles for a smoother, more youthful appearance.',
    icon: Target,
    href: '/services#botox'
  },
  {
    title: 'Dermal Fillers',
    description: 'Restore volume and enhance contours with natural-looking results.',
    icon: Droplet,
    href: '/services#fillers'
  },
  {
    title: 'Facial Treatments',
    description: 'Customized facials to rejuvenate and nourish your skin.',
    icon: Sparkles,
    href: '/services#facials'
  },
  {
    title: 'Sexual Wellness',
    description: 'Specialized treatments for intimate health and wellness.',
    icon: Heart,
    href: '/services#wellness'
  }
]

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of aesthetic treatments designed to enhance your natural beauty and boost your confidence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
