import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {

    return (
        <nav className="nav">
            <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/catalog">Каталог</Link></li>
                <li><Link to="/about">О нас</Link></li>
                <li><Link to="/contacts">Контакты</Link></li>
            </ul>
        </nav>
    )
}