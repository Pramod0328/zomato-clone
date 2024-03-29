import React from "react";
import './delivery.css';
import Filters from "../common/filters";
import { LuSettings2 } from "react-icons/lu";
import { PiArrowsDownUpDuotone } from "react-icons/pi";
import DeliveryCollections from "./deliveryCollection";
import TopBrands from "./topbrands";
import ExploreSection from "../common/exploreSection";
import { restaurants } from "../../data/restaurant";



const deliveryFilters=[
    {
        id:1,
        icon:<LuSettings2 />,
        title: "filter",     

    },
    {
        id:2,
        title: "Rating: 4.0+",     

    },
    {
        id:3,
        title: "Safe and Hygienec",     

    },
    {
        id:4,
        title: "Pure Veg",     

    },
    {
        id:5,
        title:"Delivery Time",    
        icon: <PiArrowsDownUpDuotone />
    },
    {
        id:6,
        title:"Great Offers",
    },
];

const restaurantList = restaurants;


const Delivery = ()=>{
    return(
            <div className="max-width">
            <div><Filters filterList={deliveryFilters}/></div>
            <DeliveryCollections/>
            <TopBrands/>
            <ExploreSection list={restaurantList}  collectionName = 'Delivery restaurants in Banglore'/>
            </div> 
    )
}

export default Delivery;