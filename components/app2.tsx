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

export default function Swipe2() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper rounded-sm"
      >

<SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/501.jpeg" alt={''} width={500} height={500}
        /></SwiperSlide>
        <SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/500.jpeg" alt={''} width={500} height={500}
        /></SwiperSlide>
        <SwiperSlide>        <Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/2.jpeg " alt={''} width={520} height={500}
        /></SwiperSlide>
        <SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/b1.JPG" alt={''} width={500} height={500}
        /></SwiperSlide>


<SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/b3.JPG" alt={''} width={500} height={500}
        /></SwiperSlide>

<SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/b4.jpg" alt={''} width={500} height={500}
        /></SwiperSlide>


<SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/10.jpeg" alt={''} width={500} height={500}
        /></SwiperSlide>
        <SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/16.jpeg" alt={''} width={500} height={500}
        /></SwiperSlide>
        <SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/29.jpg" alt={''} width={500} height={500}
        /></SwiperSlide>
        <SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/34.jpg" alt={''} width={500} height={500}
        /></SwiperSlide>
        <SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/38.jpeg" alt={''} width={500} height={500}
        /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
