'use client'
import {Tooltip} from "@nextui-org/tooltip";

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";

import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/popover";
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
import { FlipWords } from "@/components/flip"; // Replace with the correct path to FlipWords component
import { LinkPreview } from "@/components/link-preview";
import { SparklesCore } from "@/components/sparkles";
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

function ChannelLink({}) {
  return (
    <div className="group flex w-full">
      <a
        href={"/"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-102 hover:shadow-md"
      >
        <div className="flex items-center space-x-3">
          <div className="flex flex-col pl-3 pr-3 leading-tight" >
          <p className="font-light text-sm text-neutral-900 dark:text-neutral-100">
            Research Paper
            </p>
            <h1 className="font-medium text-neutral-900 dark:text-neutral-100">
            Volatility Forecasting of Large Cap U.S. Equities Using GARCH Neural Network
            </h1>
          </div>
        </div>

      </a>
    </div>
  );
}

function ProjectLink({}) {
  return (
    <div className="group flex w-full shadow-medium">
      <a
        href={"/"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-between rounded-lg rounded bg-neutral-50 px-6 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex items-center">
          <div className="relative h-50">
            <img
              src={"/mobile.png"}
              height={620}
              width={620}
              sizes="40vw"
              alt="test"
            />
          </div>
          <div className="flex flex-col">
          <p className=" font-semibold text-neutral-900 dark:text-neutral-100">
              NAME
            </p>
            <h2 className="font-light leading-none text-neutral-900 dark:text-neutral-100 tracking-tighter ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.
            </h2>
            <Chip className="text-slate mbg-white mt-6 dark:text-white dark:bg-slate-900 dark:border-slate-800" variant="faded" radius="sm" size="sm">Web Development</Chip>
          </div>
          <div className=" mt-20 transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
        </div>
      </a>
    </div>
  );
}


function BlogLink({}) {
  return (
    <div className="group">
      <a
        href={`/blog`}
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            test
          </p>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}








const Home = () => {
  const words = ["Developer", "Manager", "Designer", "Leader","Photographer","Innovator", "Full-stack","Mobile","Web","AI","ML","Data","Security","Product"]; // Example words array
  const duration = 2000; // Example duration in milliseconds
  const [isFollowed, setIsFollowed] = React.useState(false);



  return (
    
    <section className="antialiased max-w-xl mx-4 mt-8 sm:mx-auto">
      <img src="/me.png" alt="Profile" className="select-none w-[150px] h-[150px] rounded-full mb-5"/>
      <h1 className="mb-1 text-5xl tracking-tighter">
       Hey, I&apos;m Mohnish 👋🏽
      </h1>
      <div className="mb-20">
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 mr-2 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">          <FlipWords words={words} duration={duration} className="my-custom-class" />
</span>
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 mr-2 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">President of CodeLab</span>
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 mt-1 mr-2 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">Open for internships</span>


       </div>

      <div className="mb-10">
      <h2 className=" font-semibold mb-2 text-2xl tracking-tighter">
       About me
      </h2>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      </p>
      <div className="flex justify-between items-center mt-4 w-full">

<ul className=" justify-end font-sm flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
  <li>
    <a
      className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
      rel="noopener noreferrer"
      target="_blank"
      href="https://twitter.com/leeerob"
    >
      <ArrowIcon />
      <p className="ml-2 h-7">Read more</p>
    </a>
  </li>
</ul>

</div>

      </div>




 <section>
  <div className="mb-5  ">
      <h2 className=" font-semibold mb-5 mt-15 text-2xl tracking-tighter">
       Projects
      </h2>
      <div className="h-25 rounded-lg p-2 border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
  <div className="grid h-full grid-cols-2">
  <div className="m-5">
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Pool it
            </p>
            <h2 className="font-light leading-none text-neutral-900 dark:text-neutral-100 ">
            Allows UC Davis students to easily connect and rideshare with fellow students or family members traveling from the university.            </h2>
            <span className="inline-flex items-center dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">AI/ML</span>
          </div>
    <div className=" flex items-center justify-center ">
      <img src="/mobile.png"              alt="test"/>
    </div>
    <div className=" flex items-center justify-center">
  
    </div>
    </div>
    </div>
    </div>

    
    <div className="h-25 mb-5 rounded-lg p-2 border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
  <div className="grid h-full grid-cols-2">
  <div className="m-5">
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Pool it
            </p>
            <h2 className="font-light leading-none text-neutral-900 dark:text-neutral-100 ">
            Allows UC Davis students to easily connect and rideshare with fellow students or family members traveling from the university.            </h2>
            <span className="inline-flex items-center dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Web Development</span>
          </div>
    <div className=" flex items-center justify-center">
      <img src="/mobile.png"               alt="test" />
    </div>
    <div className=" flex items-center justify-center">
  
    </div>
    </div>
    </div>

    <div className="h-25 mb-5 rounded-lg p-2 border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
  <div className="grid h-full grid-cols-2">
  <div className="m-5">
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Pool it
            </p>
            <h2 className="font-light leading-none text-neutral-900 dark:text-neutral-100 ">
            Allows UC Davis students to easily connect and rideshare with fellow students or family members traveling from the university.            </h2>
            <span className="inline-flex items-center dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Mobile App</span>
          </div>
    <div className=" flex items-center justify-center">
      <img src="/mobile.png"               alt="test" />
    </div>
    <div className=" flex items-center justify-center">
  
    </div>
    </div>
    </div>

    <ul className="mb-10 justify-end font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/leeerob"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">See more projects</p>
          </a>
        </li>
        </ul>


    
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.4.1/flowbite.min.css" rel="stylesheet" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.4.1/flowbite.min.js"></script>






  <div className="mb-5">
      <h2 className=" font-semibold mb-2 text-3xl tracking-tighter">
       Publications
      </h2>
  </div>

  <ChannelLink></ChannelLink>


    </section>








      <div className="mt-20">
      <div className="mt-20 flex justify-between items-center">

<h2 className="font-semibold text-3xl tracking-tighter">
  Experience
</h2>

<div className="inline-flex items-center">
  <span className="bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 dark:text-white rounded-md ring-1 ring-inset ring-gray-500/10">
    <a href="/" className="text-md text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-100 inline-flex items-center rounded-lg">
      <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180 transition-all duration-500 hover:scale-130 hover:shadow-xl" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Zm-3 15H4.828a1 1 0 0 1 0-2h6.238a1 1 0 0 1 0 2Zm0-4H4.828a1 1 0 0 1 0-2h6.238a1 1 0 1 1 0 2Z"/>
        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
      </svg><p>hi</p>
      Resume
    </a>
  </span>
</div>

</div>







      <section className="mt-10">
      <div className="prose prose-neutral dark:prose-invert">
      <div className="flex items-center text-gray-600 mb-1">
            <div className="flex-shrink-0 mr-4">
                <img src="/codelab.svg" alt="Company Logo" className="h-20 object-contain" />
            </div>
            <div>
                <h2 className="text-lg text-black font-medium ">Product Manager</h2>
                <div className="text-gray-500 text-sm mb-1">
                <span>CodeLab, 2022-2023</span>
                    <p className="text-gray-700">Successfully designed and launched a mobile application that increased user engagement</p>
                </div>
            </div>
        </div>

        
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />

        <div className="flex items-center text-gray-600">
            <div className="flex-shrink-0 mr-4 ">
            <img src="/lara.svg" alt="Company Logo" className="h-20 w-15 object-contain" />
            </div>
            <div>
                <h2 className="text-lg text-black font-medium">Undergraduate Researcher</h2>
                <div className="text-gray-500 text-sm mb-2">
                    <span>Laboratory for AI, Robotics and Automation</span>
                    <p className="text-gray-700">Successfully designed and launched a mobile application that increased user engagement</p>
                </div>
            </div>
        </div>
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />

        <div className="flex items-center text-gray-600 mb-1">
            <div className="flex-shrink-0 mr-4">
            <img src="/gdsc.svg" alt="Company Logo" className="h-20 object-contain" />
            </div>
            <div>
                <h2 className="text-lg text-black font-medium ">Technical Project Manager intern</h2>
                <div className="text-gray-500 text-sm mb-2">
                    <span>UC Davis Genome Center, Design2Data</span>
                    <p className="text-gray-700">Successfully designed and launched a mobile application that increased user engagement</p>
                </div>
            </div>
        </div>
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />

        <div className="flex items-center text-gray-600 mb-1">
            <div className="flex-shrink-0 mr-4">
            <img src="/gdsc.svg" alt="Company Logo" className="h-20 object-contain" />
            </div>
            <div>
                <h2 className="text-lg text-black font-medium ">Vice President of Externals</h2>
                <div className="text-gray-500 text-sm mb-2">
                    <span>Google Developer Student Club</span>
                    <p className="text-gray-700">Successfully designed and launched a mobile application that increased user engagement</p>
                </div>
            </div>
        </div>
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />

        <div className="flex items-center text-gray-600 mb-1">
            <div className="flex-shrink-0 mr-4">
                <img src="/esolutions.svg" alt="Company Logo" className="h-20 object-contain" />
            </div>
            <div>
                <h2 className="text-lg text-black font-medium ">Software Engineering Intern</h2>
                <div className="text-gray-500 text-sm mb-2">
                    <span>eSolutionsMEA</span>
                    <p className="text-gray-700">Successfully designed and launched a mobile application that increased user engagement</p>
                </div>
            </div>
        </div>
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />

        <div className="flex items-center text-gray-600 mb-1">
            <div className="flex-shrink-0 mr-4">
                <img src="/uc.svg" alt="Company Logo" className="h-20 object-contain" />
            </div>
            <div>
                <h2 className="text-lg text-black font-medium ">Student Ambassador / Tour Guide</h2>
                <div className="text-gray-500 text-sm mb-2">
                    <span>University of California, Davis</span>
                    <p className="text-gray-700">Successfully designed and launched a mobile application that increased user engagement</p>
                </div>
            </div>
        </div>






        <ul className="mb-10 justify-end font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/leeerob"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Learn more </p>
          </a>
        </li>
        </ul>

      </div>
    </section>
      </div>





































<div data-popover id="popover-default" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
    <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white">Popover title</h3>
    </div>
    <div className="px-3 py-2">
        <p>And here&apos;s some amazing content. It&apos;s very engaging. Right?</p>
    </div>
    <div data-popper-arrow></div>
</div>

      <div className="mt-10">
      <h2 className=" font-semibold mb-2 text-2xl tracking-tighter">
      Hear what people have to say about me...
      </h2>

</div>





<div className="flex items-start mb-10 mt-10 gap-2.5">
<Tooltip
          key="left-start"
          placement="left-start"
      content={
        <div className="px-1 py-2">
          <div className="text-small font-bold">Amazon</div>
          <div className="text-tiny">AI Privacy engineer</div>
        </div>
      }
    >
   <img className="w-10 h-10 rounded-full" src="https://media.licdn.com/dms/image/D4D03AQGGI9xxCnbrJg/profile-displayphoto-shrink_200_200/0/1679623474258?e=2147483647&v=beta&t=VFlTvlVnkq8xnOO9GhLVAp6KneyqroowGcBVumDuYK4" alt="Jese"/>
   </Tooltip>
   
   <div className="flex flex-col gap-1 w-full max-w-[320px]">
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
         <span className="text-sm font-semibold text-gray-900 dark:text-white">Geetika</span>
         <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
      </div>
      <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <p className="text-sm font-normal text-gray-900 dark:text-white"> Mohnish is just the best guy, hire him now</p>
      </div>
      <span className="text-tiny font-normal text-gray-500 dark:text-gray-400">Delivered</span>
   </div>
</div>






    </section>

    
  );
}

export default Home;

