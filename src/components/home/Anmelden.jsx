import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useAlert } from "react-alert";


import './Anmelden.css'

const Anmelden = () => {
    
    const form = useRef();
    const alert = useAlert();
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_mwlh8b7', 'template_ve0jhtj', form.current, 'user_4qCEPNJsuE6MTOkr5IRBD')
      .then(() => {
        alert.success("Danke für die Anmeldung")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    
  };

    return (
<section id='anmelden'>
<form  ref={form} onSubmit={sendEmail}>
  
  <h1 className="anmelden-h1">Kursanmeldung</h1>
  
<div className="anmelden-box">
<div className="anmelden-links-wrapper">
    <p className='anmelden-para-rechts'>Wählen sie einen Kurstermin aus:</p>
    <div className="anmelden-form-item">
    
    <select name="user_termin" class="form-select appearance-none
            block
            w-full
            text-black
            mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" aria-label="Default select example">
        <option selected>Kurstermin wählen</option>
        {/*mögliche Kurstermine */}
        <option name="user_termin" value="no-value">Keine Termine</option>
    </select>
    </div>
    <p className='anmelden-para'>Persönliche Daten vom Scooter-Profi ;)</p>
    <div className="anmelden-form-item">
    <label>Voller Name (Kind)*</label>
    <input required type="text" name="user_name_kiddie" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder='Max Mustermann'/>
    
    </div>
    <div className="anmelden-form-item">
    <label>Telefonnummer (Kind)*</label>
    <input required type="telefonNummer" name="user_tel_kiddie" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder='0660123456789' />
      
    </div>
    <div className="anmelden-form-item">
    <label>Alter (Kind)*</label>
    <input required type="number" name="user_age_kiddie" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder='14' /> 
    </div>

</div>
   

    <div className="anmelden-rechts-wrapper">
            <p className='anmelden-para-rechts'>Persönliche Daten von einer Kontaktperson</p>
            <div className="anmelden-form-item">
            <label>Voller Name*</label>
            <input required type="text" name="user_name_adult" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder='Max Mustermann'/>
            
            </div>
            <div className="anmelden-form-item">
            <label>Email*</label>
            <input required type="email" name="user_email_adult" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder='example@example.com' />
            
            </div>
            <div className="anmelden-form-item">
            <label>Telefonnummer*</label>
            <input required type="telefonNummer" name="user_tel_adult" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder='0660123456789' />   
            </div>
            <div className="anmelden-form-item anmelden-haftung">
            <input required type="checkbox" class="form-checkbox"/>
            <span class="ml-2 ">Ich stimme den <a className='ul' target='_blank' href='https://scooterschool-datenschutz.netlify.app'>
                Datenschutz</a>/<a className='ul' target='_blank' href='https://scooterschool-haftung.netlify.app'>Haftungserklärung</a> zu.</span>
            </div>
    
    </div>
       <div className='anmelden-button-section'>
       <p className="position-para">Bei einer Erfolgreichen Anmeldung erhalten sie ein Email mit den wichtigsten Daten:)</p>
       <input className="bubbly-button anmelden-position-bubbly-button" type="submit" value="Anmelden" />
        
       </div>
        
</div>

</form>

</section>

  

    )
}

export default Anmelden;