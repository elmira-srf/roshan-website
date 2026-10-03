import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-600 via-pink-600 to-purple-600">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NEgxNnYtMmgydi00aDR2MmgtMnY0aDR2MmgtMnY0aDR2MmgtMnY0LTR2LTJoLTR2LTJoLTR2LTJoLTJ2NGgtNHYtMmg0djJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container px-4 md:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
            <span className="text-sm font-medium text-white">Limited Time Offer</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Ready to Transform Your Look?
          </h2>
          
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-white/90 leading-relaxed">
            Book your complimentary consultation today and discover how we can help you achieve your beauty and wellness goals with our personalized treatments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="rounded-full px-12 py-6 text-base bg-white text-rose-600 hover:bg-gray-100 shadow-2xl">
              <Link href="/contact">Book Your Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-12 py-6 text-base border-2 border-white text-white hover:bg-white/10">
              <Link href="/services">View Services</Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm">Expert Guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm">Personalized Plan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
