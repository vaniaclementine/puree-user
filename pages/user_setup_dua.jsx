import React from 'react'
import Image from 'next/image'

// import '../styles/merchant_setup.css'

import CornerLogo from '../images/corner-logo.png'
import Jar from '../images/jar.png'
import Link from 'next/link'
import ProfilePicture from '../images/profile-picture.png'


export default function userSet2() {
  return (
    <div className='bg-[#b0b0b0]'>
    
    <div className='h-64'>
      <Image className= 'logo-user-setup' src={CornerLogo}/>
      <Image className='jar' src={Jar}/>
    </div>

<div id='box' className='p-8 sticky bg-white rounded-t-3xl mt-2'>
    <h1 id='start'>Make it yours!</h1>
    <p className='pb-10 font-extralight text-xs mt-2 text-gray-600'>One last step! Personalize your account to register</p>
        <form action="" className='divide-y'>
      <div id='' className='space-y-4'>

      <div id='profile-div'>
          <input type='file' id='file-upload'/> 
          <label><Image id='profile' src={ProfilePicture}/></label>
      </div>

      <p id='add-photo'>Add your profile picture</p>

        <p className=''>Name</p>
        <input type='text' placeholder='Jane' class="placeholder-gray-500 placeholder-opacity-8" required/>



        <div className='button_bawah w-full flex justify-center'>
          <Link href='/user_setup_satu'>
            <button id='previous-button-sm' className='grid place-items-center'>
              <p id='previous'>Previous</p>
            </button>
          </Link>
          <Link href='/user_homescreen'>
            <button id='next-button-sm' className='grid place-items-center'>
              <p id='next'>Submit</p>
            </button>
          </Link>
        </div>
      </div>
      </form>
    </div>
</div>
  )
}
