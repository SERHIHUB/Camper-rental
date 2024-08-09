// import { useState } from "react";
// import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

// import AppBar from "./components/AppBar/AppBar.jsx";
import "./App.css";
import Loyout from "./components/Loyout/Loyout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import CatalogPage from "./pages/CatalogPage/CatalogPage.jsx";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage.jsx";

function App() {
  return (
    <>
      <Loyout>
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </>
      </Loyout>
    </>
  );
}

export default App;
