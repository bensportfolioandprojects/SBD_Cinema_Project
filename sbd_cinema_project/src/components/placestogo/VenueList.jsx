import VenueCard from "./VenueCard";
import VenueView from "./VenueView";


const VenueList = ({data}) => {
    const VenueArray = [
        {
            venueTitle: "Izakaya Monji",
            venueType: "Bar/Tavern",
            venueText: "The tavern opens from evening to midnight. There are counters, tables and zashiki (Japanese tatami room), including karaoke set.",
            venueImage: "https://www.arinoki.com/en/travel/aogashima/photos/p02_17x.jpg",
            venueMap: "https://www.google.com/maps/vt/data=AqHju3Z20BYpAsjyCmvBzA5uI5Eem32nYpuG9o6aI074WkMGjOtACnEk6cxmrIReqWp4YHZn8EcXZL1b8CkDTwukJ0lJf0ma3UITXTQm94-m7nnGuGILa_t9w8kpCoipDu2vrMkLFZK86pBPINxJ1ZxRwlwmZ5GbSHG_nR12NDUa",
            venuePromo: "20% off an adult ticket price with purchase of 2 speciality drinks"
        },
        {
            venueTitle: "Kukansha",
            venueType: "Café",
            venueText: "A calm and stylish café. The sea can be seen by climbing the rooftop veranda because it is in a forest that is a little off the coast. A top-class café on the island.",
            venueImage: "https://media-cdn.tripadvisor.com/media/photo-s/09/f7/2f/19/caption.jpg",
            venueMap: "https://maps.google.com/maps/api/staticmap?&channel=ta.desktop.restaurant_review&zoom=15&size=347x137&scale=1&client=gme-tripadvisorinc&format=jpg&sensor=false&language=en_GB&center=33.106876,139.758194&maptype=roadmap&&markers=icon:http%3A%2F%2Fc1.tacdn.com%2F%2Fimg2%2Fmaps%2Ficons%2Fcomponent_map_pins_v1%2FR_Pin_Small.png|33.106876,139.758194&signature=gGuI4DD2sd4A1ws3LZGaYE9KhPI=",
            venuePromo: "50% off a child's ticket when you purchase 2 teas and any cake."
        }
    ]

    return ( 
        <div className="placesToGoList">
            {
                VenueArray.map((venues, index) => {
                    return (
                    <>
                    <VenueCard data={venues} key={index}/>
                    <VenueView data={venues} key={index}/>
                    </>
                    )
                })
            }
        </div>
     );
}
 
export default VenueList;