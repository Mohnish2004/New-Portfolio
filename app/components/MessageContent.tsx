import React from 'react';
import ReactMarkdown from 'react-markdown';
import PhotoGrid from './PhotoGrid';

interface MessageContentProps {
  content: string;
}

const MessageContent: React.FC<MessageContentProps> = ({ content }) => {
  // Split content into text and PhotoGrid sections
  const parts = React.useMemo(() => {
    const regex = /(<PhotoGrid[^>]*>)/g;
    return content.split(regex).filter(Boolean);
  }, [content]);

  return (
    <div className="prose dark:prose-invert max-w-none prose-xs leading-tight text-xs">
      {parts.map((part, index) => {
        if (part.startsWith('<PhotoGrid')) {
          // Extract images array from PhotoGrid component string
          const imagesMatch = part.match(/images=\{(\[.*?\])}/);
          if (imagesMatch) {
            try {
              const images = JSON.parse(imagesMatch[1]);
              return <PhotoGrid key={index} images={images.slice(0, 6)} />;
            } catch (error) {
              console.error('Failed to parse PhotoGrid images:', error);
              return null;
            }
          }
          return null;
        }

        // Use ReactMarkdown for all non-PhotoGrid content
        return (
          <ReactMarkdown
            key={index}
            components={{
              p: ({node, ...props}) => <p className="my-0.5 text-xs" {...props} />,
              ul: ({node, ...props}) => <ul className="my-0.5 space-y-0.5 text-xs" {...props} />,
              ol: ({node, ...props}) => <ol className="my-0.5 space-y-0.5 text-xs" {...props} />,
              h2: ({node, ...props}) => <h2 className="mt-1.5 mb-1 text-sm font-semibold" {...props} />,
              blockquote: ({node, ...props}) => <blockquote className="border-l-4 pl-4 my-1 text-xs" {...props} />,
              pre: ({node, ...props}) => <pre className="my-1 text-xs" {...props} />
            }}
          >
            {part}
          </ReactMarkdown>
        );
      })}
    </div>
  );
};

export default MessageContent; 