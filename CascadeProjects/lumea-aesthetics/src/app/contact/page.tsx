'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'
import { CONTACT_INFO, HOURS } from '@/constants/site'
import { SERVICES } from '@/data/services'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

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
              <span className="text-sm font-medium text-rose-700">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Schedule your consultation or get in touch with any questions
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-3 text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all bg-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-3 text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-3 text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all bg-white"
                      placeholder="+1 (xxx) xxx-xxxx"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold mb-3 text-gray-700">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all bg-white"
                    >
                      <option value="">Select a service</option>
                      {SERVICES.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.title}
                        </option>
                      ))}
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-3 text-gray-700">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-6 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all resize-none bg-white"
                      placeholder="Tell us about your goals or ask any questions..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full rounded-full text-base px-10 py-6 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 shadow-xl shadow-rose-200">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Contact Information
              </h2>
              
              <Card className="group relative overflow-hidden border-2 border-gray-100 hover:border-rose-200 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-100/50">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/0 via-rose-50/0 to-rose-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Phone className="h-6 w-6 text-rose-600" />
                    </div>
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-lg text-gray-700 hover:text-rose-600 transition-colors font-medium">
                    {CONTACT_INFO.phone}
                  </a>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden border-2 border-gray-100 hover:border-rose-200 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-100/50">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/0 via-rose-50/0 to-rose-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Mail className="h-6 w-6 text-rose-600" />
                    </div>
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg text-gray-700 hover:text-rose-600 transition-colors font-medium">
                    {CONTACT_INFO.email}
                  </a>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden border-2 border-gray-100 hover:border-rose-200 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-100/50">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/0 via-rose-50/0 to-rose-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <MapPin className="h-6 w-6 text-rose-600" />
                    </div>
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {CONTACT_INFO.location}
                  </p>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden border-2 border-gray-100 hover:border-rose-200 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-100/50">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/0 via-rose-50/0 to-rose-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Clock className="h-6 w-6 text-rose-600" />
                    </div>
                    Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-4 text-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Monday - Friday</span>
                      <span className="text-rose-600 font-semibold">{HOURS.weekdays}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Saturday</span>
                      <span className="text-rose-600 font-semibold">{HOURS.saturday}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Sunday</span>
                      <span className="text-rose-600 font-semibold">{HOURS.sunday}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Book via WhatsApp</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-white/90 leading-relaxed text-lg">
                    Quick and easy booking through WhatsApp
                  </p>
                  <Button asChild variant="secondary" className="w-full rounded-full px-10 py-6 text-base shadow-xl">
                    <a href={`https://api.whatsapp.com/send?phone=${CONTACT_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer">
                      Chat on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
