import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";

// screens
import MobileNumber from './screens/MobileNumber/MobileNumber';
import CreateAccount from './screens/CreateAccount/CreateAccount';
import Home from './screens/Home/Home';
import Zantrikpoints from './screens/ZantrikPoints/Zantrikpoints';
import ZantrikAccount from './screens/ZantrikPoints/ZantrikAccount';
import ZantrikOfferDetails from './screens/ZantrikPoints/ZantrikOfferDetails';
import Subscription from './screens/Subscription/Subscription';
import Garage from './screens/Garage/Garage';
import GarageView from './screens/Garage/GarageView';
import LandingScreen from './screens/LandingScreen/LandingScreen';
import LoginOption from './screens/LandingScreen/LoginOption';
import OrderDetails from './screens/Order/OrderDetails';

/**
 * @function App
 * @description The main application component
 * @returns {JSX.Element} The application JSX
 */
function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMobile) {
    return <div>Sorry, this application is only available on mobile devices.</div>;
  }

  return (
    <Router>
      <Routes>
         {!isMobile && <Navigate to="/landing" />}
        <Route path='/landing' element={<LandingScreen />} />
        <Route path='/login-option' element={<LoginOption />} />
        <Route path='/otp' element={<MobileNumber />} />
        <Route path='/create' element={<CreateAccount />} />
        <Route path='/' element={<Home />} />

        <Route path='/zantrikpoints' element={<Zantrikpoints />} />
        <Route path='/zantrikpoints/account' element={<ZantrikAccount />} />
        <Route path='/zantrikpoints/account/offer' element={<ZantrikOfferDetails />} />
        <Route path='/subscription' element={<Subscription />} />

        <Route path='/garage' element={<Garage />} />
        <Route path="/garage/:garageId" element={<GarageView />} />

        <Route path='/order' element={<OrderDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
