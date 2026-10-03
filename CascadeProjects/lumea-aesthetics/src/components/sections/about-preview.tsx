import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { TEAM } from '@/data/team'

export default function AboutPreview() {
  const doctor = TEAM[0]
  
  return (
    <section className="relative py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-rose-100 to-pink-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-purple-100 to-rose-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            {/* Main image card */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-rose-200 via-pink-200 to-purple-200 flex items-center justify-center shadow-2xl border-4 border-white">
                <div className="text-center p-8 space-y-6">
                  <div className="text-8xl">👩‍⚕️</div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</p>
                    <p className="text-base text-gray-700 max-w-xs mx-auto leading-relaxed">{doctor.role}</p>
                  </div>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">10+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
              </div>

              {/* Certification badge */}
              <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                <div className="text-center">
                  <div className="text-4xl">✓</div>
                  <div className="text-sm text-gray-600 font-medium">Certified</div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-200">
                <span className="text-sm font-medium text-rose-700">Meet Our Expert</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Dr. Faranak Roshan
              </h2>
              <p className="text-xl text-rose-600 font-semibold">
                International Medical Graduate & Certified Cosmetic Injector
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                At Lumea X Aesthetic Clinic in North York, Toronto, we specialize in advanced, personalized medical aesthetic treatments designed to enhance your natural beauty.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our clinic is led by Faranak Roshan, IMG, an International Medical Graduate and certified cosmetic injector with over 10 years of hands-on experience in the field.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are committed to delivering safe, evidence-based treatments in a modern and welcoming environment using high-quality products and the latest techniques.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full px-10 py-6 text-base bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 shadow-xl shadow-rose-200">
                <Link href="/about">Learn More About Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-10 py-6 text-base border-2 hover:bg-gray-50">
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
