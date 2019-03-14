import React from 'react';

import GoogleMapReact from 'google-map-react';

import Marker from '../component/Map/Marker'
// import CustomMarker from './Map/CustomMarker'

const Map = (props) => {
    let markers =props.places.map(place => {
    
        return (
            <Marker
                selected_place = {props.selected_place}
                placeID={place.place_id} 
                lat={place.geometry.location.lat()} 
                lng={place.geometry.location.lng()} 
            />
        )
    });
    
    return (
        <div style={{ height: '80vh', width: '80%' }}>
            
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_API_DEV_KEY }}
                defaultCenter={props.center}
                defaultZoom={props.zoom}
            >
                {markers}

            </GoogleMapReact>
        </div>
    );
}

export default Map

