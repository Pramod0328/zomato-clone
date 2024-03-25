import React from 'react'
import './collection.css';
import { FaCaretRight } from "react-icons/fa";
import Slider from "react-slick";
import NextArrow from '../carousal/nextArrow';
import PrevArrow from '../carousal/preArrow';

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow/>,
  prevArrow: <PrevArrow/>
};

const Collection = ({list}) => {
  return (
    <div className='collection-wrapper'>
        <div className='max-width collection'>
            <div className='collection-title'>Collections</div>
            <div className='collection-subtitle-row'>
                <div className='collection-subtitle-text'>
                Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends
                </div>
                <div className='collection-location'>
                    <div>All collections in Banglore</div>
                    <FaCaretRight className='absolute-center'/>
                </div>
            </div>
             <Slider {...settings}>
              {list.map((item)=>(
                <div>
                  <div className='collection-cover'>
                    <img src={item.cover} className='collection-image' alt={item.title}/>
                    <div className='gradient-bg'></div>
                    <div className='collection-card-title'>{item.title}</div>
                    <div className='collection-card-subtitle'>
                      <div>{item.places}</div>
                    </div>
                  </div>
                </div>
              ))}
             </Slider>
        </div>
    </div>
  ) 
}

export default Collection;
