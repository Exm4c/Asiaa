//import React, { useState }  from 'react';
//import { Menuitems } from './menuitems.js';
//import { Link } from 'react-router-dom';
import './buttons.css';

function Dropdownbutton(){

    
    function MouseOver(event) {
        event.target.innerHTML = 'Todos os produtos >';
        event.target.style.borderBottomLeftRadius = '0px';
      }
      function MouseOut(event){
        event.target.innerHTML = 'Todos os produtos ˅';
        event.target.style.borderBottomLeftRadius = '8px';
      
      }

    
    
    return (
        <div className="dropdown">
           <button className="dropbtn" onMouseOver={MouseOver} onMouseOut={MouseOut}><p>Todos os produtos ˅</p></button>
               <div className="dropdown-content">
                   <a href="/">AAA</a>
                   <a href="/">AAA</a>
                   <a href="/">AAA</a>
               </div>
       </div>
        

    )

}

export default Dropdownbutton;
