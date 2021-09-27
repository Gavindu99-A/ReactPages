import Category from "./Category";
import './HomePage.css';
import React from "react";
function OrderPage(){
    return(
        <div>
         <h1>Place Your Order </h1>

         <div class="row">
         <div class="column1">
             <img src="assets/guitar.jpg" alt="pic" style={{width:"130px"}}/>
        <Category content="Guitar" price="$70"/>
        </div>

        <div class="column1">
             <img src="assets/violin.jpg" alt="pic"style={{width:"170px"}} />
        <Category content="Violin" price="$25"/>
        </div>

        <div class="column1">
             <img src="assets/drum.jpg" alt="pic" style={{width:"200px"}}/>
        <Category content="Drum" price="$225"/>
        </div>

       

        <div class="column1">
             <img src="assets/trumpet.jpg" alt="pic" style={{width:"200px"}} />
        <Category content="Trumpet" price="$150"/>
        </div>
        </div>
        </div>
    )

}
export default OrderPage;