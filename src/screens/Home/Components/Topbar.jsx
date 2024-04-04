import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@mui/material';
import { Notifications, AccountCircle } from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className='home-top-bar' style={{height: "100%", marginBottom: "40px"}}>
            <AppBar position="fixed" elevation={0} style={{padding: "10px 0", backgroundColor: "white"}} >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'white', color: "black" }}>
                    <Typography variant="h5" component="div" fontWeight="bold">
                        Dirack
                    </Typography>
                    <div>
                        <IconButton color="inherit" >
                            <Badge badgeContent={1} color="error">
                                <Notifications />
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit" style={{ backgroundColor: 'white' }}>
                            <AccountCircle />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
