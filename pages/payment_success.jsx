import React from "react";
import Image from "next/image";
import Link from "next/link";

import check from '../images/check.png'

export default function payment_success() {
    return (
        <div className="grid bg-[url('../images/bg-pay.png')] h-screen">
            <p className="text-white text-[40px] font-bold flex justify-center mt-[8rem]">Rp118.560</p>
            <div className="-mt-[27vh]">
                <Image src={check} className="flex justify-center ml-[160px]"></Image>
                <p className="flex justify-center text-[16px] text-white font-semibold mt-6">Successful payment!</p>

                <div className="bg-white rounded-xl w-[305px] h-[190px] mt-10 ml-10">
                    <div className="p-7 grid gap-y-5">
                        <div className="flex text-[12px]">
                            <p>Old balance</p>
                            <p className="ml-32">450.000</p>
                        </div>
                        <div className="flex text-[12px]">
                            <p>Payment</p>
                            <p className="ml-[150px]">118.560</p>
                        </div>
                        <hr className="mt-3"/>
                        <div className="flex">
                            <p>Current balance</p>
                            <p className="ml-[70px]">331.440</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}