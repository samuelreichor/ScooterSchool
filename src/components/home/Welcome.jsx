import React from "react";
import background2 from '../../assets/Welcome-34.png';



const Welcome = () => {
    return (
        <header>
                <div id="home" className="h-screen bg-cover bg-center z-0 bg-welcome " style={{ backgroundImage: `url(${background2})` }}>
                    <div className="w-full flex flex-col items-center translate-y-56">

                    <h2 className="fontstyleh2 ">Scootering is Awesome</h2>
                    <h1 className="fontstyleh1 typewriter">Stunt Scooter Kurse in Linz</h1>
                    </div>
            </div>
        </header>
        
    )
}

export default Welcome;