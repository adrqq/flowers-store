"use client"

import Image from "next/image";
import CardItem from "@/UI/CardItem/CardItem";
import s from "./SwiperBlock.module.scss"

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Grid } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

// Install Swiper modules
SwiperCore.use([Navigation, Grid]);

import arrow from "@/assets/svg/arrow-burgundy.svg"

export type SwiperBlockProps = {
  title: string,
};
export default function SwiperBlock({
  title
}: SwiperBlockProps) {
  let swiper: any;

  const slideNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <div className={s.swiper}>
      <div className={s.swiper__head}>
        <h1 className={s.swiper__head__title}>
          {title}
        </h1>

        <div className={s.swiper__head__nav}>
          <button
            className={s.swiper__head__nav__button}
            onClick={slidePrev}
          >
            <Image
              src={arrow}
              alt="slider-button-left"
              width={50}
              height={50}
              className={`${s.swiper__head__nav__button__icon} ${s.swiper__head__nav__button__icon__left}`}
            />
          </button>
          <button
            className={s.swiper__head__nav__button}
            onClick={slideNext}
          >
            <Image
              src={arrow}
              alt="slider-button-left"
              width={50}
              height={50}
              className={`${s.swiper__head__nav__button__icon} ${s.swiper__head__nav__button__icon__right}`}
            />
          </button>
        </div>
      </div>

      <Swiper
        onSwiper={(swiperInstance) => (swiper = swiperInstance)}
        slidesPerView={4}
        slidesPerGroup={1}
        spaceBetween={30}
        grid={{
          rows: 2
        }}
        className={s.swiper__slider}
      >
        {/* Add your second row of SwiperSlide components here */}
        <SwiperSlide className={s.swiper__slider__slide}>
          <CardItem />
        </SwiperSlide>

        <SwiperSlide className={s.swiper__slider__slide}>
          <CardItem />
        </SwiperSlide>

        <SwiperSlide className={s.swiper__slider__slide}>
          <CardItem />
        </SwiperSlide>

        <SwiperSlide className={s.swiper__slider__slide}>
          <CardItem />
        </SwiperSlide>

        <SwiperSlide className={s.swiper__slider__slide}>
          <CardItem />
        </SwiperSlide>

        <SwiperSlide className={s.swiper__slider__slide}>
          <CardItem />
        </SwiperSlide>

        <SwiperSlide className={s.swiper__slider__slide}>
          <CardItem />
        </SwiperSlide>

        <SwiperSlide className={s.swiper__slider__slide}>
          <CardItem />
        </SwiperSlide>

        <SwiperSlide className={s.swiper__slider__slide}>
          <CardItem />
        </SwiperSlide>

        <SwiperSlide className={s.swiper__slider__slide}>
          <CardItem />
        </SwiperSlide>

        <SwiperSlide className={s.swiper__slider__slide}>
          <CardItem />
        </SwiperSlide>

        <SwiperSlide className={s.swiper__slider__slide}>
          <CardItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
