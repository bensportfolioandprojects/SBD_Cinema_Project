import React from "react";
import TImage from "./TImage";
import RCRImage from "./RCRImage";
import BTImage from "./BTImage";
import SMImage from "./SMImage";

const NewReleases = () => {
    return (
        <div>
            <h1>Thor: Love And Thunder</h1>
                <div> <TImage/> </div>
                <h2>Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods.</h2>
                <h5>Starring Chris Hemsworth,Natalie Portman,Tessa Thompson</h5>
                <h5>Running time 2hrs 13mins</h5>
                <div id= "Release Date">
                    <h3>Release Date - 7 Jul 2022</h3>
                </div>
            <h1>The Railway Children Return</h1>
                <div> <RCRImage/> </div>
                <h2>'The Railway Children Return' will take audiences on an exciting and heart-warming journey, in which a new group of children are evacuated to a Yorkshire village during World War 2.</h2>
                <h5>Jenny Agutter, Sheridan Smith, Tom Courtenay</h5>
                <div id= "Release Date">
                    <h3>Release Date -  15 Jul 2022</h3>
                </div>
            <h1>Bullet Train</h1>
                <div> <BTImage/> </div>
                <h2>Five assassins find themselves on a fast moving bullet train from Tokyo to Morioka with only a few stops in between. They discover their missions are not unrelated to each other.</h2>
                <h5>Starring Brad Pitt,Andrew Koji,Joey King</h5>
                <div id= "Release Date">
                    <h3>Release Date - 3 Aug 2022</h3>
                </div>
            <h1>Spider-Man: Across the Spider-Verse Part One</h1>
                <div> <SMImage/> </div>
                <h2>Miles Morales returns for an epic adventure that will transport Brooklyn's full-time, friendly neighborhood Spider-Man across the Multiverse to join forces with Gwen Stacy and a new team of Spider-People.</h2>
                <h5>Starring Shameik Moore,Hailee Steinfeld,Oscar Isaac</h5>
                <div id= "Release Date">
                    <h3>Release Date - 7 Oct 2022</h3>
                </div>

        </div>
    )
}

export default NewReleases;