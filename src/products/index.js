import './products.css';
import React from 'react';
import starfull from '../icons/star-full.png';
import starhalf from '../icons/star-half.png';


function Products(){
    return( 
        
        
        <div className="products">
            <div className="img">
            </div>

            <div className="info">
                <p>Blablablablabla</p>
            </div>

            <div className="rating">
                <p>5 estrela</p>
            </div>
            
            <p className="price">
                <strong>  
                    <p>R$ 500 conto</p>
                </strong>
            </p>

            
            
        </div>   

    )
}

export default Products;
