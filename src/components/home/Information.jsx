import React from "react";
import './Information.css'
import { Link } from "react-scroll";

const newInformation = () => {
    return (
        <section id="information">
            <div class="flex-container-information">
        <div class="flex-items-information">
        <h1 className="information-h1">Kursinfos</h1>
        </div>
        <div class="flex-items-information">
            <h3 className="information-h3">Ort</h3>
            <div className="information-description">
            <p className="information-description">
                Die Kurse finden im Winter in der Sporthalle Lissfeld statt und 
                wenn es die Wetterbedingungen zulassen, sind auch Kurse im Freien möglich. 
                Die Skater-Halle bietet auf über 1000 
                m<sup>2</sup> alles was ein Freestyle-Herz begehrt. 
            </p>
            </div>
            
                <a href="https://www.livasport.at/sportparks/sportpark-lissfeld/" target='_blank'>
         
                    <button type = "button" className = "btn btn-white information-btn">Mehr Information</button>
                </a>
        </div>
        <div class="flex-items-information">
        <h3 className="information-h3">Ablauf</h3>
        <div className="information-description">
        <p className="information-description">Neben dem Lernen von neuen Tricks, sollst du natürlich auch viel Spaß haben. 
            Jeder Kurs besteht aus 3 Teilen:</p>
                    <ul>
                        <li>1. Aufwärmen und Kennenlernen</li>
                        <li>2. Alte Tricks üben</li>
                        <li>3. Neue Tricks lernen</li>
                    </ul>
                    <p className="information-description">Durch meine langjährige Erfahrung wirst du superschnell zum Profi. </p>
                    <br></br>
                    <br></br>
        </div>
        
        </div>
        <div class="flex-items-information">
        <h3 className="information-h3">Anmeldung</h3>
        <div className="information-description">
            <p className="information-description">
            Einfach bei dem Anmeldeformular das gewünschte Kursdatum auswählen.
             Nach einer erfolgreichen Anmeldung wirst du eine Email mit 
            den Kursdaten erhalten.
            </p>
        </div>
        <Link to="anmelden" smooth={true} duration={1000}>
                    <button type = "button" className = "btn btn-white information-btn">Anmelden</button>
        </Link>
        </div>
    </div>
        </section>
        
       

    )
}

export default newInformation;