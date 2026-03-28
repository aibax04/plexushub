import React from 'react'
import {
  ArrowLeft,
  MapPin,
  Phone,
  Clock,
  Mail,
  Navigation,
  ChevronRight,
  Car,
  Building2,
  Landmark,
  ShieldCheck,
} from 'lucide-react'
import { useConsultationBooking } from '../context/ConsultationBookingContext'

const clinicInfo = {
  name: 'Plexus Dental Hub',
  address: 'Shop no 9, SJS Pratham Complex, Chungi-Parag Rd, Opp. Shivalik School, Ashiyana, Lucknow 226012',
  addressShort: 'SJS Pratham Complex, Ashiyana, Lucknow',
  phone: '+91 63071 14437',
  phoneRaw: '+916307114437',
  email: 'plexusdentalhub@gmail.com',
  hours: [
    { day: 'Monday', time: '10:00 AM – 8:00 PM' },
    { day: 'Tuesday', time: '10:00 AM – 8:00 PM' },
    { day: 'Wednesday', time: '10:00 AM – 8:00 PM' },
    { day: 'Thursday', time: '10:00 AM – 8:00 PM' },
    { day: 'Friday', time: '10:00 AM – 8:00 PM' },
    { day: 'Saturday', time: '10:00 AM – 8:00 PM' },
    { day: 'Sunday', time: 'By Appointment Only' },
  ],
  googleMapsEmbed:
    'https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Plexus+Dental+Hub+Lucknow&zoom=16',
  googleMapsLink:
    'https://www.google.com/maps/search/Plexus+Dental+Hub+Lucknow',
  landmarks: [
    { icon: Building2, label: 'Opposite Shivalik School' },
    { icon: Landmark, label: 'Near Chungi-Parag Road' },
    { icon: Car, label: 'Easy roadside parking available' },
  ],
}

function VisitClinicPage() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })
  const { openConsultationModal } = useConsultationBooking()

  return (
    <div className="min-h-screen bg-bg pt-28 sm:pt-32">
      {/* Hero Section */}
      <section className="container mx-auto px-6 max-w-6xl mb-12 sm:mb-16 animate-page-entry">
        <div className="flex flex-wrap items-center gap-y-4 gap-x-5 mb-6">

          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
            Visit Our Clinic
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-text leading-[1.1] mb-4">
          Come see us in{' '}
          <span className="text-primary">Ashiyana, Lucknow</span>
        </h1>
        <p className="text-text-muted text-[15px] sm:text-base leading-relaxed max-w-2xl">
          We're conveniently located at SJS Pratham Complex, right opposite
          Shivalik School. Walk-ins welcome during clinic hours, or book ahead
          for a confirmed slot.
        </p>
      </section>

      {/* Map + Info Grid */}
      <section className="container mx-auto px-6 max-w-6xl mb-16 sm:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Map */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-border/60 shadow-lg shadow-black/[0.04] relative group">
            <iframe
              title="Plexus Dental Hub Location"
              src={clinicInfo.googleMapsEmbed}
              width="100%"
              height="100%"
              className="min-h-[350px] sm:min-h-[450px] lg:min-h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Get Directions overlay */}
            <a
              href={clinicInfo.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-semibold text-white bg-primary rounded-full shadow-lg hover:bg-primary-dark hover:shadow-primary/30 transition-all duration-300 active:scale-95"
            >
              <Navigation strokeWidth={1.5} className="w-3.5 h-3.5" />
              Get Directions
            </a>
          </div>

          {/* Info Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Address Card */}
            <div className="bg-[#f8f8f9] rounded-2xl p-6 border border-border/50">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-border/50 flex items-center justify-center text-primary/80 shadow-sm flex-shrink-0">
                  <MapPin strokeWidth={1.2} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text mb-1">
                    Clinic Address
                  </h3>
                  <p className="text-text-muted text-[13px] leading-relaxed">
                    {clinicInfo.address}
                  </p>
                </div>
              </div>
              <a
                href={clinicInfo.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary text-[13px] font-medium hover:gap-2.5 transition-all"
              >
                Open in Google Maps{' '}
                <ChevronRight strokeWidth={1.5} className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Contact Card */}
            <div className="bg-[#f8f8f9] rounded-2xl p-6 border border-border/50">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-border/50 flex items-center justify-center text-primary/80 shadow-sm flex-shrink-0">
                  <Phone strokeWidth={1.2} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text mb-1">
                    Call / WhatsApp
                  </h3>
                  <a
                    href={`tel:${clinicInfo.phoneRaw}`}
                    className="text-text-muted text-[13px] hover:text-primary transition-colors"
                  >
                    {clinicInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-border/50 flex items-center justify-center text-primary/80 shadow-sm flex-shrink-0">
                  <Mail strokeWidth={1.2} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text mb-1">
                    Email
                  </h3>
                  <a
                    href={`mailto:${clinicInfo.email}`}
                    className="text-text-muted text-[13px] hover:text-primary transition-colors"
                  >
                    {clinicInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Landmarks Card */}
            <div className="bg-[#f8f8f9] rounded-2xl p-6 border border-border/50">
              <h3 className="text-sm font-semibold text-text mb-4">
                How to find us
              </h3>
              <div className="space-y-3">
                {clinicInfo.landmarks.map((lm, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-border/50 flex items-center justify-center text-primary/70 flex-shrink-0">
                      <lm.icon strokeWidth={1.2} className="w-4 h-4" />
                    </div>
                    <span className="text-text-muted text-[13px]">
                      {lm.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="container mx-auto px-6 max-w-6xl mb-16 sm:mb-24">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <Clock strokeWidth={1.2} className="w-5 h-5" />
          </div>
          <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-text">
            Clinic Hours
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {clinicInfo.hours.map((slot) => {
            const isToday = slot.day === today
            const isSunday = slot.day === 'Sunday'
            return (
              <div
                key={slot.day}
                className={`rounded-xl p-4 border transition-all ${
                  isToday
                    ? 'bg-primary/5 border-primary/20 shadow-sm'
                    : 'bg-[#f8f8f9] border-border/50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-sm font-semibold ${
                      isToday ? 'text-primary' : 'text-text'
                    }`}
                  >
                    {slot.day}
                  </span>
                  {isToday && (
                    <span className="text-[10px] font-bold uppercase tracking-wide text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      Today
                    </span>
                  )}
                </div>
                <span
                  className={`text-[13px] ${
                    isSunday ? 'text-amber-600' : 'text-text-muted'
                  }`}
                >
                  {slot.time}
                </span>
              </div>
            )
          })}
        </div>
      </section>

      {/* Why visit section */}
      <section className="container mx-auto px-6 max-w-6xl mb-16 sm:mb-24">
        <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-text mb-8">
          What to expect when you visit
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: ShieldCheck,
              title: 'Sterilised & safe environment',
              desc: 'We follow international-grade sterilisation protocols. Every instrument is autoclaved, and every surface is sanitised between patients.',
            },
            {
              icon: Clock,
              title: 'Minimal wait time',
              desc: 'We respect your time. Appointments are staggered so you spend less time waiting and more time being cared for.',
            },
            {
              icon: Phone,
              title: 'Transparent communication',
              desc: 'Your treatment plan, timeline, and costs are discussed upfront — no surprises, no hidden charges.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#f8f8f9] rounded-2xl p-6 border border-border/50 group hover:border-primary/20 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-border/50 flex items-center justify-center text-primary/80 shadow-sm mb-4 group-hover:bg-primary/5 group-hover:border-primary/20 transition-colors">
                <item.icon strokeWidth={1.2} className="w-5 h-5" />
              </div>
              <h3 className="text-base font-medium text-text mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-text-muted text-[13px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-dark-bg text-dark-text py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight mb-6 leading-[1.1]">
            Ready to visit?{' '}
            <br className="hidden sm:block" />
            We'd love to see you.
          </h2>
          <p className="text-dark-text-muted text-[15px] leading-relaxed mb-10 max-w-xl mx-auto">
            Walk in during clinic hours or book an appointment in advance. Your
            we offer detailed consultation and personalized treatment planning.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <button
              type="button"
              onClick={openConsultationModal}
              className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 bg-primary rounded-full hover:bg-primary-dark shadow-md hover:shadow-primary/30 active:scale-95"
            >
              Book Consultation
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <a
              href={`tel:${clinicInfo.phoneRaw}`}
              className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap px-5 py-2.5 text-[13px] font-semibold text-white/90 transition-all duration-300 border border-white/20 rounded-full hover:border-white/40 hover:text-white active:scale-95"
            >
              <Phone strokeWidth={1.2} className="w-3.5 h-3.5" />
              Call Now
            </a>
            <a
              href={clinicInfo.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap px-5 py-2.5 text-[13px] font-semibold text-white/90 transition-all duration-300 border border-white/20 rounded-full hover:border-white/40 hover:text-white active:scale-95"
            >
              <Navigation strokeWidth={1.2} className="w-3.5 h-3.5" />
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VisitClinicPage
