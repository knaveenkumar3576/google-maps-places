import React from 'react';

import Wrap from '../HOC/Wrap';
import PlaceListItem from './PlacesList/PlaceListItem';

const PlacesList  = (props) => {

    let placeItems =props.places.map(place => {
        return (
            <PlaceListItem
                name = {place.name}
                icon = {place.icon}
                address = {place.formatted_address}
                placeID = {place.place_id}   
                selectActivePlacHandler={props.selectActivePlacHandler}
                removePlacesHandler={props.removePlacesHandler}
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