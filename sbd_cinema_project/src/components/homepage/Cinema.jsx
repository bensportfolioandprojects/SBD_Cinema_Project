// import Listing from "./Listing";
// import CarouselBtn from "./CarouselBtn";
import Lightyear from '../../resources/lightyear.avif';
import JurassicWorld3 from '../../resources/JurassicWorldDominion.jpg';
import TopGunMaverick from '../../resources/TopGunMaverick.jpg';
import DoctorStrange2 from '../../resources/DoctorStrange2.webp';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";
import { NavLink } from 'react-router-dom';

const Cinema = () => {

    return (
        <div className="homeDiv">
            <div className="carouselContainer">
                <Carousel className="carouselBase" fade>
                    <Carousel.Item>
                        <NavLink to="/listingsgallery" title="Listings Gallery">
                            <img className="currentMovies" src={Lightyear} alt="Lightyear"/>
                        </NavLink>
                        <Carousel.Caption>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <NavLink to="/listingsgallery" title="Listings Gallery">
                            <img className="currentMovies" src={JurassicWorld3} alt="Jurassic World: Dominion"/>
                        </NavLink>
                        <Carousel.Caption>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <NavLink to="/listingsgallery" title="Listings Gallery">
                            <img className="currentMovies" src={TopGunMaverick} alt="Top Gun: Maverick"/>
                        </NavLink>
                        <Carousel.Caption>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <NavLink to="/listingsgallery" title="Listings Gallery">
                            <img className="currentMovies" src={DoctorStrange2} alt="Doctor Strange in the Multiverse of Madness"/>
                        </NavLink>
                        <Carousel.Caption>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Cinema;