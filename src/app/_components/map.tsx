
'use client';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export function Map() {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  // Coordenadas aproximadas da localização
  const center = {
    lat: -23.557766394871813, // Latitude de exemplo
    lng: -46.291849621448, // Longitude de exemplo
  };

  // Função para redirecionar ao Google Maps
  const handleMapClick = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${center.lat},${center.lng}`;
      window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-black py-16 text-white">
      <h1 className="font-serif text-2xl md:text-3xl mb-12 flex align-text-center justify-center">
        Onde estamos localizados
      </h1>

      <LoadScript 
        googleMapsApiKey="AIzaSyDekM5cIp-ZYlp37KCgciK6U8KWHmodovQ" 
        //libraries={["places"]}
      >
        <GoogleMap 
          mapContainerStyle={mapContainerStyle} 
          center={center} 
          zoom={15} 
          onClick={handleMapClick}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

