const Listing = ({data}) => {
    return (
        <a class="hp-listingcontainer" href={data.link}>
            <img class ="hp-listingimage" src = {data.img}/>
            <p id="ListingTitle">{data.title}</p>
        </a>
    );
}
 
export default Listing;