import React, { Component} from 'react'
import './styles.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 

export default class Gallery extends Component {
    render() {

        const settings = {
            className: "center",
            infinite: true,
            dots: true,
            centerPadding: "60px",
            slidesToShow: 1,
            swipeToSlide: true,
            slidesToScroll: 1,
            afterChange: function(index) {
              console.log(
                `Slider mudou para: ${index + 1}`
              );
            }
        };

        return(

            <Slider {...settings}>
                <div>
                    <img src="https://i.picsum.photos/id/11/400/400.jpg"></img>
                </div>
                <div>
                    <img src="https://i.picsum.photos/id/21/400/400.jpg"></img>
                </div>
                <div>
                    <img src="https://i.picsum.photos/id/23/400/400.jpg"></img>
                </div>
            </Slider>
        )
    }
}

