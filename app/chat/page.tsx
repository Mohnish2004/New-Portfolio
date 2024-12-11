'use client'
import { useChat } from 'ai/react';
import React, { useRef, useEffect, useState } from "react";
import { DateTime } from "luxon";
import { Tooltip } from "@nextui-org/react";
import ReactMarkdown from 'react-markdown';
import html2canvas from 'html2canvas';



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
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic
  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (!chatContainer) return;

    // Check if user is near bottom before scrolling
    const isNearBottom = () => {
      const threshold = 100; // pixels from bottom
      const position = chatContainer.scrollHeight - chatContainer.scrollTop - chatContainer.clientHeight;
      return position <= threshold;
    };

    // Add a small delay to ensure content is rendered
    setTimeout(() => {
      if (isNearBottom() || isLoading) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }, 100);
  }, [messages, isLoading]);

  // Force scroll to bottom when user sends a message
  const scrollToBottom = () => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      setTimeout(() => {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }, 100);
    }
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (input.trim()) {
      setShowInitialMessage(false);
      handleSubmit(event);
      scrollToBottom();
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
    handleSubmit(new Event('submit') as any);
    scrollToBottom();
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

  // Add new state for modal
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareImageUrl, setShareImageUrl] = useState<string>('');

  // Update the shareMessage function
  const shareMessage = async (messageElement: HTMLElement, messageContent: string, userQuestion: string) => {
    try {
      const previewContainer = document.createElement('div');
      previewContainer.className = 'fixed left-[-9999px] top-[-9999px] w-[1200px] h-[630px] bg-white dark:bg-black p-8';
      
      // Truncate the message content if it's too long
      const truncatedContent = messageContent.length > 500 
        ? messageContent.substring(0, 500) + '...'
        : messageContent;

      previewContainer.innerHTML = `
        <div class="flex flex-col h-full">
          <div class="flex items-start gap-4">
            <img src="/bear.svg" alt="Djungelskog" class="w-8 h-8" />
            <div class="flex-1">
              <p class="text-xl text-gray-900 dark:text-white">
                ${truncatedContent}
              </p>
            </div>
          </div>

          <div class="mt-auto pt-6 border-t border-gray-200 dark:border-gray-800">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Chat with Djungelskog at
                </p>
                <p class="text-base font-medium text-gray-900 dark:text-white">
                  mohnishgopi.com
                </p>
              </div>
              <div class="flex items-center gap-2">
                <img src="/bear.svg" alt="Djungelskog" class="w-6 h-6 opacity-60" />
                <span class="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Djungelskog AI
                </span>
              </div>
            </div>
          </div>
        </div>
      `;

      document.body.appendChild(previewContainer);

      // Generate image
      const canvas = await html2canvas(previewContainer, {
        backgroundColor: document.documentElement.classList.contains('dark') ? '#000' : '#fff',
      });
      document.body.removeChild(previewContainer);

      // Convert to blob and create URL
      const blob = await new Promise<Blob>((resolve) => 
        canvas.toBlob((blob) => resolve(blob!), 'image/png')
      );
      const imageUrl = URL.createObjectURL(blob);
      setShareImageUrl(imageUrl);
      setShowShareModal(true);
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  // Add new state for share options
  const [showShareOptions, setShowShareOptions] = useState(false);

  // Update the handleShare function
  const handleShare = async () => {
    try {
      // If native sharing is available, use it
      if (navigator.share) {
        const response = await fetch(shareImageUrl);
        const blob = await response.blob();
        const file = new File([blob], 'djungelskog-chat.png', { type: 'image/png' });
        await navigator.share({
          files: [file],
          title: 'Chat with Djungelskog',
          text: '🐻 Check out my conversation with Djungelskog, the AI assistant at mohnishgopi.com/chat! #AI #Portfolio',
          url: 'Check out my conversation with Djungelskog, the AI assistant at https://mohnishgopi.com/chat'
        });
        setShowShareModal(false);
      } else {
        // If native sharing is not available, show social sharing options
        setShowShareOptions(true);
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  // Add social sharing handlers
  const handleSocialShare = (platform: string) => {
    const text = encodeURIComponent('🐻 Check out my conversation with Djungelskog, the AI assistant at mohnishgopi.com/chat! #AI #Portfolio');
    const url = encodeURIComponent('https://mohnishgopi.com/chat');
    
    let shareUrl = '';
    switch (platform) {
      case 'email':
        // Convert the image URL to a blob and create an email with attachment
        fetch(shareImageUrl)
          .then(response => response.blob())
          .then(blob => {
            const formData = new FormData();
            formData.append('attachment', blob, 'djungelskog-chat.png');
            
            const mailtoLink = `mailto:?subject=${encodeURIComponent('Chat with Djungelskog')}&body=${text}%0A%0A${url}`;
            window.location.href = mailtoLink;
          });
        return;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${text}%20${url}`;
        break;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
    setShowShareOptions(false);
    setShowShareModal(false);
  };

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = shareImageUrl;
    a.download = 'djungelskog-chat.png';
    a.click();
    setShowShareModal(false);
  };

  return (
    <section data-aos="fade-in" className="antialiased max-w-xl mx-4 p-4 sm:mx-auto">
              <h1 className="mt-2 text-5xl tracking-tighter">
      Chat
      </h1>
      <div className="relative">
        {/* Top gradient */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white dark:from-black to-transparent z-10" />
        
        <div 
          ref={chatContainerRef}
          className="overflow-y-auto mb-4 space-y-4 h-[calc(100vh-180px)] scrollbar-hide px-2 scroll-smooth"
        >
          <div className="mt-10 p-4 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl shadow-sm ring-1 ring-black/5 dark:ring-white/5">
            <div className="flex items-center gap-3.5">
              <div className="relative p-2.5 bg-gradient-to-b from-white to-gray-50 dark:from-neutral-800 dark:to-neutral-900 rounded-xl shadow-sm ring-1 ring-black/5 dark:ring-white/5">
                <img src="/bear.svg" alt="Djungelskog" className="w-6 h-6 flex-shrink-0" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-medium text-gray-900 dark:text-white">Meet Djungelskog</h2>
                  <span className="text-[10px] font-medium text-green-600 dark:text-green-500">online</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Your friendly AI assistant, here to help you explore Mohnish&apos;s portfolio.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => handleQuickAction(action.text)}
                className="p-3 text-left rounded-xl bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm text-xs text-gray-700 dark:text-white ring-1 ring-black/5 dark:ring-white/5 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-gradient-to-b from-white to-gray-50 dark:from-neutral-800 dark:to-neutral-900 rounded-lg ring-1 ring-black/5 dark:ring-white/5">
                      {action.icon}
                    </div>
                    <span className="line-clamp-2 min-h-[2.5rem] flex items-center">{action.text}</span>
                  </div>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </button>
            ))}
          </div>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200 dark:border-neutral-800"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-black">
                Your conversation will appear below
              </span>
            </div>
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
                    
                    {message.role === 'assistant' && (
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            const messageEl = e.currentTarget.closest('.message-container') as HTMLElement;
                            const userMessage = messages.find((m, i) => 
                              messages[i + 1]?.id === message.id && m.role === 'user'
                            );
                            shareMessage(messageEl, message.content, userMessage?.content || 'Hi Djungelskog');
                          }}
                          className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg bg-gray-50 dark:bg-neutral-800 text-gray-700 dark:text-white ring-1 ring-gray-200 dark:ring-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-700 transition-all"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185z" />
                          </svg>
                          Share
                        </button>
                      </div>
                    )}
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
          <div ref={messagesEndRef} className="h-px" />
        </div>
        
        {/* Bottom gradient */}
      </div>

      <form onSubmit={handleFormSubmit} className="sticky bottom-20 sm:bottom-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm py-3 px-2">
        <div className="relative">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask me anything..."
            className="w-full h-10 pl-4 pr-12 rounded-xl bg-white dark:bg-neutral-900 text-sm text-gray-700 dark:text-white ring-1 ring-gray-200 dark:ring-neutral-800 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-neutral-700 transition-shadow"
          />
          <button
            type="submit"
            onClick={() => {
              if (isLoading) {
                stop()
              }
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
          >
            {isLoading ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            )}
          </button>
        </div>
      </form>

      {showShareModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/50 dark:bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl max-w-lg w-full overflow-hidden">
            {/* Preview */}
            <div className="relative aspect-[1200/630] w-full bg-gray-50 dark:bg-neutral-800">
              <img 
                src={shareImageUrl} 
                alt="Preview" 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Actions */}
            <div className="p-4">
              <div className="flex gap-2">
                <button
                  onClick={handleShare}
                  className="flex-1 px-4 py-2 text-sm font-medium rounded-lg bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  Share Image
                </button>
                <button
                  onClick={() => setShowShareModal(false)}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;