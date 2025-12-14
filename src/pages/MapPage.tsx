import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MOCK_DATE_SPOTS } from "../data/mockData";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const MapPage = () => {
  const navigate = useNavigate();
  const defaultCenter: [number, number] = [-6.8909, 107.6104];

  return (
    <div className="h-[calc(100vh-80px)] w-full pt-20">
      <div className="h-full w-full">
        <MapContainer
          center={defaultCenter}
          zoom={15}
          scrollWheelZoom={true}
          className="h-full w-full z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {MOCK_DATE_SPOTS.map((spot) => (
            <Marker key={spot.id} position={spot.position}>
              <Popup className="custom-popup">
                <div className="p-1 min-w-[200px]">
                  <div className="flex justify-between items-start">
                     <h3 className="font-bold text-lg text-yellow-400">{spot.name}</h3>
                     <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
                        <FaStar className="text-yellow-500" size={12} />
                        <span className="text-xs font-bold">{spot.rating}</span>
                     </div>
                  </div>
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md mt-1">
                    {spot.type}
                  </span>
                  <img 
                    src="/ITBPic.png" 
                    alt="ITB View" 
                    className="w-full h-32 object-cover rounded-md mt-3" 
                  />
                  <p className="text-sm text-gray-700 mt-3 leading-tight">
                    {spot.description}
                  </p>
                  <button 
                    onClick={() => navigate("/parkingchoice")}
                    className="mt-3 w-full py-2 bg-yellow-400 text-white text-sm font-medium rounded-md hover:bg-yellow-700 transition-colors"
                  >
                    Park Here
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapPage;