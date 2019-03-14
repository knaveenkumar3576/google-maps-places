import React from 'react';

import GenericMarker from '../../static/images/generic_marker.svg';
import CurrentMarker from '../../static/images/current_marker.svg';

const Marker = (props) => {

    return (
        <div key={props.placeID}> 
            <img
                 
                src={props.placeID === props.selected_place ? CurrentMarker : GenericMarker}
                height= "30rem"
                width= "20rem"
                alt="map marker"
            />
        </div>
    )
}

export default Marker