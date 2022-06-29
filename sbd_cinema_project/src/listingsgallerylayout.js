import Listings from "./components/listingsgallery/Listings";
import ListingsHeader from "./components/listingsgallery/ListingsHeader";

export default function ListingsGalleryLayout() {
    return (
      <div className="listings--container">
      <ListingsHeader />
      <Listings />
      </div>
    );
  
  }