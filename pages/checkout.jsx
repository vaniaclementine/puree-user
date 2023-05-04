import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import back from '../images/back.jpg'
import location from '../images/location.jpg'
import tag from '../images/tagyellow.jpg'

export default function Checkout() {
  return (
    <div className='h-screen'>
        <div className='shadow-xl p-8'>
            <div className='inline-flex w-full'>
                <Link href='all_cuisines'>
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
                                    <h1 className='font-semibold text-[#f5ce00]'>1</h1>
                                </div>
                            </div>

                            <div className='flex justify-evenly space-x-5 text-lg text-white'>
                                <h1>&#8722;</h1>
                                <h1>&#43;</h1>
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
                                    <h1 className='font-semibold text-[#f5ce00]'>1</h1>
                                </div>
                            </div>

                            <div className='flex justify-evenly space-x-5 text-lg text-white'>
                                <h1>&#8722;</h1>
                                <h1>&#43;</h1>
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
            <div className='flex justify-between pb-6'>
                <div className='inline-flex space-x-3'>
                    <Image src={tag} className='w-6 h-6'></Image>
                    <h1>Use available discounts</h1>
                </div>
                <span>&#62;</span>
            </div>
        </div>

        <div style={{boxShadow: '0px 0px 10px #b0b0b0'}} className='p-10 space-y-4'>
            <div className='flex justify-between'>
                <h1>Total</h1>
                <h2>Rp118.560</h2>
            </div>
            <button id='orderbutton' className='grid place-items-center'>
                <h1 className='text-white'>Order</h1>
            </button>
        </div>
    </div>
  )
}
