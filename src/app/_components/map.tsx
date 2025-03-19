'use client'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export  function Map() {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  // Coordenadas aproximadas da localização do link
  const center = {
    lat: -23.557766394871813, // Latitude de exemplo (ajuste conforme necessário)
    lng: -46.291849641248 // Longitude de exemplo (ajuste conforme necessário)

     
  };

  return (
    <div>
      <h1>Mapa do Google</h1>
      <LoadScript googleMapsApiKey="AIzaSyCuws2A5d9BaGKAORsvzMH_lCx7UzanR4Y">
        <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
