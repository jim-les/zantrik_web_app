import React from 'react'
import { KeyboardArrowDown } from '@mui/icons-material';
import garageImage from '../../assets/garage.jpg';
import { Wifi } from '@mui/icons-material';

export default function ServiceCard() {
    return (
        <div className='garage-cards '>
            <div className="container d-flex-between">
                <div className=" d-flex-gap">
                    <div className="img_container">
                        <img 
                            src={garageImage} 
                            alt="img" 
                            width={50}
                            style={{borderRadius: "8px", }}
                        />
                    </div>

                    <div>
                        <h3 style={{color: "rgba(0, 0, 0, .7)"}}><b>Cleaning</b></h3>
                        <p>3 Services Available</p>
                    </div>
                </div>

                <KeyboardArrowDown />
            </div>
        </div>
    )
}
