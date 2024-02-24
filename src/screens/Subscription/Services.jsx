import React from 'react';
import { Button } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import giftIcon from '../../assets/car.png';
import ServiceCard from './ServiceCard';

export default function Services( { subscripitons, value }) {

    if (subscripitons.length <= 0) {
        return (
            <div>
                <div className="container">
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <img src={giftIcon} alt="" width={300} />
                    </div>

                    <h2 style={{textAlign: "center", fontWeight: "800", padding: "30px 30px", color: "rgba(0, 0, 0, .7)"}}>
                        <b>Aww! You Have No Subscription Right Now</b>
                    </h2>

                    <div className="ways_to_earn_points">
                        <ul>
                            <li style={{ color: "greay"}}> <CheckCircle style={{color: "green"}} />  Save yearly up to 30, 104 tk free repair Service</li>
                            <li style={{ color: "greay"}}> <CheckCircle style={{color: "green"}} />  Lorem Ipsum dolor sit amet</li>
                            <li style={{ color: "greay"}}> <CheckCircle style={{color: "green"}} />  Each service needs specific points to achieve</li>
                        </ul>
                    </div>

                    <Button 
                        variant='contained'
                        style={{ width: "100%", padding: "15px 0", backgroundColor: "var(--primaryColor)", marginTop: "1rem" }} 
                    >Continue</Button>

                    </div>
            </div>
        )
    } else {
        return (
            <div className=''>
                <div>
                {subscripitons.map(value => (
                    <div key={value.user_subscription_id}>
                        <ServiceCard service_name = {value}/>
                    </div>
                ))}
            </div>
            </div>
        )
    }
}
