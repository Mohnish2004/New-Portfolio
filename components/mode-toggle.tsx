"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const lightSoundRef = useRef<HTMLAudioElement | null>(null);
  const darkSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    lightSoundRef.current = new Audio("/sounds/244923__kwahmah_02__light-switch.wav"); // Add your light mode sound
    darkSoundRef.current = new Audio("/sounds/244923__kwahmah_02__light-switch.wav");   // Add your dark mode sound
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    if (newTheme === "light") {
      lightSoundRef.current?.play();
    } else {
      darkSoundRef.current?.play();
    }
    setTheme(newTheme);
  };

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2"
      onClick={handleThemeToggle}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
      <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
    </Button>
  );
}