import { useNavigate } from 'react-router-dom';
import React from 'react'
import { Button } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';

import giftIcon from '../../assets/car.png';

export default function Zantrikpoints() {
    const navigate = useNavigate();
    
    return (
        <div className='zantrik-points' style={{height: '95vh'}}>
            <div className="container" style={{height: '100%'}}>
                <div className="topbar">
                    <div
                        style={{ backgroundColor: "rgb(239, 232, 232)", width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                        onClick={() => navigate(-1)}
                    >
                        <KeyboardArrowLeft />
                    </div>
                </div>
                <h1 style={{textAlign: "center", fontWeight: "800", fontSize: "35px"}}>
                    <b>Welcome to DarikPoints</b>
                </h1>

                <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "20% 0"}}>
                    <img src={giftIcon} alt="" style={{width: '70%'}}/>
                </div>

                <div className="ways_to_earn_points">
                    <ul>
                        <li> <CheckCircle style={{color: "green"}} />  You can earn points by ordering</li>
                        <li> <CheckCircle style={{color: "green"}} />  You can redeem points to different services</li>
                        <li> <CheckCircle style={{color: "green"}} />  Each service needs specific points to achieve</li>
                    </ul>
                </div>

                <div className="continue_btn"
                    style={{position: "absolute", bottom: "0", left: "0", width: "100%", padding: "20px"}}
                >
                    <Button 
                        variant="contained" 
                        style={{ backgroundColor: "var(--primaryColor)", color: "white", width: "100%", padding: "10px 0" }}
                        onClick={() => navigate('account')}
                    > Continue </Button>
                </div>
            </div>
        </div>
    )
}
