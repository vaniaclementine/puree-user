import React from "react";
import Image from "next/image";
import Link from "next/link";
import {useState, useEffect} from "react";

import back from '../images/back.jpg'
import search from '../images/search.png'
import location from '../images/location.jpg'
import Counter from "./counter";
import tag from '../images/tag.png'

function Counter2(){
    const [num, setNum]= useState(Number(localStorage.getItem("counterValue")) || 0);
  
    const incNum =()=>{
      num < 100 ? setNum(Number(num)+1) : false
    };
  
    const decNum = () => {
      num > 0 ? setNum(num-1) : false
    }
  
    const handleChange = (e)=>{
     setNum(e.target.value);
     localStorage.setItem("counterValue", e.target.value);
    }
  
     return(
      <div className="mt-1 h-10 flex">         
          <button className="bg-transparent font-semibold text-sm mr-3" type="button" onClick={decNum}>-</button>
          <input type="text" className="bg-transparent w-[35px] text-sm rounded-md" value={num} onChange={handleChange}/>
          <button className="bg-transparent font-semibold text-sm text-gray-500 ml-3" type="button" onClick={incNum}>+</button>
      </div>
    );
  }
  

export default function menu_checkout() {
    return (
        <div>
            <div id="search" className="h-[85px] sticky bg-white flex shadow-lg">
                <Link href='shop_page' className="ml-8 mt-8 absolute">
                    <Image src={back} className='w-8 rounded-full shadow-lg'></Image>
                </Link>
                <p className='ml-40 pt-8 font-semibold flex justify-center content-center'>Checkout</p>
            </div>

            <div className="mt-9 ml-12 flex">
                <Image src={location} className="w-[20px] h-8 mr-3 mt-1"></Image>
                <div className="block">
                    <p className="font-semibold text-[14px]">DIKE FMIPA UGM</p>
                    <p className='text-[12px] truncate font-light w-64'>Gedung C, Lantai 4, Sekip Utara, Bulaksumur, Sendowo, Sinduadi</p>
                </div>
            </div>

            <div className="h-[4px] bg-slate-100 mt-8"></div>

            <div className="mt-8 ml-8 mr-8 grid gap-y-4">
                <p className="font-semibold text-[14px]">Order Summary</p> 
                <div className="flex">
                    <Counter2 />
                    <div className="truncate ml-3 mt-1">
                        <p className="font-semibold text-[14px]">[PinkFong] Chicken Japchae - MPASI</p>
                        <p className="text-[12px]">53.280</p>
                    </div>
                </div>
                <div className="flex">
                    <Counter2 />
                    <div className="truncate ml-3 mt-1">
                        <p className="font-semibold text-[14px]">[PinkFong] Chicken Japchae - MPASI</p>
                        <p className="text-[12px]">53.280</p>
                    </div>
                </div>
            </div>

            <div className="h-[4px] bg-slate-100 mt-8"></div>

            <div className="mt-8 ml-8 mr-8 grid gap-y-4 text-[12px]">
                <div className="flex">
                    <p>Subtotal</p>
                    <p className="ml-56">106.560</p>
                </div>
                <div className="flex">
                    <p>Delivery Fee</p>
                    <p className="ml-52">10.560</p>
                </div>
                <div className="flex">
                    <p>Order Fee</p>
                    <p className="ml-56">2.000</p>
                </div>
            </div>

            <div className="h-[4px] bg-slate-100 mt-8"></div>

            <div className="ml-8 mt-8 flex">
                <Image src={tag}></Image>
                <Link href='/discount'>
                    <p className="font-light text-[13px] ml-3">Use available discounts</p>
                </Link>
            </div>

            <div className='h-fill justify-center bg-white drop-shadow mt-12 pb-5'>
                <div className="m-8 pt-8">
                    <div className="flex">
                            <p>Total</p>
                            <p className="ml-52">Rp118.560</p>
                    </div>

                    <div>
                        <Link href='#'>
                            <button className='mt-9 bg-yellow-300 drop-shadow-lg rounded-lg w-80 h-11'>
                            <p className='text-white text-sm font-semibold py-2.5'>Order</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}