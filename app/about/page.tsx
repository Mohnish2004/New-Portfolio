'use client'

import React from "react";
import Swipe from "@/components/app"
import Swipe1 from "@/components/app1"
import Swipe2 from "@/components/app2"
import { LinkPreview } from "@/components/link-preview";


import Image from "next/image";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}




const Home = () => {

  


  return (
    
    <section className="antialiased max-w-xl mx-4 sm:mx-auto">


      <div className="flex space-x-2 mb-5">

      <h1 data-aos="fade-in" className="mb-10 text-5xl tracking-tighter">
      About me 
      </h1>

{/* <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 mr-1 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">
 March 6th, 2004</span>
<span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs mr-1 dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">
📍 Dubai</span> */}


</div>

      <div className="mb-10 mt-5">
      <div className="prose lg:prose-xl mx-auto">

      <hr data-aos="fade-in" className="my-6 border-neutral-200 dark:border-neutral-800" />


      <div className="ml-5 float-right ">              
<Swipe1/>
</div>

{/* <img
                    src="/exp_pics/water.svg" className="float-right -mr-3 rounded-lg block h-40 w-25 image-cover" alt={''}></img> */}
<p data-aos="fade-in" className="first-letter:text-7xl mb-10 first-letter:font-medium first-letter:text-neutral-600 text-neutral-600 dark:text-neutral-300 first-letter:dark:text-white first-letter:mr-3 first-letter:float-left">
  They say, <span className="underline decoration-neutral-500/50"><span className=" text-md font-bold neutral-600 dark:text-ne dark:text-white">&quot;A jack of all trades is a master of none,&quot;</span></span>but not many people know the full quote:  <span className="underline decoration-neutral-500/50"><span className="text-md font-bold neutral-600 dark:text-ne dark:text-white">&quot;but oftentimes better than a master of one.&quot;</span></span> That&apos;s exactly how I see myself, I enjoy wearing multiple hats because I just love to try new things. This philosophy extends to my professional life as well. I&apos;ve explored product management, various branches of software engineering—from web to mobile, AI to ML, and even cybersecurity. My research has also taken me into robotics and virtual reality development. At the same time I always enjoy Designing because I love the intersection of art and technology. Remember every UI tells a story, and every interface is a journey, just like designing and developing this very website.
</p>





  <div className="mr-9 float-left ">              
<Swipe2 />
</div>

{/* 

  <img
                    src="/exp_pics/121.png" className="float-left rounded-sm block mr-2 h-40 w-25 image-cover" alt={''}></img> */}
  <p data-aos="fade-in" className=" text-neutral-600 dark:text-neutral-300 mb-2 mt-10" >
    One constant in my journey is my commitment to leadership. I take ownership and responsibility, paving the path wherever I go. This passion for leadership led me to join       <LinkPreview url="https://www.codelabdavis.com/" imageSrc="/cl6.png" className="font-semibold"isStatic>
CodeLab</LinkPreview>, the largest software and design agency in Davis, where I currently serve as president. It&apos;s a role that has allowed me to grow and showcase my leadership abilities.   While I&apos;m still exploring the full extent of my capabilities, one thing remains clear—I&apos;m driven by curiosity and a desire to learn, adapt, and grow. My dream is to contribute to projects that have a positive impact—on people and the planet. I&apos;m particularly excited about the potential of AI to personalize user experiences without losing the human touch.


  </p>

  {/* <img
  src="/exp_pics/baby.svg" className="float-right rounded-sm block mr-2 h-40 w-25  image-cover" alt={''}></img> */}


  {/* <div className=" mx-auto x">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap align-top">
      <div className="w-1/2 p-1 md:p-2">
        <Image
          
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/exp_pics/33.jpg" alt={''} width={500} height={500}
        />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <Image
          
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/exp_pics/38.jpeg" alt={''} width={500} height={500}
        />
      </div>
      <div className="w-full p-1 md:p-2">
        <Image
          
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/exp_pics/19.JPG" alt={''} width={500} height={500}
        />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap align-top">
      <div className="w-full p-1 md:p-2">
        <Image
          
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/exp_pics/13.jpeg" alt={''} width={500} height={500}
        />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <Image
          
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/exp_pics/32.jpg" alt={''} width={500} height={500}
        />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <Image
          
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/exp_pics/29.jpg" alt={''} width={500} height={500}
        />
      </div>
    </div>
  </div>
</div> */}


<div className="m-4 float-right ">              
<Swipe />
</div>



  <p data-aos="fade-in" className="text-neutral-600 dark:text-neutral-300 mb-10 mt-10" >
  Outside of work, I promise I do have a life. You can often find me enjoying long drives, hitting the gym, playing badminton, or watching movies (Interstellar is still my favorite). I enjoy traveling too, especially since I mostly grew up in Dubai, which I proudly call home. If you ever meet me in real life, I won&apos;t stop talking about why you should visit—I can go on and on! But for now, have a look at these pics and decide for yourself.

I&apos;m a casual photographer—casual because I prefer it not to feel professional. I love capturing life&apos;s unplanned moments and finding beauty in simple things. Want to see some? Check out my       <LinkPreview url="/gallery" imageSrc="/gallery.png" className="font-semibold" isStatic>
gallery. </LinkPreview>
 </p>
 <iframe data-aos="fade-right" className="rounded-2xl backdrop-blur-lg" title="spotify" src="https://open.spotify.com/embed/playlist/0yIGIUWcMpxYiW2Emhibrb?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
 
<p data-aos="fade-in" className="text-neutral-600 dark:text-neutral-300 mb-10 mt-10">
I&apos;m open to job opportunities that allow me to make a meaningful impact. If you have an opportunity that aligns with my skills and experiences, I&apos;d love to explore how we can collaborate. If you&apos;ve made it this far, thank you for taking the time to learn about me. You can either reach out to me or continue scrolling to discover more. The choice is yours!


</p>

<h3 data-aos="fade-in" className="-pb-3 text-neutral-600 dark:text-neutral-300 font-semibold mt-10">
Regards 
</h3>
<a className="-pl-4 -pt-5">
                <svg 
                  width="90" 
                  height="90" 
                  viewBox="0 0 144 66" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="py-4 text-neutral-600 dark:text-neutral-400"
                >
                  <path 
                    d="M31.6907 46.392C32.6008 46.6137 32.2588 43.38 32.2607 43.0902C32.3 37.0367 31.6573 30.966 32.6233 24.9505C33.5996 18.8704 34.5802 7.67156 42.9693 8.9158C47.0595 9.52244 45.8074 12.0875 45.7901 15.901V15.901C45.7784 18.4651 46.5847 16.9606 47.6776 14.6411C47.688 14.619 47.6991 14.597 47.7107 14.575C48.5977 12.9027 53.3391 9.47773 55.6207 10.2532C58.0277 11.0713 58.3581 12.3177 58.5792 14.8508C59.2355 22.3716 57.2986 30.2646 56.2107 37.6655C56.0517 38.7468 54.2447 46.5594 56.042 47.2428C58.1437 48.0419 62.0784 42.6113 62.8025 41.3598C64.0016 39.2873 65.1784 37.1975 66.056 34.9659C66.3335 34.2602 66.6215 32.6826 67.398 32.2775C67.4448 32.2531 66.8928 33.6377 66.8516 33.7147C65.8647 35.5576 65.1138 37.4439 64.3711 39.3973C63.3255 42.1475 62.0528 45.999 65.232 47.9495C68.5327 49.9746 77.3767 36.1952 72.2033 33.0993C69.7474 31.6296 64.4844 34.9488 68.7025 36.1777C73.5238 37.5824 78.5518 32.5432 81.4579 29.4897C85.9965 24.7207 90.3808 17.4522 89.8825 10.5768C89.7612 8.90415 88.6007 1.71189 85.9338 1.67306C83.7317 1.64101 81.3715 13.2626 81.0434 14.5957C79.107 22.4645 78.9565 30.6402 78.6215 38.6924C78.5487 40.4428 78.4968 42.1993 78.4501 43.9506C78.4201 45.0762 78.6618 44.1259 79.0467 43.5834C81.3359 40.3564 85.3726 39.7056 88.9986 41.0842C92.1715 42.2906 93.8265 45.1067 97.1489 46.1479C107.294 49.3272 118.849 49.7842 129.401 50.2541C133.266 50.4261 144.867 49.7945 140.999 49.797C132.782 49.8024 124.542 50.5384 116.324 50.6969C92.8358 51.1498 69.2679 50.9265 45.7854 50.243C33.5997 49.8882 21.1307 49.5358 9.19336 46.7944C8.0923 46.5415 2.32182 45.7411 2.00723 44.0622C1.53533 41.5436 7.19053 39.0926 8.61197 38.3484C20.0151 32.3778 32.6365 28.3888 45.0449 25.1495C56.1013 22.2633 67.3505 20.1706 78.6922 18.7967C81.9027 18.4078 88.5545 17.8317 91.7931 18.2478C92.6529 18.3583 92.3659 17.8413 91.6494 18.6282C86.9953 23.7396 77.8499 28.3447 72.3587 32.4501C62.0051 40.1908 51.3021 47.4823 40.6481 54.8011C36.1065 57.9211 31.4261 60.8259 27.2893 64.4583" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                  />
                </svg>
              </a>



</div>

      </div>

    </section>

    
  );
}

export default Home;

