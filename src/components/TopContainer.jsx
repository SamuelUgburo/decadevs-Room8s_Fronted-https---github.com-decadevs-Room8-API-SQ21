function TopContainer() {
    return (
      <div className="flex items-center justify-content: space-evenly my-10 mx-5">
  
        {/* Home and Products Section */}
        <div className="flex items-center justify-center space-x-4 ">
        <a href="#" className="text-[#a5a9a9] text-xl font-['Oxygen'] leading-7 cursor-pointer"> Home</a>

          <div className="relative flex items-center">
            <svg className="w-4 h-4 text-[#a5a9a9] cursor-pointer transform rotate-75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <span className="text-[#7FDBCA] text-xl font-['Oxygen'] cursor-pointer leading-7">Products</span>
        </div>
  
        {/* Title Section */}
        <div className="w-full flex justify-center">
          <div className="text-center w-[70%] lg:w-[55%]">
            <div className="text-5xl lg:text-[3rem] mb-5 leading-[5rem]">
              <span className="text-black font-semibold font-['Figtree']">APARTMENTS</span>
            </div>
          </div>
        </div>
  
        {/* Sort By Section */}
        <div className="flex items-center  justify-center space-x-4 h-10 w-auto cursor-pointer p-3">
          <svg className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0833 21.25H18.9167V17.8333H12.0833V21.25ZM0.125 0.75V4.16667H30.875V0.75H0.125ZM5.25 12.7083H25.75V9.29167H5.25V12.7083Z" fill="#323232" />
          </svg>
         
          <div className="flex items-center justify-center border  border-pry-color h-10 w-20">
          <span className="text-[#7FDBCA] text-x0.5 font-['Oxygen']">SORT BY:</span>
          </div>
         
        </div>
  
      </div>
    );
  }
  
  export default TopContainer;
  
  
  











// function TopContainer() {
//     return (
//       <div className="w-full m-auto my-10">

//     <div className="flex items-center justify-left ml-10">
//          <span className="text-[#a5a9a9] text-1.2xl font-'Oxygen' leading-7">Home</span>
//         <div className="relative">
//         <svg className="w-4 m-3 h-4 text-[#a5a9a9] cursor-pointer transform rotate-75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
//          </svg>
//          </div>
//       <span className="text-[#7FDBCA] text-1.2xl font-'Oxygen' cursor-pointer leading-7">Products</span>
//     </div>
//         <div className="w-full flex justify-center">
//           <div className="flex flex-col w-[70%] lg:w-[55%] m-auto">
//             <div className="text-center text-5xl lg:text-[3rem] mb-5 leading-[5rem]"><span className="text-black font-semibold font-['Figtree'] leading-7"> APARTMENTS </span>
//             </div>
//           </div>
//         </div>

//         <div className="flex items-center cursor-pointer border space-x-4">
//          <svg className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M12.0833 21.25H18.9167V17.8333H12.0833V21.25ZM0.125 0.75V4.16667H30.875V0.75H0.125ZM5.25 12.7083H25.75V9.29167H5.25V12.7083Z" fill="#323232"/>
//          </svg>
//          <span className="text-[#7FDBCA] text-1xl border border-pry-color font-oxygen">SORT BY:</span>
//     </div>

//       </div>
//     );
//   }
  
//   export default TopContainer;
  