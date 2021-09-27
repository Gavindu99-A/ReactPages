import React from "react";
import NavigationPage from "./NavigationPage";

function RepairPage(){
    return(
        <div>
            <NavigationPage/>
            <center>
           
           <h1>Repair</h1>
           <img src="assets/repair.jpg" alt="pic" width="50%"/>
           <ul style={{
               fontSize:"20px"
               }}
               >
               <li>General care and maintenance</li>
               <li>Chemical cleanings</li>
               <li>Restringing</li>
               <li>Custom set ups</li>
               <li>Complete restorations of heirloom instruments</li>
               <li>Repairs of cracks or split seams</li>
               <li>Instrument appraisals</li>
           </ul>
          </center>
        </div>
    )
}

export default RepairPage;