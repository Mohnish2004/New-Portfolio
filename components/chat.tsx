// app/components/ChatIcon.tsx
"use client"
import { useState } from 'react';
import ChatPopup from '@/components/ChatPopup';
import { Button } from '@nextui-org/button';

export default function ChatIcon() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4">
<button                 onClick={toggleChat}>

                  <img
                src="/bear.svg"
                alt="User avatar"
                className="w-10 h-11"
              />   
    </button>
      </div>
      {isOpen && <ChatPopup />}
    </>
  );
}
