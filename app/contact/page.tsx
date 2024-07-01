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
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
import Card1 from "@/components/Card1";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { FiMail, FiPhone} from 'react-icons/fi';

function Clock() {
  const [currentTime, setCurrentTime] = useState(DateTime.local());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(DateTime.local());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentTime.toLocaleString(DateTime.DATE_SHORT);
  const formattedTime = currentTime.toLocaleString(DateTime.TIME_SIMPLE);
  const timeZone = currentTime.zoneName;
  const email = 'mgopi@ucdavis.edu';

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      alert('Email address copied to clipboard!');
    }, () => {
      alert('Failed to copy email address.');
    });
  };

  return (
    <div className="flex space-x-2 mb-2 mt-2 ">

         <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 mr-1 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">
          {formattedDate}, {formattedTime}
        </span>
        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs mr-1 dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10">
          {timeZone}
        </span>

</div>
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




const Home = () => {


  return (
    
    <section className="antialiased max-w-xl mx-4 sm:mx-auto">
      <h1 className="mt-6 text-5xl tracking-tighter">
      Get in touch
      </h1>
      <div className="mb-10 mt-5">
      <p>
      Feel free to reach out for collaboration or a chat. I check emails frequently and respond to calls too.</p>
      </div>

      <Clock />

      <Snippet size="sm" hideSymbol className=" transition-all duration-300 hover:scale-105 hover:shadow-md  h-7 items-center text-xs rounded-md bg-gray-50  mr-2 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10 cursor-pointer">  
      <div      
      className="inline-flex items-center text-xs mt-1 text-gray-600 dark:text-white cursor-pointer"
    >
      <FiMail  className="text-md mr-1" />
      <a href="mailto:mgopi@ucdavis.edu">
      <span className="text-xs font-medium">mgopi@ucdavis.edu</span>
      </a>
    </div></Snippet>

    <Snippet size="sm" hideSymbol className=" transition-all duration-300 hover:scale-105 hover:shadow-md  h-7 items-center text-xs rounded-md bg-gray-50  mr-2 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10 cursor-pointer">  
      <div      
      className="inline-flex items-center text-xs mt-1 text-gray-600 dark:text-white cursor-pointer"
    >
      <FiPhone className="text-md mr-1" />
      <a href="tel:8882192787">
      <span className="text-xs font-medium">+1 5109469930</span>
      </a>
    </div></Snippet>





<iframe src="https://calendar.google.com/calendar/appointments/AcZssZ3v3WNqru-XQpPB_dsgAkq7b91P6NPwmkp2nMc=?gv=true" title="meeting" className="mb-10 mt-5 h-50 w-100 rounded-md items-center text-xs bg-gray-50  mr-2 text-xs dark:border-neutral-700 dark:bg-neutral-800 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10 cursor-pointer" width="100%" height="600" ></iframe>

 <section>


</section>
    </section>

    
  );
}

export default Home;

