import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Menu from '../images/menu-detail.png'
import back from '../images/back.jpg'
import Counter from './counter.jsx'


export default function menu_details() {

  const [cart, setCart] = useState([])
  const handleATC = (product) => {
    setCart([...cart, product])
  }

  return (
    <div>
        <div id="top-container" className="w-screen grid place-items-start h-[20vh]">
            <Image src={Menu} className='object-fill h-64 w-screen'></Image>
            <div className="ml-8 mt-5 absolute">
                <Link href="/shop_page">
                <Image src={back} className='w-8 rounded-full'></Image>
                </Link>
            </div>
        </div>

        <div className='mt-20 px-8 pt-6'>
            <p className='font-semibold text-xl'>[PinkFong] Chicken Japchae - MPASI</p>
            <p className='text-xs font-normal text-gray-300 pt-1.5'>Vermicelle, chicken, carrot, shitake mushroom, garlic, kurma, sesame seeds, olive oil</p>
        </div>
        <div className='bg-white drop-shadow-lg w-96 h-1 my-6'/>
        <p className='text-lg font-semibold text-center'>53.280</p>
        <Counter /> 

        <div className='h-full flex justify-center bg-white drop-shadow w-screen h-30 mt-52'>
          <Link href='/shop_page'>
            <button className='mt-9 bg-yellow-300 drop-shadow-lg rounded-lg w-80 h-11 flex items-center justify-center'>
              <p className='text-white text-sm font-semibold py-2.5'>Add to Basket</p>
            </button>
          </Link>
        </div>
                
    </div>


  )
}

