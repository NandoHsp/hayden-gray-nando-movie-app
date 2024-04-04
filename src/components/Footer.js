//import footer scss file
import '../scss/_footer.scss';

// function for the footer content

function Footer() {
    return (
        <div className="footer-wrapper">
            
            <div className="footer-copyright">
            <p>&copy; 2024 OurMovieDB</p>
            </div>
            <div className="footer-credits">
            <p>Created by Nando Hospina, Gray Black, and Hayden McAtasney</p>
            </div>
        </div>
    );
}

export default Footer;
