import React from 'react';
import './body.css';
import Products from '../../products';


function Body (){
    return(

        <div className="body">
           <div className="body-container">
<<<<<<< HEAD
           <h1 className="titles">Novas promoções exclusivas</h1>
=======
>>>>>>> 502d2848a3d207797745520f4b07ffb2f6d59e8c
            <div className="body-row">
                {/*Podem ser quantos produtos quiser, responsivo*/}
                <Products></Products>
                <Products></Products>
                <Products></Products>
                <Products></Products>
            </div>
            <h1 className="titles">Itens mais vendidos</h1>
            <div className="body-row">
                {/*Podem ser quantos produtos quiser, responsivo*/}
                <Products></Products>
                <Products></Products>
                <Products></Products>
                <Products></Products>
            </div>
            
          </div>

            

        </div>               

    );
}

export default Body