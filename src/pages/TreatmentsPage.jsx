import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ChevronDown, ChevronRight, Clock, CalendarDays, ArrowLeft, Phone, ShieldCheck } from 'lucide-react'
import treatments from '../data/treatments'
import { useConsultationBooking } from '../context/ConsultationBookingContext'

function TreatmentAccordion({ treatment, isOpen, onToggle, accordionRef, onBookConsultation }) {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  const Icon = treatment.icon;

  return (
    <div
      ref={accordionRef}
      id={`treatment-${treatment.id}`}
      className={`border border-border/60 rounded-2xl transition-all duration-500 ${
        isOpen
          ? 'bg-white shadow-lg shadow-black/[0.03] border-primary/20'
          : 'bg-[#fafafa] hover:bg-white hover:shadow-md hover:shadow-black/[0.02] hover:border-border'
      }`}
    >
      {/* Accordion Header */}
      <button
        onClick={onToggle}
        className="w-full px-6 sm:px-8 py-6 sm:py-7 flex items-center gap-4 sm:gap-6 text-left cursor-pointer group"
        aria-expanded={isOpen}
      >
        <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          isOpen
            ? 'bg-primary/10 text-primary'
            : 'bg-bg-alt text-text-muted group-hover:bg-primary/5 group-hover:text-primary'
        }`}>
          <Icon strokeWidth={1.2} className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className={`text-base sm:text-lg font-medium tracking-tight transition-colors ${
              isOpen ? 'text-text' : 'text-text group-hover:text-text'
            }`}>
              {treatment.title}
            </h3>
            <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${
              isOpen
                ? 'bg-primary/10 text-primary'
                : 'bg-bg-alt text-text-muted'
            }`}>
              {treatment.tag}
            </span>
          </div>
          {!isOpen && (
            <p className="text-text-muted text-sm mt-1 line-clamp-1 hidden sm:block">{treatment.shortDesc}</p>
          )}
        </div>

        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          isOpen ? 'bg-primary/10 rotate-180' : 'bg-bg-alt group-hover:bg-primary/5'
        }`}>
          <ChevronDown strokeWidth={1.5} className={`w-4 h-4 transition-colors ${isOpen ? 'text-primary' : 'text-text-muted'}`} />
        </div>
      </button>

      {/* Accordion Content */}
      <div
        style={{ maxHeight: isOpen ? contentHeight + 'px' : '0px' }}
        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
      >
        <div ref={contentRef} className="px-6 sm:px-8 pb-8">
          {/* Divider */}
          <div className="h-px bg-border/50 mb-8" />

          {/* Hero line */}
          <p className="text-xl sm:text-2xl font-medium text-text tracking-tight mb-4 leading-snug">
            {treatment.heroLine}
          </p>
          <p className="text-text-muted text-[15px] sm:text-[16px] leading-relaxed mb-10 max-w-3xl">
            {treatment.fullDescription}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            {/* Indications */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary mb-5 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-primary/30" />
                Signs you might need this
              </h4>
              <ul className="space-y-3">
                {treatment.indications.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Choose Us */}
            <div className="bg-bg-alt/40 rounded-2xl p-6 border border-border/40">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-text mb-5">
                Why Plexus Dental?
              </h4>
              <ul className="space-y-3">
                {treatment.whyChooseUs.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] sm:text-[14px] text-text">
                    <ShieldCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Info Pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            <div className="flex items-center gap-2.5 px-5 py-2.5 bg-bg-alt border border-border/40 rounded-full text-[13px] font-medium text-text">
              <Clock strokeWidth={1.5} className="w-4 h-4 text-primary" />
              <span>{treatment.duration}</span>
            </div>
            <div className="flex items-center gap-2.5 px-5 py-2.5 bg-bg-alt border border-border/40 rounded-full text-[13px] font-medium text-text">
              <CalendarDays strokeWidth={1.5} className="w-4 h-4 text-primary" />
              <span>{treatment.sessions}</span>
            </div>
          </div>

          {/* Process Steps */}
          <div className="mb-14">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted mb-8">Clinical Process</h4>
            <div className="space-y-0">
              {treatment.process.map((step, i) => (
                <div key={i} className="flex gap-6 group/step">
                  {/* Timeline Line */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-9 h-9 rounded-full bg-white border border-border text-text text-[13px] font-bold flex items-center justify-center shadow-sm group-hover/step:border-primary group-hover/step:text-primary transition-colors">
                      {i + 1}
                    </div>
                    {i < treatment.process.length - 1 && (
                      <div className="w-px flex-1 bg-border/60 my-1.5" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-8 last:pb-0">
                    <h5 className="text-[15px] sm:text-[16px] font-semibold text-text mb-2">{step.step}</h5>
                    <p className="text-text-muted text-[13px] sm:text-[14px] leading-relaxed max-w-2xl">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-12">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted mb-8">Patient FAQs</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {treatment.faqs.map((faq, i) => (
                <div key={i} className="bg-bg-alt/30 rounded-xl p-6 border border-border/30 hover:border-primary/20 transition-colors">
                  <p className="text-[14px] font-semibold text-text mb-2.5 flex items-start gap-2">
                    <span className="text-primary">Q.</span>
                    {faq.q}
                  </p>
                  <p className="text-text-muted text-[13px] sm:text-[14px] leading-relaxed pl-6">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-primary/5 rounded-2xl p-6 sm:p-8 border border-primary/10 mt-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h4 className="text-base sm:text-lg font-semibold text-text mb-1">Ready to start your {treatment.title}?</h4>
                <p className="text-text-muted text-sm">Schedule a detailed consultation to discuss your specific case.</p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
                <button
                  type="button"
                  onClick={onBookConsultation}
                  className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 bg-primary rounded-full hover:bg-primary-dark shadow-md hover:shadow-primary/30 active:scale-95"
                >
                  Book Consultation
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="tel:+916307114437"
                  className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap px-5 py-2.5 text-[13px] font-semibold text-text transition-all duration-300 border border-border rounded-full hover:border-primary/30 hover:text-primary active:scale-95 bg-white"
                >
                  <Phone strokeWidth={1.2} className="w-3.5 h-3.5" />
                  Call +91-6307114437
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function TreatmentsPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchParams] = useSearchParams();
  const accordionRefs = useRef({});
  const { openConsultationModal } = useConsultationBooking();

  // Handle ?open=treatment-id query param
  useEffect(() => {
    const openId = searchParams.get('open');

    if (openId) {
      const targetIndex = treatments.findIndex(t => t.id === openId);
      if (targetIndex !== -1) {
        // Open the accordion
        setOpenIndex(targetIndex);

        // Scroll to it
        requestAnimationFrame(() => {
          setTimeout(() => {
            const el = accordionRefs.current[targetIndex];
            if (el) {
              const headerOffset = 180; // Adjusted for fixed header + gap
              const elementPosition = el.getBoundingClientRect().top + window.scrollY;
              window.scrollTo({
                top: elementPosition - headerOffset,
                behavior: 'smooth'
              });
            }
          }, 150);
        });
      }
    } else {
      // No query param - handled by PageWrapper/ScrollToHash usually, 
      // but keeping local top scroll for safety if needed
    }
  }, [searchParams]);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const setAccordionRef = useCallback((index, el) => {
    accordionRefs.current[index] = el;
  }, []);

  return (
    <div className="min-h-screen bg-bg">
      {/* Page Hero */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 bg-bg overflow-hidden animate-page-entry">
        {/* Subtle gradient blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.04] rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-4xl relative z-10">

          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
            Our Treatments
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight text-text leading-[1.1] mb-6">
            Every treatment your smile <br className="hidden md:block" />could ever need.
          </h1>

          <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
            From routine check-ups to complete smile transformations - all under one roof
            in Ashiyana, Lucknow. Click any treatment to explore the full process, timeline, and answers to your questions.
          </p>

          <div className="flex items-center gap-4 text-text-muted text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span>{treatments.length} treatments available</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <span>Detailed consultation on every treatment</span>
          </div>
        </div>
      </section>

      {/* Treatments List */}
      <section className="pb-24 sm:pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-4">
            {treatments.map((treatment, idx) => (
              <TreatmentAccordion
                key={treatment.id}
                treatment={treatment}
                isOpen={openIndex === idx}
                onToggle={() => handleToggle(idx)}
                accordionRef={(el) => setAccordionRef(idx, el)}
                onBookConsultation={openConsultationModal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-dark-bg text-dark-text py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight mb-6 leading-[1.1]">
            Not sure which treatment <br className="hidden sm:block" />you need? That's okay.
          </h2>
          <p className="text-dark-text-muted text-[15px] leading-relaxed mb-10 max-w-xl mx-auto">
            Book a detailed consultation and we'll examine, diagnose, and recommend
            the best course of action - with transparent pricing and zero pressure.
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
              href="tel:+916307114437"
              className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap px-5 py-2.5 text-[13px] font-semibold text-white/90 transition-all duration-300 border border-white/20 rounded-full hover:border-white/40 hover:text-white active:scale-95"
            >
              <Phone strokeWidth={1.2} className="w-3.5 h-3.5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TreatmentsPage
