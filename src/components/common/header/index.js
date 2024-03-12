import React from 'react';
import './header.css'; 
import { TiLocationOutline } from "react-icons/ti";
import { FaCaretDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";







const Header = () => {
    return (
        <>
            <div className='max-width header'>
                <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='zomato' className='header-logo'/>

                <div className='header-right'>
                    <div className='header-location-search-container'>
                        <div className='location-wrapper'>
                            <div className='location-icon-name'>
                                <div className='absulute-center location-icon'>
                                    <TiLocationOutline/>
                                </div>
                                <div>Banglore</div>
                            </div>
                            <FaCaretDown className='absulte-center '/>
                        </div>  
                        <div className='location-search-separator'></div>
                        <div className='header-searchbar'>
                                <CiSearch className='absolute-center search-icon'/>
                                <input placeholder='Search for restaurant, cuisine or a dish'
                                className='search-input'/> 
                                
                        </div>
                    </div>
                    <div className='profile-wrapper'>
                        <img src='https://cdn4.iconfinder.com/data/icons/food-9/512/food-09-512.png' alt='profile' 
                        className='header-profile-image'/>
                        <span className='header-username'>Pramod</span>
                        <FaAngleDown className='absolute-center profile-options-icon'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
