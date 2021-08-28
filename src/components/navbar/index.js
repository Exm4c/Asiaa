//import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


function Navbar() {
    
    //const[click, setClick] = useState(false);

    //const handleClick = () => setClick(!click);


 return(
      <>
           <nav className="navbar">
               <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        ASIAA
                    </Link>
                    
                    
                    <div className="navbar-search">
                       
                        <input className="navbar-searchInput" type="text"/>
                        {/* Logo aqui */}
                        
                        
                    </div>
                   
                    <div className="navbar-nav">
                        
                    
                        <div className="navbar-account">
                            <span className="navbar-optText"
                            
                            >Conta</span>
                        
                        </div>
                      
                        <div className="navbar-cart">
                          <span
                            className="navbar-optText"
                            >Carrinho  </span>
                             <span className="navbar-optText navbar-carCount">0</span>

                        </div>
       
                    </div>
                </div>
            </nav>
         </>
    )
}

export default Navbar