"use client"
import React from 'react';
import Chat from "@/components/chat";
import { ParallaxScroll } from '@/components/parallax-scroll';
import Dot from "@/components/dot";
import { galleryImages } from '@/config/gallery-images';

const Home = () => {
  return (
    <section className="antialiased mx-2 sm:mx-auto">
      <Dot delay={0.25} inView>
        <ParallaxScroll images={galleryImages}/>
      </Dot>
    </section>
  );
};

export default Home;
