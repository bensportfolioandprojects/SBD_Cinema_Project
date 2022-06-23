import React from "react";
import DeluxeScreensImage from "./DeluxeScreensImage";
import ScreensDecorImage from "./ScreensDecorImage";
import ScreensImage from "./ScreensImage";


const ScreensBody = () => {
    return (
        <div className="screensbody--container">
            <ScreensImage />
        <p>We want our seating to be comfortable enough for you to feel at home. When you're watching the end of the world or a mind blowing romance, you shouldn't have to worry about uncomfortable chairs or not being able to see over the person in front of you.</p>
        <p>This is why we worked with a team of specialised interior designers to create a layout using the best of furniture that makes your experience the best. </p>
            <ScreensDecorImage />
        <div>
            <h2>For the luxury lovers...</h2>
            For the taste of luxury, watch your new favourite films from our fully inclusive directors delux lounge. With your own personal chef and butler attending to your every need and leather heated reclining massage chairs ensuring that you get the best experience possible. Whilst the layout of the delux screen is the same as our standard screen, as you can see below it is extravagance at its finest.
            <DeluxeScreensImage />
        </div>
        <h6>Our screens all have disabled access and seating with multiple fire exits.</h6>
        </div>
    )
}

export default ScreensBody;