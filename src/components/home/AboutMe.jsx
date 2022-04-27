import React from "react";
import './AboutMe.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-scroll";

import aboutMeImg from '../../assets/Samuelreichoer.jpeg';


const AboutMe = () => {
    return (
        <section id="aboutme">
                 <div class="flex-container-about">
            <div class="flex-items-about">
                <h1 className="about-h1-left">Über mich</h1>
            </div>
            <div class="flex-items-about">
               
                        <div className = "shadow">
                            <div className = "about-image">
                                <img src = {aboutMeImg} alt = "about-image"/>
                            </div>
                        </div>
                            <h2 className="about-h2-left">Samuel Reichör</h2>
                            <h3 className="about-h3-left">19, aus linz</h3>

                            <ul className = "icons-about curser-pointer">
                                <li>
                                    <a target="_blank" className="curser-pointer" href="https://www.facebook.com/scooterschool.at">
                                        <FaFacebookF/> 
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" className="curser-pointer" href="https://instagram.com/samisstreetplaza?utm_medium=copy_link">
                                        <FaInstagram/>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" className="curser-pointer" href="">
                                    <FaYoutube/>
                                    </a>                                   
                                </li>    
                            </ul>
                    
             </div>
            <div class="flex-items-about">
                <h1 className="about-h1-right">Hey<span>!</span></h1>

                <div className = "about-btns">
                    <Link to="contact" smooth={true} duration={1000}>
                        <button type = "button" className = "btn btn-tuerkis">Kontakt</button>
                    </Link>
                    <Link to="anmelden" smooth={true} duration={1000}>
                        <button type = "button" className = "btn btn-white">Anmelden</button>
                    </Link>         
                </div>
                    <div className = "about-description">
          
                    <p> Vor 10 Jahren, als ich noch die Volkschule besuchte, verliebte ich mich in Stunt-Scootering. Schnell entwickelte sich 
                        dieses neue Hobby zur Leidenschaft und zu meinem Lifestyle. 2017 hatte ich dann den ersten Sponsor-Vertrag 
                        bei Rideside unterschrieben und bei einem Contest in der Linzer Sporthalle erreichte ich 
                        Platz 4 in Österreich. Mitlerweile fahre ich für den Lokalen Shop Moreboards. </p>

                        <p> <br></br>
                        Heute will ich meine Leidenschaft an andere weitergeben und junge Menschen dazu bewegen, sich Ziele zu setzen und diese zu verfolgen.
                        . 
                        </p>
                 </div>
            </div>
        </div>
    </section>
       
    )
}

export default AboutMe;