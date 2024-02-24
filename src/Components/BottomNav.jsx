import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, Subscriptions, LocalParking, ShoppingBasket } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export default function BottomNav() {
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            style={{ position: 'fixed', bottom: 0, width: '100%' }}
        >
            <BottomNavigationAction label="Home" icon={<Home />} component={NavLink} to="/" />
            <BottomNavigationAction label="Subscription" icon={<Subscriptions />} component={NavLink} to="/subscription" />
            <BottomNavigationAction label="Garage" icon={<LocalParking />} component={NavLink} to="/garage" />
            <BottomNavigationAction label="Shop" icon={<ShoppingBasket />} component={NavLink} to="/shop" />
        </BottomNavigation>
    );
}
