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
    <div className="flex space-x-2 mb-2 mt-10 ">

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
    <footer className="max-w-xl mx-auto px-4 mt-10 pb-8">
      <div className="border-t border-neutral-200 dark:border-neutral-700">
        <div className="flex flex-col md:flex-row justify-center items-center py-8">
          {/* <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Clock />
          </div> */}
          
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <a href="/" className="hover:text-neutral-800 dark:hover:text-neutral-200">Home</a>
            <a href="/projects" className="hover:text-neutral-800 dark:hover:text-neutral-200">Projects</a>
            <a href="/experience" className="hover:text-neutral-800 dark:hover:text-neutral-200">Experience</a>
            <a href="/about" className="hover:text-neutral-800 dark:hover:text-neutral-200">About</a>
            <a href="/gallery" className="hover:text-neutral-800 dark:hover:text-neutral-200">Gallery</a>
            <a href="/contact" className="hover:text-neutral-800 dark:hover:text-neutral-200">Contact</a>
          </nav>
        </div>

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
            by Mohnish | Last updated: July, 2024
          </span>
        </div>
      </div>
    </footer>
  )
}