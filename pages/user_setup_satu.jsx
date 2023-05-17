import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';


import CornerLogo from '../images/corner-logo.png'
import Jar from '../images/jar.png'
import Link from 'next/link'

export default function UserSet1() {

  const [email, setEmail] = useState('')
  const [phoneNumber, setPhonenumber] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();

  const submitData = async e => {
    e.preventDefault()
    try {
      const body = { email, phoneNumber, password }
      await fetch(`http://localhost:3000/api/user-setup-satu/ `, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      await router.push('/user_setup_dua')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='bg-[#b0b0b0]'>
    
        <div className='h-64'>
          <Image className= 'logo-user-setup' src={CornerLogo}/>
          <Image className='jar' src={Jar}/>
        </div>

    <div id='box' className='p-8 sticky bg-white rounded-t-3xl mt-2'>
        <h1 id='start'>Start it up!</h1>
        <p className='pb-10 font-extralight text-xs mt-2 text-gray-600'>Provide your account information</p>
            <form action="" className='divide-y -mt-2'>
              <div id='' className='space-y-5'>

                <p className=''>Email</p>
                <input type='email' id ='input-satu' placeholder='jane_d@gmail.com' class="placeholder-gray-500 placeholder-opacity-8" 
                onChange={e => setEmail(e.target.value)}
                value={email}
                required/>

                <p className=''>Phone Number</p>
                <input type='tel' id ='input-satu' placeholder='+628138764826' class="placeholder-gray-500 placeholder-opacity-80" 
                onChange={e => setPhonenumber(e.target.value)}
                value={phoneNumber}
                required/>

                <p className=''>Password</p>
                <input type='password' id ='input-satu' required 
                  minlength="8"
                  maxlength="16"
                  alphabet="A-Za-z0-9+_%@!$*~-"
                  requiredclasses="[A-Z] [a-z] [0-9] [+_%@!$*~-]"
                  requiredclasscount="3"
                  disallowedwords="{{username}}"
                  onChange={e => setPassword(e.target.value)} 
                  value={password} 
                  />
                        
                <p className=''>Confirm Password</p>
                <input type='password' id ='input-satu' required/>

                <div className='h-full flex justify-center'>
                  <Link href='/user_setup_dua'>
                    <button id='next-button' className='grid place-items-center mt-5'
                    disabled={!email || !phoneNumber || !password} type="submit" value="Next" onClick={submitData}>
                      <p id='next'>Next</p>
                    </button>
                  </Link>
                </div>

            </div>
          </form>
        </div>
    </div>
  )
}
