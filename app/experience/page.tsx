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
      </p>
      </div>


      <div className="group mt-10 flex w-full">
      <a
      href={"/"}
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-101 hover:shadow-md"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <img
              src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/The_University_of_California_Davis.svg/640px-The_University_of_California_Davis.svg.png"}
              height={84}
              width={84}
              sizes="33vw"
              className="h-14 mt-1 ml-4 w-14 rounded-full"
              alt="test"
            />
          </div>


          <div className="flex flex-col pl-5 leading-tight" >
          <h2 className="font-medium text-xl mb-1 tracking-tighter">Bachelor of Science in Computer Science</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        University of California, Davis / 2022 — 2026
        </p>
          </div>
        </div>

      </a>
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


        <ul className=" justify-end font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
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
        Dean&apos;ss Honor List, Best Presentation award, individual standout award & Best Beginner Project award @GDSC , Best in Leveraging of Data/Computation @ 2023 AIFS Apps for Food and Ag Hackathon, x2 VIRTUOSO AWARD, Best Position Paper @ Model United Nations, 5 x Best Speaker @ Toastmasters International, Badminton, Runner up @ Men&apos;s doubles Tournament</p>
      </div>
    </section>
    








    </section>

    
  );
}

export default Home;

