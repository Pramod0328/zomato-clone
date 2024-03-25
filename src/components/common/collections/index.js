import React from 'react'
import './collection.css';

const Collection = ({list}) => {
  return (
    <div className='collection-wrapper'>
        <div className='max-width collection'>
            <div className='collection-title'>Collections</div>
            <div className='collection-subtitle-row'>
                <div className='collection-subtitle-text'>
                Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends
                </div>
                <div className='collection-location'>
                    <div>All collections in Banglore</div>
                </div>
            </div>
        </div>
    </div>
  ) 
}

export default Collection;
