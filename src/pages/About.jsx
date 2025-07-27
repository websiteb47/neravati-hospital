import { Award, Users, Clock, Heart, Shield, Target, Eye, Users as TeamIcon } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "50+", label: "Expert Doctors" },
    { icon: Clock, number: "24/7", label: "Emergency Care" },
    { icon: Award, number: "25+", label: "Years Experience" },
    { icon: Heart, number: "10k+", label: "Happy Patients" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We treat every patient with empathy, respect, and understanding."
    },
    {
      icon: Shield,
      title: "Excellence",
      description: "We maintain the highest standards of medical care and service quality."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We embrace new technologies and treatments to improve patient outcomes."
    },
    {
      icon: Users,
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical practices."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      position: "Chief Medical Officer",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      description: "Leading our medical team with over 15 years of experience in healthcare management."
    },
    {
      name: "Dr. Michael Chen",
      position: "Head of Neurology",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      description: "Specialized in neurological disorders with advanced diagnostic expertise."
    },
    {
      name: "Dr. Emily Rodriguez",
      position: "Head of Pediatrics",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
      description: "Dedicated to providing exceptional care for children and families."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#1E3A8A] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About HealthCare</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Providing exceptional healthcare services with compassion, innovation, and excellence 
            since 1998. Your health and well-being are our top priorities.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission & Vision</h2>
              
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <Target className="w-8 h-8 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To provide exceptional healthcare services that improve the quality of life 
                    for our patients and communities through compassionate care, advanced technology, 
                    and continuous innovation.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <Eye className="w-8 h-8 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To be the leading healthcare provider known for excellence, innovation, and 
                    patient-centered care, setting the standard for medical services in our region.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=600&fit=crop&crop=center"
                alt="Medical team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape the way we care for our patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who lead our medical center and ensure 
              the highest standards of care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-blue-50 to-green-50">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our History</h2>
              <p className="text-xl text-gray-600">
                A journey of excellence and commitment to healthcare
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    1998
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Foundation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    HealthCare Medical Center was established with a vision to provide 
                    comprehensive healthcare services to the community.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2005
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Expansion</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Expanded our facilities and added new departments to serve a growing 
                    patient population with advanced medical services.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2015
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Technology</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Implemented state-of-the-art medical technology and digital health 
                    systems to enhance patient care and outcomes.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2023
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Excellence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Recognized as a leading healthcare provider with multiple awards 
                    for excellence in patient care and medical innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 