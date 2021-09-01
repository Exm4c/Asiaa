//import React, { useState }  from 'react';
import { Menuitems } from '../menuitems.js';
//import { Link } from 'react-router-dom';
import './buttons.css';




function Dropdownbutton(props) {

  return (
    <div className={props.style + "dropdown"}>
      <button className={props.style}><p>{props.titulo} </p></button>
      <div className={props.style + "content"}>
        <Menuitems id={props.titulo}/>
        {console.log(props.titulo)}

      </div>
    </div>


  )

}

export default Dropdownbutton;
