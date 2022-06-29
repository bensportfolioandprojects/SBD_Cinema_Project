import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import Cinema from "../../resources/frontofcinema.jpg";
import 'leaflet/dist/leaflet.css';
import LocationTitle from './LocationTitle';
import LocationBody from './LocationBody';

const GettingThere = () => {
    return (
        <>
            <LocationTitle/>
            <img id="localCinema" src={Cinema} width="700" height="300" />

            <LocationBody/>

            <MapContainer id="map" center={[32.453436923681615, 139.76499743535805]} zoom={13} >
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[32.453436923681615, 139.76499743535805]}>
                    <Popup>
                        QA Cinemas
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    );
}

export default GettingThere;