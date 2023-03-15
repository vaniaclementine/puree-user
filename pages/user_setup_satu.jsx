import React from 'react'
import Image from 'next/image'

// import '../styles/merchant_setup.css'

import CornerLogo from '../images/corner-logo.png'
import Jar from '../images/jar.png'
import Link from 'next/link'


export default function UserSet1() {
  return (
    <div className='bg-[#b0b0b0]'>
    
        <div className='inline-flex container'>
          <Image id='corner-logo' className='h-fit' src={CornerLogo}/>
          <Image id='jar' src={Jar}/>
        </div>

    <div id='box' className='p-8 sticky'>
        <h1 id='start'>Start it up!</h1>
        <p id='account-info' className='pb-10'>Provide your account information</p>
            <div id='' className='space-y-4'>

              <p className='account-fill'>Email</p>
                <input type='email' className='fill-example'/>
                  {/* <div className='line'/> */}

              <p className='account-fill'>Phone Number</p>
                <input type='tel' className='fill-example'/>
                  {/* <div className='line'/> */}

              <p className='account-fill'>Password</p>
                <input type='password' className='fill-example'/>
                  {/* <div className='line'/> */}
                  
              <p className='account-fill'>Confirm Password</p>
                <input type='password' className='fill-example'/>
                    {/* <div className='line'/> */}
              <div className='w-full flex justify-center'>
                <Link href='/user_setup_dua'>
                  <button id='next-button' className='grid place-items-center'>
                    <p id='next'>Next</p>
                  </button>
                </Link>
              </div>
            </div>
        </div>
    </div>
  )
}
