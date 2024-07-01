import React from 'react';
import Image from 'next/image';

const imageSources = [
  '/certificates/200.png',
  '/certificates/201.png',
  '/certificates/202.png',
  '/certificates/203.png',
  '/certificates/204.png',
  '/certificates/205.png',
  '/certificates/206.png',
  '/certificates/207.png',
  '/certificates/210.png',
  '/certificates/208.png',
  '/certificates/211.png',
];

const EfficientImageGallery = () => (
  <div className="max-w-lg mt-10">
    <div className="scroll">
      <div className="m-scroll gap-5 flex flex-wrap">
        {imageSources.map((src, index) => (
          <div key={index} className="flex w-1/2 flex-wrap align-top">
            <Image
              className="block h-90 w-90 rounded-md object-cover object-center"
              src={src}
              alt={`Certificate ${index + 1}`}
              width={400}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default EfficientImageGallery;
