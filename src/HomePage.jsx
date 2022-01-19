import React from "react";

import './homepage.scss';

export const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Bienvenido al e-shop</h1>
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Sombreros</h1>
          </div>
        </div>
      
      
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Tenis</h1>
          </div>
        </div>
     
      
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Chaquetas</h1>
          </div>
        </div>
      
      
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Hombres</h1>
          </div>
        </div>
      
      
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Mujeres</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
