import NewReleases from "./components/newreleasegallery/NewReleases";
import NewReleasesHeader from "./components/newreleasegallery/NewReleasesHeader";

export default function NewReleasesGalleryLayout() {
    return (
      <div className="NewReleases--container">
      <NewReleasesHeader />
      <NewReleases />
      </div>
    );
  
  }