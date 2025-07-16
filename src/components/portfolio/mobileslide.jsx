// mobileslide.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const MobileSlider = ({ images, reverse = false }) => {
  return (
    <div className="block md:hidden">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, reverseDirection: reverse }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 object-cover rounded-lg shadow"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileSlider;
