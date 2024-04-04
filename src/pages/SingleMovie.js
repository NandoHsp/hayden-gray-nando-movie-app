import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../utilities/api";
import { filterVideos, formatReleaseDate } from "../utilities/functions";
import { GlobalContext } from "../utilities/addFavFunctions";
import FavoriteButton from "../components/FavoriteButton";
import '../scss/_singleMovie.scss';
// import '../scss/_favorites.scss';


const IMAGE_URL_BASE = "https://image.tmdb.org/t/p";


const defaultMovieData = {
    adult: false,
    backdrop_path: "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
    genre_ids: [36, 10752, 18],
    id: 753342,
    original_language: "en",
    original_title: "Napoleon",
    overview:
      "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
    popularity: 1811.36,
    poster_path: "/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg",
    release_date: "2023-11-22",
    title: "Napoleon",
    video: false,
    vote_average: 6.529,
    vote_count: 1268,
  };


function SingleMovie() {
    const params = useParams();
    const id = params.id;
    const [movieData, setMovieData] = useState();

   

    useEffect(() => {
        getMovieById(id)
        .then((data) => {

            setMovieData(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [id]);
   
  


    return (
        
        // Page wrapper
        <div className="movie-page-single">
            {movieData && (
                <>
                    
                    {/* title */}
                    <h1 className="movie-title-single">{movieData.title}</h1>

                    {/* poster */}
                    <div className="movie-poster-wrapper">
                    <img className="movie-poster-single"
                        src={`${IMAGE_URL_BASE}/w300${movieData.poster_path}`}
                        alt={movieData.title}
                    />
                    <FavoriteButton movieData={movieData} className="single-movie-favorite"/>    
                    </div>

                    <div className="movie-date-rating">

                        {/* Date */}
                        <div>
                            <p className="release-date-single">Released: {formatReleaseDate(movieData.release_date)}</p>
                           
                        </div>

                        {/* rating */}
                        <div>                        
                            <p className="movie-rating-single">Rating: {Math.round(movieData.vote_average * 10)}%</p>
                        </div>

                        {/* genres */}
                        <div className="movie-genres-single">
                        {movieData.genres && movieData.genres.length >= 3 && (
                        <>
                        <button>{movieData.genres[0].name}</button>
                        <button>{movieData.genres[1].name}</button>
                        <button>{movieData.genres[2].name}</button>                        
                        </>                        
                        
                        
                        )}                        
                        </div>                    

                    </div>      
                    
                    <div className="movie-overview-single">
                        <h2>Overview</h2>
                        <p>{movieData.overview}</p>                    
                    </div>
                        
                </>
            )}
        </div>
    );
}

           
export default SingleMovie;
export { IMAGE_URL_BASE };


