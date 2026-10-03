import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Target, Droplet, Sparkles, Heart, Zap, Scissors, Waves, Microscope } from 'lucide-react'
import { SERVICES } from '@/data/services'

const iconMap = {
  Target,
  Droplet,
  Sparkles,
  Heart,
  Zap,
  Scissors,
  Waves,
  Microscope,
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-rose-100 to-pink-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-100 to-rose-100 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-200 mb-8">
              <span className="text-sm font-medium text-rose-700">Premium Aesthetic Treatments</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Comprehensive aesthetic treatments designed to enhance your natural beauty and boost your confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap]
              return (
                <Card key={service.id} id={service.id} className="group relative overflow-hidden border-2 border-gray-100 hover:border-rose-200 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-100/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-50/0 via-rose-50/0 to-rose-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {IconComponent && <IconComponent className="h-10 w-10 text-rose-600" />}
                    </div>
                    <CardTitle className="text-2xl text-gray-900 group-hover:text-rose-600 transition-colors">{service.title}</CardTitle>
                    <CardDescription className="text-lg text-gray-600 leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10 space-y-6">
                    <p className="text-gray-600 leading-relaxed">{service.details}</p>
                    <div className="flex gap-8 text-base pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">Duration:</span>
                        <span className="text-gray-600">{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">Recovery:</span>
                        <span className="text-gray-600">{service.recovery}</span>
                      </div>
                    </div>
                    {service.price && (
                      <div className="text-xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent pt-4">
                        {service.price}
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-600 via-pink-600 to-purple-600">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NEgxNnYtMmgydi00aDR2MmgtMnY0aDR2MmgtMnY0aDR2MmgtMnY0LTR2LTJoLTR2LTJoLTR2LTJoLTJ2NGgtNHYtMmg0djJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        </div>
        <div className="container px-4 md:px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-white/90 leading-relaxed">
              Schedule a consultation to discuss your aesthetic goals and create a personalized treatment plan.
            </p>
            <Button asChild size="lg" className="rounded-full px-12 py-6 text-base bg-white text-rose-600 hover:bg-gray-100 shadow-2xl">
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
