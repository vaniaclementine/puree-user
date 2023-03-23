import React from 'react'
import Image from 'next/image'
import nearme from '../images/nearme.jpeg'
import doo from '../images/doo.jpeg'
import toprated from '../images/toprated.jpeg'
import disc from '../images/disc.jpeg'
import cuisine from '../images/cuisine.jpeg'
import kiri from '../images/kiri.jpeg'
import keranjang from '../images/keranjang.jpeg'
import home from '../images/home.jpeg'
import message from '../images/message.jpeg'
import notif from '../images/notif.jpeg'
import profile from '../images/profile.jpeg'
import top from '../images/top-user-homescreen.jpg'
// import '../styles/user_landing.css'

export default function user_homescreen() {
    return (
        <div className='bg-white'>
            <div className='w-screen grid place-items-start h-[20vh]'>
                <Image src={top} className='object-fill h-[20vh] w-screen'></Image>
                <div className='top-content'>
                    <p id='deliver-to' className=''>Deliver to</p>
                    <p id='address-user'>Jl. Dharmawangsa Raya No. 17b</p>
                    <p id='craving' className='py-5 ml-8 mt-5 pl-8 flex '>What are you craving ?</p>
                </div>
            </div>

            <div className=''>
                <div id="card" className='mt-5'>
                    <div id="near-me">
                        <button>
                        <Image className='near-me' src={nearme}></Image>
                        <p>Near Me</p>
                        </button>
                    </div>

                    <div id="top-rated">
                        <button>
                        <Image className='top-rated' src={toprated}></Image>
                        <p>Top Rated</p>
                        </button>
                    </div>

                    <div id="disc">
                        <button>
                        <Image className='disc' src={disc}></Image>
                        <p>Special Discount</p>
                        </button>
                    </div>

                    <div id="cuisines">
                        <button>
                        <Image className='cuisine' src={cuisine}></Image>
                        <p>All Cuisines</p>
                        </button>
                    </div>
                </div>
            </div>

            <div id="carousel" className='mt-5'>
                <Image className='' src={doo}></Image>
                <p id='nama-carousel' className='mt-3'>Doo Doo Doo! ft.Pingfong</p>
                <p id="bawahnya">Sponsored by Grouu</p>
            </div>

            <div id="reward" className='mt-5'>
                <Image id="kiri" src={kiri}></Image>
                <Image id='rewards' src={keranjang}></Image>
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