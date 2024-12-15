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

  // Enhanced helper functions for chat/page.tsx
  const getRelevantLinks = (content: string): Array<{ path: string; text: string }> => {
    const linkMappings = [
      {
        keywords: ['project', 'projects', 'portfolio'],
        path: '/projects',
        text: 'View All Projects'
      },
      {
        keywords: ['experience', 'work', 'internship'],
        path: '/experience',
        text: 'See Full Experience'
      },
      {
        keywords: ['contact', 'reach out', 'get in touch'],
        path: '/contact',
        text: 'Contact Information'
      },
      {
        keywords: ['gallery', 'photos', 'photography'],
        path: '/gallery',
        text: 'Browse Gallery'
      },
      {
        keywords: ['about', 'background', 'personal'],
        path: '/about',
        text: 'About Mohnish'
      }
    ];

    const links = linkMappings
      .filter(mapping => 
        mapping.keywords.some(keyword => 
          content.toLowerCase().includes(keyword)
        )
      )
      .map(({ path, text }) => ({ path, text }));

    return Array.from(new Map(links.map(item => [item.path, item])).values());
  };

  const shouldShowKnowMoreButton = (content: string): boolean => {
    const allKeywords = [
      'project', 'projects', 'portfolio',
      'experience', 'work', 'internship',
      'contact', 'reach out', 'get in touch',
      'gallery', 'photos', 'photography',
      'about', 'background', 'personal'
    ];
    
    return allKeywords.some(keyword => 
      content.toLowerCase().includes(keyword)
    );
  };

  // Add new state for modal
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareImageUrl, setShareImageUrl] = useState<string>('');
  const [shareUrl, setShareUrl] = useState<string>('');

  // Add state for shared chat view
  const [isSharedChat, setIsSharedChat] = useState(false);
  const [sharedMessages, setSharedMessages] = useState<MessageWithMetadata[]>([]);

  // Check for shared chat in URL on component mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const data = params.get('s')?.replace(/-/g, '+').replace(/_/g, '/');
    if (data) {
      try {
        const decodedData = JSON.parse(atob(data));
        const expandedMessages = decodedData.map((m: any) => ({
          role: m.r === 'u' ? 'user' : 'assistant',
          content: m.c,
          id: Math.random().toString()
        }));
        setSharedMessages(expandedMessages);
        setIsSharedChat(true);
      } catch (error) {
        console.error('Error parsing shared chat:', error);
      }
    }
  }, []);

  // Modify the share functionality to include URL sharing
  const compressData = (data: MessageWithMetadata[]) => {
    // Keep only essential data
    const minData = data.map(m => ({
      r: m.role[0], // 'u' or 'a'
      c: m.content
    }));
    // Convert to base64url (URL-safe base64)
    return btoa(JSON.stringify(minData))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  };

  const shortenUrl = async (longUrl: string): Promise<string> => {
    try {
      const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`);
      if (!response.ok) throw new Error('Failed to shorten URL');
      return await response.text();
    } catch (error) {
      console.error('Error shortening URL:', error);
      return longUrl; // Fallback to original URL if shortening fails
    }
  };

  const generateShareUrl = async (messagesToShare: MessageWithMetadata[]) => {
    const compressed = compressData(messagesToShare);
    const longUrl = `${window.location.origin}/chat?s=${compressed}`;
    return await shortenUrl(longUrl);
  };

  // Add new state for share options
  const [showShareOptions, setShowShareOptions] = useState(false);

  // Add new state for URL shortening
  const [isShortening, setIsShortening] = useState(false);

  // Update the shareMessage function
  const shareMessage = async (messageElement: HTMLElement, messageContent: string, userQuestion: string) => {
    try {
      setIsShortening(true);
      const previewContainer = document.createElement('div');
      previewContainer.className = 'fixed left-[-9999px] top-[-9999px] w-[1200px] h-[630px] bg-white dark:bg-black p-12';
      
      previewContainer.innerHTML = `
        <div class="flex flex-col h-full">
          <div class="flex-1 flex items-center justify-center">
            <div class="max-w-2xl w-full text-center space-y-6">
              <div class="flex items-center justify-center gap-4 mb-2">
                <img src="/bear.svg" alt="Djungelskog" class="w-16 h-16" />
              </div>
              
              <h1 class="text-4xl font-semibold text-gray-900 dark:text-white">
                Chat with Djungelskog
              </h1>
              
              <p class="text-xl text-gray-500 dark:text-gray-400">
                Check out our conversation at mohnishgopi.com
              </p>
            </div>
          </div>

          <div class="absolute bottom-12 left-12 right-12 flex items-center justify-between text-gray-400 dark:text-gray-500">
            <div class="flex items-center gap-2">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <span class="text-sm">AI Chat</span>
            </div>
            
            <div class="flex items-center gap-2">
              <span class="text-sm">mohnishgopi.com</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
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

      // Generate and shorten the share URL
      const shortUrl = await generateShareUrl([
        { role: 'user', content: userQuestion, id: 'user-message' },
        { role: 'assistant', content: messageContent, id: 'assistant-message' }
      ]);
      
      setShareUrl(shortUrl);
      setShareImageUrl(imageUrl);
      setShowShareModal(true);
    } catch (error) {
      console.error('Error sharing:', error);
    } finally {
      setIsShortening(false);
    }
  };

  // Add social sharing handlers
  const handleSocialShare = (platform: string) => {
    const text = encodeURIComponent('🐻 Check out my conversation with Djungelskog, at mohnishgopi.com');
    const url = encodeURIComponent(shareUrl); // This uses the state variable
    
    let socialShareUrl = ''; // Renamed from shareUrl to avoid conflict
    switch (platform) {
      case 'twitter':
        socialShareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        break;
      case 'facebook':
        socialShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'linkedin':
        socialShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'whatsapp':
        socialShareUrl = `https://wa.me/?text=${text}%20${url}`;
        break;
    }
    
    window.open(socialShareUrl, '_blank', 'width=600,height=400');
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

  // Add custom styles for markdown rendering
  const markdownStyles = {
    container: 'space-y-1',
    p: 'my-0.5',
    ul: 'my-0.5 space-y-0.5',
    ol: 'my-0.5 space-y-0.5',
    h2: 'mt-1.5 mb-1 text-lg font-semibold',
    blockquote: 'border-l-4 pl-4 my-1',
    pre: 'my-1',
  };

  const shareAction = {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
      </svg>
    ),
    action: () => {
      const lastAssistantMessage = messages.findLast(m => m.role === 'assistant');
      const lastUserMessage = messages.findLast(m => m.role === 'user');
      if (lastAssistantMessage) {
        const messageEl = document.querySelector('.message-container') as HTMLElement;
        shareMessage(
          messageEl,
          lastAssistantMessage.content,
          lastUserMessage?.content || 'Hi Djungelskog'
        );
      }
    }
  };

  return (
    <section 
      data-aos="fade-in" 
      className={`antialiased max-w-xl mx-4 ${isSharedChat ? 'py-8' : 'p-4'} sm:mx-auto`}
    >
      {isSharedChat ? (
        <div className="flex items-center justify-between mb-8 px-1">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-b from-white to-gray-50 dark:from-neutral-800 dark:to-neutral-900 rounded-xl shadow-sm ring-1 ring-black/5 dark:ring-white/5">
              <img src="/bear.svg" alt="Djungelskog" className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-900 dark:text-white">
                Shared Conversation
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                via Djungelskog
              </p>
            </div>
          </div>
          <a 
            href="/chat" 
            className="px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 
              bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 
              rounded-lg transition-colors ring-1 ring-gray-200 dark:ring-neutral-700"
          >
            New Chat
          </a>
        </div>
      ) : (
        <h1 className="mt-2 text-5xl tracking-tighter">Chat</h1>
      )}

      <div className="relative">
        {!isSharedChat && (
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white dark:from-black to-transparent z-10" />
        )}
        
        <div 
          ref={chatContainerRef}
          className={`${
            isSharedChat 
              ? 'space-y-6 px-1' // Clean spacing for shared view
              : 'overflow-y-auto mb-4 space-y-4 h-[calc(100vh-180px)] scrollbar-hide px-2 scroll-smooth'
          }`}
        >
          {!isSharedChat && (
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
          )}
          
          {!isSharedChat && (
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
          )}

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

          {(isSharedChat ? sharedMessages : messages).map((message) => (
            <div 
              key={message.id} 
              className={`flex items-start gap-2 w-full message-container ${
                message.role === 'user' ? 'flex-row-reverse' : ''
              }`}
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
                className={`flex flex-col ${
                  message.role === 'user' ? 'items-end' : 'items-start'
                } min-w-0 flex-1`}
              >
                <div 
                  className={`group relative ${
                    message.role === 'user' 
                      ? 'bg-gray-100 dark:bg-neutral-800' 
                      : 'bg-transparent'
                  } rounded-xl px-3 py-2 ${
                    message.role === 'user' 
                      ? 'ring-1 ring-gray-200/50 dark:ring-neutral-700/50' 
                      : ''
                  } ${
                    message.role === 'user' ? 'w-fit max-w-[85%]' : 'w-[85%]'
                  } break-words`}
                >
                  <div className={`${markdownStyles.container} font-inter`}>
                    <ReactMarkdown
                      className="prose dark:prose-invert max-w-none prose-sm leading-tight"
                      components={{
                        p: ({node, ...props}) => <p className={`${markdownStyles.p}`} {...props} />,
                        ul: ({node, ...props}) => <ul className={`${markdownStyles.ul}`} {...props} />,
                        ol: ({node, ...props}) => <ol className={`${markdownStyles.ol}`} {...props} />,
                        h2: ({node, children, ...props}) => 
                          children ? (
                            <h2 className={`${markdownStyles.h2}`} {...props}>
                              {children}
                            </h2>
                          ) : null,
                        blockquote: ({node, ...props}) => <blockquote className={`${markdownStyles.blockquote}`} {...props} />,
                        pre: ({node, ...props}) => <pre className={`${markdownStyles.pre}`} {...props} />,
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                  </div>
                </div>

                {/* Navigation links and share button - outside the message */}
                {message.role === 'assistant' && (
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    {getRelevantLinks(message.content).map((link, index) => (
                      <button
                        key={index}
                        onClick={() => handleNavigation(link.path)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium 
                        text-gray-600 dark:text-gray-300
                        bg-gray-50 dark:bg-neutral-800/50
                        hover:bg-gray-100 dark:hover:bg-neutral-800
                        rounded-full transition-colors
                        ring-1 ring-gray-200/50 dark:ring-neutral-700/50"
                      >
                        {/* Link icons */}
                        {link.path === '/projects' && (
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                          </svg>
                        )}
                        {link.path === '/experience' && (
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                          </svg>
                        )}
                        {link.path === '/about' && (
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                          </svg>
                        )}
                        <span>{link.text}</span>
                      </button>
                    ))}
                    
                    {/* Share button */}
                    <button
                      onClick={async (e) => {
                        const messageEl = e.currentTarget.closest('.message-container') as HTMLElement;
                        const userMessage = messages.find((m, i) => 
                          messages[i + 1]?.id === message.id && m.role === 'user'
                        );
                        await shareMessage(
                          messageEl, 
                          message.content, 
                          userMessage?.content || 'Hi Djungelskog'
                        );
                      }}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium 
                      text-gray-600 dark:text-gray-300
                      bg-gray-50 dark:bg-neutral-800/50
                      hover:bg-gray-100 dark:hover:bg-neutral-800
                      rounded-full transition-colors
                      ring-1 ring-gray-200/50 dark:ring-neutral-700/50"
                    >
                      <svg 
                        className="w-3.5 h-3.5" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185z" 
                        />
                      </svg>
                      <span>Share</span>
                    </button>
                  </div>
                )}
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
      </div>

      {!isSharedChat && (
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
      )}

      {showShareModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/50 dark:bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-neutral-900 rounded-xl max-w-md w-full p-4 space-y-4">
            {/* Header - Added text content to h3 */}
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                Share Conversation
              </h3>
              <button 
                onClick={() => setShowShareModal(false)}
                className="p-1.5 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg text-gray-500 dark:text-gray-400"
                aria-label="Close share modal"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* URL Share Section */}
            <div className="space-y-2">
              <label 
                htmlFor="share-url" 
                className="text-xs font-medium text-gray-700 dark:text-gray-300"
              >
                Share URL
              </label>
              <div className="flex gap-2">
                <input
                  id="share-url"
                  type="text"
                  readOnly
                  value={isShortening ? 'Generating short URL...' : shareUrl}
                  className="flex-1 text-xs px-3 py-2 rounded-lg bg-gray-50 dark:bg-neutral-800 
                  text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-neutral-700"
                />
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(shareUrl);
                  }}
                  disabled={isShortening}
                  className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-neutral-800 
                  text-gray-700 dark:text-white ring-1 ring-gray-200 dark:ring-neutral-700 
                  hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors text-xs font-medium
                  disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Copy
                </button>
              </div>
            </div>

            {/* Image Preview */}
            <div className="space-y-2">
              <label 
                htmlFor="share-image-preview" 
                className="text-xs font-medium text-gray-700 dark:text-gray-300"
              >
                Share Image
              </label>
              <div 
                id="share-image-preview"
                role="img"
                aria-label="Share preview"
                className="rounded-lg overflow-hidden bg-gray-50 dark:bg-neutral-800 ring-1 ring-gray-200 dark:ring-neutral-700"
              >
                <img 
                  src={shareImageUrl} 
                  alt="Preview" 
                  className="w-full h-full object-contain" 
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2">
              {showShareOptions ? (
                <>
                  <button
                    onClick={() => handleSocialShare('twitter')}
                    className="flex items-center justify-center gap-2 px-3 py-2 text-xs rounded-lg 
                    bg-[#1DA1F2] text-white hover:bg-[#1a8cd8] transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    Twitter
                  </button>
                  <button
                    onClick={() => handleSocialShare('facebook')}
                    className="flex items-center justify-center gap-2 px-3 py-2 text-xs rounded-lg bg-[#1877F2] text-white hover:bg-[#166fe5] transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </button>
                  <button
                    onClick={() => handleSocialShare('linkedin')}
                    className="flex items-center justify-center gap-2 px-3 py-2 text-xs rounded-lg bg-[#0A66C2] text-white hover:bg-[#095196] transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </button>
                  <button
                    onClick={() => handleSocialShare('whatsapp')}
                    className="flex items-center justify-center gap-2 px-3 py-2 text-xs rounded-lg bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </button>
                  <button
                    onClick={() => handleSocialShare('email')}
                    className="flex items-center justify-center gap-2 px-3 py-2 text-xs rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    Email
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setShowShareOptions(true)}
                    className="flex items-center justify-center gap-2 px-3 py-2 text-xs rounded-lg
                    bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-white 
                    ring-1 ring-gray-200 dark:ring-neutral-700 
                    hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all"
                  >
                    Share
                  </button>
                  <button
                    onClick={handleDownload}
                    className="flex items-center justify-center gap-2 px-3 py-2 text-xs rounded-lg
                    bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-white 
                    ring-1 ring-gray-200 dark:ring-neutral-700 
                    hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all"
                  >
                    Download
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Home;