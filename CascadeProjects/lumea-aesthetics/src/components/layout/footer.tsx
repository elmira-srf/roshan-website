import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Lumea X Medical Aesthetics</h3>
            <p className="text-sm text-muted-foreground">
              Your destination for advanced cosmetic care in North York, Toronto.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (672) 272-8223</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@lumeaxaesthetics.ca</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>North York, Toronto</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com/dr.faranakroshan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary text-sm">
                Instagram
              </a>
              <a href="https://facebook.com/dr.faranakroshan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary text-sm">
                Facebook
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Lumea X Medical Aesthetics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
