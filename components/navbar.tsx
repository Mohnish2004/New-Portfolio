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
  BookmarkIcon,
  FaceIcon,
  HomeIcon,
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
      icon: AiChatIcon,
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
            <DockIcon >
              <Link href="/">
              <HomeIcon className="size-4" />
              </Link>
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
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="size-4 text-neutral-900 dark:text-neutral-400"
                >
                  <path 
                    d="M3 10.182V22h18V10.182L12 2L3 10.182Z"
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M9 14h6v8H9v-8Z"
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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




