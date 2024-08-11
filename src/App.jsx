import { Route, Routes } from "react-router-dom";
import "./App.css";
import Loyout from "./components/Loyout/Loyout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import CatalogPage from "./pages/CatalogPage/CatalogPage.jsx";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage.jsx";
import Reviews from "./components/Reviews/Reviews";
import Features from "./components/Features/Features";

function App() {
  return (
    <>
      <Loyout>
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />}>
              <Route path="features" element={<Features />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="favorites" element={<FavoritesPage />}>
              <Route path="features" element={<Features />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<HomePage />} />
          </Routes>
        </>
      </Loyout>
    </>
  );
}

export default App;
