import { useEffect, useRef } from 'react';
import { useChat } from 'ai/react';
import { useState } from 'react';


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
    <div className="fixed bottom-16 right-4 dark:backdrop-blur-xl dark:bg-black/30 backdrop-blur-xl bg-white/30 w-80 h-96 transition-all duration-300 hover:scale-101 shadow-md items-center rounded-md mr-2 text-xs dark:border-neutral-700 font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10 cursor-pointer flex flex-col p-4">
      <div className="flex-grow overflow-y-auto mb-4">
        {showInitialMessage && (
          <div className="flex flex-col items-center justify-center h-full">
            <img src="/bear.svg" alt="Djungelskog" className="w-20 h-20 mb-4" />
            <p className="text-center text-gray-900 dark:text-white text-sm">
              Hello, I&apos;m Djungelskog, your guide through Mohnish&apos;s portfolio. Feel free to ask me anything! Fun fact: I was born in <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/2560px-Ikea_logo.svg.png" alt="IKEA Logo" className="inline h-3 w-auto" />.
            </p>
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
