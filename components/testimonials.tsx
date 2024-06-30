import React from 'react';
import { FlipWords1 } from '@/components/flip1';
import {Tooltip} from "@nextui-org/tooltip";


const Testimonials = () => {
  const testimonials = [
    {
      name: 'Geetika',
      imageUrl: 'https://media.licdn.com/dms/image/D4D03AQGGI9xxCnbrJg/profile-displayphoto-shrink_200_200/0/1679623474258?e=2147483647&v=beta&t=VFlTvlVnkq8xnOO9GhLVAp6KneyqroowGcBVumDuYK4',
      company: 'Amazon',
      position: 'AI Privacy engineer',
      message: 'example 1',
    },
    {
      name: 'Kamal',
      imageUrl: '/Testimonial/kamal.jpeg',
      company: 'Maximo Esolutions',
      position: 'Business Consultant',
      message: 'example2',
    },
    {
      name: 'Jim Pantaleo',
      imageUrl: '/Testimonial/jim.jpeg',
      company: 'AI Institute',
      position: 'Business Development Coordinator',
      message: 'example 7',
    },
    {
      name: 'Gopi',
      imageUrl: '/Testimonial/gopi.jpeg',
      company: 'Empower',
      position: 'IT Director',
      message: 'example 6',
    },
    {
      name: 'Rajesh',
      imageUrl: '/Testimonial/rajesh.jpeg',
      company: 'Google',
      position: 'Software Engineering Manager',
      message: 'example 5',
    },
  ];

  return (
    <>
      {testimonials.map((testimonial, index) => (
        <div key={index} className={`flex items-start mb-10 mt-10 gap-2.5 ${index % 2 === 0 ? '' : 'justify-end'}`}>
          <div className="flex items-start">
            <Tooltip
              key={`${index}-start`}
              placement={index % 2 === 0 ? 'left-start' : 'right-start'}
              content={
                <div className="px-1 py-2">
                  <div className="text-small font-bold">{testimonial.company}</div>
                  <div className="text-tiny">{testimonial.position}</div>
                </div>
              }
            >
              <img className="w-10 h-10 rounded-full" src={testimonial.imageUrl} alt={testimonial.name} />
            </Tooltip>
            <div className="flex flex-col gap-1 w-full max-w-[320px]">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">{testimonial.name}</span>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
              </div>
              <div className={`flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-${index % 2 === 0 ? 'e' : 's'}-xl rounded-es-xl dark:bg-gray-700`}>
                <p className="text-sm font-normal text-gray-900 dark:text-white">{testimonial.message}</p>
                <FlipWords1 sentence={testimonial.message} duration={3000} className="my-custom-class text-sm" />
              </div>
              <span className="text-tiny font-normal text-gray-500 dark:text-gray-400">Delivered</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Testimonials;
