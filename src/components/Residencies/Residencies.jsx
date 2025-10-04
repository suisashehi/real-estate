import React from 'react'
import { Swiper, SwiperSlide, useSwiper }  from 'swiper/react'
import "swiper/css"
import "./Residencies.css"
import data from "../../utils/slider.json"

const Residencies = () => {
  return (
    <section className='r-wrapper'>
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span>Best Choices</span>
                <span>Popular Residencies</span>
            </div>
        </div>
    </section>
  )
}

export default Residencies