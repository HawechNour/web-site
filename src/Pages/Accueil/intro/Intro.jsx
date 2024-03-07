import "./intro.css";
import me from "../../img/me.jpg";
import React from 'react';

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          
          <h1 className="i-name">Bienvenu sur Jiotify</h1>
          <div className="i-title">
           
          </div>
          <p className="i-desc">
             votre destination numérique pour l'agriculture moderne!
             Simplifiez la gestion de votre exploitation,
             optimisez vos opérations et découvrez de nouvelles opportunités pour votre activité agricole. 
            
              <br /> Avec Jiotify, cultivez votre réussite en toute simplicité.
          </p>
        </div>
        
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img /*src={me}*/ alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
