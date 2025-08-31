import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero = () => {
  const bannerImages = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Modern Hospital Building",
      title: "నెరవటి మల్టిస్పెషాలిటీ హాస్పిటల్‌కి స్వాగతం",
      subtitle: "Excellence in Healthcare"
    },
    // {
    //   id: 2,
    //   image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    //   alt: "IVF Laboratory Equipment",
    //   title: "Advanced IVF & Fertility Care",
    //   subtitle: "Specialized Reproductive Medicine"
    // },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "ENT Specialist Consultation",
      title: "Expert ENT Care",
      subtitle: "Ear, Nose & Throat Specialists"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Gynecology Care",
      title: "Comprehensive Gynecology",
      subtitle: "Women's Health & Wellness"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Emergency Care",
      title: "24/7 Emergency Care",
      subtitle: "Always Here When You Need Us"
    }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Moving Ambulance Animation */}
      <div className="absolute top-6 sm:top-6 md:top-8 left-6 sm:left-6 md:left-8 z-10 animate-bounce-x">
        <div className="flex items-center space-x-1 sm:space-x-2 bg-red-600 text-white px-4 sm:px-4 md:px-6 py-3 sm:py-3 md:py-4 rounded-full shadow-lg">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-red-600 font-bold text-xs sm:text-sm">🚑</span>
          </div>
          <span className="font-semibold text-xs sm:text-sm md:text-base">Emergency: 24/7</span>
        </div>
      </div>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="hero-swiper"
      >
        {bannerImages.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
              <img
                src={banner.image}
                alt={banner.alt}
                className="w-full h-full object-cover object-center"
                style={{ 
                  objectFit: 'cover', 
                  objectPosition: 'center',
                  minHeight: '100%',
                  minWidth: '100%'
                }}
                onError={(e) => {
                  // Fallback to a placeholder if image doesn't exist
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='800' viewBox='0 0 1920 800'%3E%3Crect width='1920' height='800' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='24' fill='%236b7280'%3EBanner Image %23" + banner.id + "%3C/text%3E%3C/svg%3E";
                }}
              />
              {/* Rich overlay with gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="container mx-auto px-4 md:px-16 lg:px-20">
                  <div className="max-w-2xl relative z-20 text-center sm:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">
                      {banner.title}
                    </h1>
                    <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-blue-200 mb-4 sm:mb-6 md:mb-8 font-medium">
                      {banner.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                      <a
                        href="/appointment"
                        className="bg-blue-900 hover:bg-blue-950 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                      >
                        Book Appointment
                      </a>
                      <a
                        href="/departments"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                      >
                        Our Departments
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      
      {/* Custom Pagination */}
      <div className="swiper-pagination"></div>
    </section>
  );
};

export default Hero; 