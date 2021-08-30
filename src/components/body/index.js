import React from 'react';
import './body.css';
import Products from '../../products';
import img from '../../icons/test2.png'

function Body (){
    return(

        <div className="body">
           <div className="body-container">
            <div className="body-row">
                {/*Podem ser quantos produtos quiser, responsivo*/}
                <Products></Products>
                <Products></Products>
                <Products></Products>
                <Products></Products>
                <Products></Products>
                {/*Produtos*/}
                {/*Produtos*/}
                {/*Produtos*/}
                
            </div>
            
            <div className="body-row">
                <Products></Products>
                <Products></Products>
                <Products></Products>
                <Products></Products>
                {/*Produtos*/}
                {/*Produtos*/}
                {/*Produtos*/}
                {/*Produtos*/}
                
            </div>
          </div>

            

        </div>               

    );
}

export default Body