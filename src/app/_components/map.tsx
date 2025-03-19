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

    // Função para redirecionar ao Google Maps
    const handleMapClick = () => {
      const googleMapsUrl = `https://www.google.com/maps?q=${center.lat},${center.lng}`;
      window.open(googleMapsUrl, '_blank'); // Abre o link em uma nova aba
    };
  

  return (
    <div>
      <h1>Mapa do Google</h1>
      <LoadScript googleMapsApiKey="AIzaSyCuws2A5d9BaGKAORsvzMH_lCx7UzanR4Y">
        <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}
           onClick={handleMapClick} // Adicionado evento de clique no mapa
>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
