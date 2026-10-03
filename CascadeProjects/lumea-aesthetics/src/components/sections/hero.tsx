import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { SITE_CONFIG } from '@/constants/site'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-rose-100 to-pink-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-100 to-rose-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-transparent via-rose-50/30 to-transparent"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen py-20">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-200">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                <span className="text-sm font-medium text-rose-700">Now accepting new patients</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="block">Redefine Your</span>
                <span className="block bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Natural Beauty
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                {SITE_CONFIG.tagline}
              </p>
            </div>

            <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
              With over a decade of experience in the medical aesthetics industry, we bring trusted expertise and personalized care to help you look and feel your absolute best.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="text-base px-10 py-6 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 shadow-xl shadow-rose-200">
                <Link href="/contact">Book Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-10 py-6 rounded-full border-2 hover:bg-gray-50">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">5000+</div>
                <div className="text-sm text-gray-500">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-500">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Main card */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50">
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-rose-200 via-pink-200 to-purple-200 flex items-center justify-center">
                  <div className="text-center space-y-6 p-8">
                    <div className="text-8xl">✨</div>
                    <div>
                      <p className="text-3xl font-bold text-gray-900 mb-2">Enhance Your</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                        Natural Beauty
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                    <span className="text-xl">💉</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Botox</div>
                    <div className="text-xs text-gray-500">Popular</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-xl">💄</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Fillers</div>
                    <div className="text-xs text-gray-500">Natural</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
