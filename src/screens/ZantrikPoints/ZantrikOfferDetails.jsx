import React from 'react'
import { CheckCircle } from '@mui/icons-material';
import { Button } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

import { useNavigate } from 'react-router-dom';
import "./ZantrikPoints.css";

export default function ZantrikOfferDetails() {
    const navigate = useNavigate();
    const [details, setDetails] = React.useState("Washing: This involves using water, soap, and specialized cleaning equipment to remove dirt, grime, and other debris from the vehicle's exterior surfaces.Waxing: Applying wax to the vehicle's paint surface to provide protection and enhance shine.Polishing: Buffing the vehicle's paint to remove minor scratches and swirl marks, restoring its shine and smoothness.")
    return (
        <div className='zantrik-details'>
            <div 
                className="top_container"
                style={{height: "32vh"}}
            >
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
                                style={{ backgroundColor: "var(--secondaryColor)", width: "50px", height: "50px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                                onClick={() => navigate(-1)}
                            >
                                <WarningRoundedIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">

                <h2>Car Washing</h2>

                <h3 style={{color: "gray", padding: "20px 0"}}> <b>Details</b> </h3>
                <div className="car_offer_details">
                    <p
                        style={{ fontSize: "20px"}}
                    >{details} </p>
                </div>

                <div className="points_used_card">
                    <div>
                        <h2>1280</h2>
                        <h3 style={{color: "gray", padding: "7px 0"}}> <b>Points will be used</b> </h3>
                    </div>

                    <div>
                        <CheckCircle style={{color: "green", fontSize: "28px"}} />
                    </div>
                </div>

                <Button 
                    variant='contained'
                    style={{ width: "100%", padding: "15px 0", backgroundColor: "var(--primaryColor)", marginTop: "1rem" }} 
                >Next</Button>
            </div>
        </div>
    )
}
