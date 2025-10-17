export const doctors = [
  {
    id: 1,
    name: "Dr. N. Vinod Kumar",
    specialty: "ENT Specialist",
    department: "ENT",
    image: "/images/doctor-vinod.jpeg",
    experience: "Ex. Surgical Registrar, K.K.R ENT Hospital, Chennai",
    education: "MBBS (OSM), MS (ENT), MRSH",
    availability: "9AM - 3PM & 6PM - 10PM",
    //patients: 950,
    description: "Expert in ear, nose, and throat problems. Former Asst. Professor at Mamata Medical College."
  },
  {
    id: 2,
    name: "Dr. A. Aruna Kumari",
    specialty: "Gynecology & IVF",
    department: "IVF Infertility",
    image: "/images/doctor-aruna.jpeg",
    experience: "Fellow in IVF, Cosmetic Gynecology & Laparoscopic Surgery",
    education: "MBBS, DGO, FAGE",
    availability: "9AM - 3PM & 6PM - 10PM",
    //patients: 1300,
    description: "Gold Medalist. Specialist in IVF, cosmetic gynecology, and hysteroscopic surgery. Former Asst. Professor at Mamata Medical College."
  },
  {
    id: 3,
    name: "Dr. D. Fatima Bee",
    specialty: "Gynecology & Laparoscopy",
    department: "IVF Infertility",
    image: "/images/doctor-fatima.jpeg",
    experience: "Laparoscopic & NDVH Surgeon",
    education: "MBBS, MS (OBG), FMAS",
    availability: "9AM - 3PM & 6PM - 10PM",
    //patients: 900,
    description: "Expert in laparoscopic procedures and normal delivery without hysterectomy (NDVH)."
  },
  {
    id: 4,
    name: "Dr. K. Suman Kumar",
    specialty: "Orthopedics",
    department: "Orthopedics",
    image: "/images/doctor-suman.jpeg",
    experience: "Specialist in trauma and joint replacements",
    education: "MBBS, MS (Ortho), CCPM, MRCS (UK)",
    availability: "9AM - 3PM & 6PM - 10PM",
    patients: 1000,
    description: "Consultant Orthopaedician with expertise in trauma care and joint replacement surgeries."
  },
  {
    id: 5,
    name: "Dr. Y. Devendra Nayak",
    specialty: "General Physician & Internal Medicine",
    department: "General Medicine",
    image: "/images/doctor-devendra.jpeg",
    experience: "Trained at VMMC & Safdarjung Hospital, New Delhi",
    education: "MBBS, MD (General Medicine)",
    availability: "9AM - 3PM & 6PM - 10PM",
    //patients: 1600,
    description: "Specialist in diabetes, thyroid, hypertension, heart diseases, chest infections, viral fevers, dengue, typhoid, joint pains, asthma, and more. Also treats gynec, pediatric, and geriatric cases with expert care in both inpatient and outpatient settings."
  },
];

export const departments = [
 
  {
    id: 1 ,
    name: "ENT",
    icon: "ear",
    image: "/images/departments/ent.svg",
    description: "Specialized treatment for ear, nose, and throat disorders",
    doctors: 1,
    services: ["Hearing Loss Treatment", "Sinus Surgery", "Tonsillectomy", "Voice Disorders", "Allergic Rhinitis", "Sleep Apnea Treatment"]
  },

  {
    id: 2,
    name: "IVF Infertility",
    icon: "baby",
    image: "/images/departments/ivf-infertility.svg",
    description: "Advanced fertility treatment and reproductive medicine",
    doctors: 1,
    specialization: "IVF",
    services: ["IVF Treatment", "IUI Treatment", "Fertility Assessment", "Hormone Therapy", "Egg Freezing", "Surrogacy Consultation"]
  },
  {
    id: 3,
    name: "Cosmetic Gynecology",
    icon: "scissors",
    image: "/images/departments/cosmetic-gynecology.svg",
    description: "Advanced cosmetic and aesthetic gynecological procedures",
    doctors: 1,
    services: ["Vaginal Rejuvenation", "Labiaplasty", "Hymenoplasty", "G-Spot Enhancement", "Laser Treatment", "Intimate Surgery"]
  },
  {
    id: 4,
    name: "Gynecology",
    icon: "baby",
    image: "/images/departments/gynecology.svg",
    description: "Comprehensive women's health care and reproductive medicine",
    doctors: 1,
    services: ["Pregnancy Care", "Laparoscopic Surgery", "Hysteroscopic Surgery", "Normal Delivery", "C-Section", "Menstrual Disorders", "PCOS Treatment"]
  },
  
  {
    id: 5,
    name: "Orthopedics",
    icon: "bone",
    image: "/images/departments/orthopaedic.svg",
    description: "Treatment for bone and joint diseases, trauma, and joint replacements",
    doctors: 1,
    services: ["Joint Replacement Surgery", "Trauma Care", "Sports Injuries", "Fracture Treatment", "Arthritis Management", "Spine Surgery", "Hand Surgery", "Knee & Hip Surgery"]
  },
  {
    id: 6,
    name: "General Medicine",
    icon: "heart",
    image: "/images/departments/md-general.svg",
    description: "Comprehensive medical care for adults with focus on chronic diseases",
    doctors: 1,
    services: ["Diabetes Management", "Hypertension Treatment", "Thyroid Disorders", "Heart Disease", "Respiratory Problems", "Infectious Diseases", "Liver & Kidney Diseases", "Emergency Care"]
  },
  {
    id: 7,
    name: "Vertigo",
    icon: "activity",
    image: "/images/departments/vertigo.svg",
    description:
      "Comprehensive evaluation and treatment for balance disorders, dizziness, and vertigo-related conditions",
    doctors: 1,
    services: [
      "Vertigo Assessment",
      "Balance Rehabilitation Therapy",
      "BPPV Treatment (Benign Paroxysmal Positional Vertigo)",
      "Vestibular Migraine Management",
      "Inner Ear Function Testing",
      "Postural Instability Therapy"
    ]
  }
];

export const services = [
  {
    id: 1,
    name: {
      en: "General Physician Consultation",
      te: "సాధారణ వైద్య సలహా"
    },
    description: {
      en: "Comprehensive medical care for diabetes, BP, thyroid, heart diseases, and more",
      te: "మధుమేహం, బిపి, థైరాయిడ్, గుండె వ్యాధులు మరియు మరిన్నింటికి సమగ్ర వైద్య సంరక్షణ"
    },
    icon: "stethoscope",
    price: "₹500",
    duration: "30-45 min"
  },
  {
    id: 2,
    name: {
      en: "ENT Specialist Consultation",
      te: "ENT విశేషజ్ఞ సలహా"
    },
    description: {
      en: "Expert treatment for ear, nose, and throat problems",
      te: "చెవి, ముక్కు మరియు గొంతు సమస్యలకు నిపుణ చికిత్స"
    },
    icon: "ear",
    price: "₹800",
    duration: "45 min"
  },
  {
    id: 3,
    name: {
      en: "Gynecology & IVF Treatment",
      te: "స్త్రీరోగవిజ్ఞానం & ఐవిఎఫ్ చికిత్స"
    },
    description: {
      en: "Advanced fertility treatment and women's health care",
      te: "అధునాతన సంతానోత్పత్తి చికిత్స మరియు మహిళల ఆరోగ్య సంరక్షణ"
    },
    icon: "baby",
    price: "₹1500",
    duration: "60 min"
  },
  {
    id: 4,
    name: {
      en: "Orthopedic Consultation",
      te: "అస్థిపంజర సలహా"
    },
    description: {
      en: "Specialized care for bone and joint problems, trauma, and joint replacements",
      te: "ఎముకలు మరియు కీళ్ళ సమస్యలు, గాయాలు మరియు కీళ్ళ భర్తీలకు ప్రత్యేక సంరక్షణ"
    },
    icon: "bone",
    price: "₹1000",
    duration: "45 min"
  },
  {
    id: 5,
    name: {
      en: "Laparoscopic Surgery",
      te: "లాపరోస్కోపిక్ శస్త్రచికిత్స"
    },
    description: {
      en: "Minimally invasive surgical procedures for various conditions",
      te: "వివిధ పరిస్థితులకు కనీసంగా ఇన్వేసివ్ శస్త్రచికిత్స ప్రక్రియలు"
    },
    icon: "scissors",
    price: "₹25,000+",
    duration: "Varies"
  },
  {
    id: 6,
    name: {
      en: "Emergency Care",
      te: "అత్యవసర సంరక్షణ"
    },
    description: {
      en: "24/7 emergency medical services and IPD facility",
      te: "24/7 అత్యవసర వైద్య సేవలు మరియు IPD సౌకర్యం"
    },
    icon: "ambulance",
    price: "Emergency",
    duration: "24/7"
  },
  {
    id: 7,
    name: {
      en: "Diagnostic Services",
      te: "నిర్ధారణ సేవలు"
    },
    description: {
      en: "Blood tests, imaging, and comprehensive diagnostic workup",
      te: "రక్త పరీక్షలు, చిత్రీకరణ మరియు సమగ్ర నిర్ధారణ పని"
    },
    icon: "flask",
    price: "₹200-2000",
    duration: "15-60 min"
  },
  {
    id: 8,
    name: {
      en: "Fever & Infection Treatment",
      te: "జ్వరం & ఇన్ఫెక్షన్ చికిత్స"
    },
    description: {
      en: "Treatment for malaria, typhoid, dengue, viral fevers, and infections",
      te: "మలేరియా, టైఫాయిడ్, డెంగ్యూ, వైరల్ జ్వరాలు మరియు ఇన్ఫెక్షన్లకు చికిత్స"
    },
    icon: "thermometer",
    price: "₹800",
    duration: "30 min"
  }
]; 



