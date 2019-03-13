import React from 'react';

import GoogleMapReact from 'google-map-react';

import Marker from './Map/Marker'
// import CustomMarker from './Map/CustomMarker'

const Map = (props) => {
    let markers =props.places.map(place => {
    
        return (
            <Marker
                lat={place.geometry.location.lat()} 
                lng={place.geometry.location.lng()} 
            />
        )
    });
    
    // let markers =props.places.map(place => {
    
    //     return (
    //         <CustomMarker
    //             lat={place.geometry.location.lat()} 
    //             lng={place.geometry.location.lng()} 
    //         />
    //     )
    // });
    
    return (
        <div style={{ height: '80vh', width: '80%' }}>
            
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_API_DEV_KEY }}
                defaultCenter={props.center}
                defaultZoom={props.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text={'Loading Map'}
                />

                {markers}

            </GoogleMapReact>
        </div>
    );
}

const AnyReactComponent = ({ text }) => <div>{text}</div>;


export default Map

