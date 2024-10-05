import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from './ui/separator';
import { CiSearch } from "react-icons/ci";
import Data from '@/Shared/Data';
function Search() {
  return (
    <div className='p-2 md:p-3 bg-white rounded-md 
    md:rounded-full flex-col md:flex md:flex-row gap-3 px-4 items-center
    w-[57%] h-14'>
      <Select>
      <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg ">
          <SelectValue placeholder="Cars" />
      </SelectTrigger>
      <SelectContent className="origin-top" side="bottom">
          <SelectItem value="light">New</SelectItem>
          <SelectItem value="dark">Old</SelectItem>
      </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block" />
      <Select>
      <SelectTrigger className=" outline-none md:border-none w-full shadow-none text-lg ">
          <SelectValue placeholder="Car Makes" />
      </SelectTrigger>
      <SelectContent className="absolute mt-2 z-50">
      {Data.CarMakes.map((maker,index)=>(
          <SelectItem value={maker.name}>{maker.name}</SelectItem>
          ))}
      </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block"/>
      <Select>
      <SelectTrigger className=" outline-none md:border-none w-full shadow-none text-lg ">
          <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent className="origin-top" side="bottom">
      {Data.Pricing.map((price,index)=>(
          <SelectItem value={price.amount}>{price.amount}</SelectItem>
          ))}
      </SelectContent>
      </Select>
      <div>
      <CiSearch className='text-[41px] bg-primary 
      rounded-full p-2.5 text-white hover:scale-105 transition-all cursor-pointer'/>
      </div>
    </div>
  )
}

export default Search