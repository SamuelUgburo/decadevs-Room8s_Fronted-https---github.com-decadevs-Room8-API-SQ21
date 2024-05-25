import React from 'react'

function Searchbar() {
  return (
    <div className='flex m-0 p-0 mb-5'>
        <input className="flex-1 pl-5 rounded-tl-md rounded-bl-md border focus:outline-none focus:ring-1 focus:ring-[#7FDBCA] text-gray-500 text-sm font-normal font-['Acumin Pro'] leading-7" type='text' placeholder='I am looking for.....' ></input>
        <button className=" w-[25%] border justify-center items-center gap-2.5 inline-flex bg-[#7FDBCA] rounded-br-[20px] rounded-tr-[20px] px-2.875 py-3.5 text-white text-base font-bold font-'Acumin Pro' leading-normal" >Search</button>
    </div>
  );

}

export default Searchbar
