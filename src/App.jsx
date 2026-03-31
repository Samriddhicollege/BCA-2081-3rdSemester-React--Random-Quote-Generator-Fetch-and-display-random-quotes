import { useState, useEffect } from "react";
import "./index.css";
import "./components/FavoriteList.css"; 
import QuoteGenerator from "./components/QuoteGenerator";
import FavoriteList from "./components/FavoriteList";

function App() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favoriteQuotes");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("favoriteQuotes", JSON.stringify(favorites));
  }, [favorites]);

  const handleAddFavorite = (quoteObj) => {
    if (!favorites.find(f => f.quote === quoteObj.quote)) {
      setFavorites([quoteObj, ...favorites]);
    } else {
      alert("This quote is already in your favorites!");
    }
  };

  const handleDeleteFavorite = (id) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  return (
    <div className="app flex-column">
      <QuoteGenerator onSaveFavorite={handleAddFavorite} />
      <FavoriteList 
        favorites={favorites} 
        onDeleteFavorite={handleDeleteFavorite} 
        onAddCustom={handleAddFavorite}
      />
    </div>
  );
}

export default App;