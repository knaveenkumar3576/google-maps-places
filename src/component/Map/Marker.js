import React from 'react';

import MapMarker from '../../static/images/marker.svg';

const Marker = (props) => {
    return (
        <div>
            <img src={MapMarker}
                height= "30rem"
                width= "20rem"
                alt="map marker"
            />
        </div>
    )
}

export default Marker