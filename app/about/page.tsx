'use client'

import React from "react";
import Swipe from "@/components/app"
import Swipe1 from "@/components/app1"
import Swipe2 from "@/components/app2"


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

      <h1 className="mb-10 text-5xl tracking-tighter">
      About me 
      </h1>

{/* <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 mr-1 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">
 March 6th, 2004</span>
<span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs mr-1 dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">
📍 Dubai</span> */}


</div>

      <div className="mb-10 mt-5">
      <div className="prose lg:prose-xl mx-auto">

      <div className="ml-5 float-right ">              
<Swipe1 />
</div>

{/* <img
                    src="/exp_pics/water.svg" className="float-right -mr-3 rounded-lg block h-40 w-25 image-cover" alt={''}></img> */}
  <p className="first-letter:text-7xl mb-10 first-letter:font-semibold first-letter:text-neutral-600 text-neutral-600 dark:text-neutral-300 first-letter:dark:text-white first-letter:mr-3 first-letter:float-left">
  They say, "A jack of all trades is a master of none," but not many people know the full quote: "but oftentimes better than a master of one." That&apos;s exactly how I see myself, I enjoy wearing multiple hats because I just love to try new things. This philosophy extends to my professional life as well. I&apos;ve explored product management, various branches of software engineering—from web to mobile, AI to ML, and even cybersecurity. My research has also taken me into robotics and virtual reality development. At the same time I always enjoy Designing because I love the intersection of art and technology. Remember every UI tells a story, and every interface is a journey, just like designing and developing this very website.
  </p>





  <div className="mr-9 float-left ">              
<Swipe2 />
</div>

{/* 

  <img
                    src="/exp_pics/121.png" className="float-left rounded-sm block mr-2 h-40 w-25 image-cover" alt={''}></img> */}
  <p className=" text-neutral-600 dark:text-neutral-300 mb-2 mt-10" >
    One constant in my journey is my commitment to leadership. I take ownership and responsibility, paving the path wherever I go. This passion for leadership led me to join CodeLab, the largest software and design agency in Davis, where I currently serve as president. It&apos;s a role that has allowed me to grow and showcase my leadership abilities.   While I&apos;m still exploring the full extent of my capabilities, one thing remains clear—I&apos;m driven by curiosity and a desire to learn, adapt, and grow. My dream is to contribute to projects that have a positive impact—on people and the planet. I&apos;m particularly excited about the potential of AI to personalize user experiences without losing the human touch.


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



  <p className="text-neutral-600 dark:text-neutral-300 mb-10 mt-10" >
  Outside of work, I promise I do have a life. You can often find me enjoying long drives, hitting the gym, playing badminton, or watching movies (Interstellar is still my favorite). I enjoy traveling too, especially since I mostly grew up in Dubai, which I proudly call home. If you ever meet me in real life, I won&apos;t stop talking about why you should visit—I can go on and on! But for now, have a look at these pics and decide for yourself.

I&apos;m a casual photographer—casual because I prefer it not to feel professional. I love capturing life&apos;s unplanned moments and finding beauty in simple things. Want to see some? Check out my gallery.
 </p>

<p className="text-neutral-600 dark:text-neutral-300 mb-10 mt-10">
I&apos;m open to job opportunities that allow me to make a meaningful impact. If you have an opportunity that aligns with my skills and experiences, I&apos;d love to explore how we can collaborate. If you&apos;ve made it this far, thank you for taking the time to learn about me. You can either reach out to me or continue scrolling to discover more. The choice is yours!


</p>

<h3 className="text-neutral-600 dark:text-neutral-300 font-semibold mt-10">
Regards 
</h3>
<h3 className="text-neutral-600 dark:text-neutral-300 font-light">
Mohnish
</h3>



</div>

      </div>

    </section>

    
  );
}

export default Home;

