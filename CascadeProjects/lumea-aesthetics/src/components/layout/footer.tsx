import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { SITE_CONFIG, CONTACT_INFO, SOCIAL_LINKS } from '@/constants/site'
import { FOOTER_LINKS } from '@/config/navigation'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gradient-to-br from-gray-50 to-white">
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              {SITE_CONFIG.tagline}
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">Quick Links</h4>
            <ul className="space-y-4 text-base">
              {FOOTER_LINKS.quick.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 hover:text-rose-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">Contact</h4>
            <ul className="space-y-4 text-base text-gray-600">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-rose-600" />
                </div>
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-rose-600" />
                </div>
                <span>{CONTACT_INFO.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-rose-600" />
                </div>
                <span>{CONTACT_INFO.location}</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">Follow Us</h4>
            <div className="flex gap-4">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-rose-600 transition-colors text-base">
                Instagram
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-rose-600 transition-colors text-base">
                Facebook
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-base text-gray-600">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
