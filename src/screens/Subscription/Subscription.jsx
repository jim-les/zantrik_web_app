import React from 'react';
import MyTabs from './Tabs';
import BottomNav from '../../Components/BottomNav';
import { Button } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import Services from './Services';
import giftIcon from '../../assets/car.png';

import "./style.css";

export default function Subscription() {
    const [value, setValue] = React.useState(0);
    const [userSubscripiton, setSubscriptions] = React.useState([]);

    React.useEffect(() => {
        // Fetch user subscriptions when the component mounts
        fetch('http://127.0.0.1:3001/api/user-subscriptions', {
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setSubscriptions(data);
            console.log(userSubscripiton)
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }, []); // Empty dependency array to run effect only once


    const handleSubscriptionCreate = async () => {
        try {
            const response = await fetch('http://127.0.0.1:3001/api/user-subscriptions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add your JWT token for authorization
                    'Authorization': sessionStorage.getItem('token')
                },
                body: JSON.stringify({
                    subscriptionId: 1
                })
            });

            if (response.ok) {
                // Subscription created successfully
                // You may want to fetch the updated list of subscriptions here
                console.log('Subscription created successfully');
            } else {
                // Handle error response
                console.error('Failed to create subscription');
            }
        } catch (error) {
            console.error('Error:', error);
        }

    };


    return (
        <div className='subscripiton-screen'>
            <div 
                className="subscription-topbar"
            >
                <h1 style={{padding: "10px 20px", fontWeight: "800"}}>Subscription</h1>

                <div className='tabs-container'>
                    <MyTabs setValue={setValue} value={ value }/>
                </div>
            </div>

            <Services subscripitons={userSubscripiton} value />

            <BottomNav />
            
        </div>
    )
}
