import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/Home/HomePage";
import CatalogPage from "./pages/Catalog/CatalogPage";
import AboutPage from "./pages/About/AboutPage";
import ContactsPage from "./pages/Contacts/ContactsPage";

export default function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage/>} />
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contacts" element={<ContactsPage/>} />
      </Routes>
    </Router>
    </>
  );
}

