import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '../images/Logo-2.png'
import top from '../images/reg-merchant.png'

export default function user_landing() {
    return (
        <div className="bg-gradient-to-br from-amber-300 to-[#8096A3] h-screen">
            <div className='flex justify-center items-end'>
                <Image src={Logo} className='mt-24'></Image>
            </div>

            <div className='grid space-y-6 justify-center mt-12'>
                <Link href='/user_setup_satu'>
                    <button className='button text-center'>
                        <h1 className='text-s text-white'>Register with email</h1>
                    </button>
                </Link>
                <button className='button2 text-center'>
                    <h1 className='text-s text-[#666666]'>Sign in with Google</h1>
                </button>
            </div>

            <div className='mt-14'>
                <Image src={top}></Image>
            </div>
        </div>
    )
}
