// import Listing from "./Listing";
// import CarouselBtn from "./CarouselBtn";
import Lightyear from '../../resources/lightyear.avif';
import JurassicWorld3 from '../../resources/JurassicWorldDominion.jpg';
import TopGunMaverick from '../../resources/TopGunMaverick.jpg';
import DoctorStrange2 from '../../resources/DoctorStrange2.webp';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";

const Cinema = () => {

    return (
        <div className="homeDiv">
            <div className="carouselContainer">
                <Carousel className="carouselBase" fade>
                    <Carousel.Item>
                        <a href="#">
                            <img className="currentMovies" src={Lightyear} alt="Lightyear"/>
                        </a>
                        <Carousel.Caption>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#">
                            <img className="currentMovies" src={JurassicWorld3} alt="Jurassic World: Dominion"/>
                        </a>
                        <Carousel.Caption>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#">
                            <img className="currentMovies" src={TopGunMaverick} alt="Top Gun: Maverick"/>
                        </a>
                        <Carousel.Caption>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#">
                            <img className="currentMovies" src={DoctorStrange2} alt="Doctor Strange in the Multiverse of Madness"/>
                        </a>
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