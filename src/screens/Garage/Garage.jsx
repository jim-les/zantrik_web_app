import React from 'react'
import BottomNav from '../../Components/BottomNav';
import { KeyboardArrowDown } from '@mui/icons-material';
import "./style.css";
import MyTabs from './MyTabs';
import GarageCards from './GarageCards';
import ServiceCard from './ServiceCard';
import { useNavigate } from 'react-router-dom';

export default function Garage() {
    const navigate = useNavigate()
    const [value, setValue] = React.useState(0);
    const [garages, setGarages] = React.useState([]);

    React.useEffect(() => {
        fetchGarages(); // Fetch garages when the component mounts
    }, []); // Empty dependency array to only run once when mounted

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
                    <ServiceCard />
                </div>
            )}
            


            


            <BottomNav />
        </div>
    )
}
