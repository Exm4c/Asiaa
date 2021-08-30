//import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import cart from '../../icons/cart.png';
import search from '../../icons/search.png';

function Navbar() {
    
    //const[click, setClick] = useState(false);

    //const handleClick = () => setClick(!click);


 return(
      <>
           <div className="navbar">
               <div className="navbar-container">
                    <Link to="../../pages/home/index.js" className="navbar-logo">
                        ASIAA
                    </Link>
                    <div className="navbar-search">

                        <button type="summit" className="navbar-searchDropdown">Todos produtos ˅</button>
                        <input className="navbar-searchInput" type="text"/>
                        <button type="summit" className="navbar-searchButton"><img src={search} className="navbar-search-icon" alt="search"/></button>
                    
                    </div>
                   
                    <div className="navbar-nav">                 
                        <div className="navbar-account">
                            <span className="navbar-optText"
                            >Conta</span>
                        </div>
                        
                        <div className="navbar-cart">
                            <img src={cart} className="navbar-cart-icon" alt="cart"/>
                            <span
                            className="navbar-optText"
                            >Carrinho</span>

                            <span
                            className="navbar-optText navbar-carCount"
                            >0</span>

                        </div>    
                    </div>

                </div>
            </div>
         </>
    )
}

export default Navbar
