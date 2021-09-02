//import React, { useState }  from 'react';
import { Menuitems } from '../menuitems.js';
//import { Link } from 'react-router-dom';
import './buttons.css';




function Dropdownbutton(props) {

  const { id, titulo, style } = props;

  return (
    <div className={style + "dropdown"}>
      <button className={style}><p>{titulo} </p></button>
      <div className={style + "content"}>
        <Menuitems id={id} />

      </div>
    </div>


  )

}

export default Dropdownbutton;
