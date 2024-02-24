import React from 'react';
import { Tabs, Tab } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
export default function MyTabs( { setValue, value}) {
    const navigate = useNavigate();

    React.useEffect(() => {
        if(value === 0){
            navigate("/garage");
        } else{
            navigate("/service");
        }
    }, [value]);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Tabs value={value} onChange={handleChange} centered
            TabIndicatorProps={{
                style: { backgroundColor: 'ar(--primaryColor)', height: "3px" }
            }}>
            <Tab label="Maintenance" sx={{
                '&.Mui-selected': {
                    color: 'var(--primaryColor)',
                    fontWeight: 800
                }
            }} />
            <Tab label="Vehicle" sx={{
                '&.Mui-selected': {
                    color: 'var(--primaryColor)',
                    fontWeight: 800
                }
            }} />
            <Tab label="Parking" sx={{
                '&.Mui-selected': {
                    color: 'var(--primaryColor)',
                    fontWeight: 800
                }
            }} />
            <Tab label="Driver" sx={{
                '&.Mui-selected': {
                    color: 'var(--primaryColor)',
                    fontWeight: 800
                }
            }} />
        </Tabs>
    );
}
