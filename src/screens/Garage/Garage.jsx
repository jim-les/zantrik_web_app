import React from 'react'
import BottomNav from '../../Components/BottomNav';
import { KeyboardArrowDown } from '@mui/icons-material';
import "./style.css";
import MyTabs from './MyTabs';
import GarageCards from './GarageCards';
import ServiceCard from './ServiceCard';
import { useNavigate } from 'react-router-dom';
import carImage from "../../assets/car.png"

export default function Garage() {
    const navigate = useNavigate()
    const [value, setValue] = React.useState(0);
    const [garages, setGarages] = React.useState([]);
    const [garageService, setGarageServices] = React.useState([]);

    React.useEffect(() => {
        fetchGarages(); 
        fetchGarageServices();
    }, []); 

    const fetchGarages = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/garages'); // Assuming your API endpoint for fetching garages is /api/garages
            if (response.ok) {
                const data = await response.json();
                setGarages(data); 
                console.log(data); 
            } else {
                console.error('Failed to fetch garages');
            }
        } catch (error) {
            console.error('Error fetching garages:', error);
        }
    };

    const fetchGarageServices = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/garage-services'); // Assuming your API endpoint for fetching garages is /api/garages
            if (response.ok) {
                const data = await response.json();
                setGarageServices(data); 
                console.log(data); 
            } else {
                console.error('Failed to fetch garages services');
            }
        } catch (error) {
            console.error('Error fetching garages services:', error);
        }
    };



    return (
        <div className='garage-screen'>

            <div className="garage-topbar">
                <div className="container">
                    <div className="d-flex-between">
                        <div>
                            <h1>Current Location</h1>
                            <p className='d-flex-gap'>Pallabi jhilpar, Dhaka <KeyboardArrowDown /> </p>
                        </div>

                        <div 
                            className="d-flex-gap"
                            style={{ backgroundColor: "var(--secondaryColor)", padding: "8px 10px", borderRadius: "30px" }}
                        >
                            <h4>Car</h4>
                            <KeyboardArrowDown />
                        </div>
                    </div>

                    <div style={{ paddingTop: "20px"}}>
                        <MyTabs  setValue={setValue} value={value}/>
                    </div>
                </div>

            </div>

            {value === 0 && (
                <div className="garage_list_items">
                    <GarageCards garages={garages} />
                </div>
            )}

            {value === 1 && (
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
                                <p style={{color: "var(--primaryColor)"}}>120 Zantrik points</p>
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
                                <p style={{color: "var(--primaryColor)"}}>120 Zantrik points</p>
                            </div>
                        </div>

                        <h3 style={{color: "var(--primaryColor)"}}><b>$ 800</b></h3>
                    </div>
                </div>
            )}

            <BottomNav />
        </div>
    )
}
