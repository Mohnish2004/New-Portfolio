'use client'
import { useChat } from 'ai/react';
import React, { useRef, useEffect, useState } from "react";
import { DateTime } from "luxon";
import { Tooltip } from "@nextui-org/react";
import ReactMarkdown from 'react-markdown';



function MessageTime({ timestamp = new Date() }) {
  return (
    <time className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5 block">
      {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </time>
  );
}


// Add this type definition
type MessageWithMetadata = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  linkTo?: {
    path: string;
    text: string;
  };
}

const Home = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } = useChat({
    api: '/api/chat',
  });

  const [showInitialMessage, setShowInitialMessage] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      const scrollOptions = {
        behavior: 'smooth' as ScrollBehavior,
        block: 'end' as ScrollLogicalPosition
      };
      
      // Small delay to ensure smooth animation
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView(scrollOptions);
      }, 100);
    }
  }, [messages]);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (input.trim()) {
      setShowInitialMessage(false);
      handleSubmit(event);
    }
  };

  const quickActions = [
    {
      text: "Where is Mohnish from?",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      ),
    },
    {
      text: "Tell me about his projects",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      ),
    },
    {
      text: "Tell me about his experience",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
      ),
    },
  ];

  const handleQuickAction = async (action: string) => {
    const fakeEvent = { target: { value: action } } as any;
    await handleInputChange(fakeEvent);
    setTimeout(() => handleSubmit(new Event('submit') as any), 0);
  };

  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  // Add these helper functions
  const shouldShowKnowMoreButton = (content: string): boolean => {
    const keywords = ['project', 'experience', 'contact', 'gallery', 'about'];
    return keywords.some(keyword => content.toLowerCase().includes(keyword));
  };

  const getRelevantLinks = (content: string): Array<{ path: string; text: string }> => {
    const links = [];
    
    if (content.toLowerCase().includes('project')) {
      links.push({ path: '/projects', text: 'about Projects' });
    }
    if (content.toLowerCase().includes('experience')) {
      links.push({ path: '/experience', text: 'about Experience' });
    }
    if (content.toLowerCase().includes('contact')) {
      links.push({ path: '/contact', text: 'about Contact' });
    }
    if (content.toLowerCase().includes('gallery')) {
      links.push({ path: '/gallery', text: 'about Gallery' });
    }
    if (content.toLowerCase().includes('about')) {
      links.push({ path: '/about', text: 'about Mohnish' });
    }
    
    return links;
  };

  return (
    <section data-aos="fade-in" className="antialiased max-w-xl mx-4 sm:mx-auto">
      <div className="relative">
        {/* Top gradient */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white dark:from-black to-transparent z-10" />
        
        <div className="overflow-y-auto mb-4 space-y-4 h-[calc(100vh-180px)] scrollbar-hide px-2 scroll-smooth">
          <div className="mt-10 p-4 bg-gray-50 ring-1 ring-inset ring-gray-500/10 dark:bg-neutral-800 rounded-xl">
            <div className="flex items-center gap-3.5">
              <div className="p-2 bg-white dark:bg-neutral-900 rounded-lg shadow-lg">
                <img src="/bear.svg" alt="Djungelskog" className="w-7 h-7 flex-shrink-0" />
              </div>
              <div className="min-w-0">
                <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Meet Djungelskog</h2>
                <p className="text-xs text-gray-600 dark:text-neutral-400 mt-0.5">
                  Your friendly AI assistant, here to help you explore Mohnish's portfolio.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => handleQuickAction(action.text)}
                className="p-3 text-left rounded-xl bg-gray-50 dark:bg-neutral-800 text-xs text-gray-700 dark:text-white ring-1 ring-gray-200 dark:ring-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-700 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-gray-100 dark:bg-neutral-700 rounded-lg">
                      {action.icon}
                    </div>
                    <span className="line-clamp-2 min-h-[2.5rem] flex items-center">{action.text}</span>
                  </div>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </button>
            ))}
          </div>

          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`flex items-start gap-2 w-full ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className="flex-shrink-0">
                {message.role === 'user' ? (
                  <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center ring-1 ring-gray-200 dark:ring-neutral-700">
                    <span className="text-[10px] font-medium text-gray-600 dark:text-neutral-300">You</span>
                  </div>
                ) : (
                  <img
                    src="/bear.svg"
                    alt="Djungelskog"
                    className="w-6 h-6"
                  />
                )}
              </div>

              <div 
                className={`flex flex-col ${message.role === 'user' ? 'items-end' : 'items-start'} min-w-0 flex-1`}
              >
                <div 
                  className={`${
                    message.role === 'user' 
                      ? 'bg-gray-100 dark:bg-neutral-800' 
                      : 'bg-gray-50 dark:bg-neutral-800'
                  } rounded-xl px-3 py-2 ring-1 ring-gray-200/50 dark:ring-neutral-700/50 ${
                    message.role === 'user' ? 'w-fit max-w-[85%]' : 'w-[85%]'
                  } break-words`}
                >
                  <div className="text-xs text-gray-700 dark:text-neutral-200 leading-relaxed whitespace-pre-wrap prose dark:prose-invert prose-sm max-w-none">
                    <ReactMarkdown
                      components={{
                        h1: ({ children }) => <h1 className="font-bold text-xs mb-2">{children}</h1>,
                        h2: ({ children }) => <h2 className="font-bold text-xs mb-2">{children}</h2>,
                        p: ({ children }) => <p className="mb-1 last:mb-0">{children}</p>,
                        ul: ({ children }) => <ul className="list-disc ml-4 mb-1">{children}</ul>,
                        ol: ({ children }) => <ol className="list-decimal ml-4 mb-1">{children}</ol>,
                        li: ({ children }) => <li className="mb-0.5">{children}</li>,
                        a: ({ children, href }) => (
                          <a href={href} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                            {children}
                          </a>
                        ),
                        code: ({ children }) => (
                          <code className="bg-gray-100 dark:bg-neutral-700 px-1 py-0.5 rounded">
                            {children}
                          </code>
                        ),
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                  </div>
                </div>
                
                {message.role === 'assistant' && shouldShowKnowMoreButton(message.content) && (
                  <div className="mt-2 flex flex-wrap pt-2 pb-2 gap-1.5">
                    {getRelevantLinks(message.content).map((link, index) => (
                      <button
                        key={index}
                        onClick={() => handleNavigation(link.path)}
                        className="text-xs px-2.5 py-1 rounded-lg bg-gray-50 dark:bg-neutral-800 text-gray-700 dark:text-white ring-1 ring-gray-200 dark:ring-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-700 transition-all"
                      >
                        Know More {link.text} →
                      </button>
                    ))}
                  </div>
                )}
                
                <MessageTime />
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex items-start gap-2 w-full">
              <img src="/bear.svg" alt="Typing" className="w-6 h-6 flex-shrink-0" />
              <div className="flex flex-col items-start">
                <div className="bg-gray-50 dark:bg-neutral-800 rounded-xl px-3 py-2 ring-1 ring-inset ring-gray-500/10">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"></div>
                  </div>
                </div>
                <MessageTime />
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} className="h-1" />
        </div>
        
        {/* Bottom gradient */}
      </div>

      <form onSubmit={handleFormSubmit} className="sticky bottom-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm py-3 px-2">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask me anything..."
            className="flex-grow h-9 items-center rounded-lg bg-gray-50 dark:bg-neutral-800 px-3 py-2 text-xs text-gray-700 dark:text-white ring-1 ring-gray-200 dark:ring-neutral-700 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-neutral-600 transition-shadow"
          />
          <button
            type="submit"
            onClick={() => {
              if (isLoading) {
                stop()
              }
            }}
            className="h-9 px-4 rounded-lg bg-gray-100 dark:bg-neutral-800 text-xs font-medium text-gray-700 dark:text-white ring-1 ring-gray-200 dark:ring-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            {isLoading ? 'Stop' : 'Send'}
          </button>
        </div>
      </form>

    </section>
  );
};

export default Home;