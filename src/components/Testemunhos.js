import React from 'react';
import './Testemunhos.css'
import wemilly from '../imagens/wemilly.jpg'
import marília from '../imagens/marília.jpg'

function Testemunhos() {
    return (
        <div className="container"> 
            <div className="box"> 
               <div className="imgBox">
                    <img src={wemilly}/>
                </div>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting.</p>
                <h4>Someone Famous<br/><span>Creative Director</span></h4>
            </div>
            <div className="box"> 
               <div className="imgBox">
                    <img src={marília}/>
                </div>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting.</p>
                <h4>Someone Famous<br/><span>Creative Director</span></h4>
            </div>
        </div>
    )
}

export default Testemunhos