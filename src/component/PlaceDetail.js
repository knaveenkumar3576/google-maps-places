import React from 'react';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import missingImage from "../static/images/image_missing.png";

const PlaceDetail  = (props) => {
    let imageURL=missingImage;
    let contact_num='Unavailable';
    let address='Unavailable';

    let filteredPlaces = props.places.filter(function(place, index){ 
        return place.place_id === props.selected_place
    });

    let selected_place_info = filteredPlaces[0];

    
    if("photos" in selected_place_info && selected_place_info.photos.length > 0) {
        imageURL = selected_place_info.photos[0].getUrl();
    }

    if("formatted_address" in selected_place_info) {
        address = selected_place_info.formatted_address;
    }

    if("formatted_phone_number" in selected_place_info) {
        contact_num = selected_place_info.formatted_phone_number;
    }


    return (
        <Card style={{minHeight:'40vh', maxHeight:'40vh', overflow: 'auto'}}>
          <CardActionArea>
            <CardContent>
                <Typography component="p">
                    {selected_place_info.name}
                </Typography>
            </CardContent>

            <CardMedia
              style={{height:'150px'}}
              image={imageURL}
            />
            <CardContent>
                <Typography component="p">
                    Address: {address}
                </Typography>

                <Typography gutterBottom variant="h5" component="h2">
                    Contact: {contact_num}
                </Typography>
            
            </CardContent>
          </CardActionArea>
          <CardActions>
            
          </CardActions>
        </Card>
    );
}

export default PlaceDetail;