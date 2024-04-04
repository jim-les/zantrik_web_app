import Recat from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import zantrikointImage from "../../assets/Media/login-content-img.png";
import { Button } from "@mui/material";

const LoginOption = () => {
    const navigate = useNavigate();

    return (
        <div className="login-option">
            <div>
                <h1>Your vehicle</h1>
                <h1>Zantrik's responsiblity</h1>

                <img src={zantrikointImage} alt="" />

                <h2>Sign In</h2>

                <Button 
                    onClick={()=> navigate("/otp")}
                    variant='contained'
                    style={{ width: "100%", padding: "15px 0", backgroundColor: "var(--primaryColor)", marginTop: "1rem" }} 
                >With mobile phone</Button>
            </div>

        </div>
    )
}

export default LoginOption;