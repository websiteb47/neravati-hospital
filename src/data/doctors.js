export const doctors = [
  {
    id: 1,
    name: "Dr. N. Vinod Kumar",
    specialty: "ENT Specialist",
    department: "ENT",
    image: "/images/doctor-vinod.jpeg",
    experience: "Ex. Surgical Registrar, K.K.R ENT Hospital, Chennai",
    education: "MBBS (OSM), MS (ENT), MRSH",
    availability: "Mon-Sat, 9AM-5PM",
    rating: 4.8,
    patients: 950,
    description: "Expert in ear, nose, and throat problems. Former Asst. Professor at Mamata Medical College."
  },
  {
    id: 2,
    name: "Dr. A. Aruna Kumari",
    specialty: "Gynecology & IVF",
    department: "Gynecology",
    image: "/images/doctor-aruna.jpeg",
    experience: "Fellow in IVF, Cosmetic Gynecology & Laparoscopic Surgery",
    education: "MBBS, DGO, FAGE",
    availability: "Mon-Sat, 10AM-4PM",
    rating: 4.9,
    patients: 1300,
    description: "Gold Medalist. Specialist in IVF, cosmetic gynecology, and hysteroscopic surgery. Former Asst. Professor at Mamata Medical College."
  },
  {
    id: 3,
    name: "Dr. D. Fatima Bee",
    specialty: "Gynecology & Laparoscopy",
    department: "Gynecology",
    image: "/images/doctor-fatima.jpeg",
    experience: "Laparoscopic & NDVH Surgeon",
    education: "MBBS, MS (OBG), FMAS",
    availability: "Mon-Sat, 9AM-3PM",
    rating: 4.8,
    patients: 900,
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
    availability: "Mon-Sat, 9AM-5PM",
    rating: 4.7,
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
    availability: "24/7 Emergency Service Available",
    rating: 4.9,
    patients: 1600,
    description: "Specialist in diabetes, thyroid, hypertension, heart diseases, chest infections, viral fevers, dengue, typhoid, joint pains, asthma, and more. Also treats gynec, pediatric, and geriatric cases with expert care in both inpatient and outpatient settings."
  }
]
;

export const departments = [
  {
    id: 1,
    name: "IVF Infertility",
    icon: "baby",
    image: "/images/departments/ivf-infertility.svg",
    description: "Advanced fertility treatment and reproductive medicine",
    doctors: 1,
    services: ["IVF Treatment", "IUI Treatment", "Fertility Assessment", "Hormone Therapy", "Egg Freezing", "Surrogacy Consultation"]
  },
  {
    id: 2,
    name: "ENT",
    icon: "ear",
    image: "/images/departments/ent.svg",
    description: "Specialized treatment for ear, nose, and throat disorders",
    doctors: 1,
    services: ["Hearing Loss Treatment", "Sinus Surgery", "Tonsillectomy", "Voice Disorders", "Allergic Rhinitis", "Sleep Apnea Treatment"]
  },
  {
    id: 3,
    name: "Gynecology",
    icon: "baby",
    image: "/images/departments/gynecology.svg",
    description: "Comprehensive women's health care and reproductive medicine",
    doctors: 2,
    services: ["Pregnancy Care", "Laparoscopic Surgery", "Hysteroscopic Surgery", "Normal Delivery", "C-Section", "Menstrual Disorders", "PCOS Treatment"]
  },
  {
    id: 4,
    name: "Cosmetic Gynecology",
    icon: "scissors",
    image: "/images/departments/cosmetic-gynecology.svg",
    description: "Advanced cosmetic and aesthetic gynecological procedures",
    doctors: 1,
    services: ["Vaginal Rejuvenation", "Labiaplasty", "Hymenoplasty", "G-Spot Enhancement", "Laser Treatment", "Intimate Surgery"]
  },
  {
    id: 5,
    name: "Orthopaedic",
    icon: "bone",
    image: "/images/departments/orthopaedic.svg",
    description: "Treatment for bone and joint diseases, trauma, and joint replacements",
    doctors: 1,
    services: ["Joint Replacement Surgery", "Trauma Care", "Sports Injuries", "Fracture Treatment", "Arthritis Management", "Spine Surgery", "Hand Surgery", "Knee & Hip Surgery"]
  },
  {
    id: 6,
    name: "MD General",
    icon: "heart",
    image: "/images/departments/md-general.svg",
    description: "Comprehensive medical care for adults with focus on chronic diseases",
    doctors: 1,
    services: ["Diabetes Management", "Hypertension Treatment", "Thyroid Disorders", "Heart Disease", "Respiratory Problems", "Infectious Diseases", "Liver & Kidney Diseases", "Emergency Care"]
  }
];

export const services = [
  {
    id: 1,
    name: "General Physician Consultation",
    description: "Comprehensive medical care for diabetes, BP, thyroid, heart diseases, and more",
    icon: "stethoscope",
    price: "₹500",
    duration: "30-45 min"
  },
  {
    id: 2,
    name: "ENT Specialist Consultation",
    description: "Expert treatment for ear, nose, and throat problems",
    icon: "ear",
    price: "₹800",
    duration: "45 min"
  },
  {
    id: 3,
    name: "Gynecology & IVF Treatment",
    description: "Advanced fertility treatment and women's health care",
    icon: "baby",
    price: "₹1500",
    duration: "60 min"
  },
  {
    id: 4,
    name: "Orthopedic Consultation",
    description: "Specialized care for bone and joint problems, trauma, and joint replacements",
    icon: "bone",
    price: "₹1000",
    duration: "45 min"
  },
  {
    id: 5,
    name: "Laparoscopic Surgery",
    description: "Minimally invasive surgical procedures for various conditions",
    icon: "scissors",
    price: "₹25,000+",
    duration: "Varies"
  },
  {
    id: 6,
    name: "Emergency Care",
    description: "24/7 emergency medical services and IPD facility",
    icon: "ambulance",
    price: "Emergency",
    duration: "24/7"
  },
  {
    id: 7,
    name: "Diagnostic Services",
    description: "Blood tests, imaging, and comprehensive diagnostic workup",
    icon: "flask",
    price: "₹200-2000",
    duration: "15-60 min"
  },
  {
    id: 8,
    name: "Fever & Infection Treatment",
    description: "Treatment for malaria, typhoid, dengue, viral fevers, and infections",
    icon: "thermometer",
    price: "₹800",
    duration: "30 min"
  }
]; 