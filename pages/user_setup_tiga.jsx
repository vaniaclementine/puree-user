import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// import '.../styles/merchant_setup_dua.css'

import CornerLogo from '../images/corner-logo.png'
import Jar from '../images/jar.png'
import ProfilePicture from '../images/profile-picture.png'

export default function UserSet3() {
  return (
    <div className='bg-[#b0b0b0]'>
      <div classname='inline-flex container'>
          <Image id='corner-logo' className='h-fit'  src={CornerLogo}/>
          <Image id='jar' src={Jar}/>
      </div>
      
    <div id='box' className='p-8 sticky'>    
        <h1 id='start'>Let us see who you are</h1>
            <p id='account-info' className='pb-10'>Personalize your account to register</p>
              <div id='' className='space-y-4'>
                <div id='profile-div'>
                  <input type='file' id='file-upload'/> 
                  <label><Image id='profile' src={ProfilePicture}/></label>
                  <p id='add-photo'>Add your profile picture</p>
                </div>
                <p className='account-fill'>Username</p>
                    <input type='text' className='fill-example'/>
                    {/* <div className='line'/> */}
        
                <div className='w-full flex justify-evenly'>
                <Link href='/user_setup_dua'>
                  <button id='previous-button-sm' className='grid place-items-center'>
                    <p id='previous'>Previous</p>
                  </button>
                </Link>
                <Link href='/user_homescreen'>
                  <button id='next-button-sm' className='grid place-items-center'>
                    <p id='next'>Next</p>
                  </button>
                </Link>
            </div>
      </div>
    </div>
    </div>
  )
}
