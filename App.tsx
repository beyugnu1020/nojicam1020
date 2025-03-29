import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 35.6475,  // 청도천 위치
  lng: 128.7361,
};

const App = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyD4cbUI4MTskQoxdkSkgy1_bApPYn288vQ">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default App;
