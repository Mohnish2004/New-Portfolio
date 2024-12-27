import React from 'react';
import Image from 'next/image';

interface PhotoGridProps {
  images: string[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ images }) => {
  const validImages = images.slice(0, 6);

  if (!validImages.length) return null;

  // Dynamic grid layout based on number of images
  const getGridLayout = (count: number) => {
    switch (count) {
      case 1:
        return 'grid-cols-1 max-w-2xl';
      case 2:
        return 'grid-cols-2 max-w-2xl';
      case 3:
        return 'grid-cols-2 md:grid-cols-3 max-w-3xl [&>*:first-child]:col-span-2 md:[&>*:first-child]:col-span-1';
      case 4:
        return 'grid-cols-2 max-w-3xl';
      case 5:
        return 'grid-cols-2 md:grid-cols-3 max-w-3xl [&>*:first-child]:col-span-2 md:[&>*:first-child]:col-span-2';
      default:
        return 'grid-cols-2 md:grid-cols-3 max-w-3xl';
    }
  };

  return (
    <div 
      className={`grid ${getGridLayout(validImages.length)} gap-3 my-4 mx-auto`}
    >
      {validImages.map((image, index) => (
        <div 
          key={index}
          className={`
            group relative aspect-square w-full overflow-hidden rounded-xl 
            bg-gray-100 dark:bg-neutral-800
            ${index === 5 && validImages.length > 6 ? 'relative' : ''}
          `}
        >
          <Image
            src={image}
            alt={`Photo ${index + 1}`}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover transition duration-300 ease-in-out group-hover:scale-105"
            priority={index === 0}
          />
          {index === 5 && validImages.length > 6 && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-xl font-medium">
              +{images.length - 6} more
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid; 