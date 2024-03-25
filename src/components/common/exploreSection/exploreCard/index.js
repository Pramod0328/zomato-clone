import React from "react";
import './exploreCard.css';
import { CiStar } from "react-icons/ci";

const ExploreCard = ({restaurant}) => {
    const name = restaurant?.info?.name ?? "";
    const coverImg = restaurant?.info?.image?.url;
    const deliveryTime = restaurant?.order?.deliveryTime;
    const rating = restaurant?.info?.rating?.rating_text;
    const approxPrice = restaurant?.info?.cfo?.text;
    const offers = restaurant?.bulkOffers ?? [];
    const cuisine = restaurant?.info?.cuisine?.map((item) => item.name).slice(0, 3);

    const bottomContainers = restaurant?.bottomContainers;
    const goldOff = restaurant?.gold?.text;
    const proOff = offers.length > 1 ? offers[0].text : null;
    const discount = offers.length > 1 ? offers[1].text : offers.length === 1 ? offers[0].text : null;

    return (
        <div className="explore-card cur-po">
            <div className="explore-card-cover">
                <img src={coverImg} alt={name} className="explore-card-image"/>
                <div className="delivery-time">{deliveryTime}</div>
                {proOff && <div className="pro-offer">{proOff}</div>}
                {goldOff && <div className="gold-off absolute-center">{goldOff}</div>}
                {discount && <div className="discount absolute-center">{discount}</div>}
            </div>
            <div className="res-row">
                <div className="res-name">{name}</div>
                {rating && 
                    <div className="res-rating absolute-center">
                        {rating}
                        <CiStar className="i absolute-center"/>
                    </div>
                }
                <div className="res-row">
                    {cuisine.length > 0 && 
                        <div className="res-cuisine">
                            {cuisine.map((item, i) => (
                                <span className="res-cusine-tag" key={i}>
                                    {item}{i !== cuisine.length - 1 && ','}
                                </span>
                            ))}   
                        </div>
                    }
                    {approxPrice && <div className="res-price">{approxPrice}</div>}
                </div>
            </div>
            {bottomContainers.length>0 && (
            <div>
            <div className="card-separator"></div>
            <div className="explore-bottom">
                <img src={bottomContainers[0]?.image?.url} style={{height:"18px"}}
                alt={bottomContainers[0]?.text}
                />
                <div className="res-bottom-text">{bottomContainers[0]?.text}</div>
                </div> 
            </div>
            )}
        </div>
    );
};

export default ExploreCard;
