import React from 'react';

import Wrap from '../HOC/Wrap';
import PlaceListItem from './PlacesList/PlaceListItem';

const PlacesList = (props) => {

    let placeItems =props.places.map(place => {
        return (
            <PlaceListItem
                name = {place.name}    
            />
        )
    });

    return (
        <Wrap>
            {placeItems}
        </Wrap>
    );
}

export default PlacesList;