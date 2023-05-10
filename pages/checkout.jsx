import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import back from '../images/back.jpg'
import location from '../images/location.jpg'
import tag from '../images/tagyellow.jpg'
import payment from '../images/payment.jpg'

export default function Checkout() {

    const [count, setState] = useState({
        first: 0,
        second: 0
      });
    
      function increment(type) {
        setState(prev => ({
          ...prev,
          [type]: count[type] + 1
        }))
      }
    
      function decrement(type) {
        if(count[type] === 0) return;
        setState(prev => ({
          ...prev,
          [type]: count[type] - 1
        }))
      }

  return (
    <div className='h-screen'>
        <div style={{position: 'sticky', top: 0}} className='shadow-lg p-8 bg-white'>
            <div className='inline-flex w-full'>
                <Link href='shop_page'>
                    <Image src={back} className='w-8 rounded-full shadow-xl grid items-center'></Image>
                </Link>
                <div className='grid place-items-center w-full'>
                    <h1 className='font-bold'>Checkout</h1>
                </div>
            </div>
        </div>

        <div className='p-10 flex justify-between'>
            <Image src={location} className='w-[8%] h-[8%]'></Image>
            <div>
                <h1 className='uppercase font-bold'>dike fmipa ugm</h1>
                <h2 className='text-xs text-ellipsis'>Gedung C, Lantai 4, Sekip Utara, Bulaksumur</h2>
            </div>
            <h3 className='grid items-center'>&#62;</h3>
        </div>
        <div className='h-1 bg-gray-100'/>
        
        <div className='px-10 py-6'>
            <h1 className='font-semibold pb-8'>Order Summary</h1>
            <div className='space-y-5'>
                    <div className='inline-flex space-x-3'>
                        <div id='ordercontainer' className=''>
                            <div className='grid place-items-center pt-[1px]'>
                                <div id='ordercount' className='grid place-items-center'>
                                    <h1 className='font-semibold text-[#f5ce00]'>{count.first}</h1>
                                </div>
                            </div>

                            <div className='flex justify-evenly space-x-5 text-lg text-white'>
                                <button onClick={() => decrement('first')}>-</button>
                                <button onClick={() => increment('first')}>+</button>
                            </div>
                        </div>

                        <div className='grid items-center font-semibold'>
                            <h1>[PinkFong] Chicken Japchae</h1>
                            <h2 className='text-gray-600'>53.280</h2>
                        </div>
                    </div>
                    <div className='inline-flex space-x-3'>
                        <div id='ordercontainer' className=''>
                            <div className='grid place-items-center pt-[1px]'>
                                <div id='ordercount' className='grid place-items-center'>
                                    <h1 className='font-semibold text-[#f5ce00]'>{count.second}</h1>
                                </div>
                            </div>

                            <div className='flex justify-evenly space-x-5 text-lg text-white'>
                                <button onClick={() => decrement('second')}>-</button>
                                <button onClick={() => increment('second')}>+</button>
                            </div>
                        </div>

                        <div className='grid items-center font-semibold'>
                            <h1>Japanese Beef Curry Udon</h1>
                            <h2 className='text-gray-600'>53.280</h2>
                        </div>
                    </div>
                </div>
            </div>
        <div className='h-1 bg-gray-100'/>

        <div className='px-10 py-6 space-y-3'>
            <div className='flex justify-between'>
                <h1 className='text-sm grid items-center text-gray-600'>Subtotal</h1>
                <h1>106.520</h1>
            </div>
            <div className='flex justify-between'>
                <h1 className='text-sm grid items-center text-gray-600'>Delivery Fee</h1>
                <h1>10.000</h1>
            </div>
            <div className='flex justify-between'>
                <h1 className='text-sm grid items-center text-gray-600'>Order Fee</h1>
                <h1>2.000</h1>
            </div>
            <div className='h-px bg-gray-200'/>
            <div>
                <Link href='menu_checkout'>
                <div className='flex justify-between pb-6'>
                        <div className='inline-flex space-x-3'>
                            <div className='grid place-items-center'>
                                <Image src={tag} className='w-5 h-5'></Image>
                            </div>
                            <h1>Use available discounts</h1>
                        </div>
                        <span>&#62;</span>                    
                </div>
                </Link>
                <Link href='payment'>
                <div className='flex justify-between pb-6'>
                        <div className='inline-flex space-x-3'>
                            <div className='grid place-items-center'>
                                <Image src={payment} className='w-5 h-4'></Image>
                            </div>
                            <h1>Choose payment method</h1>
                        </div>
                        <span>&#62;</span>                    
                </div>
                </Link>
            </div>
        </div>

        <div style={{boxShadow: '0px 0px 7px #b0b0b0', position: 'sticky', bottom: 0}} className='p-10 bg-white'>
            <div className='flex justify-between pb-4'>
                <h1>Total</h1>
                <h2>Rp118.560</h2>
            </div>
            <Link href='pin'>
                <div id='orderbutton' className='grid place-items-center'>
                    <h1 className='text-white'>Order</h1>
                </div>
            </Link>
        </div>
    </div>
  )
}
