import { Zap, ShieldCheck, Smile, Sparkles, Heart, Stethoscope, Sun, Target, ScanLine, Brush } from 'lucide-react'

const treatments = [
  {
    id: "root-canal",
    title: "Painless Root Canal (RCT)",
    shortDesc: "Single-sitting, microscope-assisted root canals. You won't feel a thing — we guarantee it. Save your natural tooth instead of pulling it.",
    tag: "Most Popular",
    icon: Zap,
    duration: "45–90 min",
    sessions: "1–2 visits",
    heroLine: "The world's most feared dental procedure — made completely painless.",
    fullDescription: "A root canal saves a badly infected or damaged tooth by removing the infected nerve tissue, cleaning the inner canal, and sealing it permanently. At Plexus Dental, we use microscopic magnification and advanced rotary instruments so the entire process is faster, more precise, and genuinely painless. Our goal is to save your natural teeth and prevent the need for extractions.",
    indications: [
      "Severe toothache that wakes you up at night",
      "Sensitivity to hot or cold that lingers after the source is removed",
      "Swelling or tenderness in the gums surrounding a tooth",
      "Discolouration or darkening of a tooth",
      "Persistent or recurring pimple on the gums (abscess)"
    ],
    whyChooseUs: [
      "Microscope-enhanced precision (20x zoom) for superior cleaning",
      "Single-visit RCT capability for busy professionals",
      "Advanced Rotary Endodontics for faster, quieter treatment",
      "Digital Apex Locators to ensure 100% accurate canal length"
    ],
    process: [
      {
        step: "Comprehensive Digital Diagnostics",
        detail: "We take high-resolution digital X-rays and intra-oral photos. We show them to you on a large screen so you can see exactly why the nerve is compromised."
      },
      {
        step: "Computerised Painless Anaesthesia",
        detail: "We use topical numbing gel first, followed by a precision delivery system that ensures you feel absolutely nothing. We test the area twice before starting."
      },
      {
        step: "Microscopic Isolation",
        detail: "The tooth is isolated using a rubber dam to keep the area sterile and prevent saliva from interfering with the treatment — a gold standard at Plexus."
      },
      {
        step: "Micro-Precision Canal Access",
        detail: "Using our dental microscope, we create a tiny access point and locate all canals. Many teeth have tiny 'extra' canals that are often missed without a microscope."
      },
      {
        step: "Biolase Disinfection & Irrigation",
        detail: "Canals are cleaned using ultrasonic irrigants and advanced rotary files that remove every trace of bacteria from the most complex canal structures."
      },
      {
        step: "Biocompatible Sealing",
        detail: "The cleaned canals are filled with Gutta-Percha and a bio-ceramic sealer that prevents any future bacterial entry, sealing the tooth from within."
      },
      {
        step: "Core Reconstruction",
        detail: "The access point is filled with a high-strength composite resin (filling) that restores the tooth's internal structure and strength."
      },
      {
        step: "3D Custom Crown Restoration",
        detail: "Finally, a custom-designed zirconia or porcelain crown is fitted to provide 360-degree protection and restore 100% chewing function."
      }
    ],
    faqs: [
      { q: "Is a root canal really painless?", a: "Yes. With modern anaesthetics and our precision techniques, a root canal feels no different than getting a routine filling. We guarantee a pain-free experience." },
      { q: "Can it be done in one sitting?", a: "In 90% of cases, yes. Our advanced technology allows us to complete the entire process in about 60–90 minutes." },
      { q: "What happens if I don't get a root canal?", a: "The infection will grow, leading to a painful abscess, bone loss around the root, and eventually, the tooth will need to be extracted." },
      { q: "How long does a treated tooth last?", a: "With a high-quality crown and good hygiene, a root-canal-treated tooth can last for the rest of your life." },
      { q: "Will I feel pain after the procedure?", a: "You may feel mild 'tightness' for 24-48 hours as the surrounding tissue heals. This is easily managed with routine painkillers." },
      { q: "Does insurance cover root canals?", a: "Most dental insurance plans cover a significant portion of RCT costs. We provide all necessary documentation for your claims." }
    ]
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    shortDesc: "Missing a tooth? Our titanium implants look, feel, and function exactly like real teeth. Permanent. No adhesives. No compromise.",
    tag: "Permanent Fix",
    icon: ShieldCheck,
    duration: "60–90 min (surgery)",
    sessions: "3–4 visits over 3 months",
    heroLine: "The gold standard for replacing missing teeth — for life.",
    fullDescription: "A dental implant is a surgical-grade titanium post that acts as an artificial tooth root. Over 3-4 months, it fuses with your jawbone in a process called osseointegration. This creates a foundation that is often stronger than a natural root, allowing for a custom crown that restores your smile's aesthetics and 100% of your bite force.",
    indications: [
      "Loss of one or more natural teeth",
      "Uncomfortable or loose-fitting dentures",
      "Difficulty chewing or speaking due to missing teeth",
      "Desire to prevent facial 'sagging' caused by bone loss",
      "Inability to get a dental bridge due to lack of support teeth"
    ],
    whyChooseUs: [
      "Guided Implant Surgery for 100% placement accuracy",
      "Premium International Implant systems (Straumann, Nobel Biocare)",
      "CBCT 3D Bone Analysis included in every planning phase",
      "Expertise in complex cases including sinus lifts and bone grafts"
    ],
    process: [
      {
        step: "3D CBCT Digital Analysis",
        detail: "We perform a 3D bone scan to measure the exact height, width, and density of your jawbone, ensuring the perfect implant size and position are chosen."
      },
      {
        step: "Virtual Surgical Planning",
        detail: "Using digital software, we virtually place the implant in your bone before the actual surgery. This 'digital rehearsal' ensures zero surprises on surgery day."
      },
      {
        step: "Minimally Invasive Placement",
        detail: "Under local anaesthesia, we make a small incision and place the titanium post. Our gentle technique ensures minimal post-op swelling and faster healing."
      },
      {
        step: "The Osseointegration Phase",
        detail: "Your jawbone grows into the implant surface over 3-4 months. We provide a temporary tooth during this time so you never have to hide your smile."
      },
      {
        step: "Abutment Connection",
        detail: "Once fused, we attach a small connector called an abutment. This is a quick 15-minute procedure that prepares the site for the final crown."
      },
      {
        step: "Digital Shade Matching",
        detail: "We use a digital spectrophotometer to match the crown's colour and translucency exactly to your neighbouring teeth for a seamless look."
      },
      {
        step: "Final Crown Placement",
        detail: "Your custom zirconia crown is screwed or cemented onto the implant. It looks, feels, and functions exactly like a real tooth."
      },
      {
        step: "Lifetime Maintenance Checkups",
        detail: "We provide an annual implant health check to ensure the surrounding bone and gum tissue remain perfectly healthy for decades to come."
      }
    ],
    faqs: [
      { q: "How long do implants last?", a: "With proper hygiene, the titanium implant itself is designed to last a lifetime. The porcelain crown may need replacement after 15-20 years." },
      { q: "Is the surgery painful?", a: "Most patients tell us it was easier than a tooth extraction. You will be fully numbed and won't feel any pain during the procedure." },
      { q: "What is the success rate?", a: "Our success rate for dental implants is over 98%, thanks to our meticulous 3D planning and premium implant systems." },
      { q: "What if I have low bone density?", a: "We can perform 'Bone Grafting' or a 'Sinus Lift' to rebuild the bone, making implants possible for almost everyone." },
      { q: "How much do implants cost?", a: "Costs vary based on the implant brand and complexity. We offer transparent, fixed-price packages with no hidden extras." },
      { q: "Can smokers get implants?", a: "Yes, but smoking increases the risk of failure. We recommend stopping or reducing smoking during the 3-month healing phase." }
    ]
  },
  {
    id: "clear-aligners",
    title: "Clear Aligners & Braces",
    shortDesc: "Straighten your teeth invisibly. Custom-moulded clear aligners for adults, or colour braces that kids actually love wearing.",
    tag: "Adults & Kids",
    icon: Smile,
    duration: "6–18 months",
    sessions: "Monthly check-ups",
    heroLine: "Straight teeth without the metal mouth — at any age.",
    fullDescription: "Modern orthodontics is no longer just for teenagers. We use virtually invisible clear aligners (like Invisalign) to straighten teeth discreetly. For younger patients or complex cases, we offer modern low-friction aesthetic braces that are faster and more comfortable than traditional metal ones. Every case starts with a 3D digital scan — no more gagging on gooey putty impressions.",
    indications: [
      "Crowded or overlapping teeth",
      "Wide gaps (diastema) between teeth",
      "Overbite, underbite, or crossbite issues",
      "Crooked teeth causing difficulty in cleaning",
      "Jaw pain or clicking related to a misaligned bite"
    ],
    whyChooseUs: [
      "iTero 3D Digital Scanners (No messy impressions)",
      "Smile Simulation: See your final result before you start",
      "Diamond-level Invisalign provider expertise",
      "Self-ligating braces for shorter treatment times and fewer visits"
    ],
    process: [
      {
        step: "3D Intra-oral Scan",
        detail: "We use a digital scanner to create a 100% accurate 3D model of your mouth in under 5 minutes. It's clean, fast, and replaces the old 'putty' method."
      },
      {
        step: "Outcome Simulator",
        detail: "Our software calculates exactly how your teeth need to move. You can watch a video simulation of your teeth shifting into their final, perfect positions."
      },
      {
        step: "Custom ClinCheck Planning",
        detail: "Our orthodontists meticulously design each movement step-by-step to ensure the roots move safely and the final bite is functionally perfect."
      },
      {
        step: "Aligner/Braces Fitting",
        detail: "You receive your custom aligner sets or have your aesthetic braces fitted. We show you exactly how to wear, remove, and clean them."
      },
      {
        step: "Progress Monitoring",
        detail: "You visit us every 4–8 weeks so we can track progress. For aligner patients, some check-ups can even be done virtually via photo updates."
      },
      {
        step: "Refinement Phase",
        detail: "Near the end, we perform 'refinements' to fine-tune the position of individual teeth for a truly flawless, red-carpet result."
      },
      {
        step: "Retention & Stabilization",
        detail: "Once finished, we provide custom retainers. This is the most important step to ensure your teeth stay in their new positions forever."
      }
    ],
    faqs: [
      { q: "Will clear aligners affect my speech?", a: "You might have a very slight lisp for the first 2-3 days as your tongue adjusts, but it disappears quickly." },
      { q: "How many hours a day must I wear them?", a: "For best results, aligners must be worn for 20–22 hours per day, removing them only for eating and cleaning." },
      { q: "Is the treatment painful?", a: "You'll feel 'pressure' for the first 24 hours after switching to a new aligner or having braces tightened. It's a sign that your teeth are moving!" },
      { q: "Can I eat anything with aligners?", a: "Yes! Since you remove them to eat, there are no food restrictions like there are with traditional metal braces." },
      { q: "What is the age limit for aligners?", a: "There is no age limit. We have successfully treated patients in their 60s and 70s!" },
      { q: "How do I clean my aligners?", a: "Rinse them with lukewarm water and brush them gently with a soft toothbrush and non-abrasive soap or cleaning crystals." }
    ]
  },
  {
    id: "smile-makeover",
    title: "Smile Makeover",
    shortDesc: "Veneers, bonding, whitening, and gum contouring — combined into one comprehensive plan that delivers a red-carpet smile.",
    tag: "Cosmetic",
    icon: Sparkles,
    duration: "1–3 weeks",
    sessions: "2–5 visits",
    heroLine: "A complete transformation — designed for your face, your personality, your confidence.",
    fullDescription: "A smile makeover is the ultimate blend of art and science. It's not just about 'white teeth'; it's about facial harmony. We analyse your lip line, skin tone, gum symmetry, and facial proportions to design a smile that looks naturally beautiful. We use a combination of ultra-thin veneers, laser gum contouring, and advanced bonding to create your masterpiece.",
    indications: [
      "Stained or discoloured teeth that don't respond to whitening",
      "Chipped, cracked, or worn down teeth",
      "Small or 'peg' teeth that look out of proportion",
      "Gummy smile or uneven gum line",
      "Slightly crooked teeth that don't require full orthodontics"
    ],
    whyChooseUs: [
      "Digital Smile Design (DSD) Certified Clinic",
      "Master Ceramist lab partnership for lifelike veneers",
      "Minimal-prep techniques to preserve your natural tooth structure",
      "In-house photography studio for precise facial analysis"
    ],
    process: [
      {
        step: "Esthetic Facial Analysis",
        detail: "We take high-definition photos and videos of you talking and smiling. This helps us ensure your new smile matches your unique facial expressions."
      },
      {
        step: "3D Wax-Up & Design",
        detail: "Our lab creates a 3D physical model of your proposed new smile. You can see the exact shape and length of every tooth before we touch your teeth."
      },
      {
        step: "The 'Test Drive' Smile",
        detail: "We place a temporary version of your new smile over your existing teeth. You get to wear it for a few days to get feedback from family and friends."
      },
      {
        step: "Precision Micropreparation",
        detail: "Using a microscope, we remove a paper-thin layer (0.3mm to 0.5mm) of enamel only where necessary to make room for the porcelain."
      },
      {
        step: "Biolase Gum Contouring",
        detail: "If you have an uneven or 'gummy' smile, we use a painless laser to reshape the gum line for perfect symmetry and aesthetics."
      },
      {
        step: "Artisan Lab Fabrication",
        detail: "Our master ceramists hand-layer each porcelain veneer, adding translucency, texture, and 'mamelons' to mimic a natural, youthful tooth."
      },
      {
        step: "Microscopic Bonding",
        detail: "Each veneer is bonded using high-strength adhesive under moisture-controlled conditions, ensuring a bond that is virtually inseparable from the tooth."
      }
    ],
    faqs: [
      { q: "How long do veneers last?", a: "High-quality porcelain veneers typically last 15–20 years or more with routine dental care and good hygiene." },
      { q: "Will they stain from coffee or wine?", a: "No. High-grade dental porcelain is non-porous and highly resistant to stains — even better than natural enamel." },
      { q: "Is the procedure painful?", a: "No. We utilize local anaesthesia for preparation, and the post-op period involves very little to no discomfort." },
      { q: "How many veneers will I need?", a: "It depends on your 'smile width' — usually between 6 to 10 veneers per arch to create a full, harmonious transformation." },
      { q: "Can I choose how white they are?", a: "Yes, but we recommend shades that look natural. We guide you using shade tabs and your 'test drive' results." },
      { q: "What if one veneer chips or breaks?", a: "It's rare, but if it happens, a single veneer can be replaced independently without affecting the others." }
    ]
  },
  {
    id: "kids-dentistry",
    title: "Kids Dentistry",
    shortDesc: "We turn scary dentist visits into fun adventures. Fluoride treatments, sealants, and cavity care designed for tiny humans.",
    tag: "Child-Friendly",
    icon: Heart,
    duration: "20–45 min",
    sessions: "1 visit + 6-month check-ups",
    heroLine: "Because every child deserves to grow up unafraid of the dentist.",
    fullDescription: "Our paediatric dental care is designed to make children feel safe, comfortable, and even excited about visiting the dentist. From the colourful clinic environment to our gentle approach, everything is built around making dental care a positive experience that sets healthy habits for life.",
    indications: [
      "First tooth appearance or first birthday",
      "Visible white or brown spots on baby teeth",
      "Persistent thumb-sucking or pacifier use",
      "Difficulty chewing or complaining of 'owies' in the mouth",
      "Need for sports mouthguards for active children"
    ],
    whyChooseUs: [
      "Play-based 'Tell-Show-Do' technique to reduce anxiety",
      "Nitrous Oxide (Happy Gas) available for extra-nervous children",
      "BPA-free dental sealants for superior cavity protection",
      "Fun rewards and stickers for every brave young patient"
    ],
    process: [
      {
        step: "Safe Space Introduction",
        detail: "We start in a non-clinical area where your child can play and get used to the sounds and smells of the clinic at their own pace."
      },
      {
        step: "The 'Superpower' Tour",
        detail: "We show them our 'magic chair' and 'super-light' to involve them in the process and remove the mystery of the equipment."
      },
      {
        step: "Gentle Knee-to-Knee Exam",
        detail: "For toddlers, the exam is often done while they sit on your lap, making them feel secure while we check their dental development."
      },
      {
        step: "Flavour-Pops Cleaning",
        detail: "We use child-friendly polishing pastes in fun flavours to remove plaque without the 'scary' vibrations of adult equipment."
      },
      {
        step: "Enamel Armor (Fluoride)",
        detail: "A high-concentration fluoride varnish is painted onto the teeth to harden the enamel and make it resistant to sugar and acid."
      },
      {
        step: "Deep Groove Sealants",
        detail: "We place thin, protective coatings on the chewing surfaces of permanent molars to keep bacteria out of deep, hard-to-clean grooves."
      },
      {
        step: "Parent Coaching",
        detail: "We give you practical tips on nutrition, thumb-sucking management, and the best ways to brush a reluctant toddler's teeth."
      }
    ],
    faqs: [
      { q: "When should the first visit happen?", a: "The official recommendation is 'First visit by first birthday' or as soon as the first tooth breaks through the gums." },
      { q: "Why treat baby teeth if they fall out anyway?", a: "Baby teeth hold the space for permanent teeth. If lost too early, permanent teeth can come in crooked or impacted." },
      { q: "Will you use 'drills' on my child?", a: "If a filling is needed, we often use 'air-abrasion' or laser methods that involve no vibration and minimal noise." },
      { q: "How can I prepare my child at home?", a: "Talk about the dentist as a 'tooth-helper' who polishes teeth. Avoid using the dentist as a threat for bad behavior." },
      { q: "What should I do for a dental emergency?", a: "Call us immediately. We keep emergency slots open every day for knocked-out teeth or severe toothaches in children." },
      { q: "Is teething normal for so long?", a: "Yes, every child is different. We can recommend safe ways to soothe teething pain without using harmful gels." }
    ]
  },
  {
    id: "gum-treatment",
    title: "Gum Disease Treatment",
    shortDesc: "Bleeding when you brush? Don't ignore it. Our laser-assisted deep cleaning halts gum disease before it causes tooth loss.",
    tag: "Preventive",
    icon: Stethoscope,
    duration: "45–60 min per quadrant",
    sessions: "2–4 visits",
    heroLine: "Healthy gums are the foundation of every beautiful smile.",
    fullDescription: "Gum disease (periodontal disease) is the leading cause of tooth loss in adults — and most people don't even know they have it. Our comprehensive gum treatment programme uses ultrasonic scaling, laser therapy, and targeted antibiotics to stop disease progression and regenerate healthy gum tissue.",
    indications: [
      "Bleeding gums when brushing or flossing",
      "Persistent bad breath (halitosis) that won't go away",
      "Red, swollen, or tender gum tissue",
      "Gums that appear to be 'pulling away' from the teeth",
      "Pus between your teeth and gums"
    ],
    whyChooseUs: [
      "Waterlase iPlus technology for painless laser gum therapy",
      "DNA Testing for specific bacteria in aggressive cases",
      "Atrisorb guided tissue regeneration expertise",
      "In-depth patient education to prevent future relapse"
    ],
    process: [
      {
        step: "Periodontal Mapping",
        detail: "We use a digital probe to measure the pocket depth around every single tooth. These 'numbers' give us a baseline for your gum health."
      },
      {
        step: "Microbial Risk Assessment",
        detail: "We assess your risk factors including genetics, smoking, and systemic health conditions like diabetes that affect gum healing."
      },
      {
        step: "Ultrasonic Biofilm Removal",
        detail: "We use high-frequency vibrations to break up 'biofilm' and tartar both above and below the gumline where your brush can't reach."
      },
      {
        step: "Root Surface Biocompatibility",
        detail: "Rough root surfaces are smoothed (Root Planing) to remove toxins and create a surface that your gums can actually stick back onto."
      },
      {
        step: "Laser Pocket Decontamination",
        detail: "A painless dental laser kills 99.9% of bacteria inside the gum pockets and stimulates the body's natural healing and regeneration."
      },
      {
        step: "Micro-Dose Antibiotic Delivery",
        detail: "For deep, stubborn pockets, we place tiny 'Perio-chips' that slowly release medicine over 7 days to eliminate any remaining infection."
      },
      {
        step: "Healing Re-evaluation",
        detail: "After 6 weeks, we re-measure your pockets. Most patients see a dramatic reduction in pocket depth and zero bleeding."
      }
    ],
    faqs: [
      { q: "Can gum disease cause heart problems?", a: "Yes, research shows a strong link between gum disease bacteria and heart disease, diabetes, and even Alzheimer's." },
      { q: "is bleeding normal when I floss?", a: "No. Healthy gums never bleed. Bleeding is the first sign of gingivitis and should be treated immediately." },
      { q: "How often will I need deep cleaning?", a: "Once gum disease is under control, we recommend 'Periodontal Maintenance' every 3-4 months to keep it from returning." },
      { q: "Is gum disease hereditary?", a: "Yes, some people are genetically more prone to gum disease, which is why regular professional check-ups are vital." },
      { q: "Can I save loose teeth?", a: "In many cases, yes! By treating the infection and stabilizing the bone, we can often save teeth that feel loose." },
      { q: "Is the laser treatment painful?", a: "No. The laser is very gentle and often reduces the need for local anaesthesia during deep cleaning." }
    ]
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    shortDesc: "Professional in-office whitening that's 8x stronger than strips. Visibly whiter teeth in a single 45-minute session.",
    tag: "Quick Results",
    icon: Sun,
    duration: "45–60 min",
    sessions: "1 visit",
    heroLine: "The fastest way to a brighter, more confident you.",
    fullDescription: "Our professional in-office whitening uses a clinically proven bleaching gel activated by a specialised LED light to remove years of stains from coffee, tea, wine, and tobacco. Unlike over-the-counter kits that can damage enamel, our treatment is pH-balanced and monitored by a dental professional for maximum safety and zero sensitivity.",
    indications: [
      "Staining from coffee, tea, red wine, or tobacco",
      "Yellowing due to the natural aging process",
      "Dullness after orthodontic braces are removed",
      "Desire for a brighter smile for a wedding or event",
      "Generalized discolouration from certain medications"
    ],
    whyChooseUs: [
      "Phillips Zoom! WhiteSpeed (The world's #1 whitening system)",
      "Custom-fitted 'Isolation' to protect your gums 100%",
      "Enamel-safe, pH-balanced formulas with desensitizers",
      "Complimentary take-home 'Ever-Bright' maintenance kit"
    ],
    process: [
      {
        step: "Original Shade Verification",
        detail: "We use a digital shade guide to record your starting point. You'd be surprised how much your eyes trick you once you're done!"
      },
      {
        step: "Lip & Gum Shielding",
        detail: "We use a liquid 'gingival barrier' that hardens over your gums, ensuring only your teeth are exposed to the whitening gel."
      },
      {
        step: "The Whitening 'Boost'",
        detail: "A 25% hydrogen peroxide gel is applied. This is far more powerful and effective than 'strips' or 'whitening toothpastes'."
      },
      {
        step: "Photo-Activation",
        detail: "Our Zoom! LED light is tuned to a specific wavelength that breaks apart the carbon bonds causing the stains, without using excessive heat."
      },
      {
        step: "Multiple Cycles",
        detail: "We perform three 15-minute cycles. This allows the gel to penetrate deeply and break down even internal, stubborn stains."
      },
      {
        step: "Enamel Re-mineralization",
        detail: "After whitening, we apply a high-potency calcium phosphate paste that 'plugs' the pores of the teeth, preventing sensitivity and locking in the white."
      },
      {
        step: "Post-Whitening Coaching",
        detail: "We teach you the 'White Diet' for the next 48 hours to ensure your results last as long as possible (No turmeric, red wine, or black coffee!)"
      }
    ],
    faqs: [
      { q: "How many shades whiter will I get?", a: "Most patients achieve 6 to 8 shades of whitening in a single session. Results depend on the type of staining you have." },
      { q: "Is it safe for my enamel?", a: "Yes. Professional whitening only targets organic stains, not the mineral structure of your teeth." },
      { q: "Will my crowns or fillings whiten?", a: "No. Whitening only works on natural tooth structure. We may recommend replacing old fillings to match your new white smile." },
      { q: "How long until I can drink coffee?", a: "We recommend waiting 48 hours. After that, you can drink coffee, but rinsing with water afterwards helps maintain the results." },
      { q: "What causes teeth sensitivity?", a: "Whitening temporarily opens the microscopic 'tubules' in your teeth. Our de-sensitizing gel closes these back up instantly." },
      { q: "Can I whiten if I have receding gums?", a: "Yes, but we must protect the exposed root surfaces carefully to prevent extreme sensitivity during the procedure." }
    ]
  },
  {
    id: "wisdom-tooth",
    title: "Wisdom Tooth Extraction",
    shortDesc: "Impacted or painful wisdom teeth? We remove them with surgical precision under local anaesthesia. Minimal swelling, fast recovery.",
    tag: "Same-Day",
    icon: Target,
    duration: "30–60 min",
    sessions: "1 visit + follow-up",
    heroLine: "Quick, precise extraction — so you heal faster and hurt less.",
    fullDescription: "Wisdom teeth often stay hidden below the gumline (impacted) or grow at awkward angles, pushing against your other teeth. This causes chronic pain, jaw stiffness, and even cysts. Our surgical approach utilizes Piezo-Bone surgery—which uses ultrasonic vibrations rather than traditional drills—leading to significantly less swelling and a much faster healing time.",
    indications: [
      "Persistent pain or pressure at the back of the jaw",
      "Stiffness or difficulty opening your mouth",
      "Food trapping leading to decay in neighbouring molars",
      "Visible crowding or pushing of your front teeth",
      "Recurring infection (pericoronitis) around the wisdom tooth"
    ],
    whyChooseUs: [
      "Piezo-Ultrasonic Surgery for zero-vibration, atraumatic extractions",
      "PRF (Platelet Rich Fibrin) therapy for 50% faster socket healing",
      "IV Sedation available for a 'sleep-through' experience",
      "Direct Surgeon Access via WhatsApp for all recovery questions"
    ],
    process: [
      {
        step: "Nerve Projection Mapping",
        detail: "We use high-res imaging to see exactly where the alveolar nerve is. This ensures we can remove the tooth without any risk of numbness."
      },
      {
        step: "Atraumatic Anaesthesia",
        detail: "We numb the specific nerve branch. Most patients feel 'heavy' or 'puffy' but absolutely zero sharp sensations throughout the surgery."
      },
      {
        step: "Piezo-Ultrasonic Access",
        detail: "Instead of a traditional drill, we use ultrasonic waves to gently sculpt the bone if needed. This preserves blood supply and reduces healing time."
      },
      {
        step: "Tooth Sectioning",
        detail: "For impacted teeth, we section the tooth into 2-3 small pieces. This allows for a smaller incision and a гораздо gentler removal process."
      },
      {
        step: "Socket Bio-Debridement",
        detail: "The empty socket is cleaned and any inflammatory tissue is removed to prevent the development of 'Dry Socket' after treatment."
      },
      {
        step: "Advanced Wound Closure",
        detail: "We use premium dissolvable sutures that stay for 7 days then disappear. No need for a stressful 'stitch removal' appointment."
      },
      {
        step: "The Recovery Protocol",
        detail: "We provide frozen gel packs and a specific medication schedule that starts before your numbness wears off, keeping you ahead of any pain."
      }
    ],
    faqs: [
      { q: "Is it better to remove all 4 at once?", a: "Yes, for most patients. It means one surgery, one round of antibiotics, and one recovery period instead of four." },
      { q: "What is a 'Dry Socket'?", a: "It's when the blood clot is lost too soon. We use PRF technology to virtually eliminate the risk of this happening." },
      { q: "When can I return to work/school?", a: "Most patients take 24–48 hours of rest and return to non-strenuous activities on the third day." },
      { q: "Will my face swell up like a balloon?", a: "With our ultrasonic technique and proper icing, swelling is usually minimal and peaks at 48 hours before disappearing." },
      { q: "What can I eat after surgery?", a: "Soft foods like yoghurt, smoothies, mashed potatoes, and lukewarm soups for the first 3 days. Avoid anything spicy or crunchy." },
      { q: "Can I use a straw after extraction?", a: "No! The suction from a straw can dislodge the blood clot. Stick to drinking directly from a cup for 7 days." }
    ]
  },
  {
    id: "dental-checkup",
    title: "Routine Check-up & Cleaning",
    shortDesc: "A comprehensive oral examination, professional scaling, and polish. Your foundation for lifelong dental health.",
    tag: "Essential",
    icon: ScanLine,
    duration: "30–45 min",
    sessions: "Every 6 months",
    heroLine: "Prevention costs less than cure — in money, time, and pain.",
    fullDescription: "A dental check-up is more than just a quick 'look'. It is a comprehensive safety screen. We screen for early signs of decay, gum disease, and mouth cancer. Our professional cleaning (Scaling and Polishing) removes hard tartar that acts like a 'magnet' for bacteria, which your toothbrush simply cannot remove at home.",
    indications: [
      "It has been more than 6 months since your last visit",
      "Stains from tea, coffee, or smoking appearing on teeth",
      "Occasional bad breath or metallic taste in the mouth",
      "Need for a professional 'deep-clean' feeling",
      "Wanting to prevent small cavities from becoming expensive root canals"
    ],
    whyChooseUs: [
      "EMS Airflow Master for pain-free, warm-water cleaning",
      "AI-driven cavity detection for ultra-early diagnosis",
      "Intra-oral camera tour of your own mouth on a 4K screen",
      "Oral Cancer screening included in every routine check-up"
    ],
    process: [
      {
        step: "Full Mouth Digital Tour",
        detail: "We use a tiny camera to show you every tooth on a monitor. You see what we see, allowing you to be a partner in your own healthcare."
      },
      {
        step: "The 6-Point Health Check",
        detail: "We check teeth, gums, tongue, bite, jaw joints (TMJ), and the soft tissues of the mouth to give you a 100% clean bill of health."
      },
      {
        step: "EMS Guided Biofilm Therapy",
        detail: "Instead of scraping, we use a fine spray of warm water and erythritol powder to gently wash away plaque and stains. It's actually comfortable!"
      },
      {
        step: "Piezo Scaling",
        detail: "For hard tartar, we use ultrasonic vibrations that precisely target the calculus without scratching your delicate tooth enamel."
      },
      {
        step: "Diamond-Paste Polishing",
        detail: "We finish with a fine-grit polish that smooths the enamel, making it harder for new plaque and stains to stick to your teeth."
      },
      {
        step: "Acid-Neutralizing Fluoride",
        detail: "A professional-strength fluoride treatment is applied to 're-charge' your enamel and make it resistant to sugar-loving bacteria."
      },
      {
        step: "The Maintenance Blueprint",
        detail: "You receive a personalized oral health score and a printed plan for home-care, tailored to your specific dental needs and risks."
      }
    ],
    faqs: [
      { q: "Does the cleaning make teeth loose?", a: "No! This is a myth. Scaling removes tartar that was hiding the fact that gum disease has made the teeth loose. Cleaning is the only way to save them." },
      { q: "Why do my teeth feel 'gaps' after cleaning?", a: "This is the space where tartar used to be. Your tongue finally feels the true, clean shape of your teeth again." },
      { q: "Is the procedure painful?", a: "With our warm-water EMS technology, most patients find it completely comfortable. If you're sensitive, we can adjust the water temperature." },
      { q: "Can I eat immediately after cleaning?", a: "Wait 30 minutes for the fluoride to fully absorb. After that, you're good to go!" },
      { q: "Why do I need 6-monthly check-ups?", a: "Because most dental problems are painless until they are severe. 6 months is the window where we can catch problems early." },
      { q: "What is an intra-oral camera?", a: "It's a small wand that lets us take high-res photos inside your mouth. It helps us track changes in your teeth over many years." }
    ]
  },
  {
    id: "dentures",
    title: "Dentures & Bridges",
    shortDesc: "Premium removable dentures and fixed bridges that restore your ability to eat, speak, and smile with confidence.",
    tag: "Restorative",
    icon: Brush,
    duration: "1–2 weeks",
    sessions: "3–4 visits",
    heroLine: "Restore function and confidence — with solutions that fit your life and budget.",
    fullDescription: "Losing teeth affects more than just your smile—it affects your nutrition and your speech. We offer modern, lightweight, and incredibly natural-looking prosthetics. From 'invisible' flexible dentures that have no metal clips, to zirconia bridges that are virtually indestructible, we help you enjoy your favorite foods again.",
    indications: [
      "Loss of multiple teeth in different areas",
      "Total tooth loss in one or both arches",
      "Sunken facial appearance due to lack of tooth support",
      "Difficulty eating certain foods or speaking clearly",
      "Desire to replace old, clicking, or ill-fitting dentures"
    ],
    whyChooseUs: [
      "Digital Mock-up for perfect aesthetic alignment",
      "BPS (Biofunctional Prosthetic System) for superior suction and fit",
      "High-impact, allergy-free materials for longevity and comfort",
      "Repair-while-you-wait service for damaged prosthetics"
    ],
    process: [
      {
        step: "Bite & Aesthetic Analysis",
        detail: "We record how your jaws meet and how much of your teeth show when you speak and smile to ensure the new ones look perfectly natural."
      },
      {
        step: "Digital/Manual Impressions",
        detail: "We take highly accurate 'blueprints' of your gums and any remaining teeth to ensure a snug, comfortable fit that doesn't rub."
      },
      {
        step: "The Shade & Shape Selection",
        detail: "We work with you to choose the color and 'character' of the teeth. Some prefer a perfectly straight white look; others prefer a more 'natural' appearance."
      },
      {
        step: "The 'Wax-Try-In' Phase",
        detail: "You try the teeth while they are still in wax. You can talk, smile, and look in the mirror. We won't finish them until you are 100% happy with the look."
      },
      {
        step: "Pressure-Injection Fabrication",
        detail: "Using premium resins and high-pressure injection molding, we create a prosthetic that is stronger and fits more accurately than old-style methods."
      },
      {
        step: "The Delivery & Bite-Balance",
        detail: "We fit the final piece and perform 'clinical remounting' to ensure your bite is perfectly balanced, preventing any sore spots later."
      },
      {
        step: "Adaptation Training",
        detail: "We teach you the specific muscle movements for eating and speaking with your new teeth, ensuring your transition is smooth and fast."
      }
    ],
    faqs: [
      { q: "Will they look like 'false teeth'?", a: "No. We use multi-layered teeth that have translucency and varying shades, making them look like healthy, natural teeth." },
      { q: "How long until I can speak normally?", a: "Most patients find their speech returns to 100% normal within 7 to 14 days as the tongue adjusts to the new prosthetic." },
      { q: "Can I sleep with my dentures in?", a: "We recommend taking them out at night. This allows your gums to 'breathe' and prevents fungal infections." },
      { q: "How do I stop dentures from clicking?", a: "Clicking usually means the fit has changed or the bite is off. A simple 're-lining' or adjustment in our clinic can fix this." },
      { q: "Do you offer 'Flexible' dentures?", a: "Yes! Valplast or Sunflex dentures are translucent and flexible, making them much more comfortable and virtually invisible." },
      { q: "What is a Bridge vs a Denture?", a: "A bridge is fixed (stays in), while a denture is removable. We can help you decide which is better for your budget and lifestyle." }
    ]
  }
]

export default treatments
