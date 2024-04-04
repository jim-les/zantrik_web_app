import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';
import { PinDrop } from '@mui/icons-material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import GarageImage from "../../assets/garage.jpg";
import "./style.css";
import GarageCards from './GarageCards';
import ServiceCard from './ServiceCard';
import carImage from "../../assets/car.png"


export default function GarageView() {
    const navigate = useNavigate();
    const { garageId } = useParams();
    const [garage, setGarage] = useState({});
    const [garageService, setGarageServices] = useState([]);
    const [value, setValue] = React.useState(0);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        fetchGarageData();
        fetchGarageServices();
    }, []); 

    
    const fetchGarageData = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/garages/${garageId}`);
            if (response.ok) {
                const data = await response.json();
                setGarage(data);
            } else {
                console.error('Failed to fetch garage data');
            }
        } catch (error) {
            console.error('Error fetching garage data:', error);
        }
    };

    const fetchGarageServices = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/garage-services');
            if (response.ok) {
                const data = await response.json();
                setGarageServices(data); 
            } else {
                console.error('Failed to fetch garage services');
            }
        } catch (error) {
            console.error('Error fetching garage services:', error);
        }
    };


    return (
        <div className=''>
            <div className="tobar">
                <div className="container d-flex-gap">
                    <div
                        style={{ backgroundColor: "lightgray", width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                        onClick={() => navigate(-1)}
                    >
                        <KeyboardArrowLeft />
                    </div>

                    <h2><h2>{garage.Garage_name}</h2></h2>
                </div>
            </div>

            <div class="image-container">
                <img src={GarageImage} alt="Image 1" />
                <img src={GarageImage} alt="Image 2" />
                <img src={GarageImage} alt="Image 3" />
            </div>

            <div className="container d-flex-between">
                <div>
                    <h3><b>29/A, Mirpur 12 , Dhaka</b></h3>
                    <p>
                        <span>Open - </span>
                        <span> Closes 10:30 PM</span>
                    </p>
                </div>
                <div
                    style={{ backgroundColor: "var(--secondaryColor)", width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                    onClick={() => navigate(-1)}
                >
                    <PinDrop />
                    
                </div>

            </div>

            <Tabs 
                value={value} 
                onChange={handleChange}
                TabIndicatorProps={{
                    style: { backgroundColor: 'var(--primaryColor)', height: "3px" }
                }}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: "10px 0"
                }}
            >
                <Tab 
                    label="Engine Service" 
                    sx={{
                        color: "black", 
                        fontWeight: 800,
                        textAlign: 'center',
                        '&.Mui-selected': {
                            color: 'var(--primaryColor)',
                        }
                    }} 
                />
                <Tab 
                    label="Paint" 
                    sx={{
                        color: "black", 
                        fontWeight: 800, 
                        textAlign: 'center',
                        '&.Mui-selected': {
                            color: 'var(--primaryColor)',
                        }
                    }} 
                />

                <Tab 
                    label="Dent" 
                    sx={{
                        color: "black", 
                        fontWeight: 800, 
                        textAlign: 'center',
                        '&.Mui-selected': {
                            color: 'var(--primaryColor)',
                        }
                    }} 
                />

                <Tab 
                    label="Others" 
                    sx={{
                        color: "black", 
                        fontWeight: 800, 
                        textAlign: 'center',
                        '&.Mui-selected': {
                            color: 'var(--primaryColor)',
                        }
                    }} 
                />
            </Tabs>


            <div className="garage-service-container">
                <div className="service_list_items">
                    <ServiceCard garageService={garageService} name="Cleaning" Image={carImage} />

                    <div className="container d-flex-between">
                        <div className="d-flex-gap">
                            <div className="img_container">
                                <img 
                                    src={carImage} 
                                    alt="img" 
                                    width={50}
                                    style={{ borderRadius: "8px" }}
                                />
                            </div>

                            <div>
                                <h3 style={{ color: "rgba(0, 0, 0, .7)" }}><b>Full Health Checkup </b></h3>
                                <p style={{color: "var(--primaryColor)"}}>120 Darikpoints</p>
                            </div>
                        </div>

                        <h3 style={{color: "var(--primaryColor)"}}><b>$ 250</b></h3>
                    </div>

                    <ServiceCard garageService={garageService} name="Car Repair" Image={carImage} />
                    <ServiceCard garageService={garageService} name="Engine Servicing" Image={carImage} />

                    <div className="container d-flex-between">
                        <div className="d-flex-gap">
                            <div className="img_container">
                                <img 
                                    src={carImage} 
                                    alt="img" 
                                    width={50}
                                    style={{ borderRadius: "8px" }}
                                />
                            </div>

                            <div>
                                <h3 style={{ color: "rgba(0, 0, 0, .7)" }}><b>Full Health Checkup </b></h3>
                                <p style={{color: "var(--primaryColor)"}}>120 Darikpoints</p>
                            </div>
                        </div>

                        <h3 style={{color: "var(--primaryColor)"}}><b>$ 800</b></h3>
                    </div>
                </div>
            </div>



        </div>
    )
}

