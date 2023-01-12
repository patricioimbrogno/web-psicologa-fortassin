import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";
import "./map.css";

const Map = ({ location, zoomLevel }) => (
  <div className="google-map">
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyDv6dGEbAw5SLUxkpJHx4vLE0zRrRnX2z4" }}
      defaultCenter={location}
      defaultZoom={zoomLevel}
    >
      <LocationPin
        lat={location.lat}
        lng={location.lng}
        text={location.address}
      />
    </GoogleMapReact>
  </div>
);

export default Map;
