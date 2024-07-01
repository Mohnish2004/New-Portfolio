import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
} from "@/components/icons";

export const Navbar = () => {

  return (
    <NextUINavbar className=" mb-10" position="sticky" >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
        <svg width="90" height="50" viewBox="0 0 144 66" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:text-white">
<path d="M31.6907 46.392C32.6008 46.6137 32.2588 43.38 32.2607 43.0902C32.3 37.0367 31.6573 30.966 32.6233 24.9505C33.5996 18.8704 34.5802 7.67156 42.9693 8.9158C47.0595 9.52244 45.8074 12.0875 45.7901 15.901V15.901C45.7784 18.4651 46.5847 16.9606 47.6776 14.6411C47.688 14.619 47.6991 14.597 47.7107 14.575C48.5977 12.9027 53.3391 9.47773 55.6207 10.2532C58.0277 11.0713 58.3581 12.3177 58.5792 14.8508C59.2355 22.3716 57.2986 30.2646 56.2107 37.6655C56.0517 38.7468 54.2447 46.5594 56.042 47.2428C58.1437 48.0419 62.0784 42.6113 62.8025 41.3598C64.0016 39.2873 65.1784 37.1975 66.056 34.9659C66.3335 34.2602 66.6215 32.6826 67.398 32.2775C67.4448 32.2531 66.8928 33.6377 66.8516 33.7147C65.8647 35.5576 65.1138 37.4439 64.3711 39.3973C63.3255 42.1475 62.0528 45.999 65.232 47.9495C68.5327 49.9746 77.3767 36.1952 72.2033 33.0993C69.7474 31.6296 64.4844 34.9488 68.7025 36.1777C73.5238 37.5824 78.5518 32.5432 81.4579 29.4897C85.9965 24.7207 90.3808 17.4522 89.8825 10.5768C89.7612 8.90415 88.6007 1.71189 85.9338 1.67306C83.7317 1.64101 81.3715 13.2626 81.0434 14.5957C79.107 22.4645 78.9565 30.6402 78.6215 38.6924C78.5487 40.4428 78.4968 42.1993 78.4501 43.9506C78.4201 45.0762 78.6618 44.1259 79.0467 43.5834C81.3359 40.3564 85.3726 39.7056 88.9986 41.0842C92.1715 42.2906 93.8265 45.1067 97.1489 46.1479C107.294 49.3272 118.849 49.7842 129.401 50.2541C133.266 50.4261 144.867 49.7945 140.999 49.797C132.782 49.8024 124.542 50.5384 116.324 50.6969C92.8358 51.1498 69.2679 50.9265 45.7854 50.243C33.5997 49.8882 21.1307 49.5358 9.19336 46.7944C8.0923 46.5415 2.32182 45.7411 2.00723 44.0622C1.53533 41.5436 7.19053 39.0926 8.61197 38.3484C20.0151 32.3778 32.6365 28.3888 45.0449 25.1495C56.1013 22.2633 67.3505 20.1706 78.6922 18.7967C81.9027 18.4078 88.5545 17.8317 91.7931 18.2478C92.6529 18.3583 92.3659 17.8413 91.6494 18.6282C86.9953 23.7396 77.8499 28.3447 72.3587 32.4501C62.0051 40.1908 51.3021 47.4823 40.6481 54.8011C36.1065 57.9211 31.4261 60.8259 27.2893 64.4583" stroke="#727272" strokeWidth="3" strokeLinecap="round"/>
</svg>

        </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">

        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">

          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="center">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : "foreground"
                }
                href="/"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
