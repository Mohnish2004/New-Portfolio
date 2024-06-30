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
      Selected Projects
      </h1>
      <div className="mb-10 mt-5">
      <p>
      I&apos;m driven by a deep passion for using technology to create innovative solutions that make a lasting impact. Take a relaxed stroll through these projects that I&apos;ve poured my heart and soul into.
      </p>
      </div>


 <section>




 <div className="mb-5">
  <div className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
  <a className="group block" href={"/"}>
    <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-t-lg dark:bg-neutral-800">
      <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover" src="/mobile2.png" alt="Description"/>
    </div>
    </a>
      <div className="p-4">
        <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
          Pool it
        </h3>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          Allows UC Davis students to easily connect and rideshare with fellow students or family members traveling from the university.
        </p>
        <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          AI/ML
        </span>
        <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          AI/ML
        </span>
        <button type="button" className="transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-3 ml-50 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10">
          Read more
        </button>


      </div>
    </div>
  </div>



<div className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-4">

 <div className="mb-5">
  <div className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
  <a className="group block" href={"/"}>
    <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-t-lg dark:bg-neutral-800">
      <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover" src="/mobile2.png" alt="Description"/>
    </div>
    </a>
      <div className="p-4">
        <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
          Pool it
        </h3>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          Allows UC Davis students to easily connect and rideshare with fellow students or family members traveling from the university.
        </p>
        <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          AI/ML
        </span>
        <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          AI/ML
        </span>
        <button type="button" className="transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-3 ml-50 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10">
          Read more
        </button>
      </div>
    </div>
  </div>

  <div className="mb-5">
  <div className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
  <a className="group block" href={"/"}>
    <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-t-lg dark:bg-neutral-800">
      <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover" src="/mobile2.png" alt="Description"/>
    </div>
    </a>
      <div className="p-4">
        <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
          Pool it
        </h3>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          Allows UC Davis students to easily connect and rideshare with fellow students or family members traveling from the university.
        </p>
        <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          AI/ML
        </span>
        <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          AI/ML
        </span>
        <button type="button" className="transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-3 ml-50 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10">
          Read more
        </button>
      </div>
      </div>
  </div>
  </div>
    


  <div className="mb-5">
  <div className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <div className="flex flex-col md:flex-row">
      <div className="p-4 md:w-1/2 flex flex-col justify-between">
        <div>
          <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
            Pool it
          </h3>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            Allows UC Davis students to easily connect and rideshare with fellow students or family members traveling from the university.
          </p>
          <div className="mt-2">
            <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              AI/ML
            </span>
            <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              AI/ML
            </span>
          </div>
        </div>
        <div className="mt-2">
          <button type="button" className="transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10">
            Read more
          </button>
        </div>
      </div>
      <div className="md:w-1/2">
        <a className="group block h-full" href={"/"}>
          <div className="h-full overflow-hidden bg-gray-100 rounded-r-lg dark:bg-neutral-800">
            <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full" src="/mobile2.png" alt="Description"/>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>



<div className="mb-5">
  <div className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <div className="flex flex-col md:flex-row">
      <div className="p-4 md:w-1/2 flex flex-col justify-between">
        <div>
          <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
            Pool it
          </h3>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            Allows UC Davis students to easily connect and rideshare with fellow students or family members traveling from the university.
          </p>
          <div className="mt-2">
            <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              AI/ML
            </span>
            <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              AI/ML
            </span>
          </div>
        </div>
        <div className="mt-2">
          <button type="button" className="transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10">
            Read more
          </button>
        </div>
      </div>
      <div className="md:w-1/2">
        <a className="group block h-full" href={"/"}>
          <div className="h-full overflow-hidden bg-gray-100 rounded-r-lg dark:bg-neutral-800">
            <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full" src="/mobile2.png" alt="Description"/>
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
            href="https://twitter.com/leeerob"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">See more projects</p>
          </a>
        </li>
        </ul>

</section>
    </section>

    
  );
}

export default Home;

