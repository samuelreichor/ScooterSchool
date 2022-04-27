import react from 'react';
import Welcome from '../components/home/Welcome';
import AboutMe from '../components/home/Aboutme';
import Information from '../components/home/Information';
import Kurse from '../components/home/Kurse';
import Anmelden from '../components/home/Anmelden';
import Kontakt from '../components/home/ContactForm';


const AppHome = () => {
  return (
    <div className="main">
      <Welcome/>
      <AboutMe/>
      <Information/>
      <Kurse/>
      <Anmelden/>
      <Kontakt/>
    </div>
  );
};

export default AppHome;