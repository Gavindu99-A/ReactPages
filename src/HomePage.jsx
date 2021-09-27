import React from 'react';

import './HomePage.css';
import NavigationPage from './NavigationPage';
import OrderPage from './OrderPage';


function HomePage() {
    return (
      
       <div>
         <NavigationPage/>
     <div class="row">
         <div class="column">
       <h1>Music Shop</h1>
       <img src="assets/main.jpg" alt="pic" />
       </div>
       <div class="column">
        <p>Music stores range from full-line stores[2] that sell products across all musical instrument categories and even pro audio categories, to music stores that focus on a subset of those categories (e.g. a store that sells acoustic and digital pianos, or a store that specializes only in drums and percussion), to highly-specialized stores focused on a single product type (e.g. a guitar boutique focused on vintage collectible guitars, or a sheet music store). In the United States and Canada, another common distinction exists between “Band & Orchestra” stores that cater to the needs of school music programs and their students, versus “Combo” stores that focus on instruments and equipment used by a rock band.</p>
        <p>Music stores arose to service the needs of the local community. This included not only individual amateur musicians, but schools from elementary to college level, civic bands and orchestras, churches, and entertainment ensembles that performed at events of the community and its organizations. In service of this diverse clientele, store owners might focus on some specialty or niche market (pianos, sheet music, percussion). Instruments might be purchased outright, leased or rented. Specific or non-stock items could be ordered through the store.</p>
        <p>More commonly, music stores offered some variety, depending upon the tastes and resources of the owners and the desires of their clientele (whether actual or sought-after). This might include some mixture of fretted instruments (electric guitars, acoustic guitars, mandolins, ukuleles); brass, woodwind, and violin-family instruments; drums and percussion; pianos and organs; consumable items (strings, reeds, drum sticks); accessories (metronomes, music stands); and sheet music.</p>
       </div>
       </div>

       <div>
     <OrderPage/>
       </div>
      
      
   </div>
    )
}
 export default HomePage;