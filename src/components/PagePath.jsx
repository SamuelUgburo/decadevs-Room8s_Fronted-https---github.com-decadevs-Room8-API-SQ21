import React from 'react'
import { BiChevronRight } from 'react-icons/bi';
import {   FaArrowRight} from 'react-icons/fa6';


const PagePath = () => {
  return (
    <div className='ml-10 mt-5 flex text-lg justify-start items-center'>
        <p className='mr-2'><a href="/">Home</a></p>
       <BiChevronRight className='size-7 colo'/>

        <p className='mr-2'><a href="">Product</a></p>
        <BiChevronRight className='size-7 colo'/>
        <p className='mr-2 text-pry-color text-xs md:text-lg'>3 Bedroom Flat at sunny-side estate</p>
    </div>
  )
}

export default PagePath