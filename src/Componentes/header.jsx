import React from "react";
import './header.css'

export function Header(){

    return (
        <div className="header">
            <img src=".\src\assets\logo.png" alt="" className="logo-header"/>
            <button className="btn-header">ENTRAR</button>
        </div>
        );

}

export default Header;