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
// import '../styles/user_landing.css'

export default function user_landing() {
    return (
        <div>
            <div id='topContainer-user'>
                <p id='deliver-to'>Deliver to</p>
                <p id='address-user'>Jl. Dharmawangsa Raya No. 17b</p>
                <p id='craving'>What are you craving ?</p>
            </div>

            <div id="content">
                <div id="card">
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

            <div id="carousel">
                <Image className='' src={doo}></Image>
                <p id='nama-carousel'>Doo Doo Doo! ft.Pingfong</p>
                <p id="bawahnya">Sponsored by Grouu</p>
            </div>

            <div id="reward">
                <Image id="kiri" src={kiri}></Image>
                <Image id='rewards' src={keranjang}></Image>
            </div>

            <div id="footer">
                <div id="footer-img">
                <button><Image id='home-user' src={home}></Image></button>
                <button><Image id="msg-user" src={message}></Image></button>
                <button><Image id="notif-user" src={notif}></Image></button>
                <button><Image id="profile-user" src={profile}></Image></button>
                </div>
            </div>
        </div>
    )
}