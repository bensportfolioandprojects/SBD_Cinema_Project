const VenueCard = ({data}) => {

    const {venueTitle, venueType, venueText} = data;

    return ( 
        <div className="venues">
            <div className="venueName">
                <h2>{venueTitle}</h2>
            </div>
            <div className="venueDetails">
                <h3>
                    {venueType}
                    {venueText}
                </h3>
            </div>
        </div>
     );
}
 
export default VenueCard;