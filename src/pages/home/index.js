import React, { useState } from 'react';
import Header from '../../components/common/header';
import TabOptions from '../../components/common/tabOptions';
import Footer from '../../components/common/footer';
import Delivery from '../../components/delivery/index.js';
import DiningOut from '../../components/diningOut/index.js';
import NightLife from '../../components/nightlife/index.js';


const HomePage = () => {

    const [activeTab, setActiveTab] = useState("");

    return (
        <div>
            <Header/>
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
            {getCorrectScreen(activeTab)}
            <Footer/>
        </div>
    );
}


const getCorrectScreen = (tab) => {
    switch (tab) {
        case "Delivery":
            return <Delivery/>;
        case "Dining Out":
            return <DiningOut/>;
        case "Nightlife":
            return <NightLife/>;
        default: 
            return <Delivery/>;
    }
}

export default HomePage;
