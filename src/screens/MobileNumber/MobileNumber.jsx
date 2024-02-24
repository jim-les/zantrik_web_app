import React from 'react';
import "./MobileNumber.css";

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { isEditable } from '@testing-library/user-event/dist/utils';
import TextField from '@mui/material/TextField';

export default function MobileNumber() {
    const [phoneNumber, setValue] = React.useState();
    const [sending, setSending] = React.useState(false);
    const [verify, setVerify] = React.useState(false);
    const [isSentOtp, setSentOtp] = React.useState(false);
    const [verificationCode, setVerificationCode] = React.useState('');
    const navigate = useNavigate();

    const handleOnChange = value => {
        setValue(value);
    }

    const handleVerificationCodeChange = (event) => {
        setVerificationCode(event.target.value);
    };

    const handleSendOTP = () => {
        setSending(true);
        sessionStorage.setItem("zotpc", true);  
        setSentOtp(true);
    }

    const handleVerifyOTP = () => {
        setVerify(true);
        navigate("/create");
    }

    return (
        <div className='mobile-number-screen'>
            
            <div className="container">
                {/* enter number bold text and phonenumber input with send verifiction button */}
                <div className="mobile-number-screen-content">
                    
                    {!isSentOtp ? (
                        <>
                            <h2 className="bold-text">Enter your mobile number</h2>
                            <PhoneInput
                                containerStyle={{ width: '100%', height: '60px', margin: "25px 0" }} 
                                inputStyle={{ width: '100%', height: '100%' }} 
                                // dropdownStyle={{ width: '100%' }} 
                                // buttonStyle={{ height: '100%' }} 
                                country={'ke'} 
                                value={phoneNumber}
                                onChange={handleOnChange}
                                variant="standard"
                            />
                            <Button 
                                onClick={handleSendOTP}
                                variant="contained" 
                                className='send-otp-button primry-color'
                                style={{ width: "100%", padding: "15px 0", backgroundColor: "var(--primaryColor)" }} 
                            > {sending ? 'Sending otp...' : 'Send OPT'} </Button>
                        </>
                    ) : (
                        <>
                            <h2 clsendingassName="bold-text">Verify OTP</h2>
                            <TextField
                                label="Code"
                                variant="standard"
                                value={verificationCode}
                                onChange={handleVerificationCodeChange}
                                fullWidth
                                style={{ margin: '1.5rem 0', textAlign: "center" }}
                            />
                            <Button 
                                onClick={handleVerifyOTP}
                                variant="contained" 
                                className='send-otp-button primry-color'
                                style={{ width: "100%", padding: "15px 0", backgroundColor: "var(--primaryColor)", marginTop: "1rem" }} 
                            > {verify ? 'Verifying...' : 'Verify'} </Button>

                            <Button 
                                href="#text-buttons"
                                style={{ textAlign: "center", color: "var(--primaryColor)", marginTop: "1rem" }}
                                onClick={() => sessionStorage.setItem("zotpc", false)}
                            >Change Number</Button>
                        </>
                    )}
                </div>
            </div>

        </div>
    )
}
