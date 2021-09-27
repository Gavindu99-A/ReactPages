import React from "react";
import {Link} from "react-router-dom";
//import styles from './Navigation.module.css'
import  './Navigation.css';

function NavigationPage(){
    return(
       
            <div className="navigation">
                <div className="navigationButtonContainer">

            <Link to='/'>
            <button className="navigationButton">Home</button>
            </Link>
            

            <Link to='/repair'>
            <button className="navigationButton">Repair</button>
            </Link>

            <Link to='/repair/contact'>
            <button className="navigationButton">Contact</button>
            </Link>


            </div>
            </div>
        
    )
}

export default NavigationPage;