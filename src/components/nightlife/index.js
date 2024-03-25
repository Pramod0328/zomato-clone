import React from "react";
import './nightlife.css';
import Collection from "../common/collections";

import { LuSettings2 } from "react-icons/lu";
import { PiArrowsDownUpDuotone } from "react-icons/pi";
import Filters from "../common/filters";
import ExploreSection from "../common/exploreSection";
import { nightLife } from "../../data/ninghtLife";


const collectionList=[
    {
        id:"1",
        title:"Best in Banglore",
        cover:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.7_VCrZHO5NzNsK83tOVrdgHaE7%26pid%3DApi&f=1&ipt=8a9db2fef1f4fa79951aefd8e408c14118b5bdebd624c18bc7120c439c157ae6&ipo=images"
        ,places:'27 places',

    },
    {
        id:"2",
        title:"trending this week",
        cover:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.JmeuSIm1Ntzdvv7cgNZv6wHaE7%26pid%3DApi&f=1&ipt=d70c73517a5e0bb43ff0f9ad3dadb5ddf4bc2d3c9d70bececa87c6815ff72f25&ipo=images"
        ,places:'12 places',

    },
    {
        id:"3",
        title:"Best of live Screenings",
        cover:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.HKuTxPtsTTAhKi2WFfPjDgHaE8%26pid%3DApi&f=1&ipt=134858212e7479c46830e2ee932cc9cd1366abadfd1083a1239e49edca487769&ipo=images"
        ,places:'9 places',
        
    },
    {
        id:"4",
        title:"New in Town",
        cover:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.NU_vvY06AKjtiHJmOrasgwHaE7%26pid%3DApi&f=1&ipt=38861555bb7513ae4acad23f137b81f8acb33a1035d6398fabef1f760a57650d&ipo=images"
        ,places:'10 places',
        
    },
    {
        id:"5",
        title:"What A View",
        cover:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.meZpxsmduM0LQPiS0Ys9SgHaEJ%26pid%3DApi&f=1&ipt=90bdcc6d3945756ed1d1602f82e506a5459539b3fca04a358fab51847dd978e7&ipo=images"
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

const nightFilters=[
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

const nightList = nightLife;
const NightLife = ()=>{
    return(
        <div>
            <Collection list={collectionList}/>
            <div className="max-width">
                <Filters filterList={nightFilters}/>
            </div>
            <ExploreSection list={nightList} collectionName='Nightlife Restaurants in Lavelle Road'/>
        </div>
    )
}

export default NightLife;