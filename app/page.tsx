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

function Badge() {
  return (
    <a
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}



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
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <img
              src={"/me.png"}
              height={84}
              width={84}
              sizes="33vw"
              className="h-16 w-26 rounded-full border border-neutral-200 dark:border-neutral-700"
            />
            <div className="relative -right-10 -top-6 inline-flex h-6 w-6 items-center rounded-full border border-neutral-200 bg-white p-1 dark:border-neutral-700">
              <svg width="15" height="11" role="img" aria-label="YouTube logo">
                <use href="/sprite.svg#youtube" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col pl-5 leading-tight" >
          <p className="font-light text-sm text-neutral-900 dark:text-neutral-100">
            Research Paper
            </p>
            <h1 className="font-medium text-neutral-900 dark:text-neutral-100">
            Volatility Forecasting of Large Cap U.S. Equities Using GARCH Neural Network
            </h1>
          </div>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
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
        className="flex w-full items-center justify-between rounded-lg rounded bg-neutral-50 px-6 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex items-center">
          <div className="relative h-50">
            <img
              src={"/mobile.png"}
              height={620}
              width={620}
              sizes="40vw"
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
       Hey, I'm Mohnish 👋
      </h1>
      <div className="mb-20">
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 mr-2 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">          <FlipWords words={words} duration={duration} className="my-custom-class" />
</span>
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 mr-2 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">President of CodeLab</span>
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 mr-2 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">Open for internships</span>


       </div>

      <div className="mb-10">
      <h2 className=" font-semibold mb-2 text-2xl tracking-tighter">
       About me
      </h2>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      </p>
      </div>


 <section>
  <div className="mb-5 ">
      <h2 className=" font-semibold mb-5 text-2xl tracking-tighter">
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
      <img src="/mobile.png" alt=""/>
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
      <img src="/mobile.png" className=" "  />
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
      <img src="/mobile.png" className="" />
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


    






  <div className="mb-5">
      <h2 className=" font-semibold mb-2 text-2xl tracking-tighter">
       Publications
      </h2>
  </div>

  <ChannelLink></ChannelLink>

  <ul className="mb-10 justify-end font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
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

    </section>








      <div className="mt-20">
      <h2 className=" font-semibold mb-2 text-3xl tracking-tighter">
       Experience
      </h2>






      <section className="mt-10">
      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Product Manager
</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        CodeLab
        </p>
        
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">        Undergraduate Researcher
</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        Laboratory for AI, Robotics and Automation        </p>

        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter"> Vice President of Externals</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        Google Developer Student Club
        </p>

      
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

        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Vice President of Experience</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Sachacks
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
            <p className="ml-2 h-7">Learn more </p>
          </a>
        </li>
        </ul>

      </div>
    </section>
      </div>




      
      <div className="mt-10">
      <h2 className=" font-semibold mb-10 text-3xl tracking-tighter">
       Education
      </h2>
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Bachelor of Science in Computer Science</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        University of California, Davis / 2022 — 2026
        </p>
      </div>


      <div className="mt-10">
      <h2 className=" font-semibold mb-2 text-2xl tracking-tighter">
       Testimonials
      </h2>

</div>




<div className="grid mt-10 mb-8 border border-gray-200 rounded-lg max-w-3xl shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
            <p className="my-4 text-sm">If you care for your time, I hands down would go with this."</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Bonnie Green</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 ">Developer at Open AI</div>
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-md font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
            <p className="my-4 text-sm">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Roberta Casas</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow</h3>
            <p className="my-4 text-sm">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Jese Leos</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
            <p className="my-4 text-sm">You have many examples that can be used to create a fast prototype for your team."</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Joseph McFall</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">CTO at Google</div>
            </div>
        </figcaption>    
    </figure>
</div>


    </section>

    
  );
}

export default Home;

