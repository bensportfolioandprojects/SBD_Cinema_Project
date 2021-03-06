import React from "react";
import TImage from "./TImage";
import RCRImage from "./RCRImage";
import BTImage from "./BTImage";
import SMImage from "./SMImage";
import { NavLink } from "react-router-dom";

const NewReleases = () => {
    return (
        <div>
            <div className="TLT">
            <h1>Thor: Love And Thunder</h1>
                <div>
                    <NavLink to="../TImage" title="Thor: Love and Thunder">
                        <TImage/>
                    </NavLink>
                </div>
                <h2>Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods.</h2>
                <h5>Starring Chris Hemsworth, Natalie Portman, Tessa Thompson<br/>
                Director - Taika Waititi<br/>
                Running time 2hrs 13mins</h5>
                <div className= "ReleaseDate">
                    <h3>Release Date - 7 Jul 2022</h3>
                </div>
            </div>
            <div className="RCR">
            <h1>The Railway Children Return</h1>
                <div>
                    <NavLink to="../RCRImage" title="The Railway Children Return">
                        <RCRImage/>
                    </NavLink>
                </div>
                <h2>'The Railway Children Return' will take audiences on an exciting and heart-warming journey, in which a new group of children are evacuated to a Yorkshire village during World War 2.</h2>
                <h5>Starring Jenny Agutter, Sheridan Smith, Tom Courtenay<br/>
                Director - Morgan Matthews</h5>
                <div className= "ReleaseDate">
                    <h3>Release Date -  15 Jul 2022</h3>
                </div>
            </div>
            <div className="BT">
                <h1>Bullet Train</h1>
                <div>
                    <NavLink to="../BTImage" title="Bullet Train">
                        <BTImage/>
                    </NavLink>
                </div>
                <h2>Five assassins find themselves on a fast moving bullet train from Tokyo to Morioka with only a few stops in between. They discover their missions are not unrelated to each other.</h2>
                <h5>Starring Brad Pitt, Andrew Koji, Joey King<br/>
                Director - David Leitch</h5>
                <div className= "ReleaseDate">
                    <h3>Release Date - 3 Aug 2022</h3>
                </div>
            </div>
            <div className="SM">
                <h1>Spider-Man: Across the Spider-Verse Part One</h1>
                <div>
                    <NavLink to="../SMImage" title="Spider-Man: Across the Spider-Verse Part One">
                        <SMImage/>
                    </NavLink>
                </div>
                <h2>Miles Morales returns for an epic adventure that will transport Brooklyn's full-time, friendly neighborhood Spider-Man across the Multiverse to join forces with Gwen Stacy and a new team of Spider-People.</h2>
                <h5>Starring Shameik Moore,Hailee Steinfeld,Oscar Isaac<br/>
                Directors - Joaquim Dos Santos, Kemp Powers, Justin Thompson</h5>
                <div className= "ReleaseDate">
                    <h3>Release Date - 7 Oct 2022</h3>
                </div>
                </div>

        </div>
    )
}

export default NewReleases;