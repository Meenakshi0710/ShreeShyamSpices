import React from "react";
import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt} from 'react-icons/fa';

const AnyReactComponent = ({ text }) => <div><FaMapMarkerAlt style = {{color : "red", fontSize : "40px"}}/></div>;

export default function Mapcontainer(){
  const defaultProps = {
    center: {
      lat: 25.228227208323453,
      lng: 74.62900016931712
    },
    zoom: 11,
    
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '35vh', width: '80%', opacity : "1" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCrhDXMLzEb8TQM3QrupLZCqJaft2BeB0E" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={25.228227208323453} 
          lng={74.62900016931712}
         
        />
      </GoogleMapReact>
    </div>
  );
}