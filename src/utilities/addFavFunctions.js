import { createContext, useEffect, useState } from "react";

//create the context
export const GlobalContext = createContext();

//create the provider component
export function GlobalProvider({ children }) {
  //function to load from local storage
  function loadFromLocalStorage() {
    const localData = localStorage.getItem("favorites");
    return localData ? JSON.parse(localData) : [];
  }



  //set the initial state
  const [favorites, setFavorites] = useState(loadFromLocalStorage());




  // function to add to favorites
  function addToFavorites(favorite) {
    const newFavorites = [...favorites, favorite];
    setFavorites(newFavorites);
  }

  // function to remove from favorites
  function removeFromFavorites(favorite) {
    const newFavorites = favorites.filter((fav) => {
      return fav.id !== favorite.id;
    });
    setFavorites(newFavorites);
  }



  
  //useEffect that will run every time the favorites array changes - everytime something is added or removed from favorites
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <GlobalContext.Provider
      value={{
        favorites: favorites,
        addToFavorites: addToFavorites,
        removeFromFavorites: removeFromFavorites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
