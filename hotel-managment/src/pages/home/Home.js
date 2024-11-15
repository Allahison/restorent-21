import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import Navbar from '../../components/navbar/Navbar';
import MenuPage from '../menu/MenuPage';
import About from '../about/About';
import ContactUs from '../contectus/ContactUs';
import Welcome from '../welcome/Welcome';

export default function Home() {
  
  return (
    <div>
      <div>
        
       
        <Navbar/>
        <Welcome/>
        <MenuPage />
        <About/>
        <ContactUs/>
      </div>
    </div>
  );

}