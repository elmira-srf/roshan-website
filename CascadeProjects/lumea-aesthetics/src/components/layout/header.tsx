import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { NAVIGATION } from '@/config/navigation'
import { SITE_CONFIG } from '@/constants/site'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-2xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            {SITE_CONFIG.name}
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-10">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-rose-600 transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 shadow-lg shadow-rose-200">
          <Link href="/contact">Book Consultation</Link>
        </Button>
      </div>
    </header>
  )
}
