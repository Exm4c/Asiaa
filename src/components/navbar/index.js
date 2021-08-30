import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

import Dropdownbutton from '../buttons/index'
import cart from '../../icons/cart-20.png';
import search from '../../icons/search-20.png';

function Navbar() {
    
    const[click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    
 return(
      <>
           <div className="navbar">
               <div className="navbar-container">
                    <Link to="../../pages/home/index.js" className="navbar-logo">
                        ASIAA
                    </Link>
                    <div className="navbar-search">
                        <Dropdownbutton type="summit" className="navbar-searchDropdown" onClick={handleClick}>
                            
                        {/*<i className={click ? console.log('opablz'):console.log('opanblz') }/>*/}        
                            
                    </Dropdownbutton>
                        
                        <input className="navbar-searchInput" type="text"/>
                        <button type="summit" className="navbar-searchButton"><img src={search} className="navbar-search-icon" alt="search"/></button>
                    </div>
                   
                    <div className="navbar-nav">                 
                        <div className="navbar-account">
                            <span className="navbar-optText">Conta ˅</span>
                        </div>
                        
                        <div className="navbar-cart">
                            <img src={cart} className="navbar-cart-icon" alt="cart"/>
                            <span className="navbar-optText">Carrinho</span>
                            <span className="navbar-optText navbar-carCount">0</span>
                        </div>    
                    </div>

                </div>
            </div>
         </>
    )
}

export default Navbar