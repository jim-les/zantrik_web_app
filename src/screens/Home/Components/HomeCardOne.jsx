import React from 'react'
import { Box, Typography, CardMedia } from '@mui/material';

export default function HomeCardOne({ label, service, icon, reversed}) {

    if (reversed){
        return (
            <div className='home-card-one'
                style={{ backgroundColor: "var(--secondaryColor)", padding: "5px 20px", borderRadius: "8px", margin: "15px 0", display: "flex", alignItems: "center", justifyContent: "space-between",  }}
            >
                <div className="right_section">
                    <img 
                        src={icon}
                        alt="" 
                        width={100}
                    />
                </div>
                <div className="left_section">
                    <p style={{color: "gray"}}> <b>{label}</b> </p>
                    <h2><b>{service} </b></h2>
                </div>

            </div>
        )
    }

    else{
        return (
            <div className='home-card-one'
                style={{ backgroundColor: "var(--secondaryColor)", padding: "5px 20px", borderRadius: "8px", margin: "15px 0", display: "flex", alignItems: "center", justifyContent: "space-between",  }}
            >
                <div className="left_section">
                    <p style={{color: "gray"}}> <b>{label}</b> </p>
                    <h2><b>{service} </b></h2>
                </div>

                <div className="right_section">
                    <img 
                        src={icon}
                        alt="" 
                        width={100}
                    />
                </div>
            </div>
        )   
    }
   
}
