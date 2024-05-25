import React from 'react';

function ApartmentImageCard({imgUrl = "https://via.placeholder.com/413x627"}) {
  return (
    <div className="relative basis-1/3 m-5">
      <img className="w-full h-full object-cover" src={imgUrl} alt="Apartment" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-white text-lg font-bold font-['Acumin Pro'] leading-7">3-Bedroom Flat at sunny-side estate</div>
            <div className="text-white text-[17px] font-normal font-['Acumin Pro'] leading-relaxed">Posted by Damian Dark</div>
            <div className="text-white text-base font-normal font-['Acumin Pro'] leading-normal">$10,180.34</div>
            <div className="text-[#12B76A] text-xs font-bold font-['Acumin Pro'] leading-4">10 rooms Available</div>
          </div>
          <button className="ml-4 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 3.467C10.1986 1.36416 7.18865 0.795739 4.93923 2.14764C2.68982 3.49954 2.36727 6.72342 4.13778 9.49568C5.60984 11.3828 10.0648 15.378 11.5249 16.6798C11.6882 16.8272 11.7699 16.9033 11.8652 16.9356C11.9483 16.9639 12.0393 16.9639 12.1225 16.9356C12.2178 16.9033 12.2994 16.8272 12.4628 16.6798C13.9229 15.378 18.3778 11.3828 19.8499 9.49568C21.6204 6.72342 21.3407 3.47158 19.0484 2.14764C16.7551 0.823704 13.8014 1.36416 12 3.467Z" fill="#FD0808"/>
            </svg>
          </button> 
        </div>
      </div>
    </div>
  );
}

export default ApartmentImageCard;
