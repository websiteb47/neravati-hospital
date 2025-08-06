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
      image: "/images/banner3.jpg",
      alt: "Medical professionals in hospital"
    },
    {
      id: 2,
      image: "/images/banner4.jpg",
      alt: "Modern medical equipment"
    }
  ];

  return (
    <section className="relative overflow-hidden">
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
            <div className="relative w-full aspect-[2.4/1]">
              <img
                src={banner.image}
                alt={banner.alt}
                className="w-full h-full object-contain object-center"
                onError={(e) => {
                  // Fallback to a placeholder if image doesn't exist
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='800' viewBox='0 0 1920 800'%3E%3Crect width='1920' height='800' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='24' fill='%236b7280'%3EBanner Image %23" + banner.id + "%3C/text%3E%3C/svg%3E";
                }}
              />
              {/* Subtle overlay for better visual appeal and potential text readability */}
              <div className="absolute inset-0 bg-black/10"></div>
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