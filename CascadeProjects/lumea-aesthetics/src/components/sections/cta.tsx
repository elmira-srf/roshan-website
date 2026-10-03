import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Enhance Your Natural Beauty?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Book your complimentary consultation today and discover how we can help you achieve your beauty and wellness goals.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/contact">Book Your Consultation</Link>
        </Button>
      </div>
    </section>
  )
}
