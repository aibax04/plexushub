import { Zap, ShieldCheck, Smile, Sparkles, Heart, Stethoscope, Sun, Target, ScanLine, Brush, Crown, Layers, PenTool as Tool } from 'lucide-react'

const treatments = [
  {
    id: "invisalign",
    title: "Invisalign Aligners",
    shortDesc: "The world's most advanced clear aligner system. Straighten your teeth invisibly with custom-moulded removable trays.",
    tag: "Premium",
    icon: Smile,
    duration: "6–12 months",
    sessions: "Monthly check-ups",
    heroLine: "The clear alternative to braces — designed for your comfort.",
    fullDescription: "Invisalign is the gold standard in clear aligner technology. Using proprietary SmartTrack material and 3D digital planning, we create a series of custom, nearly invisible aligners that gradually shift your teeth into place. No metal, no wires, and completely removable for eating and cleaning.",
    indications: [
      "Crowded or overlapping teeth",
      "Wide gaps (diastema) between teeth",
      "Mild to moderate overbite or underbite",
      "Crooked teeth causing difficulty in cleaning",
      "Adults and teens seeking a discreet solution"
    ],
    whyChooseUs: [
      "iTero 3D Digital Scanners (No messy impressions)",
      "Smile Simulation: See your final result before you start",
      "Diamond-level Invisalign provider expertise",
      "Proprietary SmartTrack material for faster, predictable results"
    ],
    process: [
      {
        step: "3D Digital Scan",
        detail: "We use an iTero scanner to create a precise 3D model of your teeth. No messy putty involved."
      },
      {
        step: "Custom ClinCheck Plan",
        detail: "Our doctors map out every tooth movement digitally, showing you the transformation timeline."
      },
      {
        step: "Aliger Fabrication",
        detail: "Your custom sets of Invisalign aligners are manufactured using medical-grade thermoplastic."
      },
      {
        step: "Daily Wear & Progress",
        detail: "You wear each set for 1-2 weeks, removing them only to eat, drink, and brush."
      }
    ],
    faqs: [
      { q: "How many hours a day must I wear them?", a: "For best results, wear them for 20–22 hours per day." },
      { q: "Is it painful?", a: "You'll feel slight pressure with each new set — a sign that your teeth are moving." },
      { q: "Can I eat anything?", a: "Yes! Since you remove them to eat, there are no food restrictions." }
    ]
  },
  {
    id: "laser-dentistry",
    title: "Laser Dentistry",
    shortDesc: "No drills, no needles, no pain. Advanced laser technology for gum treatments, painless fillings, and instant whitening.",
    tag: "High-Tech",
    icon: Zap,
    duration: "20–60 min",
    sessions: "1 visit",
    heroLine: "The future of dentistry — faster, safer, and completely pain-free.",
    fullDescription: "Laser dentistry utilizes concentrated beams of light energy to treat various dental conditions. At Plexus Dental, we use the Waterlase iPlus system, which allows us to perform many procedures without the need for traditional drills or even local anaesthesia. Lasers provide unmatched precision, minimal bleeding, and significantly faster healing times.",
    indications: [
      "Gummy smile or uneven gum line",
      "Tooth decay (filling preparation without drills)",
      "Canker sores or cold sore treatment",
      "Teeth whitening for faster results",
      "Sensitive teeth (desensitization)"
    ],
    whyChooseUs: [
      "Waterlase iPlus: The world's most advanced dental laser",
      "Expertise in minimally invasive laser surgery",
      "Reduced need for shots and anaesthesia",
      "Faster recovery and minimal post-op discomfort"
    ],
    process: [
      {
        step: "Laser Analysis",
        detail: "We determine the optimal laser wavelength and power settings for your specific clinical needs."
      },
      {
        step: "Precise Treatment",
        detail: "The laser beam gently removes decayed tissue or reshapes gums without heat, vibration, or friction."
      },
      {
        step: "Instant Sterilization",
        detail: "As the laser works, it kills bacteria and seals blood vessels, leading to a sterile and bloodless environment."
      },
      {
        step: "Rapid Healing",
        detail: "Laser energy stimulates the body's natural healing response (biostimulation) for a faster recovery."
      }
    ],
    faqs: [
      { q: "Does it hurt?", a: "No. Most laser procedures are so gentle they don't even require numbing shots." },
      { q: "Is it safe?", a: "Extremely. When performed by trained professionals with protective eyewear, it is safer than traditional methods." }
    ]
  },
  {
    id: "fillings",
    title: "Dental Fillings / Teeth Fillings",
    shortDesc: "Mercury-free, tooth-colored composite restorations. We restore cavities invisibly and restore tooth strength.",
    tag: "Essential",
    icon: Tool,
    duration: "20–40 min",
    sessions: "1 visit",
    heroLine: "Strong, invisible restorations for a healthy smile.",
    fullDescription: "Dental fillings are used to repair teeth damaged by decay or minor fractures. We use advanced composite resins that bond directly to your tooth structure, allowing us to preserve more of your natural enamel. These fillings are meticulously shade-matched to your teeth, making them completely invisible to the eye.",
    indications: [
      "Sensitivity to sweets or temperature",
      "Visible dark spots or 'holes' on teeth",
      "Food trapping between teeth",
      "Rough or jagged edges felt with the tongue",
      "Replacing old, silver (amalgam) fillings"
    ],
    whyChooseUs: [
      "Ultra-strong, nanohybrid composite materials",
      "Moisture-controlled bonding for maximum longevity",
      "Anatomically contoured to restore perfect bite function",
      "100% Mercury-free and biocompatible"
    ],
    process: [
      {
        step: "Painless Preparation",
        detail: "We remove the decayed portion of the tooth gently. For small cavities, we often use lasers instead of drills."
      },
      {
        step: "Conditioning & Bonding",
        detail: "The tooth surface is conditioned to create a strong micromechanical bond with the resin."
      },
      {
        step: "Layered Reconstruction",
        detail: "The filling is applied in thin layers, each 'cured' with a special UV light to ensure maximum strength."
      },
      {
        step: "Final Sculpting & Polish",
        detail: "We carve the final layer to match your natural tooth anatomy and polish it to a diamond-like shine."
      }
    ],
    faqs: [
      { q: "How long do they last?", a: "With good hygiene, modern composite fillings typically last 7–10 years or more." },
      { q: "Can I eat right after?", a: "Since we use light-curing technology, the filling is at 100% strength immediately. You can eat as soon as the numbness wears off." }
    ]
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment (RCT)",
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
    id: "wisdom-tooth",
    title: "Wisdom Teeth Removal",
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
    id: "braces",
    title: "Dental Braces & Aligners",
    shortDesc: "From traditional metal to modern ceramic braces. Effective solutions for complex bite corrections and perfect alignment.",
    tag: "Ortho Specialists",
    icon: Smile,
    duration: "12–24 months",
    sessions: "Monthly check-ups",
    heroLine: "Total control for the most complex smiles.",
    fullDescription: "While aligners are great for many, traditional or aesthetic braces remain the gold standard for complex bite issues and significant tooth rotations. We offer the latest low-friction 'Self-Ligating' braces, ceramic (tooth-colored) options, and traditional metal braces with fun colors for kids.",
    indications: [
      "Severe crowding or complex bite issues",
      "Impacting or severely rotated teeth",
      "Skeletal jaw discrepancies",
      "Children and teens who need 'fixed' appliances",
      "When maximum control over tooth roots is required"
    ],
    whyChooseUs: [
      "Specialist Orthodontic care for all ages",
      "Low-friction braces for faster movement and less discomfort",
      "High-aesthetic ceramic options for a more discreet look",
      "Comprehensive retention plan included"
    ],
    process: [
      {
        step: "Comprehensive Ortho Exam",
        detail: "We take X-rays, photos, and scans to build a biological blueprint of your jaw and teeth."
      },
      {
        step: "Braces Placement",
        detail: "Brackets are bonded to your teeth and the first 'memory-wire' is connected."
      },
      {
        step: "Regular Adjustments",
        detail: "Every 4-6 weeks, we adjust the wires to continue the gentle shifting process."
      },
      {
        step: "The Big Reveal",
        detail: "Once teeth are perfectly aligned, braces are removed and we move to the retention phase."
      }
    ],
    faqs: [
      { q: "Are traditional braces faster?", a: "In many complex cases, yes. They offer 24/7 force application and better control over three-dimensional movements." },
      { q: "Do they hurt?", a: "You may feel some soreness for 2-3 days after an adjustment, easily managed with soft food." }
    ]
  },
  {
    id: "clear-aligners",
    title: "Clear Aligners",
    shortDesc: "Invisible, comfortable, and removable. Straighten your teeth without anyone noticing using our advanced clear aligner systems.",
    tag: "Popular",
    icon: Smile,
    duration: "4–12 months",
    sessions: "Monthly check-ups",
    heroLine: "Your dream smile, made invisible.",
    fullDescription: "Clear aligners are custom-made, transparent trays that fit snugly over your teeth. We offer various high-quality aligner systems that provide an effective and aesthetic alternative to traditional braces. Each plan is digitally designed to ensure precise movement and optimal comfort throughout your journey.",
    indications: [
      "Gaps between teeth",
      "Mild crowding or overlapping",
      "Minor bite corrections",
      "Relapse after previous orthodontic work",
      "Seeking a more affordable invisible option"
    ],
    whyChooseUs: [
      "Fully digital workflow for maximum precision",
      "Comfortable, BPA-free medical grade plastic",
      "Regular progress tracking with our orthodontic team",
      "Flexible payment plans for all budgets"
    ],
    process: [
      {
        step: "Initial Consultation",
        detail: "We assess your smile and take digital scans to determine if clear aligners are right for you."
      },
      {
        step: "Digital Design",
        detail: "Your treatment is planned tooth-by-tooth using advanced orthodontic software."
      },
      {
        step: "Aligner Delivery",
        detail: "You receive your first few sets of aligners and instructions on how to wear them."
      },
      {
        step: "Monitoring",
        detail: "Short check-ups every few weeks ensure your teeth are moving according to plan."
      }
    ],
    faqs: [
      { q: "How are they different from Invisalign?", a: "While Invisalign is the most well-known brand, we offer other high-quality aligner systems that may be more suitable for certain cases or budgets." },
      { q: "Can kids wear them?", a: "They are generally recommended for teenagers and adults once all permanent teeth have erupted." }
    ]
  },
  {
    id: "dental-implants",
    title: "Dental Implants / Teeth Implants",
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
    id: "dentures",
    title: "Dentures",
    shortDesc: "Premium removable prosthetics that restore your ability to eat, speak, and smile with confidence. Natural-looking and comfortable.",
    tag: "Restorative",
    icon: Brush,
    duration: "1–2 weeks",
    sessions: "3–4 visits",
    heroLine: "Restore your smile and function — tailored for comfort.",
    fullDescription: "Modern dentures are far from the 'false teeth' of the past. We offer lightweight, high-impact resins and flexible materials that mimic the look of natural gums and teeth. Whether you need partial dentures to fill a few gaps or full dentures for an entire arch, we ensure a precise fit that provides stability and confidence.",
    indications: [
      "Loss of multiple teeth in different areas",
      "Total tooth loss in one or both arches",
      "Sunken facial appearance due to lack of tooth support",
      "Seeking a more affordable alternative to implants",
      "Difficulty eating certain foods or speaking clearly"
    ],
    whyChooseUs: [
      "BPS (Biofunctional Prosthetic System) for superior suction and fit",
      "Flexible Valplast dentures with no visible metal clips",
      "Custom shade-matching for a truly natural appearance",
      "Fast repair and re-lining services"
    ],
    process: [
      {
        step: "Impression Phase",
        detail: "We take detailed scans or impressions of your jaw to ensure the base fits perfectly."
      },
      {
        step: "Bite Registration",
        detail: "We measure how your jaws meet to ensure comfortable chewing and a balanced smile."
      },
      {
        step: "Wax Try-In",
        detail: "You get to 'test-drive' your teeth in wax to approve the look, shape, and color."
      },
      {
        step: "Final Delivery",
        detail: "Your finished denture is fitted and adjusted for maximum comfort and function."
      }
    ],
    faqs: [
      { q: "Will they fall out when I talk?", a: "Properly fitted dentures use natural suction and muscle control. For extra stability, we can also offer 'Implant-Supported' dentures." },
      { q: "How do I clean them?", a: "Use a special denture brush and mild soap; avoid toothpaste as it can be abrasive to the resin." }
    ]
  },
  {
    id: "crowns",
    title: "Dental Crowns",
    shortDesc: "High-strength 'caps' that protect and restore damaged teeth. Custom-designed in zirconia or porcelain for a 100% natural look.",
    tag: "Full Protection",
    icon: Crown,
    duration: "1 week",
    sessions: "2 visits",
    heroLine: "360-degree protection for your most valuable teeth.",
    fullDescription: "A dental crown is a custom-made cover that encases the entire visible portion of a tooth. Crowns are used to restore the shape, size, and strength of teeth that are broken, heavily filled, or have undergone root canal treatment. We use premium materials like Zirconia and E-max porcelain to ensure your crown is both beautiful and virtually indestructible.",
    indications: [
      "Broken or severely cracked teeth",
      "Teeth with very large, failing fillings",
      "Following a root canal treatment",
      "Discolored or misshapen teeth (cosmetic)",
      "Protecting weak teeth from fracturing"
    ],
    whyChooseUs: [
      "Digital scanning for perfect, 'no-goo' impressions",
      "High-translucency Zirconia for lifelike aesthetics",
      "Precision-milled CAD/CAM technology",
      "Guaranteed fit and bite alignment"
    ],
    process: [
      {
        step: "Tooth Preparation",
        detail: "We gently reshape the tooth to create space for the crown material."
      },
      {
        step: "Digital Scanning",
        detail: "An intra-oral scanner captures every detail of the prep for the lab."
      },
      {
        step: "Temporary Crown",
        detail: "You receive a temporary crown to protect the tooth while your final one is crafted."
      },
      {
        step: "Bonding & Fitting",
        detail: "The final crown is bonded using high-strength adhesive and checked for a perfect bite."
      }
    ],
    faqs: [
      { q: "How long do they last?", a: "With good care, a high-quality crown can last 15–20 years." },
      { q: "Will it look different from my other teeth?", a: "No. We use digital shade matching to ensure it blends seamlessly with your natural smile." }
    ]
  },
  {
    id: "bridges",
    title: "Dental Bridges",
    shortDesc: "A permanent, fixed solution for missing teeth. We 'bridge the gap' using high-strength ceramic that anchors to your natural teeth.",
    tag: "Fixed Gap-Fill",
    icon: Layers,
    duration: "1–2 weeks",
    sessions: "2 visits",
    heroLine: "Restore your bite and prevent shifting with a seamless bridge.",
    fullDescription: "A dental bridge consists of two or more crowns for the teeth on either side of a gap, with a false tooth (or teeth) in between. Unlike dentures, bridges are fixed in place and don't need to be removed. They prevent your remaining teeth from shifting, restore your ability to chew properly, and maintain the natural shape of your face.",
    indications: [
      "Filling a gap left by 1–3 missing teeth",
      "Preventing surrounding teeth from tilting or shifting",
      "Restoring full chewing and speaking ability",
      "Seeking a non-surgical alternative to dental implants",
      "Replacing old, ill-fitting bridges"
    ],
    whyChooseUs: [
      "Bio-compatible materials for healthy gum integration",
      "CAD/CAM precision for a gap-free fit",
      "Artisan lab craftsmanship for superior aesthetics",
      "Strong enough for back-tooth function"
    ],
    process: [
      {
        step: "Anchor Preparation",
        detail: "The teeth on either side of the gap (abutments) are prepared to receive the crowns."
      },
      {
        step: "3D Digital Impressions",
        detail: "We scan the site to ensure the bridge spans the gap with micrometer precision."
      },
      {
        step: "Interim Bridge",
        detail: "A temporary bridge is fitted to maintain function and aesthetics while the lab works."
      },
      {
        step: "Final Cementation",
        detail: "The final bridge is permanently fixed, instantly restoring your full smile."
      }
    ],
    faqs: [
      { q: "Is a bridge better than an implant?", a: "Bridges are faster and don't require surgery, while implants protect the jawbone. We'll help you choose the best option for your case." },
      { q: "Is it hard to clean under a bridge?", a: "No, we'll show you how to use simple tools like 'Superfloss' to keep the area perfectly healthy." }
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
  }
]

export default treatments
