import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Target, Droplet, Sparkles, Heart, Zap, Scissors, Waves, Microscope } from 'lucide-react'

const services = [
  {
    id: 'botox',
    title: 'Botox Injections',
    description: 'Reduce fine lines and wrinkles for a smoother, more youthful appearance.',
    icon: Target,
    category: 'face',
    details: 'Botox is a FDA-approved treatment that temporarily relaxes facial muscles to smooth out wrinkles and prevent new ones from forming. Perfect for forehead lines, crow\'s feet, and frown lines.',
    duration: '15-30 minutes',
    recovery: 'Minimal downtime'
  },
  {
    id: 'fillers',
    title: 'Dermal Fillers',
    description: 'Restore volume and enhance contours with natural-looking results.',
    icon: Droplet,
    category: 'face',
    details: 'Our premium dermal fillers add volume to areas that have lost fullness due to aging. Ideal for lips, cheeks, nasolabial folds, and jawline contouring.',
    duration: '30-60 minutes',
    recovery: 'Minimal downtime'
  },
  {
    id: 'facials',
    title: 'Facial Treatments',
    description: 'Customized facials to rejuvenate and nourish your skin.',
    icon: Sparkles,
    category: 'face',
    details: 'From deep cleansing facials to advanced treatments like chemical peels and microneedling, we offer personalized skincare solutions for all skin types.',
    duration: '45-90 minutes',
    recovery: 'No downtime'
  },
  {
    id: 'wellness',
    title: 'Sexual Wellness',
    description: 'Specialized treatments for intimate health and wellness.',
    icon: Heart,
    category: 'wellness',
    details: 'Discreet and professional treatments for intimate concerns, including O-shot and other rejuvenation procedures to enhance confidence and wellness.',
    duration: '30-45 minutes',
    recovery: 'Minimal downtime'
  },
  {
    id: 'laser',
    title: 'Laser Hair Removal',
    description: 'Long-lasting hair reduction for smooth, hair-free skin.',
    icon: Zap,
    category: 'body',
    details: 'Advanced laser technology for safe and effective hair reduction on face and body. Multiple sessions recommended for optimal results.',
    duration: '15-60 minutes',
    recovery: 'No downtime'
  },
  {
    id: 'contouring',
    title: 'Face & Body Contouring',
    description: 'Non-invasive sculpting for your ideal silhouette.',
    icon: Scissors,
    category: 'body',
    details: 'Cutting-edge body contouring treatments to target stubborn fat and tighten skin without surgery. Perfect for abdomen, thighs, and arms.',
    duration: '30-90 minutes',
    recovery: 'Minimal downtime'
  },
  {
    id: 'prp',
    title: 'PRP Therapy',
    description: 'Platelet-Rich Plasma for natural skin rejuvenation.',
    icon: Microscope,
    category: 'face',
    details: 'Harness your body\'s natural healing power with PRP therapy. Stimulates collagen production for improved skin texture, tone, and overall rejuvenation.',
    duration: '45-60 minutes',
    recovery: 'Minimal downtime'
  },
  {
    id: 'microneedling',
    title: 'Microneedling & RF',
    description: 'Advanced skin rejuvenation with radiofrequency technology.',
    icon: Waves,
    category: 'face',
    details: 'Combines traditional microneedling with radiofrequency energy to stimulate collagen, reduce scars, and improve skin texture for a radiant complexion.',
    duration: '45-60 minutes',
    recovery: '1-3 days'
  }
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive aesthetic treatments designed to enhance your natural beauty and boost your confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} id={service.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.details}</p>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <span className="font-medium">Duration:</span> {service.duration}
                    </div>
                    <div>
                      <span className="font-medium">Recovery:</span> {service.recovery}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a consultation to discuss your aesthetic goals and create a personalized treatment plan.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Book Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
