import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react'

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import car from "../../assets/car.png";
import "./ZantrikPoints.css";

export default function ZantrikAccount() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [points, setPoints] = useState(100);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showPoints, setShowPoints] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:3001/api/users/getuser', {
                    headers: {
                        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                    }
                });
                const data = await response.json();
                setUser(data);
                setPoints(data.points);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    else{

        return (
            <div className='zantrik-account'>
                <div className="zantrok-screen-top-container">
                    <div className="container">
                        <div className="topbar" style={{padding: "20px 0"}}>
                            <div
                                style={{ backgroundColor: "white", width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                                onClick={() => navigate(-1)}
                            >
                                <KeyboardArrowLeft />
                            </div>
    
                            <div className='d-flex-gap'>
                                <div
                                    style={{ backgroundColor: "white", width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                                    onClick={() => navigate(-1)}
                                >
                                    <WarningRoundedIcon />
                                </div>
    
                                <div
                                    style={{ backgroundColor: "white", width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                                    onClick={() => navigate(-1)}
                                >
                                    <AutorenewIcon />
                                </div>
                            </div>
                        </div>
    
                        <div 
                            style={{fontSize: "20px", color: "white", fontWeight: "600"}}
                        > Available Zantrik Points</div>
    
                        <div style={{padding: "20px 0" , fontSize: "30px" , color: "white"}}>
                            <h1><b>{points}</b></h1>
                        </div>
    
                        <div 
                            style={{fontSize: "20px", color: "white", fontWeight: "600"}}
                        > Use zantrik points to avail free services</div>
    
                        <div className="refer_card">
                            <div>
                                <h3>
                                    <b>Refer & Win</b>
                                </h3>
                                <h3 style={{color:"gray"}}>You will get 250 points</h3>
                            </div>
    
                            <div
                                style={{ backgroundColor: "white", width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                                onClick={() => navigate(-1)}
                            >
                                <KeyboardArrowRight />
                            </div>
                            
                        </div>
                    </div>
                </div>
    
                <div className="zantrok-screen-bottom-container">
                    <div className="container">
                        <div 
                            style={{fontSize: "18px", color: "gray", fontWeight: "600"}}
                        >OFFERS AVAILABLE</div>
                    </div>
    
                    <AvailableOffer offer={"Car Washing"} points_need={"250"} />
                    <AvailableOffer offer={"Car Washing"} points_need={"250"} />
                    <AvailableOffer offer={"Car Washing"} points_need={"250"} />
    
                    <div className="container">
                        <div 
                            style={{fontSize: "18px", color: "gray", fontWeight: "600"}}
                        >EARN MORE POINTS TO GET</div>
                    </div>
    
                    <AvailableOffer offer={"Full Healthy Checkup"} points_need={"250"} />
                    <AvailableOffer offer={"Car Washing"} points_need={"250"} />
                </div>
            </div>
        )
    }

}


const AvailableOffer = ({offer, points_need}) => {
    const navigate = useNavigate();
    const handleOpenOffer = () => {
        navigate("offer");
    }

    return (
        <div className="offer-card" onClick={handleOpenOffer}>
            <div className="d-flex-gap">
                <div className="offer-image">
                    <img src={car} alt={offer} width={50}/>
                </div>
                <div className="offer-details">
                    <div className="offer-name" style={{color: "rgba(0, 0, 0, .7)"}}><h2>{offer}</h2></div>
                    <div className="offer-points-need">
                        <h3 style={{ color: "gray"}}>
                            <span>{points_need} </span>
                            <span>
                                <b>Points needed</b>
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
            <div >
                <KeyboardArrowRight style={{color: "green", fontSize: "35px"}} />
            </div>
        </div>
    )
}

