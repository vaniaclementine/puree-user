import React from "react";
import Image from "next/image";
import Link from "next/link";

import back from '../images/back.jpg'
import search from '../images/search.png'

export default function menu_search() {
    return (
        <div>
            <div id="search" className="h-[85px] sticky bg-white flex shadow-lg">
                <div className="ml-8 mt-8 absolute">
                    <Link href='shop_page'>
                    <Image src={back} className='w-8 rounded-full'></Image>
                    </Link>

                    <Link href='menu_result'>
                    <Image src={search} className='w-6 ml-14 p-1 -mt-7'></Image>
                    </Link>
                </div>
                <div className="grid grid-cols-5">
                    <input type='text' className="ml-20 mt-7 bg-slate-200 h-[40px] w-[270px] rounded-xl shadow-md flex text-sm text-slate-400 col-span-3 pl-[50px]" placeholder="What are you looking for?"/>
                    {/* <Link href='/menu_result'> */}
{/*                   
                    <Image src={search} className="-mt-9 ml-3 h-[18px] col-start-2"></Image> */}
                   
                    {/* </Link> */}
                </div>
            </div>
        </div>
    )
}