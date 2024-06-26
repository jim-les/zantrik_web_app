import React from 'react';
import garageImage from '../../assets/garage.jpg';
import { Wifi } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function GarageCards({ garages }) {
    const navigate = useNavigate();

    const handleClick = (garageId) => {
        navigate(`/garage/${garageId}`); // Assuming the route is '/garage/:garageId' where :garageId is the dynamic parameter
    };

    return (
        <div className='garage-card'>
            {garages.map((garage) => (
            <div key={garage.Garage_id} className="card d-flex-gap garage-cards" onClick={() => handleClick(garage.Garage_id)}>
                <div className="container d-flex-gap">
                    <div className="img_container">
                        <img 
                            src={garageImage} 
                            alt="img" 
                            width={60}
                            style={{ borderRadius: "8px" }}
                        />
                    </div>

                    <div>
                        <div style={{ display: "flex", gap: "20px", alignItems: "center", width: "100%" }} >
                            <span> <Wifi style={{ fontSize: "15px"}} /> {garage.distance} meter away </span>
                            <span className='garaga-card-discount'>UPTO {garage.discount} OFF</span>
                        </div>
                        <h3><b>{garage.Garage_name}</b></h3>
                        <p>{garage.location}</p>
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
}
