import React, { useState } from 'react';
import Header from '../../components/common/header';
import TabOptions from '../../components/common/tabOptions';
import Footer from '../../components/common/footer';

const HomePage = ()=>{

    const [activeTab, setActiveTab] = useState("NightLife");
    return(
        <div>
        <Header/>
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
        {getCorrrectScreen(activeTab)}
        <Footer/>
        </div>
    );
}


const getCorrrectScreen = (tab)=>{
   switch(tab){
        case "Delivery":
            return <div>delivery</div>
        case "Dining Out":
            return <div>Dining Out</div>
        case "NightLife":
            return <div>NightLife</div>
            default: 
                return <div>delivery</div>
   }
}

export default HomePage;

