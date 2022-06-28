import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import Cinema from "../../resources/frontofcinema.jpg";
import 'leaflet/dist/leaflet.css';

const GettingThere = () => {
    return (
        <>
            <img src={Cinema} width="700" height="300" />

            <p>
                Our QA Cinema is located on Aogashima Island which is an island South of Tokyo and situated upon an active volcano.<br />
                Our address is Japan, 〒100-1701 Tokyo, Aogashima, 池之沢 which is northeast of Sanbou Port, taking a right and then a left from 青宝トンネル which is a tunnel from the port.<br />
                There are 124 parking spots outside of the Cinema and also many more parking spots back at the port.
            </p>
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