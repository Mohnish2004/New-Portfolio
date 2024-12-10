'use client'

import Image from 'next/image';
import { FlipWords } from "@/components/flip"; // Replace with the correct path to FlipWords component
import { SparklesCore } from "@/components/sparkles";
import {Card as NextUICard, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import React from "react";

import { LinkPreview } from "@/components/link-preview";
import { LinkPreviews } from "@/components/link-preview-exp";
import Chat from "@/components/chat";


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
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const certificates = [
    { id: 200, alt: "Certificate 1" },
    { id: 201, alt: "Certificate 2" },
    { id: 202, alt: "Certificate 3" },
    { id: 203, alt: "Certificate 4" },
    { id: 204, alt: "Certificate 5" },
    { id: 205, alt: "Certificate 6" },
    { id: 206, alt: "Certificate 7" },
    { id: 207, alt: "Certificate 8" },
    { id: 210, alt: "Certificate 9" },
    { id: 208, alt: "Certificate 10" },
    { id: 211, alt: "Certificate 11" },
  ];

  // Add auto-scroll effect
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    
    <section data-aos="fade-in" className="antialiased max-w-xl p-4 mx-4 sm:mx-auto">

      <h1 className="text-5xl tracking-tighter">
      Experience
      </h1>
      <div className="inline-flex items-center">

</div>

      {/* Education Section */}
      <h2 className="font-semibold mt-10 mb-2 text-2xl tracking-tighter">
        Education
      </h2>
      
      <section className="mt-5">
        <div className="prose prose-neutral dark:prose-invert">
          <h2 className="font-medium text-xl mb-1 tracking-tighter">B.S. in Computer Science</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            <LinkPreviews url="https://www.ucdavis.edu/">
              University of California, Davis
            </LinkPreviews> / 2022 — 2026
          </p>
        </div>
      </section>

      {/* Work Experience Section */}
      <h2 className="font-semibold mt-14 mb-2 text-2xl tracking-tighter">
        Work Experience
      </h2>

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
        </div>
      </section>






    <h2 className=" font-semibold mt-14 mb-2 text-2xl tracking-tighter">
      Leadership
      </h2>

      <section className="mt-5">
      <div className="prose prose-neutral dark:prose-invert">
        <h2  className="font-medium text-xl mb-1 tracking-tighter">President / Vice President</h2>

        <p  className="text-neutral-600 dark:text-neutral-400 text-sm"><LinkPreviews url="https://www.codelabdavis.com/" imageSrc="/cl6.png" isStatic>CodeLab</LinkPreviews></p> 
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />

        <h2  className="font-medium text-xl mb-1 tracking-tighter">Vice President</h2>
        <p  className="text-neutral-600 dark:text-neutral-400 text-sm"><LinkPreviews url="https://bento.me/gdscdavis">Google Developer Student Club</LinkPreviews></p>
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        

        <h2  className="font-medium text-xl mb-1 tracking-tighter">Vice President</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm"><LinkPreviews url="https://sachacks.io/">SacHacks</LinkPreviews></p>

      
      <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2  className="font-medium text-xl mb-1 tracking-tighter">Deputy Headboy</h2>
        <p  className="text-neutral-600 dark:text-neutral-400 text-sm"><LinkPreviews url="https://jsspsdubai.com/">JSS Private School</LinkPreviews></p>
      </div>
    </section>


    <h2 className=" font-semibold mt-24 mb-2 text-2xl tracking-tighter">
       Achievements
      </h2>

      <section className="mt-5">
      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Technical skill </h2>
        <p data-aos="fade-in"  className="text-neutral-600 dark:text-neutral-400 text-sm">Programming: Python, C, C++, JavaScript, HTML, CSS, SQL, Web Development: MongoDB, Express.js, React.js, Node.js, App Development: Kotlin, Flutter, Dart, Swift </p>
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter">Relevant Courses</h2>
        <p data-aos="fade-in"  className="text-neutral-600 dark:text-neutral-400 text-sm">Discrete Mathematics, Linear Algebra, Data Structures & Algorithms, Ethics in an Age of Technology, Computer Organization & Machine-Dependent Programming, Software Development & Object-Oriented Programming in C++, Calculus I, II & III

</p>
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        

        <h2 className="font-medium text-xl mb-1 tracking-tighter">Online Certifications</h2>
        <p data-aos="fade-in"  className="text-neutral-600 dark:text-neutral-400 text-sm">CS 50 Harvard, AI for Everyone (Intel AI Aware 2021), Getting Started with Python (University of Michigan - Coursera), Intro to AI (Deeplearning), Probability and Data with R (Duke University - Coursera)
</p>

      
      <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Accolades</h2>
        <p data-aos="fade-in" className="text-neutral-600 dark:text-neutral-400 text-sm">
        Dean&apos;s Honor List, Best Advanced project, Best UI/UX at Hackdavis &apos;24, Best Presentation award, individual standout award & Best Beginner Project award @GDSC , Best in Leveraging of Data/Computation @ 2023 AIFS Apps for Food and Ag Hackathon, x2 VIRTUOSO AWARD, Best Position Paper @ Model United Nations, 5 x Best Speaker @ Toastmasters International, Badminton, Runner up @ Men&apos;s doubles Tournament</p>
      </div>
    </section>

    {/* Certificates Section */}
    <div className="mt-10">
      <div className="relative w-full overflow-hidden">
        <div 
          className="flex transition-transform duration-10000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {certificates.map((cert, index) => (
            <div 
              key={cert.id}
              className="flex-none w-full"
            >
              <div className="max-w-2xl mx-auto px-4">
                <Image
                  src={`/certificates/${cert.id}.png`}
                  alt={cert.alt}
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto"
                  priority
                />
              </div>
            </div>
          ))}
        </div>


        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
    </section>

    
  );
}

export default Home;

