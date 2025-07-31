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
    name: "Dr. A. Aruna Kumar",
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
    name: "Cardiology",
    icon: "heart",
    description: "Comprehensive heart care and cardiovascular treatments",
    doctors: 3,
    services: ["EKG", "Echocardiogram", "Cardiac Catheterization", "Stress Tests"]
  },
  {
    id: 2,
    name: "Neurology",
    icon: "brain",
    description: "Specialized care for neurological disorders and brain health",
    doctors: 2,
    services: ["MRI", "EEG", "Neurological Exams", "Stroke Treatment"]
  },
  {
    id: 3,
    name: "Pediatrics",
    icon: "baby",
    description: "Complete healthcare for children from birth to adolescence",
    doctors: 4,
    services: ["Well-child Visits", "Vaccinations", "Growth Monitoring", "Behavioral Health"]
  },
  {
    id: 4,
    name: "Orthopedics",
    icon: "bone",
    description: "Treatment for musculoskeletal conditions and injuries",
    doctors: 3,
    services: ["Joint Replacement", "Sports Medicine", "Physical Therapy", "Fracture Care"]
  },
  {
    id: 5,
    name: "Dermatology",
    icon: "skin",
    description: "Skin care, disease treatment, and cosmetic procedures",
    doctors: 2,
    services: ["Skin Cancer Screening", "Acne Treatment", "Cosmetic Procedures", "Allergy Testing"]
  },
  {
    id: 6,
    name: "Oncology",
    icon: "microscope",
    description: "Comprehensive cancer care and treatment programs",
    doctors: 2,
    services: ["Chemotherapy", "Radiation Therapy", "Immunotherapy", "Clinical Trials"]
  },
  {
    id: 7,
    name: "Psychiatry",
    icon: "mind",
    description: "Mental health care and psychological treatment",
    doctors: 3,
    services: ["Individual Therapy", "Group Therapy", "Medication Management", "Crisis Intervention"]
  },
  {
    id: 8,
    name: "Emergency Medicine",
    icon: "ambulance",
    description: "24/7 emergency care and trauma treatment",
    doctors: 5,
    services: ["Trauma Care", "Emergency Surgery", "Critical Care", "Urgent Care"]
  }
];

export const services = [
  {
    id: 1,
    name: "Primary Care",
    description: "Comprehensive health care for all ages",
    icon: "stethoscope",
    price: "$150",
    duration: "30-60 min"
  },
  {
    id: 2,
    name: "Specialist Consultation",
    description: "Expert consultation with specialized doctors",
    icon: "user-md",
    price: "$200",
    duration: "45 min"
  },
  {
    id: 3,
    name: "Diagnostic Imaging",
    description: "Advanced imaging services including MRI, CT, X-ray",
    icon: "scan",
    price: "$300-800",
    duration: "30-90 min"
  },
  {
    id: 4,
    name: "Laboratory Services",
    description: "Comprehensive blood work and diagnostic testing",
    icon: "flask",
    price: "$50-200",
    duration: "15 min"
  },
  {
    id: 5,
    name: "Physical Therapy",
    description: "Rehabilitation and physical therapy services",
    icon: "activity",
    price: "$120",
    duration: "60 min"
  },
  {
    id: 6,
    name: "Surgery",
    description: "Advanced surgical procedures and operations",
    icon: "scissors",
    price: "Varies",
    duration: "Varies"
  }
]; 