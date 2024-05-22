import React from 'react'
import { BiChevronRight } from 'react-icons/bi';
import {   FaArrowRight} from 'react-icons/fa6';


const PagePath = () => {
  return (
    <div className='ml-10 mt-5 flex text-lg justify-start items-center'>
        <p className='mr-2'>Home</p>
       <BiChevronRight className='size-7 colo'/>

        <p className='mr-2'>Product</p>
        <svg className='mr-2 ' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M8.38945 7.45708L12.9432 12.0731L8.33711 16.6369L9.73905 18.0549L15.7732 12.0893L9.80747 6.05514L8.38945 7.45708Z" fill="#757575"/>
</svg>
        <p className='mr-2 text-pry-color text-xs md:text-lg'>3 Bedroom Flat at sunny-side estate</p>
    </div>
  )
}

export default PagePath