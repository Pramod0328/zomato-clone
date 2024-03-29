import React from "react";
import './exploresection.css';
import ExploreCard from "./exploreCard";

const ExploreSection = ({list,collectionName})=>{
    return(
        <div className="max-width explore-section">
            <div className="collectiion-title">{collectionName}</div>
            <div className="explore-grid">
                {list.map((restaurant)=>{
                    return <ExploreCard restaurant ={restaurant}/>
                })}
            </div>
        </div>
    )
}

export default ExploreSection;

