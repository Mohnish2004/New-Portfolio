"use client"
// Import necessary components and utilities
import React from 'react';
import useMeasure from 'react-use-measure';
import Chat from "@/components/chat";
import { ParallaxScroll } from '@/components/parallax-scroll';

const Home = () => {
  const images = [
    "/about_pics/1.webp",
    "/about_pics/2.webp",
    "/about_pics/3.webp",
    "/about_pics/4.webp",
    "/about_pics/5.webp",
    "/about_pics/7.webp",
    "/about_pics/8.webp",
    "/about_pics/11.webp",
    "/about_pics/13.JPG",
    "/about_pics/16.webp",
    "/about_pics/17.webp",
    "/about_pics/18.webp",
    "/about_pics/19.webp",
    "/about_pics/20.webp",
    "/about_pics/22.webp",
    "/about_pics/30.webp",
    "/about_pics/31.webp",
    "/about_pics/32.webp",
    "/about_pics/33.webp",
    "/about_pics/37.webp",
    "/about_pics/38.webp",
    "/about_pics/39.webp",
    "/about_pics/40.webp",
    "/about_pics/42.webp",
    "/about_pics/43.webp",
    "/about_pics/45.webp",
    "/about_pics/46.webp",
    "/about_pics/47.webp",
    "/about_pics/48.webp",
    "/about_pics/49.webp",
    "/about_pics/50.webp",
    "/about_pics/51.webp",
    "/about_pics/52.webp",
    "/about_pics/53.webp",
    "/about_pics/55.webp",
    "/about_pics/56.webp",
    "/about_pics/59.jpg",
    "/about_pics/61.webp",
    "/about_pics/62.webp",
    "/about_pics/63.webp",
    "/about_pics/100.webp",
    "/about_pics/101.webp",
    "/about_pics/102.webp",
    "/about_pics/103.webp",
    "/about_pics/104.webp",
    "/about_pics/150.jpg",
    "/about_pics/150.webp",
    "/about_pics/151.jpg",
    "/about_pics/152.jpg",
  ];  



  return (
    <section className="antialiased mx-2 sm:mx-auto">
              <ParallaxScroll images={images}/>

<Chat></Chat>
    </section>
    
  );
};

export default Home;
