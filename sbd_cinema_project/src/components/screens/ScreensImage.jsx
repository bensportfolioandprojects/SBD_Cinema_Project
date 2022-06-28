import React from "react";

function ScreensImage() {
    return (
        <div>
        {/* <img src={"./ScreenLayout.png"} alt="ScreensImage" /> */}
        <h1 className="seatingtitle">Standard and delux screen seating layout</h1>
        <div className="seatinglayout">
            <img src="https://plymouthartscinema.org/wp-content/uploads/2021/09/Access-seating-plan-Sep-2021-1000x752.png" width={600} alt="ScreensImage" />
        </div>
        <h6> This image is just an example, it does not represent real time bookings.</h6>
        </div>
    )
}

export default ScreensImage;