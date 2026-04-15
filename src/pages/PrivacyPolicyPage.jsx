import React from 'react'
import { motion } from 'framer-motion'

function PrivacyPolicyPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-light-bg">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-black/5"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-light-text mb-8 tracking-tight">Privacy Policy</h1>
          
          <div className="text-light-text-muted space-y-6 text-sm md:text-base leading-relaxed">
            <p>
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <p>
              At Plexus Dental Hub, accessible from our clinic at Ashiyana, Lucknow and our website, one of our main priorities is the privacy of our patients and visitors. This Privacy Policy document contains types of information that is collected and recorded by Plexus Dental Hub and how we use it.
            </p>

            <p>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
            </p>

            <h2 className="text-xl font-semibold text-light-text mt-8 mb-4">Information We Collect</h2>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <p>
              If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide when booking an appointment or inquiring about out treatments.
            </p>

            <h2 className="text-xl font-semibold text-light-text mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Provide, operate, and maintain our clinic services and website</li>
              <li>Improve, personalize, and expand our services</li>
              <li>Understand and analyze how you use our website and services</li>
              <li>Develop new services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the clinic, and for marketing and promotional purposes</li>
              <li>Send you emails or reminders regarding your appointments</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h2 className="text-xl font-semibold text-light-text mt-8 mb-4">Data Security</h2>
            <p>
              We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security. Medical records are kept strictly confidential as per standard healthcare compliance.
            </p>

            <h2 className="text-xl font-semibold text-light-text mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
            </p>

            <h2 className="text-xl font-semibold text-light-text mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:
            </p>
            <ul className="list-none space-y-2 mt-2">
              <li><strong>Email:</strong> plexusdentalhub@gmail.com</li>
              <li><strong>Address:</strong> UGF-5, SJS Pratham Complex, Sector-F, Parag Road, Lucknow 226012</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

export default PrivacyPolicyPage
