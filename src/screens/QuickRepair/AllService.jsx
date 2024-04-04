import React from 'react';
import Topbar from './Component/Topbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import PhoneIcon from '@mui/icons-material/Phone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import image from "../../assets/Media/ic_launcher.png";
import "./style.css";
const AllService = () => {
    return (
        <div className='allctivities_screen'>
            <div style={{backgroundColor: "white"}}>

                {/* div top bar */}
                <div className='px-3'>
                    <div className='overview_top_bar py-3'>
                        <div className="back_icon">
                            <ArrowBackIcon style={{fontSize: "16px"}}/>
                        </div>

                    </div>
                </div>
                
                <div className="repair_titles">All Services</div>

                <div className="services_search_bar">
                    <input type="search" name="" id="" placeholder='Search Services' />
                </div>

                {/* services cars avialable */}
                <div className="services_cars">
                    <div className="services_car_card active"> Rahims's Car</div>
                    <div className="services_car_card"> Rahims's Car</div>
                    <div className="services_car_card"> Rahims's Car</div>
                    <div className="services_car_card"> Rahims's Car</div>
                    <div className="services_car_card"> Rahims's Car</div>
                </div>
            </div>

            {/* services item cards */}
            <div className="services_item_cards d-flex justify-content-between align-items-center">
                <div className="service_profile">
                    <img src={image} alt="" />
                </div>
                <div className="service_info">
                    <div className="service_name">Car Washing</div>
                    <div className="service_description"> 3 Services Available</div>
                </div>
                <div className="service_profile">
                    <KeyboardArrowDownIcon />
                </div>
            </div>

            <div className="services_item_cards d-flex justify-content-between align-items-center">
                <div className="service_profile">
                    <img src={image} alt="" />
                </div>
                <div className="service_info">
                    <div className="service_name">Car Washing</div>
                    <div className="service_description"> 3 Services Available</div>
                </div>
                <div className="service_profile">
                    <KeyboardArrowDownIcon />
                </div>
            </div>

            {/* text btn */}
            <div className="call_for_service_card">
                <div className="call_for_service_btn">
                    <PhoneIcon />
                    Text
                </div>
            </div>
        </div>
    )
}

export default AllService
