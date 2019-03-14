import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import Wrap from '../../HOC/Wrap'

const PlaceListItem = (props) => {

    return (
        <Wrap>
            <Divider />
            <ListItem key={props.placeID} button onClick={(e) => props.selectActivePlacHandler(e, props.placeID)}>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={props.icon} />
                </ListItemAvatar>
                <ListItemText secondary={props.name}/>
                <DeleteForeverIcon onClick={(e) => props.removePlacesHandler(e, props.placeID)} />
            </ListItem>
        </Wrap>
    );
}

export default PlaceListItem;
