import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Sparkles, Droplet, Target, Heart } from 'lucide-react'
import { SERVICES } from '@/data/services'

const previewServices = SERVICES.slice(0, 4)

const iconMap = {
  Target,
  Droplet,
  Sparkles,
  Heart,
}

export default function ServicesPreview() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-rose-100 to-orange-100 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 mb-6">
            <span className="text-sm font-medium text-purple-700">Premium Treatments</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Our Signature Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of aesthetic treatments designed to enhance your natural beauty and boost your confidence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {previewServices.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            return (
              <Card 
                key={service.id} 
                className="group relative overflow-hidden border-2 border-gray-100 hover:border-rose-200 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-100/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/0 via-rose-50/0 to-rose-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {IconComponent && <IconComponent className="h-8 w-8 text-rose-600" />}
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-rose-600 transition-colors">{service.title}</CardTitle>
                  <CardDescription className="text-base text-gray-600 leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
        
        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="rounded-full px-10 py-6 text-base border-2 hover:bg-rose-50 hover:border-rose-300 transition-all">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
