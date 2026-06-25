import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
//import 'leaflet/dist/leaflet.css';

export default function RichlandParkRouteMap() {

return (
<MapContainer center={[36.1390, -86.8558]} zoom={13} scrollWheelZoom={false} style={{ height: "800px", width: "100%" }}>
		<TileLayer
			attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		/>
		<Marker position={[36.1390, -86.8558]}>
			<Popup>
				A pretty CSS3 popup. <br /> Easily customizable.
			</Popup>
		</Marker>
	 </MapContainer>
)
}
