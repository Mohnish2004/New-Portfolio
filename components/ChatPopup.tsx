import { useEffect, useRef } from 'react';
import { useChat } from 'ai/react';
import { useState } from 'react';
import {Tooltip, Button} from "@nextui-org/react";
import { px } from 'framer-motion';



export default function ChatPopup() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: '/api/chat',
  });

  const [showInitialMessage, setShowInitialMessage] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom of the chat messages on update
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Scroll whenever messages change

  // Get current time in a readable format
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Handle form submit
  const handleFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="fixed bottom-16 right-4 dark:backdrop-blur-xl dark:bg-neutral-700/20 backdrop-blur-xl bg-neutral-200/20 w-80 h-96 transition-all duration-1000 hover:shadow-lg items-center rounded-md mr-2 text-xs dark:border-neutral-700 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10 cursor-pointer flex flex-col p-4">
      <div className="flex-grow overflow-y-auto mb-4">
        {showInitialMessage && (
          <div className="flex flex-col items-center justify-center h-full animate-fade-in">
            <Tooltip 
              radius="sm" 
              placement='top' 
              color="default" 
              showArrow={true} 
              content={
                <div className="p-1 rounded-lg overflow-hidden">
                  <img 
                    src="/bear1.jpeg" 
                    alt="Djungelskog" 
                    className="w-24 h-36 object-cover rounded-lg shadow-lg transform transition-transform hover:scale-105" 
                  />
                </div>
              }
            >
              <div className="relative group cursor-pointer">
                <img 
                  src="/bear.svg" 
                  alt="Djungelskog" 
                  className="w-24 h-24 mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-3" 
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-gray-50 dark:to-neutral-800 opacity-0 group-hover:opacity-20 transition-opacity" />
              </div>
            </Tooltip>

            <div className="max-w-sm space-y-2">
              <p className="text-center text-gray-900 dark:text-white text-sm font-medium">
                Hello, I&apos;m Djungelskog! 👋
              </p>
              <p className="text-center text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                Your friendly guide through Mohnish&apos;s portfolio. Feel free to ask me anything!
              </p>
              <p className="text-center text-gray-600 dark:text-gray-400 text-xs flex items-center justify-center gap-1.5">
                Fun fact: I was born in 
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/2560px-Ikea_logo.svg.png" 
                  alt="IKEA Logo" 
                  className="inline h-3 w-auto transform transition-transform hover:scale-110" 
                />
              </p>
            </div>
          </div>
        )}
        {messages.map((message) => (
          <div key={message.id} className={`grid pb-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-2.5 mb-4 ${message.role === 'user' ? 'flex-row-reverse' : ''} max-w-full`}>
              {message.role === 'user' ? null : (
                <img
                  src="/bear.svg"
                  alt="Bot avatar"
                  className="w-10 h-11"
                />
              )}
              <div className="grid">
                <h5 className="text-gray-900 dark:text-white text-sm font-semibold leading-snug pb-1">
                  {message.role === 'user' ? 'You' : 'Djungelskog'}
                </h5>
                <div className={`px-3.5 py-2 bg-neutral-100 dark:bg-neutral-700 rounded-lg ${message.role === 'user' ? 'rounded-tr-none' : 'rounded-tl-none'} break-words text-gray-900 dark:text-white`}>
                  <h5 className="text-sm font-normal leading-snug">
                    {message.content}
                  </h5>
                </div>
                <div className="justify-end items-center inline-flex mb-2.5">
                  <h6 className="text-gray-500 text-xs font-normal leading-4 py-1">
                    {getCurrentTime()}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* This div is used to scroll to the latest message */}
        <div ref={messagesEndRef} />
        {isLoading && (
          <div className="flex items-center mb-4">
            <img src="/bear.svg" alt="Typing indicator" className="w-10 h-11 mr-2" />
            <div className="text-gray-600 dark:text-white text-sm">Lemme think...</div>
          </div>
        )}
        {error && <div className="text-red-500">{error.message}</div>}
      </div>
      <form onSubmit={handleFormSubmit} className="flex w-full">
        <input
          name="prompt"
          value={input}
          onChange={handleInputChange}
          className="flex-grow h-7 items-center rounded-md bg-white mr-2 text-xs dark:border-neutral-700 dark:bg-neutral-700 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10 cursor-pointer rounded-l p-2"
          onFocus={() => setShowInitialMessage(true)} // Hide initial message when input is focused
        />
        <button
          type="submit"
          className="transition-all duration-300 hover:scale-105 hover:shadow-md rounded-md bg-white text-xs dark:border-neutral-700 dark:bg-neutral-700 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10 px-3"
        >
          Send
        </button>
      </form>
    </div>
  );
}
