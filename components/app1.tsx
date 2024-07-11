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

export default function Swipe1() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        
        className="mySwiper rounded-sm transition-all duration-300 hover:scale-102 hover:shadow-lg"
      >
        <SwiperSlide>        <Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/a.JPG" alt={''} width={500} height={500}
        /></SwiperSlide>
        <SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/b.jpg" alt={''} width={500} height={500}
        /></SwiperSlide>
        <SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/H.png" alt={''} width={500} height={500}
        /></SwiperSlide>
        <SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/d.JPG" alt={''} width={500} height={500}
        /></SwiperSlide>


<SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/a1.jpg" alt={''} width={500} height={500}
        /></SwiperSlide>

                <SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/a2.JPG" alt={''} width={500} height={500}
        /></SwiperSlide>
                <SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/a3.JPG" alt={''} width={500} height={500}
        /></SwiperSlide>
                <SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/a4.JPG" alt={''} width={500} height={500}
        /></SwiperSlide>
                <SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/a5.JPG" alt={''} width={500} height={500}
        /></SwiperSlide>
                <SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/a6.jpg" alt={''} width={500} height={500}
        /></SwiperSlide>
                <SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/a7.jpg" alt={''} width={500} height={500}
        /></SwiperSlide>
                <SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/a8.jpg" alt={''} width={500} height={500}
        /></SwiperSlide>
                <SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/a9.jpg" alt={''} width={500} height={500}
        /></SwiperSlide>

        <SwiperSlide><Image
          
          className="block h-full w-full rounded-sm object-cover object-center"
          src="/exp_pics/f.jpg" alt={''} width={500} height={500}
        /></SwiperSlide>


      </Swiper>
    </>
  );
}
