import React, { useState, useEffect } from 'react';
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies, getNowPlayingMovies } from '../utilities/api';
import { Link } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';



function Home() {
  const [movieList, setMovieList] = useState([]);
  const [filterType, setFilterType] = useState('popular');
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let movies;
        switch (filterType) {
          case 'popular':
            movies = await getPopularMovies();
            break;
          case 'top_rated':
            movies = await getTopRatedMovies();
            break;
          case 'upcoming':
            movies = await getUpcomingMovies();
            break;
          case 'now_playing':
            movies = await getNowPlayingMovies();
            break;
          default:
            movies = await getPopularMovies();
            break;
        }
        setMovieList(movies.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, [filterType]);
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength).trimEnd() + '...';
  };
  return (
    <div>
      <div className="filter-buttons">
        <button onClick={() => setFilterType('popular')}>Popular</button>
        <button onClick={() => setFilterType('top_rated')}>Top Rated</button>
        <button onClick={() => setFilterType('upcoming')}>Upcoming</button>
        <button onClick={() => setFilterType('now_playing')}>Now Playing</button>
      </div>
      <div className="movie-container">
        {movieList.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`} className="movie-card">
            <img
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-details">
              <h2>{movie.title}</h2>
              <p className="release-date">Release Date: {movie.release_date}</p>
              <p className="rating">Rating: {Math.round(movie.vote_average * 10)}%</p>
              
              <p className="summary">{truncateText(movie.overview, 70)}</p>
              <div className="buttons-container">
                <Link to={`/movie/${movie.id}`}>
                  <button className="more-info-btn">More</button>
                </Link>
                
                
                <FavoriteButton movieData={movie} className="favorite-btn" />
                
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Home;