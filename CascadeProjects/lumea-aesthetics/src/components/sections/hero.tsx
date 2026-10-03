import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Welcome to Lumea X Medical Aesthetics Clinic
            </h1>
            <p className="text-xl text-muted-foreground">
              Your Destination for Advanced Cosmetic Care in North York, Toronto
            </p>
            <p className="text-muted-foreground">
              With over a decade of experience in the medical aesthetics industry, Lumea X Aesthetic Clinic brings trusted expertise and personalized care to the heart of North York, Toronto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Book Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/20 dark:to-pink-900/20 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-6xl mb-4">✨</p>
                <p className="text-lg font-medium">Enhance Your Natural Beauty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
