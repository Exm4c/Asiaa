import React, { useState }  from 'react';
//import { Menuitems } from './menuitems.js';
import { Link } from 'react-router-dom';
import './buttons.css';

function Dropdownbutton({categoria}){
    
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    return (
        <div className="dropdownbutton">
            <div
            
            className="dropdrown-header"
            role="button"
            onKeyPress={()=> handleClick(!click)}
            onClick={()=> handleClick(!click)}
            
            >

            <div className="dropdown-event">
                <p>{click ? 'Todos os produtos ˅': 'Todos os produtos >'} </p>
                <span>{categoria}</span>




                </div>
            </div>
        </div>
        

    )

}

export default Dropdownbutton;