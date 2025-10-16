import { useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import { doctors, departments } from '../data/doctors';
import { Search, Filter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useParams } from 'react-router-dom';

const Doctors = () => {
  const { id } = useParams(); // Get the doctor ID from UR
  console.log("id", id)
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const { currentLanguage } = useLanguage();

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === '' || doctor.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div>
      
      {id === '1' && (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'en' ? 'Meet Our Leading Specialist' : 'మా ప్రముఖ నిపుణుడిని కలవండి'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentLanguage === 'en'
                ? 'Dr. Vinod Kumar – A pioneer in ENT surgeries and advanced otorhinolaryngology care'
                : 'డా. వినోద్ కుమార్ – ENT శస్త్రచికిత్సలు మరియు అధునాతన ఓటోరినోలారింగాలజీ సంరక్షణలో పయనీర్'}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="md:flex">
                {/* Left Profile Card */}
                <div className="md:w-1/3 bg-gradient-to-br from-green-400 to-green-400 p-8 text-white">
                  <div className="text-center">
                    <div className="w-40 h-40 bg-white rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                      <img
                        src="/images/doctor-vinod.jpeg"
                        alt="Dr. Vinod Kumar"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Dr. Vinod Kumar</h3>
                    <p className="text-white-200 mb-4">Senior Consultant</p>
                    <p className="text-white-200">ENT & Head-Neck Surgery</p>
                    <p className="text-white-200">Otorhinolaryngology Specialist</p>
                  </div>
                </div>

                {/* Right Content */}
                <div className="md:w-2/3 p-8">
                  {/* Professional Journey */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Professional Journey</h4>
                    <div className="space-y-3 text-gray-600">
                      <p>• MBBS from Osmania Medical College (1991–1997) – State Rank 74</p>
                      <p>• Postgraduation in ENT (Otorhinolaryngology) from Kakatiya Medical College, Warangal</p>
                      <p>• Worked as Surgical Registrar in KKR Hospital, Chennai</p>
                      <p>• Served as Assistant Professor in Mamatha Medical College, Khammam</p>
                      <p>• Established Department of ENT at Neravati Hospitals in 2004 and Audiology in 2005</p>
                      <p>• Over 22+ years of experience in advanced ENT surgeries with 10,000+ successful cases</p>
                      <p>• Expert in advanced endoscopic sinus surgery and microscopic ear surgeries</p>
                      <p>• Introduced Zeiss oto-microscope and Storz endoscope (2004), Microdebrider (2008), Coblator (2018)</p>
                      <p>• In 2025, established first-of-its-kind Vertigo & Allergy Clinic in Nandyal District</p>
                      <p>• Extending ENT services to peripheries (Giddalur & Khammam) every 1st Sunday for the last 22 years</p>
                      <p>• Conducted multiple free health camps for underprivileged communities</p>
                    </div>
                  </div>

                  {/* Educational Qualifications */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Educational Qualifications</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-green-700">MBBS</h5>
                          <p className="text-sm text-gray-600">Osmania Medical College (1991–97)</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-green-700">M.S. (ENT)</h5>
                          <p className="text-sm text-gray-600">Kakatiya Medical College, Warangal</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-green-700">MRSH</h5>
                          <p className="text-sm text-gray-600">Member, Royal Society for Public Health</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Areas of Interest */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Areas of Interest</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Advanced Endoscopic Sinus Surgery',
                        'Microscopic Ear Surgery',
                        'Vertigo Management',
                        'Allergy Testing & Immunotherapy',
                      ].map((area, index) => (
                        <span
                          key={index}
                          className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Visits</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Every month 1st Sunday visit in Giddaluru & Khammam at Brahma Reddy Hospital'].map((area, index) => (
                        <span key={index} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Available Services */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Available Services</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3 text-green-700">Surgical Services</h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Microdebrider & Coblator-assisted Adenoidectomy, Tonsillectomy, Turbinectomy</li>
                          <li>• Correction of Deviated Nasal Septum (SMR, Septoplasty)</li>
                          <li>• Myringoplasty & Tympanoplasty</li>
                          <li>• Dacrocystorhinostomy</li>
                          <li>• Cortical & Radical Mastoidectomy</li>
                          <li>• Thyroidectomy</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3 text-green-700">Specialized Clinics</h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Vertigo Diagnostics & Rehabilitation</li>
                          <li>• Allergy Testing (Patch & Prick Test)</li>
                          <li>• Immunotherapy Services</li>
                          <li>• Medical Management of Common ENT Diseases</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Advanced Instruments */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Advanced ENT Instruments</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { name: 'Zeiss Microscope', img: '/images/zeiss-microscope.jpg' },
                        { name: 'Carl Storz Surgical System', img: '/images/storz-system.jpg' },
                        { name: 'Microdebrider', img: '/images/microdebrider.jpg' },
                        { name: 'Coblator', img: '/images/coblator.jpg' },
                      ].map((item, idx) => (
                        <div key={idx} className="text-center">
                          {/* <div className="w-24 h-24 mx-auto mb-2 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                            <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                          </div> */}
                          <p className="text-sm text-gray-700 font-medium">{item.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {id === '2' && (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leading Specialist</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dr. A. Aruna Kumari - A pioneer in reproductive medicine and women's health
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-green-400 to-green-400 p-8 text-white">
                  <div className="text-center">
                    <div className="w-40 h-40 bg-white rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                      <img
                        src="/images/doctor-aruna.jpeg"
                        alt="Dr. A. Aruna Kumari Araveeti"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Dr. A. Aruna Kumari Araveeti</h3>
                    <p className="text-white-200 mb-4">Senior Consultant</p>
                    <p className="text-white-200">Obstetrics & Gynaecology</p>
                    <p className="text-white-200">Reproductive Medicine</p>
                  </div>
                </div>

                <div className="md:w-2/3 p-8">
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Professional Journey</h4>
                    <div className="space-y-3 text-gray-600">
                      <p>• Working as Senior Consultant in Obstetrics and Gynaecology since 2004 at Neravati Hospital, Gandhi Chowk, Nandyal</p>
                      <p>• Started Department of Reproductive Medicine at Neravati Hospital in 2015</p>
                      <p>• Providing fertility treatments for the last 10+ years</p>
                      <p>• Successfully helped around 10,000 families fulfill their dream of motherhood</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Educational Qualifications</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-green-700">MBBS (1993-99)</h5>
                          <p className="text-sm text-gray-600">Guntur Medical College, Guntur</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-green-700">DGO (1999-2001)</h5>
                          <p className="text-sm text-gray-600">Diploma in Obstetrics & Gynaecology</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-green-700">ICOG Fellowship</h5>
                          <p className="text-sm text-gray-600">Reproductive Medicine (AIR-1 Topper)</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-green-700">Masters in Reproductive Medicine</h5>
                          <p className="text-sm text-gray-600">Homerton University Hospital (UK), 2019</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-green-700">Advanced Diploma in ART</h5>
                          <p className="text-sm text-gray-600">University of Schleswig Holstein-Kiel (Germany), 2022</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-green-700">Multiple Fellowships</h5>
                          <ul className="list-disc list-inside text-sm text-gray-600">
                            <li>Cosmetic Gynaecology</li>
                            <li>Embryology</li>
                            <li>IMA-AMS</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Areas of Interest</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Fertility Treatment', 'Operative Laparoscopy', 'Operative Hysteroscopy', 'Adolescent Health Education'].map((area, index) => (
                        <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Visits</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Every month 3rd Sunday visit in Giddaluru at DGR Hospital'].map((area, index) => (
                        <span key={index} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Available Services</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3 text-green-700">Fertility Treatments</h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• IUI (Intrauterine Insemination)</li>
                          <li>• IVF (In Vitro Fertilization)</li>
                          <li>• ICSI (Intracytoplasmic Sperm Injection)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3 text-green-700">Cosmeting Gynecology</h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Vaginal Rejuvenation using PRP</li>
                        <li>• UL-Therapy</li>
                          <li>• Vaginal Tightening using laser and surgery</li>
                        <li>• Stress Urinary Incontinence using Laser</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3 text-green-700">Operative Laparoscopy</h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Lap PCOD Drilling</li>  
                        <li>• Lap Ovarian Cystectomy</li>   
                        <li>• Lap Tubal Recanalisation</li>
                        <li>• Lap Tubectomy</li>  
                        <li>• Lap Tubal Disconnection</li>  
                        <li>• Lap Myomectomy</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3 text-green-700">Operative Hysteroscopy</h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Septal Resection</li>
                        <li>• Lateral Metroplasty</li>
                        <li>• Polypectomy</li>
                        </ul>
                      </div>
                     
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {id === '3' && (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'en'
                ? 'Meet Our Leading Specialist'
                : 'మా ప్రముఖ నిపుణుడిని కలవండి'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentLanguage === 'en'
                ? 'Dr. D. Fatima Bee – Expert in laparoscopic procedures and NDVH'
                : 'డా. డి. ఫాతిమా బీ – లాపరోస్కోపిక్ ప్రక్రియలు మరియు NDVH లో నిపుణురాలు'}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="md:flex">
                {/* Left Profile Card */}
                <div className="md:w-1/3 bg-gradient-to-br from-pink-400 to-pink-500 p-8 text-white">
                  <div className="text-center">
                    <div className="w-40 h-40 bg-white rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                      <img
                        src="/images/doctor-fatima.jpeg"
                        alt="Dr. D. Fatima Bee"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Dr. D. Fatima Bee</h3>
                    <p className="text-white-200 mb-2">Gynecology & Laparoscopy</p>
                    <p className="text-white-200 mb-2">Department: IVF Infertility</p>
                    <p className="text-white-200">Laparoscopic & NDVH Surgeon</p>
                  </div>
                </div>

                {/* Right Content */}
                <div className="md:w-2/3 p-8">
                  {/* Professional Summary */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      Professional Summary
                    </h4>
                    <p className="text-gray-600">
                      Dr. D. Fatima Bee is a distinguished specialist in Gynecology and Laparoscopy,
                      with extensive experience in performing advanced laparoscopic procedures and
                      expertise in NDVH (Non-Descent Vaginal Hysterectomy). She is also actively
                      involved in IVF and infertility treatments.
                    </p>
                  </div>

                  {/* Educational Qualifications */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      Educational Qualifications
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="bg-pink-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-pink-700">MBBS</h5>
                          <p className="text-sm text-gray-600">Bachelor of Medicine & Surgery</p>
                        </div>
                        <div className="bg-pink-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-pink-700">MS (OBG)</h5>
                          <p className="text-sm text-gray-600">Master in Obstetrics & Gynecology</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-pink-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-pink-700">FMAS</h5>
                          <p className="text-sm text-gray-600">Fellowship in Minimal Access Surgery</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Areas of Interest */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Areas of Interest</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Laparoscopic Gynecological Surgeries',
                        'NDVH (Non-Descent Vaginal Hysterectomy)',
                        'IVF & Infertility Treatment',
                        'High-risk Pregnancy Care',
                      ].map((area, index) => (
                        <span
                          key={index}
                          className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Available Services */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Available Services</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3 text-pink-700">Surgical Services</h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Laparoscopic Hysterectomy</li>
                          <li>• NDVH (Non-Descent Vaginal Hysterectomy)</li>
                          <li>• Myomectomy</li>
                          <li>• Diagnostic & Operative Laparoscopy</li>
                          <li>• Hysteroscopy Procedures</li>
                          <li>• Cyst Removal & Endometriosis Treatment</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3 text-pink-700">Specialized Clinics</h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• IVF & Fertility Clinic</li>
                          <li>• High-risk Pregnancy Management</li>
                          <li>• Menstrual & Hormonal Disorder Treatment</li>
                          <li>• Postmenopausal Health Clinic</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Consultation Timings</h4>
                    <p className="text-gray-600">
                      <strong>Availability:</strong> 9AM - 3PM & 6PM - 10PM
                    </p>
                  </div>

                  {/* Advanced Techniques */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      Advanced Surgical Techniques Used
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { name: 'Laparoscope', img: '/images/laparoscope.jpg' },
                        { name: 'Hysteroscope', img: '/images/hysteroscope.jpg' },
                        { name: 'NDVH Tools', img: '/images/ndvh-tools.jpg' },
                        { name: 'Endo Trainer Kit', img: '/images/endo-trainer.jpg' },
                      ].map((item, idx) => (
                        <div key={idx} className="text-center">
                          {/* Uncomment and provide images if available */}
                          {/* <div className="w-24 h-24 mx-auto mb-2 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                    </div> */}
                          <p className="text-sm text-gray-700 font-medium">{item.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {id === '4' && (    
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leading Specialist</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dr. K. Suman Kumar – Consultant Orthopaedician with expertise in trauma care and joint replacement surgeries
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="md:flex">
                {/* Left Profile Card */}
                <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white">
                  <div className="text-center">
                    <div className="w-40 h-40 bg-white rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                      <img
                        src="/images/doctor-suman.jpeg"
                        alt="Dr. K. Suman Kumar"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Dr. K. Suman Kumar</h3>
                    <p className="text-white-200 mb-2">Orthopedics Specialist</p>
                    <p className="text-white-200">Department: Orthopedics</p>
                    <p className="text-white-200">Trauma & Joint Replacement</p>
                  </div>
                </div>

                {/* Right Content */}
                <div className="md:w-2/3 p-8">
                  {/* Professional Summary */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Professional Summary</h4>
                    <p className="text-gray-600">
                      Dr. K. Suman Kumar is a Consultant Orthopaedician with over 1000 patients successfully treated.
                      He specializes in trauma care and joint replacement surgeries, providing expert orthopedic solutions
                      with a focus on rapid recovery and long-term mobility.
                    </p>
                  </div>

                  {/* Educational Qualifications */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Educational Qualifications</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-blue-700">MBBS</h5>
                          <p className="text-sm text-gray-600">Bachelor of Medicine & Surgery</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-blue-700">MS (Orthopedics)</h5>
                          <p className="text-sm text-gray-600">Master in Orthopedic Surgery</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-blue-700">CCPM</h5>
                          <p className="text-sm text-gray-600">Certified in Pain Management</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-blue-700">MRCS (UK)</h5>
                          <p className="text-sm text-gray-600">Member of Royal College of Surgeons (UK)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Areas of Interest */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Areas of Interest</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Fracture & Trauma Care',
                        'Joint Replacement (Knee & Hip)',
                        'Arthroscopy Procedures',
                        'Spine Disorders',
                      ].map((area, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Available Services */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Available Services</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3 text-blue-700">Orthopedic Surgeries</h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Fracture Fixation & Trauma Surgeries</li>
                          <li>• Total Knee Replacement (TKR)</li>
                          <li>• Total Hip Replacement (THR)</li>
                          <li>• Arthroscopic Knee & Shoulder Surgery</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3 text-blue-700">Specialized Clinics</h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Pain Management Clinic</li>
                          <li>• Sports Injury & Rehab</li>
                          <li>• Spine Evaluation & Treatment</li>
                          <li>• Pediatric Orthopedics</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Consultation Timings</h4>
                    <p className="text-gray-600">
                      <strong>Availability:</strong> 9AM - 3PM & 6PM - 10PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}  

      {id === '5' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {currentLanguage === 'en' ? 'Meet Our Leading Specialist' : 'మా ప్రముఖ నిపుణుడిని కలవండి'}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {currentLanguage === 'en'
                  ? 'Dr. Y. Devendra Nayak – Expert in Internal Medicine and Comprehensive Patient Care'
                  : 'డా. వై. దేవేంద్ర నాయక్ – అంతర్గత వైద్య నిపుణుడు మరియు సమగ్ర రోగుల సంరక్షణలో నిపుణుడు'}
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="md:flex">
                  {/* Left Profile Card */}
                  <div className="md:w-1/3 bg-gradient-to-br from-green-400 to-green-500 p-8 text-white">
                    <div className="text-center">
                      <div className="w-40 h-40 bg-white rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                        <img
                          src="/images/doctor-devendra.jpeg"
                          alt="Dr. Y. Devendra Nayak"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Dr. Y. Devendra Nayak</h3>
                      <p className="text-white-200 mb-4">Consultant Physician</p>
                      <p className="text-white-200">General Medicine</p>
                      <p className="text-white-200">Internal Medicine Specialist</p>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="md:w-2/3 p-8">
                    {/* Professional Summary */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Professional Summary</h4>
                      <div className="text-gray-600 space-y-3">
                        <p>• Specialist in internal medicine with a focus on comprehensive patient care.</p>
                        <p>• Trained at VMMC & Safdarjung Hospital, New Delhi – one of India’s premier medical institutions.</p>
                        <p>• Manages both outpatient and inpatient cases with expertise in chronic and acute conditions.</p>
                        <p>• Trusted by 1600+ patients for expert care and accurate diagnosis.</p>
                      </div>
                    </div>

                    {/* Educational Qualifications */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Educational Qualifications</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="bg-green-50 p-3 rounded-lg">
                            <h5 className="font-semibold text-green-700">MBBS</h5>
                            <p className="text-sm text-gray-600">Bachelor of Medicine, Bachelor of Surgery</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg">
                            <h5 className="font-semibold text-green-700">MD (General Medicine)</h5>
                            <p className="text-sm text-gray-600">Specialization in Internal Medicine</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Areas of Expertise */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Areas of Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'Diabetes & Thyroid Disorders',
                          'Hypertension & Heart Disease',
                          'Fever & Infections (Dengue, Typhoid)',
                          'Chest Conditions & Asthma',
                          'Joint Pains & Arthritis',
                          'Pediatric & Geriatric Care',
                          'Gynec-related Medical Issues',
                        ].map((item, idx) => (
                          <span
                            key={idx}
                            className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Available Services */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Available Services</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3 text-green-700">Outpatient Services</h5>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Diagnosis & Treatment of Chronic Conditions</li>
                            <li>• Fever & Viral Infection Management</li>
                            <li>• Diabetes & BP Control Programs</li>
                            <li>• Regular Health Check-ups</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3 text-green-700">Inpatient Services</h5>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Emergency Medical Admissions</li>
                            <li>• IV Antibiotic & Fluid Therapy</li>
                            <li>• Management of Critical Cases</li>
                            <li>• Ongoing Monitoring & Specialist Referrals</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Availability */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Consultation Timings</h4>
                      <p className="text-gray-600">
                        <strong>Availability:</strong> 9AM - 3PM & 6PM - 10PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}


      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Doctors?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our medical professionals are committed to providing exceptional care with 
              the latest medical advancements and personalized treatment plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-green-700">15+</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Years Average Experience</h3>
              <p className="text-gray-600">
                Our doctors have extensive experience in their respective fields, 
                ensuring you receive expert care.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-purple-600">8</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Medical Specialties</h3>
              <p className="text-gray-600">
                Comprehensive coverage across all major medical specialties 
                to meet your healthcare needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-400 to-green-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Meet Your Doctor?</h2>
          <p className="text-xl text-green-200 mb-8 max-w-2xl mx-auto">
            Schedule an appointment with one of our expert doctors and take the first step 
            towards better health today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/appointment"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Book Appointment
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors; 

















// import { useState } from 'react';
// import DoctorCard from '../components/DoctorCard';
// import { doctors, departments } from '../data/doctors';
// import { Search, Filter } from 'lucide-react';

// const Doctors = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedDepartment, setSelectedDepartment] = useState('');

//   const filteredDoctors = doctors.filter(doctor => {
//     const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesDepartment = selectedDepartment === '' || doctor.department === selectedDepartment;
//     return matchesSearch && matchesDepartment;
//   });

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-green-400 to-green-400 text-white py-20">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-5xl font-bold mb-6">Our Doctors</h1>
//           <p className="text-xl text-white-200 max-w-3xl mx-auto">
//             Meet our team of experienced and compassionate doctors who are dedicated to 
//             providing you with the highest quality medical care.
//           </p>
//         </div>
//       </section>

//       {/* Search and Filter Section */}
//       <section className="py-12 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="text"
//                   placeholder="Search doctors by name or specialty..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
//                 />
//               </div>

         
//               <div className="relative">
//                 <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <select
//                   value={selectedDepartment}
//                   onChange={(e) => setSelectedDepartment(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent appearance-none bg-white"
//                 >
//                   <option value="">All Departments</option>
//                   {departments.map((dept) => (
//                     <option key={dept.id} value={dept.name}>
//                       {dept.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

           
//             {(searchTerm || selectedDepartment) && (
//               <div className="mt-6 text-center">
//                 <p className="text-gray-600">
//                   Showing {filteredDoctors.length} of {doctors.length} doctors
//                   {searchTerm && ` matching "${searchTerm}"`}
//                   {selectedDepartment && ` in ${selectedDepartment}`}
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Doctors Grid */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           {filteredDoctors.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-full mx-auto">
//               {filteredDoctors.map((doctor) => (
//                 <DoctorCard key={doctor.id} doctor={doctor} />
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-12">
//               <div className="max-w-md mx-auto">
//                 <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <Search className="w-12 h-12 text-gray-400" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">No doctors found</h3>
//                 <p className="text-gray-600 mb-6">
//                   Try adjusting your search criteria or department filter.
//                 </p>
//                 <button
//                   onClick={() => {
//                     setSearchTerm('');
//                     setSelectedDepartment('');
//                   }}
//                   className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
//                 >
//                   Clear Filters
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Doctors?</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Our medical professionals are committed to providing exceptional care with 
//               the latest medical advancements and personalized treatment plans.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="text-center">
//               <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="text-3xl font-bold text-green-700">15+</span>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Years Average Experience</h3>
//               <p className="text-gray-600">
//                 Our doctors have extensive experience in their respective fields, 
//                 ensuring you receive expert care.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="text-3xl font-bold text-purple-600">8</span>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Medical Specialties</h3>
//               <p className="text-gray-600">
//                 Comprehensive coverage across all major medical specialties 
//                 to meet your healthcare needs.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-green-400 to-green-400 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold mb-6">Ready to Meet Your Doctor?</h2>
//           <p className="text-xl text-green-200 mb-8 max-w-2xl mx-auto">
//             Schedule an appointment with one of our expert doctors and take the first step 
//             towards better health today.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="/appointment"
//               className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
//             >
//               Book Appointment
//             </a>
//             <a
//               href="/contact"
//               className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
//             >
//               Contact Us
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Doctors; 
