import React from 'react';
import { Tabs, Tab } from '@mui/material';

export default function MyTabs({ setValue, value }) {

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Tabs 
            value={value} 
            onChange={handleChange}
            TabIndicatorProps={{
                style: { backgroundColor: 'var(--primaryColor)', height: "3px" }
            }}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
            }}
        >
            <Tab 
                label="Garage List" 
                sx={{
                    color: "black", 
                    fontWeight: 800,
                    width: '50%',
                    textAlign: 'center',
                    '&.Mui-selected': {
                        color: 'var(--primaryColor)',
                    }
                }} 
            />
            <Tab 
                label="Service List" 
                sx={{
                    color: "black", 
                    fontWeight: 800, 
                    width: '50%', 
                    textAlign: 'center',
                    '&.Mui-selected': {
                        color: 'var(--primaryColor)',
                    }
                }} 
            />
        </Tabs>
    );
}
