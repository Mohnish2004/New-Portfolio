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
import { SparklesCore } from "@/components/sparkles";
import {Card as NextUICard, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import React from "react";

import { LinkPreview } from "@/components/link-preview";
import { LinkPreviews } from "@/components/link-preview-exp";


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

      <h1 className="text-5xl tracking-tighter">
      Experience
      </h1>
      <div className="inline-flex items-center">

</div>

      <div >
      </div>

      <div className=" mb-5 group flex w-full">
      <a
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800 transition-all duration-300 hover:scale-101 hover:shadow-md"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <Image
              src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/The_University_of_California_Davis.svg/640px-The_University_of_California_Davis.svg.png"}
              height="1000"
              width="1000"
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
        <div className="mt-2">
  </div>

          </div>
        </div>

      </a>
    </div>
  



    <section className="mt-5">
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


        <ul className=" justify-end font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/1tR8yrlVjDstqXk55d0FE4fVFTfr3RU34/view?usp=sharing"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Download Resume</p>
          </a>
        </li>
        </ul>

      </div>
    </section>






    <h2 className=" mt-10 font-semibold mb-2 text-2xl tracking-tighter">
      Leadership
      </h2>

      <section className="mt-5">
      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="font-medium text-xl mb-1 tracking-tighter">President / Vice President</h2>

        <p className="text-neutral-600 dark:text-neutral-400 text-sm"><LinkPreviews url="https://www.codelabdavis.com/" imageSrc="/cl6.png" isStatic>CodeLab</LinkPreviews></p> 
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter">Vice President</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm"><LinkPreviews url="https://bento.me/gdscdavis">Google Developer Student Club</LinkPreviews></p>
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        

        <h2 className="font-medium text-xl mb-1 tracking-tighter">Vice President</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm"><LinkPreviews url="https://sachacks.io/">SacHacks</LinkPreviews></p>

      
      <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Deputy Headboy</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm"><LinkPreviews url="https://jsspsdubai.com/">JSS Private School</LinkPreviews></p>
      </div>
    </section>


    <h2 className=" font-semibold mt-20 text-2xl tracking-tighter">
       Achievements
      </h2>

      <section className="mt-5">
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

    <div className="max-w-lg mt-10">
    
    <div className="scroll">
  <div className="m-scroll gap-5">
    <div className="flex w-1/2 flex-wrap align-top">
        <Image
          
          className="block h-90 w-90 rounded-md object-cover object-center"
          src="/certificates/200.png" alt={'test'} width={400} height={200}
        />
      </div>
      <div className="flex w-1/2 flex-wrap align-top">
        <Image
          
          className="block h-90 w-90 rounded-md object-cover object-center"
          src="/certificates/201.png" alt={'test'} width={400} height={200}
        />
      </div>
      <div className="flex w-1/2 flex-wrap align-top">
        <Image
          
          className="block h-90 w-90 rounded-md object-cover object-center"
          src="/certificates/202.png" alt={'tes'} width={400} height={200}
        />
      </div>
      <div className="flex w-1/2 flex-wrap align-top">
        <Image
          
          className="block h-90 w-90 rounded-md object-cover object-center"
          src="/certificates/203.png" alt={'tse'} width={400} height={200}
        />
      </div>
      <div className="flex w-1/2 flex-wrap align-top">
        <Image
          
          className="block h-90 w-90 rounded-md object-cover object-center"
          src="/certificates/204.png" alt={'ts'} width={400} height={200}
        />
      </div>
      <div className="flex w-1/2 flex-wrap align-top">
        <Image
          
          className="block h-90 w-90 rounded-md object-cover object-center"
          src="/certificates/205.png" alt={'ste'} width={400} height={200}
        />
      </div>
      <div className="flex w-1/2 flex-wrap align-top">
        <Image
          
          className="block h-90 w-90 rounded-md object-cover object-center"
          src="/certificates/206.png" alt={'tse'} width={400} height={200}
        />
      </div>
      <div className="flex w-1/2 flex-wrap align-top">
        <Image
          
          className="block h-90 w-90 rounded-md object-cover object-center"
          src="/certificates/207.png" alt={'tse'} width={400} height={200}
        />
      </div>
      <div className="flex w-1/2 flex-wrap align-top">
        <Image
          
          className="block h-90 w-90 rounded-md object-cover object-center"
          src="/certificates/210.png" alt={'ste'} width={400} height={200}
        />
      </div>
      <div className="flex w-1/2 flex-wrap align-top">
        <Image
          
          className="block h-90 w-90 rounded-md object-cover object-center"
          src="/certificates/208.png" alt={'ste'} width={400} height={200}
        />
      </div>      <div className="flex w-1/2 mr-5 flex-wrap align-top">
        <Image
          
          className="block h-90 w-90 rounded-md object-cover object-center"
          src="/certificates/211.png" alt={'tse'} width={400} height={200}
        />
      </div>
      </div>


</div>
</div>   








    </section>

    
  );
}

export default Home;

