import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Cloud from '../images/cloud.png'
import Cloud2 from '../images/cloud2.png'
import Logo from '../images/Logo-2.png'
import Road from '../images/road.png'
import spark from '../images/spark.jpg'
import top from '../images/reg-merchant.png'

import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function UserLanding() {
    const router = useRouter()
    const {data: session} = useSession()

    if (session) {
        router.push('/user_homescreen')
    }
    else {
        return (
            <div className="bg-gradient-to-br from-amber-300 to-[#8096A3] overflow-y-hidden">
                <div className='mt-24 flex justify-center items-end'>
                    <Image src={Logo} className=''></Image>
                </div>
    
                <div className='grid space-y-6 justify-center mt-12'>
                    <Link href='/user_setup_satu'>
                        <button className='button text-center'>
                            <h1 className='font-semibold text-sm text-white'>Register with email</h1>
                        </button>
                    </Link>
                    <button className='button2 text-center'>
                        <h1 className='font-semibold text-sm text-[#666666]' onClick={() => signIn("google")}>Sign in with Google</h1>
                    </button>
                </div>
    
                <div className='mt-8'>
                    <Image src={top}></Image>
                </div>
            </div>
        )
    }

    
}
