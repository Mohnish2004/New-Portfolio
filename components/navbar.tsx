import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { 
  CameraIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon, 
  LinkedInLogoIcon,
  FileTextIcon,
  BackpackIcon,
  LayersIcon,
  AvatarIcon,
  InfoCircledIcon,
  BookmarkIcon,
  FaceIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

// Add this custom icon component
const AiChatIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="size-4"
  >
    <path
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.9021 3.5901 15.6665 4.59721 17.1199C4.70168 17.2707 4.7226 17.4653 4.64529 17.6317L3.42747 20.2519C3.23699 20.5853 3.47768 21 3.86159 21H12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 12H8s.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 12H12.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16 12H16.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Move this to a separate config file later
const navData = {
  navbar: [
    {
      href: "/projects",
      label: "Projects",
      icon: LayersIcon,
    },
    {
      href: "/experience",
      label: "Experience",
      icon: BackpackIcon,
    },
    {
      href: "/about",
      label: "About",
      icon: AvatarIcon,
    },
    {
      href: "/gallery",
      label: "Gallery",
      icon: CameraIcon,
    },
    {
      href: "/contact",
      label: "Contact",
      icon: EnvelopeClosedIcon,
    },
    {
      href: "/chat",
      label: "AI Chat",
      icon: InfoCircledIcon,
    },
  ],
  contact: {
    social: {
      GitHub: {
        url: "https://github.com/Mohnish2004",
        icon: GitHubLogoIcon,
        navbar: true,
      },
      LinkedIn: {
        url: "https://linkedin.com/in/mohnish-gopi",
        icon: LinkedInLogoIcon,
        navbar: true,
      },
      Resume: {
        url: "https://drive.google.com/file/d/1tR8yrlVjDstqXk55d0FE4fVFTfr3RU34/view?usp=sharing",
        icon: FileTextIcon,
        navbar: true,
      },
    },
  },
};

export const Navbar = () => {
  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:block h-10" />
      
      <TooltipProvider delayDuration={0}>
        <div className="hidden md:flex pointer-events-none inset-x-0 top-0 z-50 mx-auto h-20">
          <Dock className="fixed pointer-events-auto bg-background/90 backdrop-blur-lg relative mx-auto flex h-14 items-center px-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_20px_80px_-20px_#ffffff1f_inset]">
            <DockIcon className="mx-2">
              <a href="/" className="pl-2">
                <svg 
                  width="60" 
                  height="50" 
                  viewBox="0 0 144 66" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="py-4 text-neutral-900 dark:text-neutral-400"
                >
                  <path 
                    d="M31.6907 46.392C32.6008 46.6137 32.2588 43.38 32.2607 43.0902C32.3 37.0367 31.6573 30.966 32.6233 24.9505C33.5996 18.8704 34.5802 7.67156 42.9693 8.9158C47.0595 9.52244 45.8074 12.0875 45.7901 15.901V15.901C45.7784 18.4651 46.5847 16.9606 47.6776 14.6411C47.688 14.619 47.6991 14.597 47.7107 14.575C48.5977 12.9027 53.3391 9.47773 55.6207 10.2532C58.0277 11.0713 58.3581 12.3177 58.5792 14.8508C59.2355 22.3716 57.2986 30.2646 56.2107 37.6655C56.0517 38.7468 54.2447 46.5594 56.042 47.2428C58.1437 48.0419 62.0784 42.6113 62.8025 41.3598C64.0016 39.2873 65.1784 37.1975 66.056 34.9659C66.3335 34.2602 66.6215 32.6826 67.398 32.2775C67.4448 32.2531 66.8928 33.6377 66.8516 33.7147C65.8647 35.5576 65.1138 37.4439 64.3711 39.3973C63.3255 42.1475 62.0528 45.999 65.232 47.9495C68.5327 49.9746 77.3767 36.1952 72.2033 33.0993C69.7474 31.6296 64.4844 34.9488 68.7025 36.1777C73.5238 37.5824 78.5518 32.5432 81.4579 29.4897C85.9965 24.7207 90.3808 17.4522 89.8825 10.5768C89.7612 8.90415 88.6007 1.71189 85.9338 1.67306C83.7317 1.64101 81.3715 13.2626 81.0434 14.5957C79.107 22.4645 78.9565 30.6402 78.6215 38.6924C78.5487 40.4428 78.4968 42.1993 78.4501 43.9506C78.4201 45.0762 78.6618 44.1259 79.0467 43.5834C81.3359 40.3564 85.3726 39.7056 88.9986 41.0842C92.1715 42.2906 93.8265 45.1067 97.1489 46.1479C107.294 49.3272 118.849 49.7842 129.401 50.2541C133.266 50.4261 144.867 49.7945 140.999 49.797C132.782 49.8024 124.542 50.5384 116.324 50.6969C92.8358 51.1498 69.2679 50.9265 45.7854 50.243C33.5997 49.8882 21.1307 49.5358 9.19336 46.7944C8.0923 46.5415 2.32182 45.7411 2.00723 44.0622C1.53533 41.5436 7.19053 39.0926 8.61197 38.3484C20.0151 32.3778 32.6365 28.3888 45.0449 25.1495C56.1013 22.2633 67.3505 20.1706 78.6922 18.7967C81.9027 18.4078 88.5545 17.8317 91.7931 18.2478C92.6529 18.3583 92.3659 17.8413 91.6494 18.6282C86.9953 23.7396 77.8499 28.3447 72.3587 32.4501C62.0051 40.1908 51.3021 47.4823 40.6481 54.8011C36.1065 57.9211 31.4261 60.8259 27.2893 64.4583" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </DockIcon>
            
            <Separator 
              orientation="vertical" 
              className="mx-2 h-8 bg-neutral-200 dark:bg-neutral-800" 
              decorative 
            />
            
            {navData.navbar.map((item) => (
              <DockIcon key={item.href}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      )}
                    >
                      <item.icon className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 border-none" side="bottom">
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
            
            <Separator 
              orientation="vertical" 
              className="hidden sm:flex mx-2 h-8 bg-neutral-200 dark:bg-neutral-800" 
              decorative 
            />
            
            {Object.entries(navData.contact.social)
              .filter(([_, social]) => social.navbar)
              .map(([name, social]) => (
                <DockIcon key={name} className="hidden sm:flex">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        target="_blank"
                        href={social.url}
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          "size-12 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        )}
                      >
                        <social.icon className="size-4" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent className="bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 border-none" side="bottom">
                      <p>{name}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              ))}
              
            <Separator 
              orientation="vertical" 
              className="mx-2 h-8 bg-neutral-200 dark:bg-neutral-800" 
              decorative 
            />
            
            <DockIcon>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ModeToggle />
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Theme</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          </Dock>
        </div>
      </TooltipProvider>

      {/* Mobile Navigation */}
      <TooltipProvider delayDuration={0}>
        <div className="md:hidden fixed bottom-4 left-0 right-0 z-50 mx-auto flex justify-center">
          <Dock className="pointer-events-auto bg-background/90 backdrop-blur-lg relative flex h-14 items-center px-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_20px_80px_-20px_#ffffff1f_inset] rounded-full">
            <DockIcon className="mx-2">
              <a href="/" className="pl-2">
                <svg 
                  width="60" 
                  height="50" 
                  viewBox="0 0 144 66" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="py-4 text-neutral-900 dark:text-neutral-400"
                >
                  <path 
                    d="M31.6907 46.392C32.6008 46.6137 32.2588 43.38 32.2607 43.0902C32.3 37.0367 31.6573 30.966 32.6233 24.9505C33.5996 18.8704 34.5802 7.67156 42.9693 8.9158C47.0595 9.52244 45.8074 12.0875 45.7901 15.901V15.901C45.7784 18.4651 46.5847 16.9606 47.6776 14.6411C47.688 14.619 47.6991 14.597 47.7107 14.575C48.5977 12.9027 53.3391 9.47773 55.6207 10.2532C58.0277 11.0713 58.3581 12.3177 58.5792 14.8508C59.2355 22.3716 57.2986 30.2646 56.2107 37.6655C56.0517 38.7468 54.2447 46.5594 56.042 47.2428C58.1437 48.0419 62.0784 42.6113 62.8025 41.3598C64.0016 39.2873 65.1784 37.1975 66.056 34.9659C66.3335 34.2602 66.6215 32.6826 67.398 32.2775C67.4448 32.2531 66.8928 33.6377 66.8516 33.7147C65.8647 35.5576 65.1138 37.4439 64.3711 39.3973C63.3255 42.1475 62.0528 45.999 65.232 47.9495C68.5327 49.9746 77.3767 36.1952 72.2033 33.0993C69.7474 31.6296 64.4844 34.9488 68.7025 36.1777C73.5238 37.5824 78.5518 32.5432 81.4579 29.4897C85.9965 24.7207 90.3808 17.4522 89.8825 10.5768C89.7612 8.90415 88.6007 1.71189 85.9338 1.67306C83.7317 1.64101 81.3715 13.2626 81.0434 14.5957C79.107 22.4645 78.9565 30.6402 78.6215 38.6924C78.5487 40.4428 78.4968 42.1993 78.4501 43.9506C78.4201 45.0762 78.6618 44.1259 79.0467 43.5834C81.3359 40.3564 85.3726 39.7056 88.9986 41.0842C92.1715 42.2906 93.8265 45.1067 97.1489 46.1479C107.294 49.3272 118.849 49.7842 129.401 50.2541C133.266 50.4261 144.867 49.7945 140.999 49.797C132.782 49.8024 124.542 50.5384 116.324 50.6969C92.8358 51.1498 69.2679 50.9265 45.7854 50.243C33.5997 49.8882 21.1307 49.5358 9.19336 46.7944C8.0923 46.5415 2.32182 45.7411 2.00723 44.0622C1.53533 41.5436 7.19053 39.0926 8.61197 38.3484C20.0151 32.3778 32.6365 28.3888 45.0449 25.1495C56.1013 22.2633 67.3505 20.1706 78.6922 18.7967C81.9027 18.4078 88.5545 17.8317 91.7931 18.2478C92.6529 18.3583 92.3659 17.8413 91.6494 18.6282C86.9953 23.7396 77.8499 28.3447 72.3587 32.4501C62.0051 40.1908 51.3021 47.4823 40.6481 54.8011C36.1065 57.9211 31.4261 60.8259 27.2893 64.4583" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </DockIcon>
            
            <Separator orientation="vertical" className="mx-2 h-8 bg-neutral-200 dark:bg-neutral-800" decorative />
            
            {navData.navbar
              .filter(item => ['Projects', 'Experience', 'About', 'Camera', 'Contact', 'AI Chat'].includes(item.label))
              .map((item) => (
                <DockIcon key={item.href}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          "size-12 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        )}
                      >
                        <item.icon className="size-4" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 border-none">
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
            ))}
            
            <Separator orientation="vertical" className="mx-2 h-8 bg-neutral-200 dark:bg-neutral-800" decorative />
            
            <DockIcon>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ModeToggle />
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Theme</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          </Dock>
        </div>
      </TooltipProvider>
    </>
  );
};




