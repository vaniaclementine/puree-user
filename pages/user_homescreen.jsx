import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

export default function UserHomescreen() {
  return (
    <div>
    <div id="top-container">
        <p id="deliver_to">Deliver to</p>
        <p id="address">No.17, Jl. Dharmawangsa</p>
        <button id="love-button">

        </button>
        <button id="history">

        </button>
    </div>
    <div id="search-bar">
        <img src="" alt="" />
        <p>What are you craving?</p>
    </div>
    <div id="content">
        <div id="features">
            <div className="near-me">
                <img src="" alt="" />
                <p>Near Me</p>
            </div>
            <div className="top-rated">
                <img src="" alt="" />
                <p>Top Rated</p>
            </div>
            <div className="disc">
                <img src="" alt="" />
                <p>Special Discount</p>
            </div>
            <div className="cuisines">
                <img src="" alt="" />
                <p>All Cuisines</p>
            </div>
        </div>
        <div id="carousel">
            <div className="img1">
                <img src="" alt="" />
                <p>Doo Doo Doo! ft. Pingfong</p>
            </div>
        </div>
        <div id="rewards">
            <p>% See available rewards</p>
            <img src="" alt="" />
        </div>
    </div>
</div>
  )
}
