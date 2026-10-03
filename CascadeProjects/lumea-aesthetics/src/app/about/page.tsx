import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Award, Shield, Heart, Users } from 'lucide-react'
import { TEAM } from '@/data/team'

export default function AboutPage() {
  const doctor = TEAM[0]

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
              <span className="text-sm font-medium text-rose-700">About Our Clinic</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight">
              About Lumea X
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Your destination for advanced cosmetic care in North York, Toronto
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
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

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Meet Dr. Faranak Roshan
                </h2>
                <p className="text-xl text-rose-600 font-semibold">
                  International Medical Graduate & Certified Cosmetic Injector
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Dr. Faranak Roshan is an International Medical Graduate (IMG) and a certified cosmetic injector with over 10 years of hands-on experience in the medical aesthetics field.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Her expertise spans a wide range of aesthetic treatments, from injectables like Botox and dermal fillers to advanced skin rejuvenation procedures. Dr. Roshan is committed to staying at the forefront of aesthetic medicine through continuous education and training.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With a passion for helping patients achieve their aesthetic goals, Dr. Roshan takes a personalized approach to each treatment, ensuring natural-looking results that enhance each patient's unique beauty.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="rounded-full px-10 py-6 text-base bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 shadow-xl shadow-rose-200">
                  <Link href="/contact">Book Consultation</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-32">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 mb-6">
                <span className="text-sm font-medium text-purple-700">Our Core Values</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Our Values
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group relative overflow-hidden border-2 border-gray-100 hover:border-rose-200 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-100/50">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/0 via-rose-50/0 to-rose-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Award className="h-8 w-8 text-rose-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-rose-600 transition-colors">Expertise</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600 text-base leading-relaxed">
                    Over a decade of experience in medical aesthetics with certified training and continuous education.
                  </p>
                </CardContent>
              </Card>
              <Card className="group relative overflow-hidden border-2 border-gray-100 hover:border-rose-200 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-100/50">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/0 via-rose-50/0 to-rose-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Shield className="h-8 w-8 text-rose-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-rose-600 transition-colors">Safety First</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600 text-base leading-relaxed">
                    Evidence-based treatments using only high-quality, FDA-approved products and the latest techniques.
                  </p>
                </CardContent>
              </Card>
              <Card className="group relative overflow-hidden border-2 border-gray-100 hover:border-rose-200 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-100/50">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/0 via-rose-50/0 to-rose-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Heart className="h-8 w-8 text-rose-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-rose-600 transition-colors">Personalized Care</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600 text-base leading-relaxed">
                    Every treatment is tailored to your unique goals and anatomy for natural, beautiful results.
                  </p>
                </CardContent>
              </Card>
              <Card className="group relative overflow-hidden border-2 border-gray-100 hover:border-rose-200 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-100/50">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/0 via-rose-50/0 to-rose-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Users className="h-8 w-8 text-rose-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-rose-600 transition-colors">Comfort & Trust</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600 text-base leading-relaxed">
                    A warm, welcoming environment where you can feel confident and supported throughout your journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-200 mb-6">
                <span className="text-sm font-medium text-rose-700">Our Journey</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Our Story
              </h2>
            </div>
            <div className="space-y-8 text-gray-600 text-lg leading-relaxed">
              <p>
                Lumea X Medical Aesthetics Clinic was founded with a singular vision: to bring world-class aesthetic treatments to North York, Toronto in a setting that prioritizes patient comfort, safety, and satisfaction.
              </p>
              <p>
                We understand that every individual is different—that's why we offer customized aesthetic solutions, whether you're seeking to rejuvenate your skin, enhance your natural beauty, or simply take time for yourself.
              </p>
              <p>
                From advanced facial treatments to body sculpting and skin rejuvenation, every service at Lumea X is delivered with precision, care, and the highest standards of medical excellence.
              </p>
              <p>
                At Lumea X, we strive to create a warm, welcoming environment where you can feel confident and supported every step of the way on your aesthetic journey.
              </p>
            </div>
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
              Experience the Lumea X Difference
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-white/90 leading-relaxed">
              Schedule your complimentary consultation today and discover how we can help you achieve your beauty and wellness goals.
            </p>
            <Button asChild size="lg" className="rounded-full px-12 py-6 text-base bg-white text-rose-600 hover:bg-gray-100 shadow-2xl">
              <Link href="/contact">Book Your Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
