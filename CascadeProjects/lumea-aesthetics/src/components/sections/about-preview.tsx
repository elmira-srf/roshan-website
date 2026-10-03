import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutPreview() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-6xl mb-4">👩‍⚕️</p>
                <p className="text-lg font-medium">Dr. Faranak Roshan</p>
                <p className="text-sm text-muted-foreground">International Medical Graduate & Certified Cosmetic Injector</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">About Our Clinic</h2>
            <p className="text-muted-foreground">
              At Lumea X Aesthetic Clinic in North York, Toronto, we specialize in advanced, personalized medical aesthetic treatments designed to enhance your natural beauty.
            </p>
            <p className="text-muted-foreground">
              Our clinic is led by Faranak Roshan, IMG, an International Medical Graduate and certified cosmetic injector with over 10 years of hands-on experience in the field.
            </p>
            <p className="text-muted-foreground">
              We are committed to delivering safe, evidence-based treatments in a modern and welcoming environment using high-quality products and the latest techniques.
            </p>
            <Button asChild variant="outline">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
