// app/components/ChatIcon.tsx
"use client"
import { useState } from 'react';
import ChatPopup from '@/components/ChatPopup';
import { Button } from '@nextui-org/button';
import {Tooltip} from "@nextui-org/tooltip";
export default function ChatIcon() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="fixed bottom-4 right-4 ">
      <Tooltip showArrow={true} placement='left' radius='sm' content="Chat with me">
<button  className='rounded-full shadow-sm dark:backdrop-blur-xl dark:bg-neutral-300/20 backdrop-blur-xl bg-neutral-300/20 p-1' onClick={toggleChat}>

                  <img
                src="/bear.svg"
                alt="User avatar"
                className="w-8 h-8 "
              />   
    </button>
    </Tooltip>
      </div>
      {isOpen  && <ChatPopup />}
    </>
  );
}
