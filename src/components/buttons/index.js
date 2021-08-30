import React, { useState }  from 'react';
//import { Menuitems } from './menuitems.js';
import { Link } from 'react-router-dom';
import './buttons.css';

function Dropdownbutton(){

    
    function MouseOver(event) {
        event.target.innerHTML = 'Todos os produtos ˅';
        event.target.style.borderBottomLeftRadius = '0px';
      }
      function MouseOut(event){
        event.target.innerHTML = 'Todos os produtos >';
        event.target.style.borderBottomLeftRadius = '8px';
      
      }

    
    
    return (
        <div class="dropdown">
           <button class="dropbtn" onMouseOver={MouseOver} onMouseOut={MouseOut}><p>Todos os produtos &gt; </p></button>
               <div class="dropdown-content">
                   <a href="#">AAA</a>
                   <a href="#">AAA</a>
                   <a href="#">AAA</a>
               </div>
       </div>
        

    )

}

export default Dropdownbutton;
