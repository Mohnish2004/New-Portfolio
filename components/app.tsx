import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from 'next/image';
import '@/styles/globals.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function Swipe() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper rounded-sm"
      >
        <SwiperSlide>        <Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/102.jpg" alt={''} width={500} height={500}
        /></SwiperSlide>
                <SwiperSlide>        <Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/1.JPG" alt={''} width={500} height={500}
        /></SwiperSlide>
        <SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/101.jpg" alt={''} width={500} height={500}
        /></SwiperSlide>
        <SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/103.jpg" alt={''} width={500} height={500}
        /></SwiperSlide>
        <SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/104.jpg" alt={''} width={500} height={500}
        /></SwiperSlide>
        <SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/105.jpg" alt={''} width={500} height={500}
        /></SwiperSlide>
        <SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/106.jpg" alt={''} width={500} height={500}
        /></SwiperSlide>
        <SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/107.jpg" alt={''} width={500} height={500}
        /></SwiperSlide>
        <SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/100.jpg" alt={''} width={500} height={500}
        /></SwiperSlide>
        <SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/53.jpg" alt={''} width={500} height={500}
        /></SwiperSlide>

      </Swiper>
    </>
  );
}
