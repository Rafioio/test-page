
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Configuração do ícone
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

L.Marker.prototype.options.icon = DefaultIcon;

// Componente principal
const Map = () => {
  const position = [-19.026315360742426, -43.91017115987215];
  
  return (
    <div style={{ height: '700px', width: '80%' }}>
      <MapContainer 
        center={position} 
        zoom={28} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution='&copy; Esri Satellite'
        />
        <Marker position={position}>
          <Popup>
            <strong>Fazenda Quati</strong>
            <br />
            <small>Localização da propriedade</small>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;