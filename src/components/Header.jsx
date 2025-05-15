import React from "react";
import Navigation from "./Navigation";
import "./Header.css"

export default function Header() {

    return (
        <header className="header">
            <div className="logo">Спортик</div>
            <Navigation />
        </header>
    )
}