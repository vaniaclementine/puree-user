import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import back from '../images/back.jpg'
import wallet from '../images/payment_wallet.jpg'
import cash from '../images/cash.jpg'

export default function Payment() {
  return (
    <div className='h-screen'>
        <div className='shadow-xl p-8'>
            <div className='inline-flex w-full'>
                <Link href='checkout'>
                    <Image src={back} className='w-8 rounded-full shadow-xl grid items-center'></Image>
                </Link>
                <div className='grid place-items-center w-full'>
                    <h1 className='font-bold'>Payment Method</h1>
                </div>
            </div>
        </div>

        <div id='bg_choose' className=''>Choose your preferred payment method!</div>

        <div>
            <Link href='/'>
                <div id='payment' className='flex justify-between'>
                    <Image src={wallet}/>
                    <div>
                        <h2 className='font-semibold text-sm'>PureePay</h2> 
                        <h3 className='text-xs'>Your reliable payment buddy!</h3>                   
                    </div>
                    <button>&#62;</button>
                </div>
            </Link>
            <div id='paymentline'/>
            <Link href=''>
                <div id='payment' className='flex justify-between'>
                    <Image src={cash}/>
                    <div>
                        <h2 className='font-semibold text-sm'>Cash</h2>   
                        <h3 className='text-xs text-white'>Your reliable payment buddy!</h3>                
                    </div>
                    <button className='flex justify-end'>&#62;</button>
                </div>
            </Link>
        </div>
    </div>
  )
}
