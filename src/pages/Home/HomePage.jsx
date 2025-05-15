import React from "react";
import "./HomePage.css"
import Footer from "../../components/Footer";

export default function HomePage() {

    return (
        <>
        <div className="home page">
            <h1>Добро пожаловать в наш интернет-магазин!</h1>
            <p>Здесь вы найдете лучшие товары по отличным ценам.</p>
        </div>
        <Footer/>
        </>
    )
}