import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import back from '../images/back.jpg'
import merchantphoto from '../images/merchant-photo.png'
import search from '../images/search.png'
import bintang from '../images/bintang.png'

export default function AllCuisines() {
  return (
    <div>
        <div className='w-screen h-28 sticky bg-white drop-shadow-lg grid grid-cols-4'>
            <a className="ml-8 mt-12 absolute" href='#'>
            <Link href='user_homescreen'>
            <Image src={back} className='w-8 rounded-full col-span-1'></Image>
            </Link>
            </a>
            <p className='pt-0.5 pl-2 ml-24 mt-12 font-semibold text-base text-black text-center col-span-3'>All cuisines</p>

            <Image src={search} className='pt-1.5 mt-12 w-4 col-span-1 ml-8'></Image>
        </div>

        <Link href='./shop_page'>
        <div className='grid grid-rows-3 grid-cols-3 mt-9 ml-10 mr-11'>
          <Image src={merchantphoto} className='w-28 h-28 shadow-lg row-span-3'></Image>
          <p className='font-semibold text-xl text-black col-span-2 pl-5'>Gruu Baby Food</p>
          <div className='grid grid-cols-4 pl-5 col-span-1'>
            <Image src={bintang} className='w-3 h-3'></Image>
            <p className='font-semibold text-black text-xs'>4.5</p>
            <p className='font-medium text-gray-500 text-xs'>(31)</p>
          </div>
          <p className='text-xs text-gray-800 font-medium col-start-2 pl-5 col-span-2 row-start-3'>Jl. Dharmawangsa Raya, No. 17...</p>
        </div>
        </Link>

        <div className='grid grid-rows-3 grid-cols-3 mt-9 ml-10 mr-11'>
          <Image src={merchantphoto} className='w-28 h-28 shadow-lg row-span-3'></Image>
          <p className='font-semibold text-xl text-black col-span-2 pl-5'>Gruu Baby Food</p>
          <div className='grid grid-cols-4 pl-5 col-span-1'>
            <Image src={bintang} className='w-3 h-3'></Image>
            <p className='font-semibold text-black text-xs'>4.5</p>
            <p className='font-medium text-gray-500 text-xs'>(31)</p>
          </div>
          <p className='text-xs text-gray-800 font-medium col-start-2 pl-5 col-span-2 row-start-3'>Jl. Dharmawangsa Raya, No. 17...</p>
        </div>

        <div className='grid grid-rows-3 grid-cols-3 mt-9 ml-10 mr-11'>
          <Image src={merchantphoto} className='w-28 h-28 shadow-lg row-span-3'></Image>
          <p className='font-semibold text-xl text-black col-span-2 pl-5'>Gruu Baby Food</p>
          <div className='grid grid-cols-4 pl-5 col-span-1'>
            <Image src={bintang} className='w-3 h-3'></Image>
            <p className='font-semibold text-black text-xs'>4.5</p>
            <p className='font-medium text-gray-500 text-xs'>(31)</p>
          </div>
          <p className='text-xs text-gray-800 font-medium col-start-2 pl-5 col-span-2 row-start-3'>Jl. Dharmawangsa Raya, No. 17...</p>
        </div>

        <div className='grid grid-rows-3 grid-cols-3 mt-9 ml-10 mr-11'>
          <Image src={merchantphoto} className='w-28 h-28 shadow-lg row-span-3'></Image>
          <p className='font-semibold text-xl text-black col-span-2 pl-5'>Gruu Baby Food</p>
          <div className='grid grid-cols-4 pl-5 col-span-1'>
            <Image src={bintang} className='w-3 h-3'></Image>
            <p className='font-semibold text-black text-xs'>4.5</p>
            <p className='font-medium text-gray-500 text-xs'>(31)</p>
          </div>
          <p className='text-xs text-gray-800 font-medium col-start-2 pl-5 col-span-2 row-start-3'>Jl. Dharmawangsa Raya, No. 17...</p>
        </div>

        <div className='grid grid-rows-3 grid-cols-3 mt-9 ml-10 mr-11'>
          <Image src={merchantphoto} className='w-28 h-28 shadow-lg row-span-3'></Image>
          <p className='font-semibold text-xl text-black col-span-2 pl-5'>Gruu Baby Food</p>
          <div className='grid grid-cols-4 pl-5 col-span-1'>
            <Image src={bintang} className='w-3 h-3'></Image>
            <p className='font-semibold text-black text-xs'>4.5</p>
            <p className='font-medium text-gray-500 text-xs'>(31)</p>
          </div>
          <p className='text-xs text-gray-800 font-medium col-start-2 pl-5 col-span-2 row-start-3'>Jl. Dharmawangsa Raya, No. 17...</p>
        </div>
    
    </div>

  )
}
