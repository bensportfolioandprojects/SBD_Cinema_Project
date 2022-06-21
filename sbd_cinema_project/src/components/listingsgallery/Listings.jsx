import React from "react";
import JWDImage from "./JWDImage";
import DSImage from "./DSImage";
import LImage from "./LImage";
import TGMImage from "./TGMImage";

const Listings = () => {
    return (
        <div>
            <h1>Jurassic World: Dominion</h1>
                <div> <JWDImage/> </div>
            <h1>Lightyear</h1>
                <div> <LImage/> </div>
            <h1>Top Gun Maverick</h1>
                <div> <TGMImage/> </div>
            <h1>Doctor Strange in the Multiverse of Madness</h1>
                <div> <DSImage/> </div>

        </div>
    )
}

export default Listings;