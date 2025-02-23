'use client'
import {Tooltip} from "@nextui-org/tooltip";
import Image from 'next/image';
import { FlipWords } from "@/components/flip"; // Replace with the correct path to FlipWords component
import React from "react";

import { useEffect, useState } from "react";
import { Analytics } from '@vercel/analytics/react';

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
    <><div data-aos="fade-up" className="group mb-5 flex w-full transition-all duration-300 hover:scale-105  hover:shadow-xl">
      <a
        href={"https://drive.google.com/file/d/12xnuAkIVjqKLicPoPP9W_dt4a6KRIAZE/view?usp=sharing"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-102 hover:shadow-md"
      >
        <div className="flex items-center space-x-3 ">
          <img src="https://cdn3d.iconscout.com/3d/premium/thumb/crypto-stocks-chart-5349277-4466490.png?f=webp" width="60" height="60" className="h-20 w-20 " alt="test"></img>

          <div className="flex flex-col pl-3 pr-3 leading-tight">
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
    </div><div data-aos="fade-up" className="group mb-5 flex w-full transition-all duration-300 hover:scale-105  hover:shadow-xl">
        <a
          href={"https://drive.google.com/file/d/1akPm3tfeHl4tv_gZefd0bLC2hxdkGa0Q/view?usp=sharing"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-102 hover:shadow-md"
        >
          <div className="flex items-center space-x-3 ">
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/apple-vision-3d-icon-download-in-png-blend-fbx-gltf-file-formats--vr-glass-virtual-reality-glasses-technology-pack-science-icons-10299052.png?f=webp" width="60" height="60" className="h-20 w-20 " alt="test"></img>

            <div className="flex flex-col pl-3 pr-3 leading-tight">
              <p className="font-light text-sm text-neutral-900 dark:text-neutral-100">
                Research Assistant
              </p>
              <h1 className="font-medium text-neutral-900 dark:text-neutral-100">
              Exploring Active Vision in Bimanual Robotic Manipulation
              </h1>
              <div>
                <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  VR Development
                </span>
                <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  Robotics
                </span>
                <span className="inline-block mr-2 dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  Assistant
                </span>
              </div>
            </div>

          </div>

        </a>
      </div></>







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

type Testimonial = {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  isExpanded: boolean;
  toggleExpand: () => void;
}

const TestimonialCard = ({ name, role, company, image, content, isExpanded, toggleExpand }: Testimonial) => {
  const truncatedContent = content.split(' ').slice(0, 30).join(' ');
  const shouldTruncate = content.split(' ').length > 30;

  return (
    <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6">
      <div className="flex items-center gap-4 mb-4">
        <Image 
          className="w-12 h-12 rounded-full"
          src={image}
          width={60}
          height={60}
          alt={name}
        />
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">{name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}, {company}</p>
        </div>
      </div>
      <div className="text-gray-600 dark:text-gray-300">
        <p className="text-sm">
          {isExpanded ? content : truncatedContent}
          {shouldTruncate && !isExpanded && '...'}
        </p>
        {shouldTruncate && (
          <button
            onClick={toggleExpand}
            className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 mt-2 transition-colors"
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        )}
      </div>
    </div>
  );
};

const Home = () => {
  const words = ["Developer", "Product Manager", "Designer", "Researcher","Leader","Photographer", "Tour Guide", "Full-stack","Mobile/Web","AI/ML","UI/UX","Security"]; // Example words array
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
  const [showWelcome, setShowWelcome] = useState(false);
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const res = await fetch('/api/analytics');
        const data = await res.json();
        
        if (data.pageViews === 0) {
          // If API returns 0, try to get from localStorage
          const stored = parseInt(localStorage.getItem('visitorCount') || '0');
          const newCount = stored + 1;
          localStorage.setItem('visitorCount', newCount.toString());
          setVisitorCount(newCount);
        } else {
          setVisitorCount(data.pageViews);
        }
        setShowWelcome(true);
      } catch (error) {
        console.error('Error fetching visitor count:', error);
        // Fallback to localStorage
        const stored = parseInt(localStorage.getItem('visitorCount') || '0');
        const newCount = stored + 1;
        localStorage.setItem('visitorCount', newCount.toString());
        setVisitorCount(newCount);
        setShowWelcome(true);
      }
    };

    fetchVisitorCount();
  }, []);

  const testimonials = [
    {
      name: "Geetika",
      role: "AI Privacy Engineer",
      company: "Amazon",
      image: "https://media.licdn.com/dms/image/D4D03AQGGI9xxCnbrJg/profile-displayphoto-shrink_200_200/0/1679623474258?e=2147483647&v=beta&t=VFlTvlVnkq8xnOO9GhLVAp6KneyqroowGcBVumDuYK4",
      content: sentence,
      isExpanded: isExpanded,
      toggleExpand: toggleExpand
    },
    {
      name: "Kamal",
      role: "Business Consultant",
      company: "Maximo Esolutions",
      image: "/Testimonial/kamal.jpeg",
      content: sentence2,
      isExpanded: isExpanded2,
      toggleExpand: toggleExpand2
    },
    {
      name: "Jim Pantaleo",
      role: "Business Development Coordinator",
      company: "AI Institute",
      image: "/Testimonial/jim.jpeg",
      content: sentence3,
      isExpanded: isExpanded3,
      toggleExpand: toggleExpand3
    },
    {
      name: "Gopi",
      role: "IT Director",
      company: "Empower",
      image: "/Testimonial/gopi.jpeg",
      content: sentence4,
      isExpanded: isExpanded4,
      toggleExpand: toggleExpand4
    }
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
  
    <section data-aos="fade-in" className="relative antialiased max-w-xl p-4 mx-4 sm:mx-auto">
< Dot delay={0.25} inView >
<div className="relative mb-4 mt-4 left-[-46px]"> {/* Adjust this value as needed */}
<Image 
          src="/1.svg" 
          alt="Profile" 
          width={250} 
          height={200} 
          draggable="false"
          className="select-none"
        />   
              </div>
              <h1 
          className="absolute top-48 -left-2 -mb-6 text-4xl dark:bg-black bg-opacity-70 dark:bg-opacity-70 p-2 rounded" 
          data-aos="fade-in"
        >        Mohnish Gopi
        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">/mo·nish/</span>
      </h1>
      </Dot>
      < Dot delay={0.5} inView >
      <div className="mb-14 -mt-36 ">

      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 mr-2 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">President of CodeLab</span>
      <span className="inline-flex items-center rounded-md bg-gray-50 px-1 py-1 mr-2 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">          <FlipWords words={words} duration={duration} className="my-custom-class" />
      </span>

       </div>
       </Dot>

      {/* <div className="mb-10" > */}
      <h2 data-aos="fade-in" data-aos-delay="900" className=" font-medium mb-2 text-2xl">
       About me
      </h2>
      <div data-aos="fade-in" data-aos-delay="900">
      <p data-aos="fade-in" >
      Passionate about solving problems one {" "}      <LinkPreview
          url="/projects"
          imageSrc="/mobile1.png"
          isStatic
          className="font-bold"
        >
           Product
        </LinkPreview>{""} at a time. Starting from my dorm room projects, I&apos;ve built a versatile skill set through diverse client engagements and hands-on{" "}      <LinkPreview
          url="https://drive.google.com/file/d/1tR8yrlVjDstqXk55d0FE4fVFTfr3RU34/view?usp=sharing"
      
          imageSrc="/resume.png"
          isStatic
          className="font-bold"
        >

           Experience
        </LinkPreview>{" "} </p>
        
<p data-aos="fade-in" className="mt-4" >Currently, I serve as the president of             
<LinkPreview
          url="https://www.codelabdavis.com/"
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



      <h2 data-aos="fade-in" className="font-medium mb-5 mt-12 text-2xl" >
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
        <button   
          onClick={() => window.location.href='https://medium.com/@mohnish.gopi/d2dcure-5b41fcbc0ee4'}
          type="button" 
          className="transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-3 mr-2 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10"
        >
          Read more
        </button>
        <button
          onClick={() => window.location.href='https://d2d-cure.vercel.app/'}
          type="button"
          className="transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-3 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10"
        >
          View Site
        </button>
      </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <a className="group block h-full" href={"/"}>
          <div className="h-full overflow-hidden bg-gray-100 rounded-b-lg md:rounded-b-none md:rounded-r-lg md:rounded-l-none dark:bg-neutral-800">
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
          <div className="h-full overflow-hidden bg-gray-100 rounded-b-lg md:rounded-b-none md:rounded-r-lg md:rounded-l-none dark:bg-neutral-800">
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
          <div className="h-full overflow-hidden bg-gray-100 rounded-b-lg md:rounded-b-none md:rounded-r-lg md:rounded-l-none dark:bg-neutral-800">
          <a href='https://devpost.com/software/slate-pas0bz'>

            <Image className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full " width="1000" height="1000" src="/projects/slate.jpg" alt="Description"/>
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
          Enzyme Rate Calculator
          </h1>
          <p className="mt-1 mb-4 text-gray-600 text-xs leading-tight dark:text-neutral-400">
          A web appl developed to streamline the calculation of enzyme reaction rates and generate graphs from student-generated data for the Design 2 Data (D2D) project</p>
          <div className="mt-4">

            <button   onClick={() => window.location.href='https://medium.com/@mohnish.gopi/d2d-enzyme-rate-calculator-c1cc87f268f4'}
 type="button" className="mt-2 transition-all duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10">
            Read more
          </button>
          <button
          onClick={() => window.location.href='https://d2d-graph-applet-codelabdavis-projects.vercel.app/?source=post_page-----c1cc87f268f4--------------------------------'}
          type="button"
          className="transition-all ml-2 duration-300 hover:scale-105 hover:shadow-md inline-block dark:border-neutral-600 dark:bg-neutral-700 rounded-md bg-gray-50 dark:text-white px-2 py-1 mt-3 text-xs font-medium text-gray-600 ring-1 ring-inset bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ring-gray-500/10"
        >
          View Site
        </button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <a className="group block h-full" href={"/"}>
        <div className="h-full overflow-hidden bg-gray-100 rounded-b-lg md:rounded-b-none md:rounded-r-lg md:rounded-l-none dark:bg-neutral-800">
          <a href='https://medium.com/@mohnish.gopi/d2d-enzyme-rate-calculator-c1cc87f268f4'>

            <Image className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full " width="1000" height="1000" src="/projects/d2d2.png" alt="Description"/>
          </a>
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
  <span data-aos="fade-up" className="bg-transparent px-2 py-1 text-sm transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md">
    <a 
      href="https://drive.google.com/file/d/1tR8yrlVjDstqXk55d0FE4fVFTfr3RU34/view?usp=sharing" 
      className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 inline-flex items-center gap-1"
    >
      <svg 
        className="w-3.5 h-3.5" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="currentColor" 
        viewBox="0 0 16 20"
      >
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
  

  <h2 className="font-medium text-xl mb-1 tracking-tighter">Incoming SWE intern</h2>
    <p className="text-neutral-600 dark:text-neutral-400 text-sm flex items-center gap-1">
      <LinkPreviews url="https://azure.microsoft.com/en-us" >
        <div className="flex items-center gap-1 group">
          <span className="relative">
            <span className=" bg-clip-text font-semibold">
              Microsoft
            </span>
          </span>
        </div>
      </LinkPreviews> / Summer 2025
    </p>
    <hr className="my-6 border-neutral-200 dark:border-neutral-800" />

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


    <div className="pt-10">

        </div>


      </div>
    </section>
      </div>




































      <div data-aos="fade-in" className="mt-10">
      <h2 className="font-medium text-2xl">Testimonials</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
        Read insights and praises from mentors and peers who have guided and witnessed my professional growth.
      </p>
    </div>

    <div className="mt-8 relative">
      <div className="overflow-hidden">
        <div className="transition-opacity duration-300">
          <TestimonialCard {...testimonials[currentTestimonialIndex]} />
        </div>
      </div>
      
      <div className="flex justify-end items-center mt-4">
        <div className="flex gap-2">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5 text-gray-600 dark:text-gray-300"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5 text-gray-600 dark:text-gray-300"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>

<footer className="max-w-xl mx-auto px-4 mt-10 pb-8">
  <div className="border-t border-neutral-200 dark:border-neutral-700">
    <div className="flex flex-col md:flex-row justify-center items-center py-8">
      <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-neutral-600 dark:text-neutral-400">
        <div className="flex justify-center text-sm text-neutral-600 dark:text-neutral-400">
          <span className="flex items-center gap-2">
            © Made with
            <LinkPreview url="/" isStatic imageSrc="/bear1.jpeg">
              <Image 
                src="/bear.svg" 
                alt="" 
                width={20} 
                height={20} 
                className="inline-block"
              />
            </LinkPreview>
            by Mohnish | Last updated: Jan, 202
          </span>
        </div>
      </nav>
    </div>
  </div>
</footer>

    </section>
    

    
  );
}

export default Home;

