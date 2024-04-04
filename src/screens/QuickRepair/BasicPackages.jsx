import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FilterIcon from '@mui/icons-material/Filter';
import WifiIcon from '@mui/icons-material/Wifi';

import "./style.css";

const BasicPackages = () => {
    return (
        <div className='basic_packages_screen'>
            {/* div top bar */}
            <div className='px-3'>
                <div className='package_top_bar py-3'>
                    <div className="back_icon">
                        <ArrowBackIcon style={{fontSize: "16px"}}/>
                    </div>

                    <div className="screen_title">
                        <div className="sub_title">CAR WASHING</div>
                        <div className="main_title">Basic Package</div>
                    </div>

                    <div className="filter_icon">
                        <FilterIcon style={{fontSize: "16px"}}/>
                    </div>

                </div>
            </div>

            <div style={{ fontWeight: "800", fontSize: "20px", padding: "20px" }}>
                Package garage from the list
            </div>

            <div>
                <div className="packages_items">
                    <div className="location_of_the_package d-flex align-items-center gap-2">
                        <WifiIcon />
                        <span>330 meter away </span>
                        .
                        <span className='isOpen'>Open</span>
                    </div>
                    <div className="workshop d-flex justify-content-between align-items-center">
                        <div className="package_name">Rumman Workshop</div>
                        <div className="package_price">$ 1400</div>
                    </div>

                    <div className="point_to_earn">
                        Earn 120 points
                    </div>
                </div>

                <div className="packages_items">
                    <div className="location_of_the_package d-flex align-items-center gap-2">
                        <WifiIcon />
                        <span>330 meter away </span>
                        .
                        <span className='isOpen'>Open</span>
                    </div>
                    <div className="workshop d-flex justify-content-between align-items-center">
                        <div className="package_name">Rumman Workshop</div>
                        <div className="package_price">$ 1400</div>
                    </div>

                    <div className="point_to_earn">
                        Earn 120 points
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasicPackages
