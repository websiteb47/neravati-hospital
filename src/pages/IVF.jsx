import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Baby,
  Users,
  Award,
  Clock,
  Shield,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Star,
  Calendar,
  User,
  Microscope,
  TestTube,
  Stethoscope
} from 'lucide-react';
import { contactInfo } from '../config/contact';
import { useLanguage } from '../context/LanguageContext'; // ✅ added

const IVF = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { currentLanguage } = useLanguage(); // ✅ language hookv

  const treatments = [
    {
      title: {
        en: "In Vitro Fertilization (IVF)",
        te: "ఇన్ విట్రో ఫెర్టిలైజేషన్ (IVF)"
      },
      description: {
        en: "The most advanced fertility treatment where eggs are fertilized outside the body",
        te: "శరీరానికి బయట గుడ్డులను సారవంతం చేసే అధునాతన సంతానోత్పత్తి చికిత్స"
      },
      icon: TestTube
    },
    {
      title: {
        en: "Intrauterine Insemination (IUI)",
        te: "ఇంట్రాయుటెరైన్ ఇన్సెమినేషన్ (IUI)"
      },
      description: {
        en: "Placing sperm directly into the uterus during ovulation",
        te: "ఒవ్యూలేషన్ సమయంలో స్పెర్మ్‌ను గర్భాశయంలోకి నేరుగా ప్రవేశపెట్టడం"
      },
      icon: Heart
    },
    {
      title: {
        en: "Intracytoplasmic Sperm Injection (ICSI)",
        te: "ఇంట్రాసైటోప్లాస్మిక్ స్పెర్మ్ ఇంజెక్షన్ (ICSI)"
      },
      description: {
        en: "Direct injection of a single sperm into an egg",
        te: "ఒక స్పెర్మ్‌ను గుడ్డులో నేరుగా ఇంజెక్ట్ చేయడం"
      },
      icon: Microscope
    },
    {
      title: {
        en: "Frozen Embryo Transfer (FET)",
        te: "ఫ్రోజెన్ ఎంబ్రియో ట్రాన్స్‌ఫర్ (FET)"
      },
      description: {
        en: "Transfer of previously frozen embryos",
        te: "ముందుగా గడ్డకట్టిన ఎంబ్రియోలను గర్భాశయంలోకి మార్చడం"
      },
      icon: Baby
    }
  ];

  const successStories = [
    {
      name: { en: "Priya & Rajesh", te: "ప్రియ & రాజేష్" },
      age: "32 & 35",
      treatment: { en: "IVF", te: "ఐవీఎఫ్" },
      story: {
        en: "After 5 years of trying, we finally have our beautiful twins through IVF treatment.",
        te: "5 సంవత్సరాల ప్రయత్నం తర్వాత, ఐవీఎఫ్ చికిత్స ద్వారా మేము చివరికి మా అందమైన కవలలను పొందాము."
      },
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: { en: "Anjali & Suresh", te: "అంజలి & సురేష్" },
      age: "28 & 30",
      treatment: { en: "ICSI", te: "ఐసిఎస్ఐ" },
      story: {
        en: "The ICSI treatment was successful on our first attempt. We're grateful to the team.",
        te: "ఐసిఎస్ఐ చికిత్స మా మొదటి ప్రయత్నంలోనే విజయవంతమైంది. బృందానికి కృతజ్ఞతలు."
      },
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: { en: "Meera & Vikram", te: "మీరా & విక్రమ్" },
      age: "35 & 38",
      treatment: { en: "FET", te: "ఎఫ్‌ఇటి" },
      story: {
        en: "Frozen embryo transfer gave us our miracle baby after multiple failed attempts.",
        te: "అనేక విఫల ప్రయత్నాల తర్వాత ఫ్రోజెన్ ఎంబ్రియో ట్రాన్స్‌ఫర్ మాకు ఒక అద్భుత శిశువును ఇచ్చింది."
      },
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];



  const facilities = [
    {
      title: { en: "State-of-the-Art Laboratory", te: "అధునాతన ప్రయోగశాల" },
      description: {
        en: "Advanced equipment for precise embryo culture and monitoring",
        te: "ఎంబ్రియో సంస్కరణ మరియు పర్యవేక్షణ కోసం ఆధునిక పరికరాలు"
      },
      icon: Microscope
    },
    {
      title: { en: "Experienced Team", te: "అనుభవజ్ఞులైన బృందం" },
      description: {
        en: "Specialized fertility experts with years of experience",
        te: "అనుభవం గల నిపుణులైన సంతానోత్పత్తి వైద్యులు"
      },
      icon: Users
    },
    {
      title: { en: "24/7 Monitoring", te: "24/7 పర్యవేక్షణ" },
      description: {
        en: "Round-the-clock care and monitoring during treatment",
        te: "చికిత్స సమయంలో నిరంతర పర్యవేక్షణ మరియు సంరక్షణ"
      },
      icon: Clock
    },
    {
      title: { en: "High Success Rates", te: "అధిక విజయశాతం" },
      description: {
        en: "Proven track record with excellent pregnancy rates",
        te: "ఉత్తమ గర్భధారణ విజయాలతో నిరూపితమైన ఫలితాలు"
      },
      icon: Award
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: { en: "Initial Consultation", te: "ప్రారంభ సలహా" },
      description: {
        en: "Comprehensive fertility assessment and treatment planning",
        te: "సంపూర్ణ సంతానోత్పత్తి అంచనా మరియు చికిత్స ప్రణాళిక"
      }
    },
    {
      step: 2,
      title: { en: "Ovarian Stimulation", te: "గర్భాశయ ప్రేరణ" },
      description: {
        en: "Medication to stimulate multiple egg production",
        te: "అనేక గుడ్డుల ఉత్పత్తిని ప్రేరేపించడానికి ఔషధం"
      }
    },
    {
      step: 3,
      title: { en: "Egg Retrieval", te: "గుడ్డులను సేకరించడం" },
      description: {
        en: "Minimal invasive procedure to collect eggs",
        te: "గుడ్డులను సేకరించడానికి సులభమైన పద్ధతి"
      }
    },
    {
      step: 4,
      title: { en: "Fertilization", te: "సారవంతం చేయడం" },
      description: {
        en: "Eggs and sperm are combined in the laboratory",
        te: "గుడ్డులు మరియు స్పెర్మ్ ల్యాబ్‌లో కలపబడతాయి"
      }
    },
    {
      step: 5,
      title: { en: "Embryo Culture", te: "ఎంబ్రియో సంస్కరణ" },
      description: {
        en: "Embryos are cultured for 3-5 days",
        te: "ఎంబ్రియోలను 3-5 రోజుల పాటు సంస్కరించబడతాయి"
      }
    },
    {
      step: 6,
      title: { en: "Embryo Transfer", te: "ఎంబ్రియో ట్రాన్స్‌ఫర్" },
      description: {
        en: "Best quality embryos are transferred to the uterus",
        te: "ఉత్తమ నాణ్యత గల ఎంబ్రియోలను గర్భాశయంలోకి మార్చడం"
      }
    }
  ];


  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {currentLanguage === 'en'
              ? 'Advanced IVF & Fertility Care'
              : 'అధునాతన IVF మరియు సంతానోత్పత్తి సంరక్షణ'}
          </h1>
          <p className="text-xl md:text-2xl text-white-200 mb-8">
            {currentLanguage === 'en'
              ? 'Expert fertility treatments with state-of-the-art technology and compassionate care'
              : 'అధునాతన సాంకేతికత మరియు కరుణతో కూడిన సంరక్షణతో నిపుణులైన సంతానోత్పత్తి చికిత్సలు'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              {currentLanguage === 'en' ? 'Book Consultation' : 'కన్సల్టేషన్ బుక్ చేయండి'}
            </Link>
            <a
              href="#treatments"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-700 transition-colors"
            >
              {currentLanguage === 'en' ? 'View Treatments' : 'చికిత్సలు చూడండి'}
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">7000+</div>
              <div className="text-gray-600">Successful Pregnancies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">60%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">10000+</div>
              <div className="text-gray-600">Happy Families</div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="py-20">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {currentLanguage === 'en' ? 'Our Fertility Treatments' : 'మా సంతానోత్పత్తి చికిత్సలు'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentLanguage === 'en'
              ? 'We offer a comprehensive range of fertility treatments tailored to your specific needs.'
              : 'మీ అవసరాలకు అనుగుణంగా రూపొందించిన విస్తృత సంతానోత్పత్తి చికిత్సలను మేము అందిస్తున్నాము.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {treatments.map((treatment, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <treatment.icon className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {treatment.title[currentLanguage]}
              </h3>
              <p className="text-gray-600">{treatment.description[currentLanguage]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">IVF Treatment Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our step-by-step process ensures the best possible outcome for your fertility journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title[currentLanguage]}
                  </h3>
                </div>
                <p className="text-gray-600 mb-3">
                  {step.description[currentLanguage]}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {currentLanguage === 'en' ? 'Why Choose Our IVF Center?' : 'మా IVF సెంటర్ ఎందుకు ఎంచుకోవాలి?'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentLanguage === 'en'
              ? 'State-of-the-art facilities and experienced professionals for your fertility journey.'
              : 'మీ సంతానోత్పత్తి ప్రయాణానికి అనుభవజ్ఞులైన నిపుణులు మరియు ఆధునాతన సదుపాయాలు.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <facility.icon className="w-10 h-10 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title[currentLanguage]}</h3>
              <p className="text-gray-600">{facility.description[currentLanguage]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IVF Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">IVF Center Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at our advanced IVF laboratory, state-of-the-art equipment, and the journey of life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* IVF Equipment Images */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/equipment/equipment3.jpeg"
                  alt="IVF Workstation Elite Series"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">IVF Workstation Elite Series</h3>
                <p className="text-gray-600 mb-3">Advanced IVF workstation by HYTEK SCIENTIFICS INC for precise fertility treatments</p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  IVF Equipment
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/equipment/equipment4.jpeg"
                  alt="Sperm Analyser Unit"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sperm Analyser Unit</h3>
                <p className="text-gray-600 mb-3">Specialized laboratory workstation with sperm analyser for sterile IVF procedures</p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  Sterile Environment
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/equipment/equipment6.jpeg"
                  alt="Labotect Incubator C16"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Labotect Incubator C16</h3>
                <p className="text-gray-600 mb-3">Advanced incubator maintaining optimal conditions for embryo development</p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  Embryo Culture
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/equipment/equipment1.jpeg"
                  alt="Advanced Medical Microscope"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Medical Microscope</h3>
                <p className="text-gray-600 mb-3">High-precision microscope for detailed embryo analysis and selection</p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  Embryo Analysis
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/equipment/equipment2.jpeg"
                  alt="Laboratory Workstation"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">IVF Laboratory</h3>
                <p className="text-gray-600 mb-3">Spacious laboratory with multiple workstations for comprehensive IVF procedures</p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  Laboratory
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/equipment/equipment5.jpeg"
                  alt="Gynecology Examination Room"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Gynecology Examination Room</h3>
                <p className="text-gray-600 mb-3">Specialized examination room with modern equipment for women's fertility assessment</p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  Consultation
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/equipment/equipment7.jpeg"
                  alt="Embryo Transfer Room"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Embryo Transfer Room</h3>
                <p className="text-gray-600 mb-3">Specialized room equipped for safe and precise embryo transfer procedures</p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  Embryo Transfer
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/equipment/equipment8.jpeg"
                  alt="Ultrasound Machine"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Ultrasound Machine</h3>
                <p className="text-gray-600 mb-3">High-resolution ultrasound for monitoring follicle development and embryo transfer</p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  Monitoring
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/equipment/equipment9.jpeg"
                  alt="Cryopreservation Unit"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cryopreservation Unit</h3>
                <p className="text-gray-600 mb-3">Advanced freezing technology for preserving eggs, sperm, and embryos</p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  Cryopreservation
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

 
      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {currentLanguage === "en" ? "Success Stories" : "విజయ కథలు"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentLanguage === "en"
                ? "Real stories from couples who achieved their dream of parenthood"
                : "తల్లిదండ్రుల కలను సాధించిన జంటల నిజమైన కథలు"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {/* Uncomment if you want images */}
                  {/* <img
              src={story.image}
              alt={story.name[currentLanguage]}
              className="w-16 h-16 rounded-full object-cover mr-4"
            /> */}
                  <div>
                    <h3 className="font-bold text-gray-900">
                      {story.name[currentLanguage]}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {currentLanguage === "en" ? "Age" : "వయస్సు"}: {story.age}
                    </p>
                    <p className="text-sm text-green-700 font-semibold">
                      {story.treatment[currentLanguage]}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{story.story[currentLanguage]}</p>
                <div className="flex items-center">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-400 to-green-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {currentLanguage === 'en'
              ? 'Ready to Start Your Fertility Journey?'
              : 'మీ సంతానోత్పత్తి ప్రయాణాన్ని ప్రారంభించడానికి సిద్ధంగా ఉన్నారా?'}
          </h2>
          <p className="text-xl text-green-200 mb-8 max-w-3xl mx-auto">
            {currentLanguage === 'en'
              ? 'Schedule a consultation with our fertility experts and take the first step towards parenthood.'
              : 'మా నిపుణులతో కన్సల్టేషన్ బుక్ చేసుకుని, తల్లిదండ్రుల దిశగా మొదటి అడుగు వేయండి.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              {currentLanguage === 'en' ? 'Book Consultation' : 'కన్సల్టేషన్ బుక్ చేయండి'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href={`tel:${contactInfo.phoneNumbers[0]}`}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-700 transition-colors inline-flex items-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              {currentLanguage === 'en' ? 'Call Now' : 'ఇప్పుడు కాల్ చేయండి'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IVF;




