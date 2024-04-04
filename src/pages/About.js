import React from 'react';
import '../scss/_about.scss';
import { Link } from 'react-router-dom';
import tmdbLogo from '../images/TMBD.svg'



function About () {
    return (
        <div className="about-page-wrapper">
            <h1>About ourMovieDB</h1>
            <p>Welcome to ourMovieDB, your go-to movie database designed to help you discover the ideal film for every mood and occasion. Whether you crave a good laugh with a comedy, a thrilling adventure, a heartwarming romance, or anything in between, ourMovieDB has an extensive collection just for you!  </p>
        <p>This product uses the TMBD <img src={tmdbLogo} className="tmdb-logo" alt="TMDb Logo" /> API but is not endorsed or certified by TMDb. </p>
        </div>
    )
}

export default About;



    