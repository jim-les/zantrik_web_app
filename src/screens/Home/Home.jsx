import React from 'react'
import Topbar from './Components/Topbar';
import HomeCardOne from './Components/HomeCardOne';
import "./Home.css"
// icons
import zantrikIcon from '../../assets/car.png';
import repairIcon from '../../assets/car-repair.png';
import car from '../../assets/car.png';
import digitalIcon from  '../../assets/gas-pump.png';
import digitalDriver from "../../assets/driver (1).png";
import driver from '../../assets/driver.png';
import sellCrarIcon from '../../assets/car-money.png';
import { AddTask } from '@mui/icons-material';
import BottomNav from '../../Components/BottomNav';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className='home-screen'>
            <div className="container">
                <Topbar />
                <Link to="/zantrikpoints" style={{ textDecoration: 'none'}}>
                    <div  style={{marginTop: '80px', textDecoration: 'none'}}>

                    <HomeCardOne label={"We have introduced"} service={"Darick Points"} icon={zantrikIcon} reversed={false} />
                    </div>
                </Link>

                <div 
                    className="add_vehicle"
                    style={{ backgroundColor: "var(--primaryColor)", height: "200px", width: "100%", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", textAlign: "center" }}
                >
                    <div>
                        <AddTask style={{ fontSize: "50px" }} />
                        <h1>Add vehicle to claim</h1>
                        <p>Free Health Checkup</p>
                    </div>
                </div>

                <HomeCardOne label={"Need Repair"} service={"For vehicle?"} icon={repairIcon} reversed={false}/>

                <HomeCardOne label={"Need Driver"} service={"Add/Hire driver"} icon={driver} reversed={true}/>

                <HomeCardOne label={"Want a new car?"} service={"Buy from here"} icon={car} reversed={false}/>

                <HomeCardOne label={"Sell your old car"} service={"At a decent price"} icon={sellCrarIcon} reversed={true}/>

                {/* div with two cards digital refuel and difital driver bothe have images and are aligned in flex */}
                <div className="home-cards-container">

                    <div className="home-card-one digital-card">
                        <h2>Digital <br />Refuel</h2>
                        <img 
                            src={digitalIcon}
                            alt="" width={200} />

                    </div>
                    <div className="home-card-two digital-card">
                        <h2>Digital <br />Driver</h2>
                        <img
                            src={digitalDriver}
                            alt="" width={200} />

                    </div>

                </div>

            </div>

            <BottomNav />
        </div>
    )
}
