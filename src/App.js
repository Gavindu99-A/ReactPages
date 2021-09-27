import React from 'react';

import HomePage from './HomePage';
import ContactPage from './ContactPage';
import RepairPage from './RepairPage';
import {Route} from "react-router-dom";

function App() {
  return (
    
   <div>
     <Route path='/' exact component={HomePage}/>
     <Route path='/repair' exact component={RepairPage}/>
     <Route path='/repair/contact' exact component={ContactPage}/>

    
  </div>
    
  );
}

export default App;
