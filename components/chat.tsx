import { useState } from 'react';

const Testimonial = ({ name, role, imageSrc, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex items-start mb-5 mt-5 gap-2.5">
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <span className="text-sm font-semibold text-gray-900 dark:text-white">{name}</span>
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
      </div>
      <div className="flex flex-col gap-1 w-full max-w-[320px]">
        <div className="flex items-start">
          <div className="relative">
            <img
              className="w-10 h-10 rounded-full"
              src={imageSrc}
              alt={name}
            />
          </div>
          <div className="flex flex-col gap-1 w-full max-w-[320px]">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">{name}</span>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{role}</span>
            </div>
            <div className={`flex flex-col leading-1.5 p-4 border-gray-200 rounded-e-xl bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 rounded-es-xl ${expanded ? 'h-auto' : 'h-24 overflow-hidden'}`}>
              <div className="message-content">
                <p>{content}</p>
                {!expanded && (
                  <p className="read-more">
                    <a href="#" onClick={(e) => { e.preventDefault(); toggleExpand(); }}>Read more</a>
                  </p>
                )}
              </div>
              {expanded && (
                <p className="read-more">
                  <a href="#" onClick={(e) => { e.preventDefault(); toggleExpand(); }}>Read less</a>
                </p>
              )}
            </div>
            <span className="text-tiny font-normal text-gray-500 dark:text-gray-400">Delivered</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
