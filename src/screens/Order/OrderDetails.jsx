import React, {useEffect, useState} from 'react'
import PrintIcon from '@mui/icons-material/Print';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowRigthIcon from '@mui/icons-material/KeyboardArrowRight';
import image from "../../assets/Media/ic_launcher.png";
import WifiIcon from '@mui/icons-material/Wifi';
import BottomNav from '../../Components/BottomNav';
import "./style.css";

const OrderDetails = () => {
    const [orderNumber, setOrderNumber] = useState("#34266");
    const [totalBill, setTotakBill] = useState(1550);
    const [deliveryLocation, setDeliveryLocation] = useState("Pollabi Jhilpar, Dhaka");
    const [selectedVehicle, setSelectedVehicle] = useState("Rahim's Car");
    const [serviceDate, setServiceDate] = useState("July 21, 2022");
    const [serviceTime, setServiceTime] = useState("6:30 PM");
    return (
        <div className="order-details">
            <div className="order_top_bar">
                <div className="back_icon">
                    <ArrowBackIcon style={{fontSize: "16px"}}/>
                </div>

                <div className="print_icon">
                    <PrintIcon style={{fontSize: "22px"}}/>
                </div>
            </div>

            {/* confirm oder title */}
            <div className="order_titles d-flex justify-content-between" style={{display: "flex", justifyContent: "space-between"}}>
                <span>Order Details</span>
                <span style={{fontSize: "16px"}}>{orderNumber}</span>
            </div>
            
            {/* order package */}
            <div className="order_packages_list">
                <div className="item services_item_cards d-flex justify-content-between align-items-center py-2">
                    <div className="service_profile">
                        <img src={image} alt=""  style={{ width:"50px"}}/>
                    </div>
                    <div className="service_info">
                        <div className="service_name">Car Washing</div>
                        <div className="service_description"> 3 Services Available</div>
                    </div>
                    <div className="service_profile">
                        <KeyboardArrowRigthIcon />
                    </div>
                </div>

                <div className="item packages_items" style={{padding: "10px "}}>
                    <div className="location_of_the_package d-flex align-items-center gap-2 py-0" style={{display: "flex", gap: "10px"}}>
                        <WifiIcon style={{fontSize: "14px"}}/>
                        <span>330 meter away </span>
                        .
                        <span className='isOpen'>Open</span>
                    </div>
                    <div className="workshop d-flex justify-content-between align-items-center" style={{display: "flex", justifyContent: "space-between"}}>
                        <div className="package_name">Rumman Workshop</div>
                        <div className="package_price"><b>$ 1400</b></div>
                    </div>

                    <div className="point_to_earn">
                        Earn 120 points
                    </div>
                </div>
            </div>

            <div className="order_items_details">
                {/* delivery location */}
                <div className="item services_item_cards d-flex align-items-center gap-4 py-2">
                    <div className="service_profile">
                    <img src={image} alt=""  style={{ width:"50px"}}/>

                    </div>
                    <div className="service_info">
                        <div className="service_name" style={{fontSize: "18px"}}>Delivery Location</div>
                        <div className="service_description"> {deliveryLocation}</div>
                    </div>
                </div>

                {/* selected vehcle  */}
                <div className="item services_item_cards d-flex align-items-center gap-4 py-2">
                    <div className="service_profile">
                        <img src={image} alt="" />
                    </div>
                    <div className="service_info">
                        <div className="service_name" style={{fontSize: "18px"}}>Selected Vehicle</div>
                        <div className="service_description"> {selectedVehicle} </div>
                    </div>
                </div>

                {/* service Date */}

                <div className="item services_item_cards d-flex align-items-center gap-4 py-2">
                    <div className="service_profile">
                        <img src={image} alt="" />
                    </div>
                    <div className="service_info ">
                        <div className="service_name" style={{fontSize: "18px"}}>Service Date</div>
                        <div className="service_description"> {serviceDate} </div>
                    </div>
                </div>

                {/* Service time */}
                <div className="item services_item_cards d-flex align-items-center gap-4 py-2">
                    <div className="service_profile">
                    <img src={image} alt=""  style={{ width:"50px"}}/>

                    </div>
                    <div className="service_info">
                        <div className="service_name" style={{fontSize: "18px"}}> Service Time </div>
                        <div className="service_description"> {serviceTime} </div>
                    </div>
                </div>

                <div className="total_bill pt-3">
                    <div className="item services_item_cards d-flex align-items-center justify-content-between">
                        <div className="service_profile d-flex gap-2 align-items-center" style={{display: "flex", gap: "20px"}}>
                            <img src={image} alt="" />
                            <div className="service_info">
                                <div className="service_name">Total Bill & Other Cost</div>
                                    <div className="service_description">{totalBill}</div>
                            </div>
                        </div>

                        <div>
                            <KeyboardArrowRigthIcon/>
                        </div>
                    </div>
                </div>
            </div>
            <BottomNav/>

        </div>
    )
}

export default OrderDetails
