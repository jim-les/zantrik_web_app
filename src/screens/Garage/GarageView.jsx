import React from 'react'
import { useNavigate } from 'react-router-dom';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';

export default function GarageView() {
    const navigate = useNavigate();

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

                    <h2>Rumman Workshop</h2>
                </div>
            </div>
        </div>
    )
}

