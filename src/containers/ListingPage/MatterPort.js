import React from 'react';
import Iframe from 'react-iframe';

import css from './ListingPage.css';

// const sharetribeSdk = require('sharetribe-flex-sdk');



// const sdk = sharetribeSdk.createInstance({
//     clientId: 'a006f8c4-ef5e-4877-8087-7b216f6fa0c4'
//   });


//   sdk.listings
//   .query({ per_page: 5 })
//   .then(res => {
//     // Print listing titles
//     res.data.data.forEach(listing => {
//       console.log(`Listing: ${listing.attributes.metadata.src}`)
//     });
//   })
//   .catch(res => {
//     // An error occurred
//     console.log(`Request failed with status: ${res.status} ${res.statusText}`);
//   });



const MatterPort = () => {


        return (
           
            <div className={css.sectionMap}> 
                  
                  <Iframe 
                    url="https://my.matterport.com/show/?m=pxzSigb4rRt"
                    width="100%"
                    height="500px"
                    id="myId"
                    className="sectionMap"
                    display="initial"
                    position="relative"
                    />
              </div>


        )
    };

export default MatterPort;

