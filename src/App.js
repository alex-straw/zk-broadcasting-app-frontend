import {React, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Create from './pages/create';
import Contact from './pages/contact';
// import SignUp from './pages/signup';
import { UserContext } from "./helpers/UserContext"

function App() {

    // Address of Metamask user
    const [address, setAddress] = useState();
    // Signer to enable user to interact with contracts
    const [signer, setSigner] = useState();
    // Context containing user address and signer object to be reused across app
    const userContext = { address, setAddress, signer, setSigner };

  return (
    <UserContext.Provider value={userContext}>
        <Router>
        <Navbar />
        <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/create' element={<Create/>} />
            <Route path='/contact-us' element={<Contact/>} />
            {/* <Route path='/sign-up' element={<SignUp/>} /> */}
        </Routes>
        </Router>
    </UserContext.Provider>
  );
}

export default App;