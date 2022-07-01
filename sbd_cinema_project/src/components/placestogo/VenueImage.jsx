const VenueImage = ({data}) => {

    const {venueImage, venueMap, venueTitle, venuePromo, venuePhotoCredit} = data;

    return ( 
        <div className="venueMoreData">
            <div className="venueImage">
                <img src={venueImage} alt={venueTitle} width="250px"/>
                <img src={venueMap} alt={venueTitle} width="250px"/>
            </div>
            <div className="venueBonus">
                <h4>
                    {venuePromo}
                </h4><br/>
                <h5>
                    {venuePhotoCredit}
                </h5>
            </div>
        </div>
     );
}
 
export default VenueImage;