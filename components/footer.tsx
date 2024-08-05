
  "use client"
  import Image from "next/image"
  import { LinkPreview } from "@/components/link-preview";
  import React, { useState, useEffect } from "react";
  import { DateTime } from "luxon";
  import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
  import { FiInstagram, FiLinkedin, FiMail, FiPhone, FiTwitter} from 'react-icons/fi';
  import { Snippet } from "@nextui-org/snippet";


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
  


  export const Footer = () => {
  
    return (

<footer className=" rounded-lg  m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">

            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <Clock />

      
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="/" className="hover:underline me-4 md:me-6">Home</a>
                </li>
                <li>
                    <a href="/projects" className="hover:underline me-4 md:me-6">Projects</a>
                </li>
                <li>
                    <a href="/experience" className="hover:underline me-4 md:me-6">Experience</a>
                </li>
                <li>
                    <a href="/about" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="/gallery" className="hover:underline me-4 md:me-6">Gallery</a>
                </li>
                <li>
                    <a href="/contact" className="hover:underline me-4 md:me-6 ">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="text-xs inline-flex items-baseline left-align">© Made with
   <LinkPreview url="/" isStatic imageSrc="/bear1.jpeg"><Image src="/bear.svg" alt="" width={100} height={100} className="self-start w-8 h-8 relative" style={{ top: '10px' }} /></LinkPreview>by Mohnish | Last updated: July, 2024
</span>  


    </div>
    
</footer>



  )}