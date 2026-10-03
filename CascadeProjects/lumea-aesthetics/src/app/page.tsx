import Hero from '@/components/sections/hero'
import ServicesPreview from '@/components/sections/services-preview'
import AboutPreview from '@/components/sections/about-preview'
import CTA from '@/components/sections/cta'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <CTA />
    </div>
  )
}
