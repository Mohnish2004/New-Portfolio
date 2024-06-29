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
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import React from "react";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";

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
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
  return (
    
    <section className="antialiased max-w-xl mx-4 mt-8 sm:mx-auto">
      <img src="/me.png" alt="Profile" className="select-none w-[150px] h-[150px] rounded-full mb-5"/>
      <h1 className="mb-1 text-5xl tracking-tighter">
       Hey, I'm Mohnish 👋
      </h1>
      <div className="mb-20">
      <Chip className="select-none text-slate bg-white mr-2 dark:text-white dark:bg-slate-900 dark:border-slate-800" variant="faded" radius="sm" size="sm">
          <FlipWords words={words} duration={duration} className="my-custom-class" />
        </Chip>
      <Chip className="select-none text-slate bg-white mr-2 dark:text-white dark:bg-slate-900 dark:border-slate-800" variant="faded" radius="sm" size="sm">President of CodeLab</Chip>
      <Chip className="select-none text-slate bg-white mr-2 mt-2 dark:text-white dark:bg-slate-900 dark:border-slate-800" variant="dot" radius="sm" size="sm">Open for internships</Chip>
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
      <div className="h-25 rounded-lg p-2 border border-neutral-200 bg-neutral-50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
  <div className="grid h-full grid-cols-2">
  <div className="m-5">
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Pool it
            </p>
            <h2 className="font-light leading-none text-neutral-900 dark:text-neutral-100 ">
            Allows UC Davis students to easily connect and rideshare with fellow students or family members traveling from the university.            </h2>
            <Chip className="text-slate mbg-white mt-2 dark:text-white dark:bg-slate-900 dark:border-slate-800" variant="faded" radius="sm" size="sm">Web Development</Chip>
          </div>
    <div className=" flex items-center justify-center ">
      <img src="/mobile.png" alt=""/>
    </div>
    <div className=" flex items-center justify-center">
  
    </div>
    </div>
    </div>
    </div>

    
    <div className="h-25 mb-5 rounded-lg p-2 border border-neutral-200 bg-neutral-50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
  <div className="grid h-full grid-cols-2">
  <div className="m-5">
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Pool it
            </p>
            <h2 className="font-light leading-none text-neutral-900 dark:text-neutral-100 ">
            Allows UC Davis students to easily connect and rideshare with fellow students or family members traveling from the university.            </h2>
            <Chip className="text-slate mbg-white mt-2 dark:text-white dark:bg-slate-900 dark:border-slate-800" variant="faded" radius="sm" size="sm">Web Development</Chip>
          </div>
    <div className=" flex items-center justify-center">
      <img src="/mobile.png" className=" "  />
    </div>
    <div className=" flex items-center justify-center">
  
    </div>
    </div>
    </div>

    <div className="h-25 mb-5 rounded-lg p-2 border border-neutral-200 bg-neutral-50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
  <div className="grid h-full grid-cols-2">
  <div className="m-5">
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Pool it
            </p>
            <h2 className="font-light leading-none text-neutral-900 dark:text-neutral-100 ">
            Allows UC Davis students to easily connect and rideshare with fellow students or family members traveling from the university.            </h2>
            <Chip className="text-slate mbg-white mt-2 dark:text-white dark:bg-slate-900 dark:border-slate-800" variant="faded" radius="sm" size="sm">Web Development</Chip>
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

      <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
          </div>
        </div>
        <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          Frontend developer and UI/UX enthusiast. Join me on this coding adventure! Frontend developer and UI/UX enthusiast. Join me on this coding adventure!

          Frontend developer and UI/UX enthusiast. Join me on this coding adventure!


        </p>
        <span className="pt-2">
          #FrontendWithZoey 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>



    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
          </div>
        </div>
        <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          Frontend developer and UI/UX enthusiast. Join me on this coding adventure! Frontend developer and UI/UX enthusiast. Join me on this coding adventure!

          Frontend developer and UI/UX enthusiast. Join me on this coding adventure!


        </p>
        <span className="pt-2">
          #FrontendWithZoey 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>




    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
          </div>
        </div>
        <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          Frontend developer and UI/UX enthusiast. Join me on this coding adventure! Frontend developer and UI/UX enthusiast. Join me on this coding adventure!

          Frontend developer and UI/UX enthusiast. Join me on this coding adventure!


        </p>
        <span className="pt-2">
          #FrontendWithZoey 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
      </div>     

      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
      
    </section>

    
  );
}

export default Home;

