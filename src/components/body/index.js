import React from 'react';
import './body.css';
import Products from '../../products';


function Body() {
    return (

        <div className="body">
            <div className="body-container">
                <h1 className="titles">Novas promoções exclusivas</h1>
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