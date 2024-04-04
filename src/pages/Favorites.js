import React, { useContext } from "react";
import { GlobalContext } from "../utilities/addFavFunctions";
import FavoriteButton from "../components/FavoriteButton";
import "../scss/_favorites.scss";
import { Link } from "react-router-dom";
import { filterVideos, formatReleaseDate } from "../utilities/functions";

function Favorites() {
  const { favorites } = useContext(GlobalContext);
  return (
    <div className="favorites-page-wrapper">
      <h1>Your Favorites</h1>
      {favorites.length === 0 ? (
        <p className="no-favorites">You have no favorites yet. Click the heart icon on a movie you like to add them to your list of favorites!</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((movieData) => (
              <div className="favorite-movie" key={movieData.id}>
                <Link to={`/movie/${movieData.id}`}>
                <img
                  className="movie-poster-favorite"
                  src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}`}
                  alt={movieData.title}
                />
                </Link>
                <FavoriteButton movieData={movieData} className="favorite-movie-button"/>
                <h2 className="favorite-movie-title">{movieData.title}</h2>
                <p className="release-date-favorite">Released: {formatReleaseDate(movieData.release_date)}</p> 
                <p className="movie-rating-favorite">Rating: {Math.round(movieData.vote_average * 10)}%</p>
               
              </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Favorites;
        
        
  