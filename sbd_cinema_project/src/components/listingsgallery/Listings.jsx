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
                <h2>This summer, experience the epic conclusion to the Jurassic era as two generations unite for the first time.</h2>
                <h5>Starring Chris Pratt, Bryce Dallas Howard, Sam Neill, Jeff Goldblum, Laura Dern</h5>
                <h5>Running time 2hrs 27mins</h5>
                <div id= "times">
                    <h3>Showing times:</h3>
                    <ul>
                        <li>10.00</li>
                        <li>11.00</li>
                        <li>12.00</li>
                        <li>13.00</li>
                        <li>15.00</li>
                        <li>16.00</li>
                        <li>18.00</li>
                        <li>20.00</li>
                    </ul>
                </div>
            <h1>Lightyear</h1>
                <div> <LImage/> </div>
                <h2>The definitive origin story of Buzz Lightyear, the hero who inspired the toy, Lightyear follows the legendary Space Ranger after he is marooned on a hostile planet 4.2 million light-years from Earth alongside his commander and their crew.</h2>
                <h5>Starring Chris Evans, Keke Palmer, Taika Waititi, Uzo Aduba, Dale Soules</h5>
                <h5>1hr 40mins</h5>
                <div id= "times">
                    <h3>Showing times:</h3>
                    <ul>
                        <li>09.00</li>
                        <li>11.00</li>
                        <li>12.00</li>
                        <li>13.00</li>
                        <li>15.00</li>
                        <li>16.00</li>
                        <li>18.00</li>
                    </ul>
                </div>
            <h1>Top Gun Maverick</h1>
                <div> <TGMImage/> </div>
                <h2>Set 34 years after the events of Top Gun, Tom Cruise returns in his iconic role as Maverick. Joined by Jennifer Connelly, Val Kilmer, and Miles Teller, this action-packed sequel produced by Jerry Bruckheimer will be sure to satisfy your need for speed.</h2>
                <h5>Starring Tom Cruise, Jennifer Connelly, Jon Hamm, Miles Teller, Val Kilmer</h5>
                <h5>Running time 2hrs 11mins</h5>
                <div id= "times">
                    <h3>Showing times:</h3>
                    <ul>
                        <li>10.00</li>
                        <li>11.00</li>
                        <li>13.00</li>
                        <li>15.00</li>
                        <li>18.00</li>
                        <li>20.00</li>
                    </ul>
                </div>
            <h1>Doctor Strange in the Multiverse of Madness</h1>
                <div> <DSImage/> </div>
                <h2>Journey into the unknown with Doctor Strange, who, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary..</h2>
                <h5>Starring Benedict Cumberbatch, Elizabeth Olsen, Benedict Wong, Rachel McAdams, Chiwetel Ejiofor, Xochitl Gomez</h5>
                <h5>Running time 2hrs 6mins</h5>
                <div id= "times">
                    <h3>Showing times:</h3>
                    <ul>
                        <li>08.00</li>
                        <li>11.00</li>
                        <li>14.00</li>
                        <li>19.00</li>
                    </ul>
                </div>

        </div>
    )
}

export default Listings;