import react from 'react';

const TabOptions = ({activeTab, setActiveTab})=>{
    return(
        <div>
            <button onClick={()=>setActiveTab("Nightlife")}>On Click</button>
        </div>
    )
}

export default TabOptions;