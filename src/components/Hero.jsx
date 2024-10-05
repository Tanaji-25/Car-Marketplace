import React from 'react';
import Search from './Search';
import Data from '@/Shared/Data';

function Hero() {
  return (
    <div className='flex flex-col items-center p-10 py-20 gap-6 w-full h-[calc(85vh-50px)] mt-[77px] bg-[#eef0fc] fixed top-0 left-0'>
      <h2 className='text-lg'>Find cars for sale and for rent near you</h2>
      <h2 className='text-[60px] font-bold'>Find Your Dream Car</h2>

      <Search />
      <img src="bugatti-divo.png" alt="Bugatti Divo" className='-mt-32 w-3/4' />
      <h2 className='font-bold text-3xl text-center -mt-32'>Browse By Type</h2>
      <div className='flex justify-center mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20'>
        {Data.Category.map((category, index) => (
          <div key={index} className='border rounded-xl p-3 items-center flex flex-col hover:shadow-md'>
            <img src={category.icon} alt={category.name} width={40} height={40} />
            <h2 className='mt-2'>{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;