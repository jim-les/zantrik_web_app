import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
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
/**
 * @function App
 * @description The main application component
 * @returns {JSX.Element} The application JSX
 */
function App() {
  return (
    <Router>
        <Routes>
            <Route path='/otp' element={<MobileNumber />} />
            <Route path='/create' element={<CreateAccount />} />
            <Route path='/' element={<Home />} />

            <Route path='/zantrikpoints' element={<Zantrikpoints />} />
            <Route path='/zantrikpoints/account' element={<ZantrikAccount />} />
            <Route path='/zantrikpoints/account/offer' element={<ZantrikOfferDetails />} />
            <Route path='/subscription' element={<Subscription />} />
            
            <Route path='/garage' element={<Garage />} />
        </Routes>
    </Router>
  );
}

export default App
