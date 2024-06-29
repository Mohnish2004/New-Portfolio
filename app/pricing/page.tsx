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




const Home = () => {
  const words = ["Developer", "Manager", "Designer", "Leader","Photographer","Innovator", "Full-stack","Mobile","Web","AI","ML","Data","Security","Product"]; // Example words array
  const duration = 2000; // Example duration in milliseconds
  const [isFollowed, setIsFollowed] = React.useState(false);
  


  return (
    
    <section className="antialiased max-w-xl mx-4 sm:mx-auto">
      <h1 className="mt-6 text-5xl tracking-tighter">
      My Professional Experience
      </h1>
      <div className="mb-10 mt-5">
      <p>
      I'm driven by a deep passion for using technology to create innovative solutions that make a lasting impact. Take a relaxed stroll through these projects that I've poured my heart and soul into.
      </p>
      </div>


      <section className="mt-10">
      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Product Manager</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">CodeLab</p>
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter">Technical Project Manager</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">UC Davis Genome Center</p>
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        
        
        
        
        <h2 className="font-medium text-xl mb-1 tracking-tighter">        Undergraduate Researcher
</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        Laboratory for AI, Robotics and Automation        </p>

      
      <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Software Engineering Intern</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        eSolutionsMEA
        </p>

        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Student Ambassador / Tour Guide</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        University of California, Davis
        </p>


        <ul className="mb-10 justify-end font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/leeerob"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Download Resume</p>
          </a>
        </li>
        </ul>

      </div>
    </section>

    <h2 className=" mt-20 font-semibold mb-2 text-3xl tracking-tighter">
      Leadership Experience
      </h2>

      <section className="mt-5">
      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="font-medium text-xl mb-1 tracking-tighter">President / Vice President</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">CodeLab</p>
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter">Vice President</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">Google Developers Students Club</p>
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        

        <h2 className="font-medium text-xl mb-1 tracking-tighter">Vice President</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">Sachacks</p>

      
      <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Deputy Headboy</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        Jss Private School
        </p>
      </div>
    </section>


    <h2 className=" font-semibold mt-20 text-3xl tracking-tighter">
       Achievements
      </h2>

      <section className="mt-10">
      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Technical skill </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">Programming: Python, C, C++, JavaScript, HTML, CSS, SQL, Web Development: MongoDB, Express.js, React.js, Node.js, App Development: Kotlin, Flutter, Dart, Swift </p>
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter">Relevant Courses</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">Discrete Mathematics, Linear Algebra, Data Structures & Algorithms, Ethics in an Age of Technology, Computer Organization & Machine-Dependent Programming, Software Development & Object-Oriented Programming in C++, Calculus I, II & III

</p>
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        

        <h2 className="font-medium text-xl mb-1 tracking-tighter">Online Certifications</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">CS 50 Harvard, AI for Everyone (Intel AI Aware 2021), Getting Started with Python (University of Michigan - Coursera), Intro to AI (Deeplearning), Probability and Data with R (Duke University - Coursera)
</p>

      
      <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Accolades</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        Dean's Honor List, Best Presentation award, individual standout award & Best Beginner Project award @GDSC , Best in Leveraging of Data/Computation @ 2023 AIFS Apps for Food and Ag Hackathon, x2 VIRTUOSO AWARD, Best Position Paper @ Model United Nations, 5 x Best Speaker @ Toastmasters International, Badminton, Runner up @ Men's doubles Tournament</p>
      </div>
    </section>
    






<ol className="mt-20 relative border-s border-gray-200 dark:border-gray-700">                  
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">President</h3>
    </li>
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Vice President of Externals</h3>
    </li>
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Dec 2023 - June 2024</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Product Manager</h3>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
    </li>
</ol>


<ol className=" mt-20 relative border-s border-gray-200 dark:border-gray-700">                  
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg></a>
    </li>
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
        <p className="t font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
    </li>
    <li className="ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
    </li>
</ol>







    </section>

    
  );
}

export default Home;

