import {UserButton, useUser} from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button';



function Header() {
    const {user,isSignedIn}=useUser();
  return (
    <header className="w-full fixed top-0 left-0">
    <div className='flex justify-between items-center shadow-sm p-5'>
        <img src='/logo.svg' width={150} height={100}/>
        <ul className='hidden  md:flex gap-16'>  
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Search</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>New</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Preowned</li>
         </ul>

        {isSignedIn?
             <div className='flex items-center gap-5'>
                <UserButton/>
                <Button>Submit Listing</Button>
            </div>
            :
            <Button>Submit Listing</Button>
        }

    </div>
    </header>
  )
}

export default Header