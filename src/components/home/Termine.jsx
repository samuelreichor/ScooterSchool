import React from 'react';
import './Termine.css';
import {BsCalendarDate} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {FaChild} from 'react-icons/fa'
import {GiPriceTag} from 'react-icons/gi'
import { Link } from "react-scroll";

const Termine = () => {
    return (
        <section id='termine'>
            <div class="flex-container-termine">
        <div class="flex-items-termine">
        <h1 className="termine-h1">Termine</h1>
        </div>
        <div class="flex-items-termine">
            <h2 className="termine-h2"> Kurs für Anfänger und Fortgeschrittene</h2>
            <h3 className="termine-h3">20.11.2022</h3>
        <div class="grid-termine">
            <div class="icon1 iconstyle">
            <BsCalendarDate></BsCalendarDate> 
            </div>
            <div class="icon2 iconstyle">
            <AiOutlineClockCircle></AiOutlineClockCircle>
            </div>
            <div class="icon3 iconstyle">
            <GoLocation></GoLocation> 
            </div>
            <div class="icon4 iconstyle">
            <FaChild></FaChild>
            </div>
            <div class="icon5 iconstyle">
            <GiPriceTag></GiPriceTag>
            </div>
            <div class="tex1 textstyle">
            <p>20.11.2022</p>
            </div>
            <div class="text2 textstyle">
            <p>8:00-10:00</p>
            </div>
            <div class="text3 textstyle">
            <p>Hausleitnerweg 105, 4020 Linz</p>
            </div>
            <div class="text4 textstyle">
            <p>max. 20 Teilnehmer</p>
            </div>
            <div class="text5 textstyle">
            <p>40 €</p>
            </div>
        </div>
        <Link to="anmelden" smooth={true} duration={1000}>
        <button type = "button" className = "btn btn-tuerkis termine-btn">Anmelden</button> 
        </Link>
        
        </div>
        <div class="flex-items-termine">
        <h2 className="termine-h2">
        Kurs für Anfänger und Fortgeschrittene</h2>
            <h3 className="termine-h3">04.12.2022</h3>
        <div class="grid-termine">
            <div class="icon1 iconstyle">
            <BsCalendarDate></BsCalendarDate> 
            </div>
            <div class="icon2 iconstyle">
            <AiOutlineClockCircle></AiOutlineClockCircle>
            </div>
            <div class="icon3 iconstyle">
            <GoLocation></GoLocation> 
            </div>
            <div class="icon4 iconstyle">
            <FaChild></FaChild>
            </div>
            <div class="icon5 iconstyle">
            <GiPriceTag></GiPriceTag>
            </div>
            <div class="tex1 textstyle">
            <p>04.12.2022</p>
            </div>
            <div class="text2 textstyle">
            <p>8:00-10:00</p>
            </div>
            <div class="text3 textstyle">
            <p>Hausleitnerweg 105, 4020 Linz</p>
            </div>
            <div class="text4 textstyle">
            <p>max. 20 Teilnehmer</p>
            </div>
            <div class="text5 textstyle">
            <p>40 €</p>
            </div>
        </div>
        <Link to="anmelden" smooth={true} duration={1000}>
        <button type = "button" className = "btn btn-tuerkis termine-btn">Anmelden</button> 
        </Link>
        </div>

        <div class="flex-items-termine">
            <h2 className="termine-h2">Kurs für Anfänger und Fortgeschrittene</h2>
            <h3 className="termine-h3">18.12.2022</h3>
        <div class="grid-termine">
            <div class="icon1 iconstyle">
            <BsCalendarDate></BsCalendarDate> 
            </div>
            <div class="icon2 iconstyle">
            <AiOutlineClockCircle></AiOutlineClockCircle>
            </div>
            <div class="icon3 iconstyle">
            <GoLocation></GoLocation> 
            </div>
            <div class="icon4 iconstyle">
            <FaChild></FaChild>
            </div>
            <div class="icon5 iconstyle">
            <GiPriceTag></GiPriceTag>
            </div>
            <div class="tex1 textstyle">
            <p>18.12.2022</p>
            </div>
            <div class="text2 textstyle">
            <p>8:00-10:00</p>
            </div>
            <div class="text3 textstyle">
            <p>Hausleitnerweg 105, 4020 Linz</p>
            </div>
            <div class="text4 textstyle">
            <p>max. 20 Teilnehmer</p>
            </div>
            <div class="text5 textstyle">
            <p>40 €</p>
            </div>
        </div>
        <Link to="anmelden" smooth={true} duration={1000}>
        <button type = "button" className = "btn btn-tuerkis termine-btn">Anmelden</button> 
        </Link>
        
        </div>

        <div class="flex-items-termine">
            <h2 className="termine-h2">Kurs für Anfänger und Fortgeschrittene</h2>
            <h3 className="termine-h3">04.12.2022</h3>
        <div class="grid-termine">
            <div class="icon1 iconstyle">
            <BsCalendarDate></BsCalendarDate> 
            </div>
            <div class="icon2 iconstyle">
            <AiOutlineClockCircle></AiOutlineClockCircle>
            </div>
            <div class="icon3 iconstyle">
            <GoLocation></GoLocation> 
            </div>
            <div class="icon4 iconstyle">
            <FaChild></FaChild>
            </div>
            <div class="icon5 iconstyle">
            <GiPriceTag></GiPriceTag>
            </div>
            <div class="tex1 textstyle">
            <p>04.12.2022</p>
            </div>
            <div class="text2 textstyle">
            <p>8:00-10:00</p>
            </div>
            <div class="text3 textstyle">
            <p>Hausleitnerweg 105, 4020 Linz</p>
            </div>
            <div class="text4 textstyle">
            <p>max. 20 Teilnehmer</p>
            </div>
            <div class="text5 textstyle">
            <p>40 €</p>
            </div>
        </div>
        <Link to="anmelden" smooth={true} duration={1000}>
        <button type = "button" className = "btn btn-tuerkis termine-btn">Anmelden</button> 
        </Link>
        
        </div>

    </div>
        </section>
        
    )
}

export default Termine;