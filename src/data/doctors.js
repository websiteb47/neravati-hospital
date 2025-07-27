export const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    department: "Cardiology",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    experience: "15 years",
    education: "MD, Harvard Medical School",
    availability: "Mon-Fri, 9AM-5PM",
    rating: 4.8,
    patients: 1200,
    description: "Specialized in interventional cardiology with expertise in heart disease prevention and treatment."
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    department: "Neurology",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    experience: "12 years",
    education: "MD, Stanford Medical School",
    availability: "Mon-Thu, 8AM-4PM",
    rating: 4.9,
    patients: 980,
    description: "Expert in neurological disorders and stroke treatment with advanced diagnostic skills."
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    department: "Pediatrics",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
    experience: "10 years",
    education: "MD, Johns Hopkins University",
    availability: "Mon-Fri, 10AM-6PM",
    rating: 4.7,
    patients: 1500,
    description: "Dedicated pediatrician specializing in child development and preventive care."
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    department: "Orthopedics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    experience: "18 years",
    education: "MD, Mayo Clinic",
    availability: "Tue-Sat, 9AM-5PM",
    rating: 4.6,
    patients: 1100,
    description: "Orthopedic surgeon with expertise in joint replacement and sports medicine."
  },
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    specialty: "Dermatology",
    department: "Dermatology",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    experience: "14 years",
    education: "MD, Yale Medical School",
    availability: "Mon-Fri, 8AM-4PM",
    rating: 4.8,
    patients: 1300,
    description: "Board-certified dermatologist specializing in skin cancer detection and cosmetic procedures."
  },
  {
    id: 6,
    name: "Dr. Robert Kim",
    specialty: "Oncology",
    department: "Oncology",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    experience: "20 years",
    education: "MD, MD Anderson Cancer Center",
    availability: "Mon-Fri, 7AM-3PM",
    rating: 4.9,
    patients: 800,
    description: "Leading oncologist with expertise in personalized cancer treatment and immunotherapy."
  },
  {
    id: 7,
    name: "Dr. Amanda Foster",
    specialty: "Psychiatry",
    department: "Psychiatry",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
    experience: "11 years",
    education: "MD, Columbia University",
    availability: "Mon-Thu, 9AM-5PM",
    rating: 4.7,
    patients: 950,
    description: "Psychiatrist specializing in anxiety, depression, and cognitive behavioral therapy."
  },
  {
    id: 8,
    name: "Dr. David Martinez",
    specialty: "Emergency Medicine",
    department: "Emergency Medicine",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    experience: "13 years",
    education: "MD, UCLA Medical School",
    availability: "24/7 Emergency Coverage",
    rating: 4.8,
    patients: 2000,
    description: "Emergency medicine specialist with trauma care expertise and critical care skills."
  }
];

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