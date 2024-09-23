'use client'
import {Tooltip} from "@nextui-org/tooltip";
import Image from 'next/image';
import { FlipWords } from "@/components/flip"; // Replace with the correct path to FlipWords component
import {Card as NextUICard, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import React from "react";

import { useEffect, useState } from "react";

import { LinkPreview } from "@/components/link-preview";
import { LinkPreviews } from "@/components/link-preview-exp";
import Chat from "@/components/chat";
import Dot from "@/components/dot";
import { cn } from "@/utils/utils/cn";



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
    <div data-aos="fade-up" className="group mb-5 flex w-full transition-all duration-300 hover:scale-105  hover:shadow-xl">
    <a
        href={"https://drive.google.com/file/d/12xnuAkIVjqKLicPoPP9W_dt4a6KRIAZE/view?usp=sharing"}
        target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-102 hover:shadow-md"
    >
      <div className="flex items-center space-x-3 ">
      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/crypto-stocks-chart-5349277-4466490.png?f=webp" width="60" height="60" className="h-20 w-20 " alt="test"></img>

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
  const words = ["Developer", "Manager", "Designer", "Researcher","Leader","Photographer","Innovator", "Tourguide", "Full-stack","Mobile/Web","AI/ML","Security","Product","PM"]; // Example words array
  const duration = 2000; // Example duration in milliseconds
   const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  const [isExpanded1, setIsExpanded1] = useState(false);
const [isExpanded2, setIsExpanded2] = useState(false);
const [isExpanded3, setIsExpanded3] = useState(false);
const [isExpanded4, setIsExpanded4] = useState(false);
const [isExpanded5, setIsExpanded5] = useState(false);

const toggleExpand1 = () => setIsExpanded1(!isExpanded1);
const toggleExpand2 = () => setIsExpanded2(!isExpanded2);
const toggleExpand3 = () => setIsExpanded3(!isExpanded3);
const toggleExpand4 = () => setIsExpanded4(!isExpanded4);
const toggleExpand5 = () => setIsExpanded5(!isExpanded5);

const sentence = "Mohnish is an incredibly creative individual with exceptional product design and management skills. His imaginative mindset and unique ideas make him an invaluable asset to any team he joins. I have no doubt that his future projects will be characterized by ongoing success and innovation.  ";
  const sentence2 = "I had the pleasure of mentoring Mohnish for a duration of 1 week surrounding the world of EAMs and Interpersonal relationships that were required to succeed in this domain. Mohnish was almost immediately receptive of all the concepts in the EAM domain, oftentimes associating complex ideas with day-to-day scenarios and grasping concepts faster than the normal rate. All in all, I would say that the mental faculties required to succeed in his domain of choice definitely shone during his time with me and I would be sure to say that he’d be a great fit wherever he decides to go.  ";
  const sentence3 = "Mohnish was a participant in an AIFS hackathon some months ago here at UC Davis (I was a mentor to the teams) and I was taken aback at his organization and visualization skills regarding the hack. The judges were blown away by his and his partner's app which garnered 2nd Place among some very tough competitors. My thought was, 'This young man is going places'. Watch him ascend to the highest levels of academia and AgTech. This is a bold statement but I truly believe with great people like Mohnish, our planet will be OK. I believe this. Reach out to him. Meet him. You'll agree.  ";
  const sentence4 = "He is an exceptionally hardworking software engineer. With a unique blend of imagination and dedication, he brings a fresh perspective to every project. His drive and determination are off the charts, and he consistently goes above and beyond to deliver outstanding results.  ";
 
  const sentence5 = "Your long testimonial content goes here. It can be as long as you want, and it will be truncated if it exceeds three lines. Add more text to see how...Your long testimonial content goes here. It can be as long as you want, and it will be truncated if it exceeds three lines. Add more text to see how it works with longer content.";
  
  
  const truncatedContent = sentence.split(' ').slice(0, 30).join(' ');
  const shouldTruncate = sentence.split(' ').length > 30;
const truncatedContent2 = sentence2.split(' ').slice(0, 30).join(' ');
const shouldTruncate2 = sentence2.split(' ').length > 30;
const truncatedContent3 = sentence3.split(' ').slice(0, 30).join(' ');
const shouldTruncate3 = sentence3.split(' ').length > 30;
const truncatedContent4 = sentence4.split(' ').slice(0, 30).join(' ');
const shouldTruncate4 = sentence4.split(' ').length > 30;
const truncatedContent5 = sentence4.split(' ').slice(0, 30).join(' ');
const shouldTruncate5 = sentence4.split(' ').length > 30;
  const [expanded, setExpanded] = useState(false);
  

  return (
  
    <section className="antialiased max-w-xl mx-4 mt-8 sm:mx-auto">
< Dot delay={0.25} inView >
      <Image src="/me.png" alt="Profile" width="300" height="300" className="select-none w-[150px] h-[150px] rounded-full mb-5"/>
      <h1 className="mb-1 text-4xl" data-aos="fade-in">
       Hey, I&apos;m Mohnish 👋🏽
      </h1>
      </Dot>
      < Dot delay={0.5} inView >
      <div className="mb-20">
       <span className="inline-flex items-center rounded-md bg-gray-50 px-1 py-1 mr-2 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">          <FlipWords words={words} duration={duration} className="my-custom-class" />
</span>
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 mr-2 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">President of CodeLab</span>
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 mt-1 mr-2 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">Open for internships</span>


       </div>
       </Dot>

      {/* <div className="mb-10" > */}
      <h2 data-aos="fade-in" data-aos-delay="900" className=" font-medium mb-2 text-2xl">
       About me
      </h2>
      <div data-aos="fade-in" data-aos-delay="900">
      <p data-aos="fade-in" >
      I&apos;m a third-year Computer Science student at the University of California, Davis. With a passion for solving problems one {" "}      <LinkPreview
          url="/projects"
          imageSrc="/mobile1.png"
          isStatic
          className="font-bold"
        >
           Product
        </LinkPreview>{""} at a time. Starting from my dorm room projects, I&apos;ve cultivated a versatile skill set through diverse client engagements and hands-on{" "}      <LinkPreview
          url="https://drive.google.com/file/d/1tR8yrlVjDstqXk55d0FE4fVFTfr3RU34/view?usp=sharing"
      
          imageSrc="/resume.png"
          isStatic
          className="font-bold"
        >

           Experience
        </LinkPreview>{" "} </p>
        
<p data-aos="fade-in" className="mt-4" >My journey in tech started small but quickly grew as I embraced many roles including leadership. Currently, I serve as the president of             
<LinkPreview
          url="https://www.codelabdavis.com/"
          imageSrc="/cl6.png"
          isStatic
          className="font-bold ml-1"
        >
           Codelab
        </LinkPreview>, the largest software and design agency in Davis.</p>
        {/* </div> */}

<ul className=" mb-4 mt-6 justify-end font-sm flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
  <li>
    <a
      className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
      rel="noopener noreferrer"
      href="/about"
    >
      <ArrowIcon />
      <p className="ml-2 h-7">Read more</p>
    </a>
  </li>
</ul>

      </div>



      <h2 data-aos="fade-in" className="font-medium mb-5 text-2xl" >
       Featured work
      </h2>

 <section>
 <div className="mb-5">
  <div data-aos="fade-up" className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <div className="flex flex-col md:flex-row">
      <div className="p-6 md:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl mb-2 inline-block font-medium text-black dark:text-white">
          D2D Cure
          </h1>
          <p className="mt-1 mb-4 text-xs text-gray-600 leading-tight dark:text-neutral-400">
          A comprehensive overhaul of the D2D Cure Database, improving user experience and enzyme data management. Supporting biotech research for the next decade.
</p>          <div className="mt-4">
        <button   onClick={() => window.location.href='https://medium.com/@mohnish.gopi/d2dcure-5b41fcbc0ee4'}
 type="button" className="transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-3 ml-50 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10">
          Read more
        </button>
        
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <a className="group block h-full" href={"/"}>
          <div className="h-full overflow-hidden bg-gray-100 rounded-r-lg dark:bg-neutral-800">
          <a href='https://medium.com/@mohnish.gopi/d2dcure-5b41fcbc0ee4'>

            <Image className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full " src="/projects/cure.png" width="1000" height="1000" alt="Description"/>
          </a></div>
        </a>
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
          Rosetta Commons Education Hub
          </h1>
          <p className="mt-1 mb-4 text-xs text-gray-600 leading-tight dark:text-neutral-400">
          An educational platform built for Rosetta Commons offering curated resources for mastering Rosetta and ML-based tools in biomolecular modeling and design.</p>
          <div className="mt-4">
          <button
  type="button"
  onClick={() => window.location.href='https://test-wine-seven-64.vercel.app/'}
  className="transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-3 ml-50 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10"
>
  View Site
</button>
        
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <a className="group block h-full" href={"/"}>
          <div className="h-full overflow-hidden bg-gray-100 rounded-r-lg dark:bg-neutral-800">
          <a href='https://medium.com/@mohnish.gopi/d2dcure-5b41fcbc0ee4'>

            <Image className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full " src="/projects/eduhub.png" width="1000" height="1000" alt="Description"/>
          </a></div>
        </a>
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
          Slate
          </h1>
          <p className="mt-1 mb-4 text-gray-600 text-xs leading-tight dark:text-neutral-400">
          A crowd-sourced AI note-taking platform powered by Gemini, serving as a dynamic hub for studying, instructor-endorsed answers, and collaboration.     </p>     <div className="mt-4">
        <button   onClick={() => window.location.href='https://devpost.com/software/slate-pas0bz'}
 type="button" className=" transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-3 ml-50 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10">
          Read more
        </button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <a className="group block h-full" href={"/"}>
          <div className="h-full overflow-hidden bg-gray-100 rounded-r-lg dark:bg-neutral-800">
          <a href='https://devpost.com/software/slate-pas0bz'>

            <Image className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full " width="1000" height="1000" src="/projects/slate.jpg" alt="Description"/>
          </a></div>
        </a>
      </div>
    </div>
  </div>
</div>


{/* 
<div className="mb-5">
  <div data-aos="fade-up" className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <div className="flex flex-col md:flex-row">
      <div className="p-6 md:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl mb-2 inline-block font-medium text-black dark:text-white">
          Education Hub
          </h1>
          <p className="mt-1 mb-4 text-gray-600 text-xs leading-tight dark:text-neutral-400">
          A platform built for educational resources, tutorials, and community-driven content for mastering Rosetta's powerful tools and applications. Designed for both beginners and experts in computational biology.
</p>     <div className="mt-4">
        <button   onClick={() => window.location.href='https://devpost.com/software/slate-pas0bz'}
 type="button" className=" transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-3 ml-50 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10">
          Read more
        </button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <a className="group block h-full" href={"/"}>
          <div className="h-full overflow-hidden bg-gray-100 rounded-r-lg dark:bg-neutral-800">
          <a href='https://devpost.com/software/slate-pas0bz'>

            <Image className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full " width="1000" height="1000" src="/projects/eduhub2.png" alt="Description"/>
          </a></div>
        </a>
      </div>
    </div>
  </div>
</div> */}









<div className="mb-5">
  <div data-aos="fade-up" className="rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <div className="flex flex-col md:flex-row">
      <div className="p-6 md:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl mb-2 inline-block font-medium text-black dark:text-white">
          Enzyme Rate Calculator
          </h1>
          <p className="mt-1 mb-4 text-gray-600 text-xs leading-tight dark:text-neutral-400">
          A web appl developed to streamline the calculation of enzyme reaction rates and generate graphs from student-generated data for the Design 2 Data (D2D) project</p>
          <div className="mt-4">

            <button   onClick={() => window.location.href='https://medium.com/@mohnish.gopi/d2d-enzyme-rate-calculator-c1cc87f268f4'}
 type="button" className="mt-2 transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10">
            Read more
          </button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <a className="group block h-full" href={"/"}>
          <div className="h-full overflow-hidden bg-gray-100 rounded-r-lg dark:bg-neutral-800">
          <a href='https://medium.com/@mohnish.gopi/d2d-enzyme-rate-calculator-c1cc87f268f4'>

            <Image className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full " width="1000" height="1000" src="/projects/d2d2.png" alt="Description"/>
          </a></div>
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
            href="/projects"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">See more projects</p>
          </a>
        </li>
        </ul>


    
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.4.1/flowbite.min.css" rel="stylesheet" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.4.1/flowbite.min.js"></script>






  <div data-aos="fade-in" className="mb-5">
      <h2 className="font-medium text-2xl">
       Publications
      </h2>
  </div>

  <ChannelLink data-aos="fade-up" ></ChannelLink>


    </section>








      <div className="mt-20">
      <div className="mt-20 flex justify-between items-center">

<h2 data-aos="fade-in" className="font-medium text-2xl">
  Experience
</h2>

<div className="inline-flex items-center">
<LinkPreview
          url="https://drive.google.com/file/d/1tR8yrlVjDstqXk55d0FE4fVFTfr3RU34/view?usp=sharing"
          imageSrc="/resume.png"
          isStatic
        >
  <span data-aos="fade-up" className="bg-gray-50 px-3 py-1 text-sm font-medium text-gray-300 dark:text-gray-200 rounded-md ring-1 ring-inset ring-gray-500/10 border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800">
    <a href="https://drive.google.com/file/d/1tR8yrlVjDstqXk55d0FE4fVFTfr3RU34/view?usp=sharing" className="text-md text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-100 inline-flex items-center rounded-lg">
      <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180 transition-all duration-500 hover:scale-130 hover:shadow-xl" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Zm-3 15H4.828a1 1 0 0 1 0-2h6.238a1 1 0 0 1 0 2Zm0-4H4.828a1 1 0 0 1 0-2h6.238a1 1 0 1 1 0 2Z"/>
        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
      </svg>
      Resume
    </a>
  </span>
  </LinkPreview>
  
</div>

</div>







<section data-aos="fade-in" className="mt-5">
  <div className="prose prose-neutral dark:prose-invert">
  
    <h2 className="font-medium text-xl mb-1 tracking-tighter">Product Manager / President</h2>
    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
      <LinkPreviews url="https://www.codelabdavis.com/" imageSrc="/cl6.png" isStatic>
        CodeLab
      </LinkPreviews> / Present
    </p>
    <hr className="my-6 border-neutral-200 dark:border-neutral-800" />

    <h2 className="font-medium text-xl mb-1 tracking-tighter">Technical Project Manager</h2>
    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
      <LinkPreviews url="https://genomecenter.ucdavis.edu/" >
        UC Davis Genome Center
      </LinkPreviews> / Present
    </p>
    <hr className="my-6 border-neutral-200 dark:border-neutral-800" />

    <h2 className="font-medium text-xl mb-1 tracking-tighter">Undergraduate Researcher</h2>
    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
      <LinkPreviews url="https://soltanilab.engineering.ucdavis.edu/" >
        Laboratory for AI, Robotics and Automation
      </LinkPreviews> / Present
    </p>
    <hr className="my-6 border-neutral-200 dark:border-neutral-800" />

    <h2 className="font-medium text-xl mb-1 tracking-tighter">Software Engineering Intern</h2>
    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
      <LinkPreviews url="https://www.maximo.ae/" imageSrc="/maximo.png" isStatic>
        IBM Maximo eSolutions
      </LinkPreviews> / 2023
    </p>
    <hr className="my-6 border-neutral-200 dark:border-neutral-800" />

    <h2 className="font-medium text-xl mb-1 tracking-tighter">Student Ambassador / Tour Guide</h2>
    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
      <LinkPreviews url="https://www.ucdavis.edu/about/visit/campus-tour">
        Undergraduate admissions
      </LinkPreviews> / Present
    </p>


  
      {/* <div className="flex items-center text-gray-600 mb-1">
            <div className="flex-shrink-0 mr-4">
                <Image src="/codelab.svg" alt="Company Logo" className="h-20 object-contain" />
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
            <Image src="/lara.svg" alt="Company Logo" className="h-20 w-15 object-contain" />
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
            <Image src="/d2d.svg" alt="Company Logo" className="h-20 object-contain" />
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
            <Image src="/gdsc.svg" alt="Company Logo" className="h-20 object-contain" />
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
                <Image src="/esolutions.svg" alt="Company Logo" className="h-20 object-contain" />
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
                <Image src="/uc.svg" alt="Company Logo" className="h-20 object-contain" />
            </div>
            <div>
                <h2 className="text-lg text-black font-medium ">Student Ambassador / Tour Guide</h2>
                <div className="text-gray-500 text-sm mb-2">
                    <span>University of California, Davis</span>
                    <p className="text-gray-700">Successfully designed and launched a mobile application that increased user engagement</p>
                </div>
            </div>
        </div> */}






        <ul className="mb-10 justify-end font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            href={"/experience"}
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Learn more </p>
          </a>
        </li>
        </ul>

      </div>
    </section>
      </div>




































      <div data-aos="fade-in" className="mt-10">
      <h2 className=" font-medium text-2xl">
      Testimonials
      </h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">Read insights and praises from mentors and peers who have guided and witnessed my professional growth.</p>











</div>



<div className="flex items-start mb-5 mt-10 gap-2.5" data-aos="fade-right">
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
    <Image className="w-10 h-10 rounded-full" width="60" height="60" src="https://media.licdn.com/dms/image/D4D03AQGGI9xxCnbrJg/profile-displayphoto-shrink_200_200/0/1679623474258?e=2147483647&v=beta&t=VFlTvlVnkq8xnOO9GhLVAp6KneyqroowGcBVumDuYK4" alt="Jese"/>
  </Tooltip>
  <div className="flex flex-col gap-1 w-full max-w-[320px]">
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      <span className="text-sm font-semibold text-gray-900 dark:text-white">Geetika</span>
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
    </div>
    <div className="flex flex-col leading-1.5 p-4 border-gray-200 rounded-e-xl bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 rounded-es-xl">
    <p className="text-sm text-gray-900 dark:text-white">
      {isExpanded ? sentence : truncatedContent}
      {shouldTruncate && !isExpanded && '...'}
    </p>
    <div className="flex justify-between items-center mt-2">
      {shouldTruncate && (
        <button
          onClick={toggleExpand}
          className="text-xs text-black dark:text-gray-400 font-bold hover:text-blue-800 self-start"
        >
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      )}
      <span className="text-xs text-gray-500 dark:text-gray-400">
        Sent
      </span>
      </div>
    </div>
  </div>
</div>






<div className="flex items-start mb-5 mt-5 gap-2.5 justify-end" data-aos="fade-up">
  <div className="flex flex-col gap-1 w-full max-w-[320px]">
    <div className="flex items-center space-x-2 justify-end rtl:space-x-reverse">
      <span className="text-sm font-semibold text-gray-900 dark:text-white">Kamal</span>
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
    </div>
    <div className="flex flex-col leading-1.5 p-4 border-gray-200 rounded-tl-lg rounded-b-lg bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 rounded-es-xl">
    <p className="text-sm text-gray-900 dark:text-white">
      {isExpanded2 ? sentence2 : truncatedContent2}
      {shouldTruncate2 && !isExpanded2 && '...'}
    </p>
    <div className="flex justify-between items-center mt-2">
      {shouldTruncate2 && (
        <button
          onClick={toggleExpand2}
          className="text-xs text-black dark:text-gray-400 font-bold hover:text-blue-800 self-start"
        >
          {isExpanded2 ? 'Read less' : 'Read more'}
        </button>
      )}
      <span className="text-xs text-gray-500 dark:text-gray-400">
        Sent
      </span>
      </div>
    </div>
  </div>
  <Tooltip
    key="right-start"
    placement="right-start"
    content={
      <div className="px-1 py-2">
        <div className="text-small font-bold">Maximo Esolutions</div>
        <div className="text-tiny">Business Consultant</div>
      </div>
    }
  >
    <Image className="w-10 h-10 rounded-full" src="/Testimonial/kamal.jpeg" width="200" height="200" alt="Jese"/>
  </Tooltip>
</div>

<div className="flex items-start mb-5 mt-5 gap-2.5" data-aos="fade-right">
  <Tooltip
    key="left-start"
    placement="left-start"
    content={
      <div className="px-1 py-2">
        <div className="text-small font-bold">AI Institute</div>
        <div className="text-tiny">Business Development Coordinator</div>
      </div>
    }
  >
    <Image className="w-10 h-10 rounded-full" src="/Testimonial/jim.jpeg" width="200" height="200" alt="Jese"/>
  </Tooltip>
  <div className="flex flex-col gap-1 w-full max-w-[320px]">
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      <span className="text-sm font-semibold text-gray-900 dark:text-white">Jim Pantaleo</span>
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
    </div>
    <div className="flex flex-col leading-1.5 p-4 border-gray-200 rounded-tl-lg rounded-b-lg bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 rounded-es-xl">
    <p className="text-sm text-gray-900 dark:text-white">
      {isExpanded3 ? sentence3 : truncatedContent3}
      {shouldTruncate3 && !isExpanded3 && '...'}
    </p>
    <div className="flex justify-between items-center mt-2">
      {shouldTruncate3 && (
        <button
          onClick={toggleExpand3}
          className="text-xs text-black dark:text-gray-400 font-bold hover:text-blue-800 self-start"
        >
          {isExpanded3 ? 'Read less' : 'Read more'}
        </button>
      )}
      <span className="text-xs text-gray-500 dark:text-gray-400">
        Sent
      </span>
      </div>
    </div>
  </div>
</div>

<div className="flex items-start mb-5 mt-5 gap-2.5 justify-end" data-aos="fade-up">
  <div className="flex flex-col gap-1 w-full max-w-[320px]">
    <div className="flex items-center space-x-2 justify-end rtl:space-x-reverse">
      <span className="text-sm font-semibold text-gray-900 dark:text-white">Gopi</span>
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
    </div>
    <div className="flex flex-col leading-1.5 p-4 border-gray-200 rounded-tl-lg rounded-b-lg bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 rounded-es-xl">
    <p className="text-sm text-gray-900 dark:text-white">
      {isExpanded4 ? sentence4 : truncatedContent4}
      {shouldTruncate4 && !isExpanded4 && '...'}
    </p>
    <div className="flex justify-between items-center mt-2">
      {shouldTruncate4 && (
        <button
          onClick={toggleExpand4}
          className="text-xs text-black dark:text-gray-400 font-bold hover:text-blue-800 self-start"
        >
          {isExpanded4 ? 'Read less' : 'Read more'}
        </button>
      )}
      <span className="text-xs text-gray-500 dark:text-gray-400">
        Sent
      </span>
      </div>
    </div>
  </div>
  <Tooltip
    key="right-start"
    placement="right-start"
    content={
      <div className="px-1 py-2">
        <div className="text-small font-bold">Empower</div>
        <div className="text-tiny">IT Director</div>
      </div>
    }
  >
    <Image className="w-10 h-10 rounded-full" src="/Testimonial/gopi.jpeg" width="200" height="200" alt="Jese"/>
  </Tooltip>
</div>



        {/* <div className="flex items-start mb-5 mt-5 gap-2.5">
        <Tooltip
          key="left-start"
          placement="left-start"
          content={
            <div className="px-1 py-2">
              <div className="text-small font-bold">Google</div>
              <div className="text-tiny">Software Manager</div>
            </div>
          }
        >
          <Image className="w-10 h-10 rounded-full" src="/Testimonial/rajesh.jpeg" width={200} height={200} alt="Rajesh"/>
        </Tooltip>
        <div className="flex flex-col gap-1 w-full max-w-[320px]">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">Rajesh Balaraman</span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
          </div>
          <div className="flex flex-col leading-1.5 p-4 border-gray-200 rounded-tl-lg rounded-b-lg bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 rounded-es-xl">
    <p className="text-sm text-gray-900 dark:text-white">
      {isExpanded5 ? sentence5 : truncatedContent5}
      {shouldTruncate5 && !isExpanded5 && '...'}
    </p>
    <div className="flex justify-between items-center mt-2">
      {shouldTruncate5 && (
        <button
          onClick={toggleExpand5}
          className="text-xs text-black font-bold hover:text-blue-800 self-start"
        >
          {isExpanded5 ? 'Read less' : 'Read more'}
        </button>
      )}
      <span className="text-xs text-gray-500 dark:text-gray-400">
        Sent
      </span>
            </div>
          </div>
        </div>
      </div> */}
             <Chat></Chat>

    </section>
    

    
  );
}

export default Home;

