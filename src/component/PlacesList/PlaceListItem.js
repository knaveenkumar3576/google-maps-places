import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import Wrap from '../../HOC/Wrap'

const PlaceListItem = (props) => {

    return (
        <Wrap>
            <Divider />
            <ListItem button>
                <ListItemText primary={props.name} />
            </ListItem>
        </Wrap>
    );
}

export default PlaceListItem;
