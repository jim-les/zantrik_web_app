import React, { useState, useEffect } from 'react';
import { KeyboardArrowDown } from '@mui/icons-material';
import garageImage from '../../assets/garage.jpg';
import { Wifi } from '@mui/icons-material';
import carwahImage from "../../assets/carwash.jpg";

export default function ServiceCard({ garageService, name, Image }) {
    const [isOpen, setIsOpen] = useState(false);
    const [Services, setServices] = useState([]);
    // create other const as above for Car Repair, EngineServicing


    useEffect(() => {
        const filteredServices = garageService.filter(service => service.Category === name);
        setServices(filteredServices);
    }, [garageService]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='garage-cards'>
            <div className="container d-flex-between" onClick={toggleDropdown}>
                <div className="d-flex-gap">
                    <div className="img_container">
                        <img 
                            src={Image} 
                            alt="img" 
                            width={50}
                            style={{ borderRadius: "8px" }}
                        />
                    </div>

                    <div>
                        <h3 style={{ color: "rgba(0, 0, 0, .7)" }}><b>{name}</b></h3>
                        <p>{Services.length} Services Available</p>
                    </div>
                </div>

                <KeyboardArrowDown />
            </div>

            {isOpen && (
                <div className="dropdown-content">
                    {Services.map((service, index) => (
                        <div className="container d-flex-between" onClick={toggleDropdown}>
                            <div className="d-flex-gap">
                                <div className="img_container">
                                    <img 
                                        src={carwahImage} 
                                        alt="img" 
                                        width={40}
                                        style={{ borderRadius: "8px" }}
                                    />
                                </div>
            
                                <div>
                                    <h3 style={{ color: "rgba(0, 0, 0, .7)" }}><b>{service.GarageServices_name} </b></h3>
                                    <p>{service.points} Zantrik Points </p>
                                </div>
                            </div>
            
                            <h3 style={{color: "var(--primaryColor)"}}> <b>$ {service.price}</b> </h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

