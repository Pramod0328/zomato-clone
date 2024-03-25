import React from "react";
import './diningout.css';
import Collection from "../common/collections";
import { diningOut } from "../../data/diningOut";
import { LuSettings2 } from "react-icons/lu";
import { PiArrowsDownUpDuotone } from "react-icons/pi";
import Filters from "../common/filters";
import ExploreSection from "../common/exploreSection";

const collectionList=[
    {
        id:"1",
        title:"Best in Banglore",
        cover:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.tut1AQepeuZ4CW2BW4Zr7gHaFj%26pid%3DApi&f=1&ipt=86f0807bd4947019ef6c161b8bd95d648e454a51506ceec8928d1825013f3b7c&ipo=images"
        ,places:'27 places',

    },
    {
        id:"2",
        title:"trending this week",
        cover:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IrX8kDXWOhXogZdezOeTNQHaEx%26pid%3DApi&f=1&ipt=22ad99b958baa855014e292bceb92cd7b83877a1d17616d115a9912f1a08cc03&ipo=images"
        ,places:'12 places',

    },
    {
        id:"3",
        title:"Best of live Screenings",
        cover:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.TDePn20eOsDbLvab7Kx81QHaEj%26pid%3DApi&f=1&ipt=5ab675179aec88687a6262d2644892f5c045f9ceec77563a76921618928e2dc1&ipo=images"
        ,places:'9 places',
        
    },
    {
        id:"4",
        title:"New in Town",
        cover:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.d0vfGWxNWUyb_o6cmmXU0wHaFj%26pid%3DApi&f=1&ipt=8812461ffaad7f421873790422c9a577a57dfb17b9561872d270ae1cdbcb8bdd&ipo=images"
        ,places:'10 places',
        
    },
    {
        id:"5",
        title:"What A View",
        cover:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.9iiKKc9wq3Z4Srvjof-efQEsCo%26pid%3DApi&f=1&ipt=daefdf6260dadf0c5681af2d5ecb562d397617babf32e63c9e7ae168ffbe294a&ipo=images"
        ,places:'7 places',
        
    },
    {
        id:"6",
        title:"Dine For The Gram",
        cover:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.OSMM3bJ1g5qkimmD-ukxDQHaFX%26pid%3DApi&f=1&ipt=a7932c1b681f2094ca453dd6a75c393e4604f711d87cae4c85b2c3a9d37bd47b&ipo=images"
        ,places:'13 places',
        
    },
    {
        id:"7",
        title:"Hip Holi Parties",
        cover:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIF.4E3TUkwQsg3Hhi35UswrOA%26pid%3DApi&f=1&ipt=47c47f60e23f7f0f48007b8d42ca74ab4755381a5b582484ede7f375652ceb30&ipo=images"
        ,places:'22 places',
        
    },
]

const diningFilters=[
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

const diningList = diningOut;

const DiningOut = () => {
    return (
        <div>
            <Collection list={collectionList} />
            <div className="max-width">
                <Filters filterList={diningFilters}/>
            </div>
            <ExploreSection list={diningList} collectionName='Dine-Out Restaurants in Banglore'/>
        </div>
    );
};

export default DiningOut;