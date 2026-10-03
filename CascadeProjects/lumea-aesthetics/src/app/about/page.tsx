import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Award, Shield, Heart, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Lumea X</h1>
            <p className="text-xl text-muted-foreground">
              Your destination for advanced cosmetic care in North York, Toronto
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-6xl mb-4">👩‍⚕️</p>
                <p className="text-lg font-medium">Dr. Faranak Roshan</p>
                <p className="text-sm text-muted-foreground">International Medical Graduate & Certified Cosmetic Injector</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Meet Dr. Faranak Roshan</h2>
              <p className="text-muted-foreground">
                Dr. Faranak Roshan is an International Medical Graduate (IMG) and a certified cosmetic injector with over 10 years of hands-on experience in the medical aesthetics field.
              </p>
              <p className="text-muted-foreground">
                Her expertise spans a wide range of aesthetic treatments, from injectables like Botox and dermal fillers to advanced skin rejuvenation procedures. Dr. Roshan is committed to staying at the forefront of aesthetic medicine through continuous education and training.
              </p>
              <p className="text-muted-foreground">
                With a passion for helping patients achieve their aesthetic goals, Dr. Roshan takes a personalized approach to each treatment, ensuring natural-looking results that enhance each patient's unique beauty.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <Award className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Over a decade of experience in medical aesthetics with certified training and continuous education.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Safety First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Evidence-based treatments using only high-quality, FDA-approved products and the latest techniques.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Heart className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Personalized Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every treatment is tailored to your unique goals and anatomy for natural, beautiful results.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Comfort & Trust</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A warm, welcoming environment where you can feel confident and supported throughout your journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
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

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Lumea X Difference</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Schedule your complimentary consultation today and discover how we can help you achieve your beauty and wellness goals.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Book Your Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
