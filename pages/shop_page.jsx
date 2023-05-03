import React from "react";
import Image from "next/image";
import Link from 'next/link'

import doo2 from '../images/doo2.jpg'
import back from '../images/back.jpg'
import star from '../images/star.jpg'
import tag from '../images/tag.jpg'
import offer1 from '../images/offer1.jpg'
import offer2 from '../images/offer2.jpg'
import menu from '../images/menu1.jpg'
import home from '../images/home.jpeg'
import message from '../images/message.jpeg'
import notif from '../images/notif.jpeg'
import profile from '../images/profile.jpeg'
import japchae from '../images/menu-japchae.png'
import search from '../images/search.png'

export default function shop_page() {
    return(
        <div>
            <div id="top-container" className="w-screen grid place-items-start h-[20vh]">
                <Image src={doo2} className='object-fill h-[20vh] w-screen'></Image>
                <div className="ml-8 mt-5 absolute">
                    <Link href='all_cuisines'>
                    <Image src={back} className='w-8 rounded-full'></Image>
                    </Link>
                    <Link href='menu_search'>
                    <Image src={search} className='w-7 rounded-full bg-white ml-72 p-1 -mt-8'></Image>
                    </Link>
                </div>
                
            </div>

            <div id="card-shop" className= 'mx-8 rounded-xl drop-shadow-lg -mt-16 bg-white p-5'>
                <p className='text-2xl font-semibold'>Gruu Baby Food</p>
                <p className='text-sm truncate mt-5 font-light'>Jl. Dharmawangsa Raya, No. 17, Kby. Baru, Jakarta </p>

                <div className="flex mt-5">
                    <Image src={star} className='w-[16px] h-[16px] mt-[1px]'></Image>
                    <div className="flex ml-3 text-sm ">
                        <p>4.5</p>
                        <p className="ml-1 text-slate-400">(31)</p>

                        <p className="ml-3">•</p>

                        <p className="ml-3">Ratings and reviews</p>
                    </div>
                </div>

                <div className="flex mt-5">
                    <Image src={tag} className='w-[22px] h-[22px]'></Image>
                    <p className="ml-3 text-sm">Enjoy discounts on some items</p>
                </div>
            </div>

            <div className="ml-8 mt-8 mr-8">
                <p className="text-xl font-semibold">Today's Offer</p>
                <div className="block mt-3">  
                    <div className= 'rounded-l drop-shadow-lg bg-white'>
                        <div className="flex">
                            <div className="block">
                                <p className="text-xs p-5">[Sunpride] Roasted Chicken with Creamy Banana - MPASI</p>
                                <p className='text-[8px] m-5 -mt-3 h-6 font-light'> Beef, Onion, Thyme, Rosemary, Carrot, Sunpride Cavendish Banana, Garlic Butter, Hometown Milk</p>
                                <div className="flex mt-2 ml-5">
                                    <p className="font-semibold text-xs mr-2">50.000</p>
                                    <p className="text-xs text-slate-400 line-through mr-3">55.000</p>
                                    <Image src={tag} className='w-[22px] h-[22px] -mt-1'></Image>
                                </div>
                            </div>
                            <Image src={offer1} className='h-[130px] w-[95px]'></Image>
                        </div>
                    </div>

                    <div className= 'rounded-l drop-shadow-lg bg-white mt-3'>
                        <div className="flex">
                            <div className="block">
                                <p className="text-xs p-5">[Sunpride] Roasted Chicken with Creamy Banana - MPASI</p>
                                <p className='text-[8px] m-5 -mt-3 h-6 font-light'> Beef, Onion, Thyme, Rosemary, Carrot, Sunpride Cavendish Banana, Garlic Butter, Hometown Milk</p>
                                <div className="flex mt-2 ml-5">
                                    <p className="font-semibold text-xs mr-2">50.000</p>
                                    <p className="text-xs text-slate-400 line-through mr-3">55.000</p>
                                    <Image src={tag} className='w-[22px] h-[22px] -mt-1'></Image>
                                </div>
                            </div>
                            <Image src={offer1} className='h-[130px] w-[95px]'></Image>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 mb-24 mr-8">
                <p className="text-xl font-semibold ml-8">All Menu</p>
                <div className='grid grid-cols-2 gap-2 ml-10 my-6 h-screen '>
                    <div>
                        <Image src={menu} className='w-32'></Image>
                        <p className='mt-4 text-sm font-medium'>Avocado Purée</p>
                        <p className='text-sm font-semibold'>53.280</p>
                    </div>
                    <div>
                        <Link href='/menu_details'>
                        <Image src={japchae} className='w-32'></Image>
                        <p className='mt-4 text-sm font-medium'>[PinkFong] Dak Gomtang - MPASI</p>
                        <p className='text-sm font-semibold'>53.280</p>
                        </Link>
                    </div>
                    <div>
                        <Image src={menu} className='w-32'></Image>
                        <p className='mt-4 text-sm font-medium'>Avocado Purée</p>
                        <p className='text-sm font-semibold'>53.280</p>
                    </div>
                    <div>
                        <Image src={menu} className='w-32'></Image>
                        <p className='mt-4 text-sm font-medium'>Avocado Purée</p>
                        <p className='text-sm font-semibold'>53.280</p>
                    </div>
                    <div>
                        <Image src={menu} className='w-32'></Image>
                        <p className='mt-4 text-sm font-medium'>Avocado Purée</p>
                        <p className='text-sm font-semibold'>53.280</p>
                    </div>
                    <div>
                        <Image src={menu} className='w-32'></Image>
                        <p className='mt-4 text-sm font-medium'>Avocado Purée</p>
                        <p className='text-sm font-semibold'>53.280</p>
                    </div>
                    <div>
                        <Image src={menu} className='w-32'></Image>
                        <p className='mt-4 text-sm font-medium'>Avocado Purée</p>
                        <p className='text-sm font-semibold'>53.280</p>
                    </div>
                    <div>
                        <Image src={menu} className='w-32'></Image>
                        <p className='mt-4 text-sm font-medium'>Avocado Purée</p>
                        <p className='text-sm font-semibold'>53.280</p>
                    </div>
                </div>
            </div>

            <div className='container h-24 fixed bottom-0 justify-around shadow-inner bg-white'>
                <Image src={home} className='my-5 w-7 h-7'></Image>
                <Image src={message} className='my-6 w-8 h-6'></Image>
                <Image src={notif} className='my-5 w-7 h-8'></Image>
                <Image src={profile} className='my-5 w-8 h-8'></Image>
            </div>
        </div>
    )
}