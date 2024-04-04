import { useContext } from "react";
import { GlobalContext } from "../utilities/addFavFunctions";


function FavoriteButton({ movieData, className }) {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(GlobalContext);

  const isFavorited = favorites.find((fav) => {
    return fav.id === movieData.id;
  });

  function handleFavorite(event) {
    event.preventDefault();
    event.stopPropagation();
    if (isFavorited) {
      removeFromFavorites(movieData);
    } else {
      addToFavorites(movieData);
    }
  }

  return (
    <button
     onClick={handleFavorite}
     className={`favorite ${isFavorited ? "favorited" : ""} ${className}`}>
     <svg
      className="favorite-svg"
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z"
        fillRule="nonzero"
        fill="white"
        stroke="white"
        // stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
    </button>
  );
}

export default FavoriteButton;
