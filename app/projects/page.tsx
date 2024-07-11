'use client'
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Chip} from "@nextui-org/react";
import { Suspense } from 'react';
import { unstable_noStore as noStore } from 'next/cache';
import Image from 'next/image';
import Chat from "@/components/chat";

import {Card as NextUICard, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import React from "react";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
import Card1 from "@/components/Card1";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";




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
      <h1 className="mt-2 text-5xl tracking-tighter">
      Selected Work
      </h1>
      <div className="mb-10 mt-5">
      <p>
      Here are a few recent highlights of my work. Whatever I&apos;m working on, I always follow the same simple approach—blending aesthetics with functionality to create impactful solutions.      </p>
      </div>


 <section>

 <div className="mb-5">
  <div data-aos="fade-up" className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
  <a className="group block" href={"/"}>
    <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-t-lg dark:bg-neutral-800">
    <a href='https://medium.com/@mohnish.gopi/d2dcure-5b41fcbc0ee4'>
      <Image width="1000" height="1000" className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover" src="/projects/cure.png" alt="Description"/>
      </a>
    </div>
    </a>
      <div className="p-4">
      <h1 className="text-2xl mb-2 inline-block font-medium text-black dark:text-white">
             D2D Cure
          </h1>
          <p className="mt-1 mb-4 text-gray-600 text-sm leading-tight dark:text-neutral-400">
          A comprehensive overhaul and modernization of the D2D Cure Database, designed to enhance user experience and streamline the submission, curation, and characterization of enzyme data. This project, developed in collaboration with over 40 institutions, aims to provide a durable platform for biotech research for the next decade.</p>
        <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          Full Stack
        </span>
        <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          Technical PM
        </span>
        <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          Client
        </span>
        <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
        🚀 Winter 2024
        </span>
<button
  type="button"
  onClick={() => window.location.href='https://medium.com/@mohnish.gopi/d2dcure-5b41fcbc0ee4'}
  className="transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-3 ml-50 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10"
>
  Read more
</button>



      </div>
    </div>
  </div>


  <div data-aos="fade-up"className="group mb-5 flex w-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <a
        href={"https://drive.google.com/file/d/12xnuAkIVjqKLicPoPP9W_dt4a6KRIAZE/view?usp=sharing"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-102 hover:shadow-md"
      >
        <div className="flex items-center space-x-3">
        <img width="1000" height="1000" src="https://cdn3d.iconscout.com/3d/premium/thumb/crypto-stocks-chart-5349277-4466490.png?f=webp" className="h-20 w-20 "  alt="test"></img >

          <div className="flex flex-col pl-3 pr-3 leading-tight" >
          <p className="font-light text-sm text-neutral-900 dark:text-neutral-100">
            Research Paper
            </p>
            <h1 className="font-medium text-neutral-900 dark:text-neutral-100">
            Volatility Forecasting of Large Cap U.S. Equities Using GARCH Neural Network
            </h1>
            <div>
            <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          Artificial Intelligence
        </span>
        <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          Machine Learning
        </span>
        <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          Finance
        </span>
            </div>
          </div>
          
        </div>

      </a>
    </div>



 <div className="mb-5">
  <div data-aos="fade-up" className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
  <a className="group block" href={"/"}>
    <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-t-lg dark:bg-neutral-800">
    <a href='https://devpost.com/software/slate-pas0bz'>

      <Image width="1000" height="1000" className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover" src="/projects/slate3.png" alt="Description"/>
      </a>
    </div>
    </a>
      <div className="p-4">
      <h1 className="text-2xl mb-2 inline-block font-medium text-black dark:text-white">
             Slate
          </h1>
          <p className="mt-1 mb-4 text-gray-600 text-sm leading-tight dark:text-neutral-400">
          A collaborative, crowd-sourced note-creating platform, that is powered by Gemini. Slate acts as a dynamic hub to study, get instructor endorsed answers, and collaborate - all in one.
</p>
        <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          AI/LLM
        </span>
        <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          Full Stack
        </span>
        <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          HackDavis &apos;24
        </span>
        <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
        🏆 Best UI/UX
        </span>
<button
  type="button"
  onClick={() => window.location.href='https://devpost.com/software/slate-pas0bz'}
  className="transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-3 ml-50 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10"
>
  Read more
</button>



      </div>
    </div>
  </div>




  <div className="mb-2 grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="mb-5">
 <div data-aos="fade-right" className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
 <a className="group block" href={"/"}>
   <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-t-lg dark:bg-neutral-800">
   <a href='https://www.devfestdavis.com/'>
     <Image width="1000" height="1000" className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover" src="/projects/devweb.png" alt="Description"/>
     </a></div>
   </a>
     <div className="p-4">

     <h1 className="text-2xl mb-1 mr-3 inline-block font-medium text-black dark:text-white">
            DevFest Website
         </h1>
         <div>
       <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
         Front-end
       </span>
<button
  type="button"
  onClick={() => window.location.href='https://www.devfestdavis.com/'}
  className="transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-3 ml-50 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10"

>
  View Site
</button>
</div>

     </div>
   </div>
 </div>




 <div className="mb-5">
 <div data-aos="fade-left" className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
 <a className="group block" href={"/"}>
   <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-t-lg dark:bg-neutral-800">

   <a href='https://www.example.com/page.html'>

     <Image width="1000" height="1000"  className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover" src="/projects/devfest.png" alt="Description"/>
     </a></div>
   </a>
     <div className="p-4">
     <h1 className="text-2xl mb-2 inline-block font-medium text-black dark:text-white">
      Brand Identity
         </h1>
         <div>
       <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
         Graphic Design
       </span>
<button
  type="button"
  onClick={() => window.location.href='https://www.example.com/page.html'}
  className="transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-3 ml-50 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10"
>
  View Figma
</button>
</div>
     </div>
     </div>
 </div>
 </div>




<div className="mb-5">
  <div data-aos="fade-up" className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <a className="group block h-full" href={"/"}>
          <div className="h-full overflow-hidden bg-gray-100 rounded-l-lg dark:bg-neutral-800">
          <a href='https://medium.com/@mohnish.gopi/d2d-enzyme-rate-calculator-c1cc87f268f4'>

            <Image width="1000" height="1000" className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full" src="/projects/d2d2.png" alt="Description"/>
            </a>
          </div>
        </a>
      </div>
      <div className="p-6 md:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl mb-2 inline-block font-medium text-black dark:text-white">
             Enzyme Rate Calculator
          </h1>
          <p className="mt-1 mb-4 text-gray-600 text-xs leading-tight dark:text-neutral-400">
          A web appl developed to streamline the calculation of enzyme reaction rates and generate graphs from student-generated data for the Design 2 Data (D2D) project
</p><div className="mt-4">
            <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            Full Stack
            </span>
            <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
             Client
            </span>
            <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
             PM
            </span>
<button
  type="button"
  onClick={() => window.location.href='https://medium.com/@mohnish.gopi/d2d-enzyme-rate-calculator-c1cc87f268f4'}
  className="transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-3 ml-50 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10"
>
  Read more
</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>







<div className="mb-5">
  <div data-aos="fade-up" className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <a className="group block h-full" href={"/"}>
          <div className="h-full overflow-hidden bg-gray-100 rounded-l-lg dark:bg-neutral-800">
          <a href='https://medium.com/@mohnish.gopi/the-journey-of-profficient-a-first-time-pms-tale-c6583ef88d07'>

            <Image width="1000" height="1000" className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full" src="/projects/prof.png" alt="Description"/>
            </a>
          </div>
        </a>
      </div>
      <div className="p-6 md:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl mb-2 inline-block font-medium text-black dark:text-white">
             Profficient
          </h1>
          <p className="mt-1 mb-4 text-gray-600 text-xs leading-tight dark:text-neutral-400">
          A web-based platform dedicated to providing UC Davis students with a time-saving and effortless experience in viewing and reviewing professors.</p>          <div className="mt-4">
            <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              Full-Stack
            </span>
            <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
             PM
            </span>
<button
  type="button"
  onClick={() => window.location.href='https://medium.com/@mohnish.gopi/the-journey-of-profficient-a-first-time-pms-tale-c6583ef88d07'}
  className="transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-3 ml-50 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10"
>
  Read more
</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



  <div className="mb-2 grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="mb-5">
 <div data-aos="fade-right" className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
 <a className="group block" href={"/"}>
   
   <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-t-lg dark:bg-neutral-800">

   <a href='https://devpost.com/software/pool-it-or74mp'>

     <Image width="1000" height="1000" className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover" src="/projects/pool.png" alt="Description"/>
     </a></div>
   </a>
     <div className="p-4">
     <h1 className="text-2xl mb-2 inline-block font-medium text-black dark:text-white">
            Pool it
         </h1>
         <p className="mt-1 mb-4 text-xs text-gray-600 leading-tight dark:text-neutral-400">
         A mobile app developed using Flutter that allows UC Davis students to easily connect and rideshare with students or family members traveling from the university.         </p>
       <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
         Mobile Dev
       </span>
<button
  type="button"
  onClick={() => window.location.href='https://devpost.com/software/pool-it-or74mp'}
  className="transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-3 ml-50 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10"
>
  Read more
</button>
     </div>
   </div>
 </div>


 <div className="mb-5">
 <div data-aos="fade-left" className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
 <a className="group block" href={"/"}>
   <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-t-lg dark:bg-neutral-800">

   <a href='https://drive.google.com/file/d/1IjhYgylaQl5PIXfp1HapYMvdxos_wBkO/view'>

     <Image width="1000" height="1000"  className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover" src="/projects/inside2.png" alt="Description"/>
     </a></div>
   </a>
     <div className="p-4">
     <h1 className="text-2xl mb-2 inline-block font-medium text-black dark:text-white">
            Inside Admissions
         </h1>
         <p className="mt-1 mb-4 text-xs text-gray-600 leading-tight dark:text-neutral-400">
         A console-based dashboard for UC Davis tour guides, streamlining tour management and administrative tasks with efficient tour scheduling and tracking capabilities.   </p>
       <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
         Object Oriented
       </span>
<button
  type="button"
  onClick={() => window.location.href='https://drive.google.com/file/d/1IjhYgylaQl5PIXfp1HapYMvdxos_wBkO/view'}
  className="transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-3 ml-50 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10"
>
  Read more
</button>
     </div>
     </div>
 </div>
 </div>




  <div className="mb-5">
  <div data-aos="fade-up" className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <div className="flex flex-col md:flex-row">
      <div className="p-6 md:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl mb-2 inline-block font-medium text-black dark:text-white">
             Essence
          </h1>
          <p className="mt-1 mb-4 text-gray-600 text-xs leading-tight dark:text-neutral-400">
          A Sentiment Analysis platform crafted from scratch. it dives into a world of NLP-powered exploration with Essence, where every word tells a story.          </p>
          <div className="mt-4">
            <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              Python
            </span>
            <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
             NLP
            </span>
            <button type="button"   onClick={() => window.location.href='https://github.com/Mohnish2004/Essence'}
 className="transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10">
            Read more
          </button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <a className="group block h-full" href={"https://github.com/Mohnish2004/Essence"}>
          <div className="h-full overflow-hidden bg-gray-100 rounded-r-lg dark:bg-neutral-800">
              <a href='https://github.com/Mohnish2004/Essence'>

            <Image width="1000" height="1000" className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full" src="/projects/essence.png" alt="Description"/>
            </a></div>
        </a>
      </div>
    </div>
  </div>
</div>



<div className="mb-5">
  <div data-aos="fade-up"  className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <div className="flex flex-col md:flex-row">
      <div className="p-6 md:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl mb-2 inline-block font-medium text-black dark:text-white">
             Enigma Vault
          </h1>
          <p className="mt-1 mb-4 text-gray-600 text-xs leading-tight dark:text-neutral-400">
          A blockchain-based cryptocurrency project developed from scratch with RSA encryption and functionalities like mining, transactions, purchase etc.</p>
          <div className="mt-4">
            <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              Cybersecurity
            </span>
            <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
             Web Dev
            </span>
            <span className="mt-2 inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            🏆 Best Advanced Project Award 
            </span>
<button
  type="button"
  onClick={() => window.location.href='https://github.com/Mohnish2004/EnigmaVault'}
  className="transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-3 ml-50 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10"
>
  Read more
</button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <a className="group block h-full" href={"https://github.com/Mohnish2004/EnigmaVault"}>
          <div className="h-full overflow-hidden bg-gray-100 rounded-r-lg dark:bg-neutral-800">
          <a href='https://github.com/Mohnish2004/EnigmaVault'>

            <Image width="1000" height="1000" className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full " src="/projects/enigmacoin.png" alt="Description"/>
            </a></div>
        </a>
      </div>
    </div>
  </div>
</div>


<div className="mb-5">
  <div data-aos="fade-up"  className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <div className="flex flex-col md:flex-row">
      <div className="p-6 md:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl mb-2 inline-block font-medium text-black dark:text-white">
             Enigma Coin
          </h1>
          <p className="mt-1 mb-4 text-gray-600 text-xs leading-tight dark:text-neutral-400">
          A secure local password manager that uses multiple encryption like Caesar encryption, UTF-8 encoding, and Enigma encryption, with AES/DES/RSA coming soon.      </p>    <div className="mt-4">
            <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              Cybersecurity
            </span>
            <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
             Web Dev
            </span>
            <span className="mt-2 inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            🏆 Best Beginner Project Award
            </span>
<button
  type="button"
  onClick={() => window.location.href='https://github.com/Mohnish2004/EnigmaCoin'}
  className="transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-3 ml-50 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10"
>
  Read more
</button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <a className="group block h-full" href={"https://github.com/Mohnish2004/EnigmaCoin"}>
          <div className="h-full overflow-hidden bg-gray-100 rounded-r-lg dark:bg-neutral-800">
          <a href='https://github.com/Mohnish2004/EnigmaCoin'>

            <Image width="1000" height="1000" className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full " src="/projects/enigmavault.png" alt="Description"/>
            </a></div>
        </a>
      </div>
    </div>
  </div>
</div>



<div className="mb-2 grid grid-cols-1 md:grid-cols-2 gap-4">

 <div className="mb-5">
  <div data-aos="fade-rigth"  className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
  <a className="group block" href='https://github.com/Mohnish2004/Expense-Manager' >
    <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-t-lg dark:bg-neutral-800">
    <a href='https://github.com/Mohnish2004/Expense-Manager'>
      <Image width="1000" height="1000" className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover" src="/projects/slice.png" alt="Description"/>
</a>
    </div>
    </a>
      <div className="p-4">
      <h1 className="text-2xl mb-2 inline-block font-medium text-black dark:text-white">
             Slice
          </h1>
          <p className="mt-1 mb-4 text-xs text-gray-600 leading-tight dark:text-neutral-400">
          An expense manager web application built for me to manage my expenses and keep track of my spending. Slice the Bread that you earn and spend it wisely.</p>
        <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          Web Dev
        </span>
        <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          Python
        </span>
<button
  type="button"
  onClick={() => window.location.href='https://github.com/Mohnish2004/Expense-Manager'}
  className="transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-3 ml-50 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10"
>
  Read more
</button>

      </div>
    </div>
  </div>


  <div className="mb-5">
  <div data-aos="fade-left" className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
  <a className="group block" href={"/"}>
    <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-t-lg dark:bg-neutral-800">
<a href='https://github.com/Mohnish2004/TasksApp'>
      <Image width="1000" height="1000" className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover" src="/projects/hustle.png" alt="Description"/>
      </a>
   </div>
    </a>
      <div className="p-4">
      <h1 className="text-2xl mb-2 inline-block font-medium text-black dark:text-white">
             Hustle
          </h1>
          <p className="mt-1 mb-4 text-xs text-gray-600 leading-tight dark:text-neutral-400">
          A user-friendly web app for efficient to-do list management. The hustle never stops as you add, update, and track tasks to stay organized and achieve your goals.</p>
        <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          Web Dev
        </span>
        <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          Flask
        </span>
        
<button
  type="button"
  onClick={() => window.location.href='https://github.com/Mohnish2004/TasksApp'}
  className="transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-3 ml-50 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10"
>
  Read more
</button>

      </div>
      </div>
  </div>
  </div>






  <div className="mb-5">
  <div data-aos="fade-up" className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <div className="flex flex-col md:flex-row">
      <div className="p-6 md:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl mb-2 inline-block font-medium text-black dark:text-white">
             FarmChain
          </h1>
          <p className="mt-1 mb-4 text-gray-600 text-xs leading-tight dark:text-neutral-400">
          An app that revolutionizes the food supply chain through blockchain technology, providing transparency, accountability, and AI-driven shelf life predictions to minimize food waste and ensure food safety. </p>          <div className="mt-4">
            <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            🏆 Hackathon winner
            </span>
            <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
             Prototype
            </span>
            <button onClick={() => window.location.href='https://drive.google.com/file/d/1i3A2WT4jaaVXop15XyYXnANS76ZYRWtd/view'} type="button" className="transition-all mt-2 duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10">
            Read more
          </button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <a className="group block h-full" href={"https://drive.google.com/file/d/1i3A2WT4jaaVXop15XyYXnANS76ZYRWtd/view"}>
          <div className="h-full overflow-hidden bg-gray-100 rounded-r-lg dark:bg-neutral-800">
            <Image width="1000" height="1000" className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover h-full w-full" src="/projects/farm.png" alt="Description"/>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>





    <ul className="mb-10 justify-end font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Mohnish2004"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">View Github</p>
          </a>
        </li>
        </ul>

</section>
<Chat></Chat>
    </section>

    
  );
}

export default Home;

