import Link from 'next/link';

const ResumeButton = () => {
  return (
    <Link 
      href="https://drive.google.com/file/d/1tR8yrlVjDstqXk55d0FE4fVFTfr3RU34/view"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 
                 text-white font-medium rounded-lg transition-colors duration-200 
                 shadow-md hover:shadow-lg"
    >
      <span className="mr-2">View Resume</span>
      <svg 
        className="w-4 h-4" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </Link>
  );
};

export default ResumeButton;