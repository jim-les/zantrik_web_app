import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';

const Topbar = () => {
    return (
        <div className='overview_top_bar py-3'>
            <div className="back_icon">
                <ArrowBackIcon style={{fontSize: "16px"}}/>
            </div>

            <div className="edit_icon">
                <EditIcon style={{fontSize: "16px"}}/>
            </div>

        </div>
    )
}

export default Topbar;
