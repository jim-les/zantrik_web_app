import { useNavigate } from 'react-router-dom';
import React from 'react'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function CreateAccount() {
    const navigate = useNavigate();
    const [steps, setSteps] = React.useState(1);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [checked, setChecked] = React.useState(false);

    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleSubmit = () => {
        if (checked) {
            if(steps === 1){
                setSteps(2);
            } 
            else if(steps === 2){
                navigate("/");
            }
        }
        else{
            alert("confirm your are not a robot")
        }
    };

    if (steps === 1) {
        return (
            <div className='create-account-screen'>
                <div className="container">
                    <h2>User Information</h2>
                    <TextField
                        label='Name'
                        variant='outlined'
                        type='text'
                        style={{width: "100%", margin: "1rem 0"}}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField 
                        label='Email' 
                        variant='outlined' 
                        type='email'
                        style={{width: "100%", margin: "1rem 0"}}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField 
                        label='Password' 
                        variant='outlined' 
                        style={{width: "100%", margin: "1rem 0"}}
                    />
                    <TextField
                        label='Confirm Password'
                        variant='outlined'
                        style={{width: "100%", margin: "1rem 0"}}
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={handleCheckboxChange}
                                color="primary"
                            />
                        }
                        label="I am not a robot"
                    />

                    <Button 
                        onClick={handleSubmit}
                        variant='contained'
                        style={{ width: "100%", padding: "15px 0", backgroundColor: "var(--primaryColor)", marginTop: "1rem" }} 
                    >Next</Button>
                </div>
            </div>
        )
    }

    else if (steps === 2) {
        return (
            <div className='create-account-screen'>
                <div className="container">
                    <Button 
                        href="#"
                        style={{ textAlign: "right", color: "var(--primaryColor)", marginTop: "1rem", width: "100%" }}
                        onClick={() => navigate("/")}
                    >Skip</Button>

                    <h2>Add Vehicle</h2>
                    <TextField
                        label='Vehicle Name'
                        variant='outlined'
                        type='text'
                        style={{width: "100%", margin: "1rem 0"}}
                        onChange={(e) => setName(e.target.value)}
                    />
                    
                    <Button 
                        variant='contained'
                        style={{ width: "100%", padding: "15px 0", backgroundColor: "var(--primaryColor)", marginTop: "1rem" }} 
                    >Next</Button>
                </div>
            </div>
        )
    }

    else{
        return (
            <div className='create-account-screen'>
                Error
            </div>
        )
    }
}
