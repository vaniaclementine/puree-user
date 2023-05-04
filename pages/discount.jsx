import React from "react";
import Image from "next/image";
import Link from "next/link";
import {useState, useEffect} from "react";

import back from '../images/back.jpg'
import plus from '../images/plus.png'
import disc from '../images/disc.png'

export default function menu_checkout() {
    return (
        <div>
            <div id="search" className="h-[160px] sticky bg-white shadow-lg">
                <Link href='menu_checkout' className="ml-8 mt-8 absolute">
                    <Image src={back} className='w-8 rounded-full shadow-lg'></Image>
                </Link>
                <p className='ml-4 pt-9 font-semibold flex justify-center content-center'>Discounts</p>

                <input type='text' className="ml-8 mt-7 mb-7 bg-slate-100 h-[40px] w-[320px] rounded-xl shadow-md flex text-sm text-slate-400 col-span-3 pl-[20px]" placeholder="Enter promo or gift code"/>
            </div>

            <div className="grid gap-4 ml-8 mt-12">
                <div className="flex">
                    <Image src={disc}></Image>
                    <div className="block ml-5 mt-2">
                        <p className="text-s font-semibold">Delivery Discount 10%</p>
                        <p className="text-xs font-light">Minimum spend 100k</p>
                    </div>
                </div>
                <div className="flex">
                    <Image src={disc}></Image>
                    <div className="block ml-5 mt-2">
                        <p className="text-s font-semibold">Delivery Discount 5%</p>
                        <p className="text-xs font-light">Minimum spend 50k</p>
                    </div>
                </div>
                <div className="flex">
                    <Image src={disc}></Image>
                    <div className="block ml-5 mt-2">
                        <p className="text-s font-semibold">Delivery Discount 20%</p>
                        <p className="text-xs font-light">Maximum discount 2k</p>
                    </div>
                </div>
            </div>
        </div>
    )
}