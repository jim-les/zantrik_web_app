import React, { useEffect } from 'react'
import webTitle from '../../assets/Media/assets_images_navbar_top_navbar_zantrik_logo.png'
// style css
import "./style.css";
import { useNavigate } from 'react-router-dom';


const LandingScreen = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/login-option")
        }, 5000);
    }, [])

    return (
        <div className="LandingScreenContainer">
            {/* <p className='web_title_lading_page'>WEB TITLE</p> */}
            <img src={webTitle} alt="" />
        </div>
    )
}


export default LandingScreen
