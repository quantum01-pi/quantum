import React, { Component } from 'react'
import './styles.css'

import Slider from "react-slick";


export default class Gallery extends Component {
    render() {

        const settings = {
            className: "center",
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 5,
            swipeToSlide: true,
            afterChange: function(index) {
              console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
              );
            }
        };

        return(

            <Slider {...settings}>
                <div>
                    <h1>1</h1>
                </div>
                <div>
                    <h1>2</h1>
                </div>
            </Slider>
        )
    }
}

