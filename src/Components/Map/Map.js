import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";
import "./map.css";

const Map = ({ location  }) => (
  <div className="google-map">
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyDv6dGEbAw5SLUxkpJHx4vLE0zRrRnX2z4" }}
      defaultCenter={location}
      defaultZoom={16}
    >
      <LocationPin
        lat={-34.58853899788767}
        lng={-58.39132983159459}
        text={location.address}
      />
    </GoogleMapReact>
  </div>
);

export default Map;
