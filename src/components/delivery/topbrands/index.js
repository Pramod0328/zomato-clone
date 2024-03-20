import React from "react";
import './topbrand.css';
import Slider from "react-slick";
import NextArrow from "../../common/carousal/nextArrow";
import PrevArrow from "../../common/carousal/preArrow";

const topBrandList = [
    {
        id:1,
        time:"35 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp"
    },
    {
        id:2,
        time:"29 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png?output-format=webp"
    },
    {
        id:3,
        time:"15 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp"
    },
    {
        id:4,
        time:"40 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/dc49d77dce0ee7fc8e495fa35be0e747_1648715086.png?output-format=webp"
    },
    {
        id:5,
        time:"28 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/7e91871a40c877332641a411e7dea18b_1668319552.png?output-format=webp"
    },
    {
        id:6,
        time:"32 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/2e099f8732dd2ba673cf19681b559b50_1707299865.png?output-format=webp"
    },
    {
        id:7,
        time:"22 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613210633.png?output-format=webp"
    },
    {
        id:8,
        time:"33 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1caa10bf3067695b7760cd83aaa38ee5_1549360511.png?output-format=webp"
    },
]

const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };

const TopBrands = ()=>{
    return(
        <div className="top-brand max-width">
            <div className="collection-title">Top brands for you</div>
            <Slider {...settings}>
                {topBrandList.map((brand)=>{
                    return <div>
                        <div className="top-brands-cover">
                            <img src={brand.cover} className="top-brands-image" alt={brand.time}/>
                        </div>
                    </div>
                })}
            </Slider>
        </div>
    )
}

export default TopBrands;