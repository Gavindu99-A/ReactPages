import React from "react";
import NavigationPage from "./NavigationPage";

function ContactPage(){
    return(
        <div>
            <NavigationPage/>
            <center>
            <h1>Contact</h1>
            <p><b>Address</b>-23/A, Canal Road, Colombo</p>
            <p><b>Email</b>-musicshop@yahoo.com</p>
            <p><b>tel no</b>-492010304</p>
            <img src="/assets/back.jpg" alt="pic" width="100%"/>
          </center>
        </div>
    )
}

export default ContactPage;