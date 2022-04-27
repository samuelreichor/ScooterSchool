// App.js

import React from "react";
import "./styles.css";
import Navbar from './components/common/Navbar';
import Welcome from './components/home/Welcome';
import AboutMe from './components/home/Aboutme';
import Information from './components/home/Information';
import Footer from './components/common/Footer';
import ContactForm from "./components/home/ContactForm";
import Anmelden from "./components/home/Anmelden";
import Termine from "./components/home/Termine"
import { CookiesProvider, CookieBannerUniversal } from 'react-cookie-banner';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";


export default function App() {
  const options = {
    timeout: 5000,
    position: positions.TOP_RIGHT
  };

  return (
    <section id="home">
      <CookiesProvider>
      <CookieBannerUniversal
        styles={{
          banner: { backgroundColor: '#000',
          height: '6vh' },
          message: { fontWeight: 400 },
          button: {backgroundColor: 'transparent', 
                  border: '2px solid #fff',
                  borderRadius: '13px',
                  color: '#fff',},
        }}
        message="Wir benutzen cookies"
        onAccept={() => {}}
        cookie="user-has-accepted-cookies"
      />
      </CookiesProvider>
      <Navbar/>
      <Welcome/>
      <AboutMe/>
      <Information/>
      <Termine/>
      <Provider template={AlertTemplate}  {...options}>
      <Anmelden/>
      </Provider>
      
      <Provider template={AlertTemplate} {...options}>
      <ContactForm/>
      </Provider>
      
      <Footer/>
    </section>
  );
}