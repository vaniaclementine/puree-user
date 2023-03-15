import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Cloud from '../images/cloud.png'
import Cloud2 from '../images/cloud2.png'
import Logo from '../images/logo-user.png'
import Road from '../images/road.png'

export default function user_landing() {
  return (
    
    <div className='h-screen bg-[#CFD7DC]'>
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&amp;lang=en" />
        <div className='inline-flex'>
            <Image className='drop-shadow-xl w-[58%] h-fit' src={Cloud}></Image>
            <Image className='mt-12' src={Cloud2}></Image>
        </div>
        <div className='flex justify-center'>
            <div className=''>
                <div className='flex justify-center'>
                    <Image className='h-1/2' src={Logo}></Image>
                </div>
                <div className='grid space-y-5 justify-center'>
                    <Link href='/user_setup_satu'>
                        <button className='button grid place-items-center '>
                            <h1 className='font-bold text-white'>Register with email</h1>
                        </button>
                    </Link>
                    <button className='button2 grid place-items-center'>
                        <h1 className='font-bold text-[#666666]'>Sign in with Google</h1>
                    </button>
                </div>
                <Image className='' src={Road}></Image>
            </div>
        </div>
    </div>
  )
}
