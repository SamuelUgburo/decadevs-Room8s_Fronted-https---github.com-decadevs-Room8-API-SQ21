import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ApartmentImage1 = () => {
  return (
    <div className='w-full p-10 h-[300px] md:h-[550px] mb-10'>
      {/* Grid Layout for Large Screens */}
      <div className='hidden lg:grid grid-cols-3 justify-items-stretch items-stretch gap-3'>
        <img className='w-full h-[271px]' src="./src/assets/Images/aptpic1.png" alt="" />
        <img className='w-full row-span-2 h-auto' src="./src/assets/Images/aptpic3.png" alt="" />
        <img className='w-full h-[271px]' src="./src/assets/Images/aptpic4.png" alt="" />
        <img className='w-full h-[271px]' src="./src/assets/Images/aptpic2.png" alt="" />
        <img className='w-full h-[271px]' src="./src/assets/Images/aptpic5.png" alt="" />
      </div>

      {/* Carousel for Medium Screens */}
      <div className='block lg:hidden'>
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
          <div>
            <img className='max-h-[550px] object-contain' src="./src/assets/Images/aptpic1.png" alt="" />
          </div>
          <div>
            <img className='max-h-[550px] object-contain' src="./src/assets/Images/aptpic3.png" alt="" />
          </div>
          <div>
            <img className='max-h-[550px] object-contain' src="./src/assets/Images/aptpic4.png" alt="" />
          </div>
          <div>
            <img className='max-h-[550px] object-contain' src="./src/assets/Images/aptpic2.png" alt="" />
          </div>
          <div>
            <img className='max-h-[550px] object-contain' src="./src/assets/Images/aptpic5.png" alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default ApartmentImage1;
