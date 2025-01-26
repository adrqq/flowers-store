"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import s from "./FlowersPhoto.module.scss";
import Image from "next/image";
import flower from "@/assets/img/bouquet-rose.png";
import flower2 from "@/assets/img/red-roses.jpg";

const FlowersPhoto = () => {
  const photos = [flower, flower2, flower, flower, flower];
  const [selectedPhoto, setSelectedPhoto] = useState(photos[0]);

  const handleThumbnailClick = (photo: any) => {
    setSelectedPhoto(photo);
  };

  return (
    <div className={s.product_card__left}>
      {/* Large photo */}
      <div className={s.product_card__wrapper__big}>
        <Image
          className={s.product_card__img__big}
          src={selectedPhoto}
          alt="Large flower image"
          fill
          sizes="(max-width: 768px) 90vw, 580px"
          priority
        />
      </div>

      {/* Slider with thumbnails */}
      <div className={s.product_card__swiper_wrapper}>
        <button
          className={`${s.arrow} ${s.arrow_left}`}
          aria-label="Previous slide"
        ></button>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          navigation={{
            nextEl: `.${s.arrow_right}`,
            prevEl: `.${s.arrow_left}`,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 }, // 1 photo for small screens
            768: { slidesPerView: 3 }, // 3 photos for medium/large screens
          }}
          className={s.product_card__swiper}
        >
          {photos.map((photo, index) => (
            <SwiperSlide
              key={index}
              className={s.product_card__swiper_slide}
              onClick={() => handleThumbnailClick(photo)}
              role="button"
              aria-label={`Select image ${index + 1}`}
            >
              <div className={s.product_card__wrapper__small}>
                <Image
                  src={photo}
                  alt={`Small flower image ${index + 1}`}
                  className={s.product_card__img__small}
                  width={122}
                  height={170}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className={`${s.arrow} ${s.arrow_right}`}
          aria-label="Next slide"
        ></button>
      </div>
    </div>
  );
};

export default FlowersPhoto;
