import './products.css';
import React from 'react';
import starfull from '../icons/star-full.png';
//import starhalf from '../icons/star-half.png';
import airpod from '../icons/airpod.png';

function Products(){
    return( 
        
        <div className="products">

            <div className="discount">
                <p>-40%</p>
            </div>

            <div className="img">
                <img src={airpod} alt="airpod" width="200" height="200"></img>
            </div>
            
            <div className="brand">
                <p>Apple</p>
            </div>

            <div className="info">
                <p>Apple Watch Serie 6 GPS 44MM Space Gray</p>
            </div>

            <div className="rating">
                <p>
                    <img src={starfull} width="20" height="20" alt="starfull"></img>
                    <img src={starfull} width="20" height="20" alt=" "></img>
                    <img src={starfull} width="20" height="20" alt=" "></img>
                    <img src={starfull} width="20" height="20" alt=" "></img>
                    <img src={starfull} width="20" height="20" alt=" "></img>
                    5.0 (1234)
                </p>
            </div>
            
            <p className="price">
               <p className="Value">R$ 500,00 <strike id="OldValue">R$ 500,00</strike></p>
            </p>

        </div>   

    )
}

export default Products;
