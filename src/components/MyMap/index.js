import React, { Component, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../Marker";

const AnyReactComponent = ({ text }) => <div style={{zIndex:90, border: "1px solid red", width:50, height: 50}}>{text}</div>;

navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log({ position });
  },
  (error) => {
    console.log({ error });
  },
  { enableHighAccuracy: true }
);

function SimpleMap() {
  const [center, setCenter] = React.useState({
    lat: 36.805061, 
    lng: 10.161725,
  });
  const [zoom, setZoom] = React.useState(10);
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({coords}) => {
        console.log({ coords });
        setCenter({
          lat: coords.latitude,
          lng: coords.longitude,
        });
      },
      (error) => {
        console.log({ error });
        if (error.code === 1)
          alert(
            error.message + "\n Enabel Geolocation to get best experience :)"
          );
      },
      { enableHighAccuracy: true }
    );
  }, []);
  
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "80vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCLzbIOD6zQdQv4ll1lI_sPNNxPd0irDio" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        
        <Marker
            lat={center.lat} lng={center.lng}
            name="K Z"
            color="blue"
          />
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;
