import React, { useState, useEffect } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowRigthIcon from '@mui/icons-material/KeyboardArrowRight';
import BottomNavigationWidget from '../../components/BottomNavigationWidget';
import "./style.css";
import { CheckBox } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const ConfirmOrder = () => {
    const [deliveryType, setDeliveryType] = useState("garrage");
    const [subTotal, setSubTotal] = useState(1400);
    const [vat, setVat] = useState(0);
    const [discount, setDiscount] = useState(100);
    const [deliveryCharge, setDeliveryCharge] = useState(250);
    const [total, setTotal]  = useState();
    const [token, setToken] = useState()

    useEffect(() => {
        setTotal(subTotal - discount + deliveryCharge);
    }, [subTotal]);

    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, [token]);

    const navigate = useNavigate();

    const handleDeliveryMethod = (method) => {
        setDeliveryType(method);
    };


    const handleConfirmOrder = () => {
        const orderData = {
            order_name: 'Sample Order',
            description: 'Lorem ipsum dolor sit amet',
            price: 50.99,
            deliveryType: 'Express' // Assuming deliveryType is a string value
        };

        const config = {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        };

        // Send the POST request
        axios.post('http://localhost:3001/api/orders', orderData, config)
            .then(response => {
            console.log('Order created successfully:', response.data);
        })
            .catch(error => {
            console.error('Error creating order:', error.response.data);
        });
    }


    return (
        <div className='confirmOrder'>
            <div className="order_top_bar">
                <div className="back_icon">
                    <ArrowBackIcon style={{fontSize: "16px"}}/>
                </div>
            </div>

            {/* confirm oder title */}
            <div className="order_titles">Confirm Order</div>

            {/* CHOOSE DELIVERY METHOD */}
            <div className="choose_delivery_method">CHOOSE YOUR DELIVERY METHOD</div>
            <div className="d-flex justify-content-between align-items-center gap-3 deliveryType" style={{padding: "10px 20px"}}>
                {/* Assign 'active' class based on selected deliveryType */}
                <button className={`garrage_pickup ${deliveryType === "garrage" ? "active" : ""}`} onClick={() => handleDeliveryMethod("garrage")}>Garrage Pickup</button>
                <button className={`home_delivery ${deliveryType === "home" ? "active" : ""}`} onClick={() => handleDeliveryMethod("home")}>Home Delivery</button>
            </div>

            <div className="order_options">
                <div className='d-flex gap-3'>
                    <EditIcon />

                    {deliveryType === "garrage" ? (
                       
                       <div>
                            <div className="oder_option_name">Select Garrage</div>
                            <div>adadaa dada aa</div>
                        </div>

                    ) : (
                        <div>
                            <div className="oder_option_name">Select Address</div>
                            <div>Mirpur DOHS 2213</div>
                        </div>
                    )}

                </div>


                <div className="end_icons">
                    {/* <input type="checkbox" name="isSelectGarage" id="isSelectGarage" /> */}
                    <KeyboardArrowRigthIcon />
                </div>

            </div>

            <div className="order_options">
                <div className='d-flex gap-3'>
                    <EditIcon />

                    <div>
                        <div className="oder_option_name">Coupon Code (if any)</div>
                        <div>Not Applied</div>
                    </div>

                </div>


                <div className="end_icons">
                    <KeyboardArrowRigthIcon />
                </div>

            </div>

            <div className="confirm_order_details">
                <div className="my-2 d-flex justify-content-between align-items-center">
                    <div style={{fontWeight: "800", color: "gray", fontSize: "18px"}}>Subtotal</div>
                    <div style={{fontWeight: "800", color: "black", fontSize: "18px"}} >${subTotal}</div>
                </div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                    <div style={{fontWeight: "800", color: "gray", fontSize: "18px"}}>Vat</div>
                    <div style={{fontWeight: "800", color: "black", fontSize: "18px"}}>{vat}</div>
                </div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                    <div style={{fontWeight: "800", color: "gray", fontSize: "18px"}}>Discount</div>
                    <div style={{fontWeight: "800", color: "green", fontSize: "18px"}}>-${discount} </div>
                </div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                    <div style={{fontWeight: "800", color: "gray", fontSize: "18px"}}>Delivery charge</div>
{                    <div style={{fontWeight: "800", color: "black", fontSize: "18px"}}>${deliveryCharge}</div>
}                </div>

                <div className="my-2 d-flex justify-content-between align-items-center">
                    <div style={{fontWeight: "800", color: "black", fontSize: "18px"}}>Total</div>
                    <div style={{fontWeight: "800", color: "black", fontSize: "18px"}}>${total}</div>
                </div>

                <div className="warranty">
                    1,333/month EMI 3 - 36 months
                </div>

                <div className="confirm_order_btn">
                    <button className="btn" onClick={() => navigate("/oderdetails")}>Confirm</button>
                </div>
            </div>

        </div>
    )
}

export default ConfirmOrder
