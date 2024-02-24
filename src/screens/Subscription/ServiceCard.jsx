import React from 'react'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

export default function ServiceCard( { service_name }) {
    return (
        <div className='service-card'>
            <div>
                <h3>{ service_name.Subscription.subscription_name}</h3>
                <p style={{width: "70%"}}> { service_name.Subscription.description}</p>

            </div>

            <KeyboardArrowRight />
        </div>
    )
}
