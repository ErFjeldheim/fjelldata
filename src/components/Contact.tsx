import React, { useState } from 'react';
import { Mail, Phone, Loader } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const defaultIcon = new L.Icon({
  iconUrl: '/images/leaflet/marker-icon.png',
  iconRetinaUrl: '/images/leaflet/marker-icon-2x.png',
  shadowUrl: '/images/leaflet/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const Contact: React.FC = () => {
  const [isMapLoading, setIsMapLoading] = useState(true);
  const position: L.LatLngExpression = [59.482373, 5.51707]; // Coordinates for Fjellheimsvegen 66, Skjold
  const address = "Fjellheimsvegen 66, 5574 Skjold";

  return (
    <section className="bg-black text-white py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl lg:text-5xl font-bold mb-12 text-center">Kontakt</h1>
        <div className="max-w-2xl mx-auto bg-gray-900 rounded-lg p-8 shadow-xl">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-primary-500" />
              <div>
                <h2 className="text-xl font-semibold mb-1">E-post</h2>
                <a href="mailto:erik@fjelldata.com" className="text-gray-300 hover:text-primary-500 transition-colors">
                  erik@fjelldata.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-primary-500" />
              <div>
                <h2 className="text-xl font-semibold mb-1">Telefon</h2>
                <a href="tel:+4741246198" className="text-gray-300 hover:text-primary-500 transition-colors">
                  +47 412 46 198
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-2">Besøksadresse</h2>
              <p className="text-gray-300 mb-4">{address}</p>
              <div className="rounded-lg overflow-hidden h-[400px] relative">
                {isMapLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                    <Loader className="w-8 h-8 text-primary-500 animate-spin" />
                  </div>
                )}
                <MapContainer 
                  className="h-full w-full"
                  center={position}
                  zoom={14}
                  whenReady={() => setIsMapLoading(false)}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position} icon={defaultIcon}>
                    <Popup>
                      <div className="font-semibold">Fjelldata</div>
                      <div className="text-sm mt-1">{address}</div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
