import React from 'react';
import ReactMarkdown from 'react-markdown';
import AudioPlayer from './AudioPlayer';

const MessageContent = ({ content }: { content: string }) => {
  // Split content into parts based on AudioPlayer tags
  const parts = content.split(/(<AudioPlayer.*?\/>)/);
  
  return (
    <div className="space-y-6 text-xs">
      {parts.map((part, index) => {
        // Check if this part is an AudioPlayer component
        if (part.startsWith('<AudioPlayer')) {
          // Extract props using regex
          const srcMatch = part.match(/src="([^"]+)"/);
          const titleMatch = part.match(/title="([^"]+)"/);
          const durationMatch = part.match(/duration="([^"]+)"/);
          
          if (srcMatch && titleMatch && durationMatch) {
            return (
              <AudioPlayer
                key={index}
                src={srcMatch[1]}
                title={titleMatch[1]}
                duration={durationMatch[1]}
              />
            );
          }
        }
        
        // Render regular markdown content with smaller text
        return part && (
          <ReactMarkdown
            key={index}
            className="text-xs text-gray-900 dark:text-white prose dark:prose-invert max-w-none prose-xs"
          >
            {part}
          </ReactMarkdown>
        );
      })}
    </div>
  );
};

export default MessageContent; 