import React from "react";
import Image from "next/image";
import Link from "next/link";

import check from '../images/check.png'

export default function order_placed() {
    return (
        <div className="grid bg-white h-screen">
            <div className="mt-64">
                <Image src={check} className="flex justify-center ml-[160px]"></Image>
                <p className="flex justify-center text-[24px] text-black font-semibold mt-6">Order placed!</p>
                <p className="text-[14px] text-[#666666] px-[53px] text-center pt-[12px]"> Please wait and sit tight, our partner will be in touch soon</p>
                <div className="bg-white rounded-xl w-[305px] h-[190px] mt-10 ml-10">
                    <div>
                        <Link href='#'>
                            <button className='mt-[209px] bg-yellow-300 drop-shadow-lg rounded-lg w-80 h-11'>
                            <p className='text-white text-sm font-semibold py-2.5'>Track your order</p>
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link href='#'>
                            <p className='mt-6 text-yellow-300 text-sm font-semibold underline text-center pl-4'>Home</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}