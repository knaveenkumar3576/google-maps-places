import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Wrap from '../HOC/Wrap';


// import Map from "../component/Map"
import AppHeader from "../component/AppHeader"
import Map from "../component/Map"
import SearchPlaces from "./SearchPlaces"
import RecentPlaces from "../component/RecentPlaces"
import PlaceDetail from "../component/PlaceDetail"

// import LocationSearchInput from "./LocationSearchInput"


class MapController extends Component {

    constructor(props) {

        super(props);
        let calculated_center = {
            lat : 33,
            lng : -111
        };

        navigator.geolocation.getCurrentPosition( (position) => { 
            calculated_center = {
                lat : position.coords.latitude,
                lng : position.coords.longitude
            };
        }, 
        (error) => 
            alert(error.message) 
        );

        this.state = {
            open:false,
            message: "",
            selected_place : null,
            center : calculated_center,
            recentplaces : [] 
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition( (position) => { 
                this.setState({
                    center : {
                        lat : position.coords.latitude,
                        lng : position.coords.longitude
                    } 
                }
            );
        }, 
        (error) => 
            alert(error.message) 
        );
    }

    addPlaces= (placeObj) => {
        let recentplacesCopy  = [...this.state.recentplaces];

        let duplicate_place = recentplacesCopy.filter(function(place, index){ 
            return place.place_id == placeObj.place_id
        });

        recentplacesCopy.push(placeObj);

        if(duplicate_place.length == 0) {
            this.setState({
                recentplaces : recentplacesCopy,
                message: "Added a place",
                open:true       
            });    
        } else {
            this.setState({
                message: "Already place is added",
                open:true        
            });   
        }

    }

    removePlaces= (e, placeID) => {

        let recentplacesCopy  = [...this.state.recentplaces];

        let filteredPlaces = recentplacesCopy.filter(function(place, index){ 
            return place.place_id != placeID
        });

        this.setState({
            recentplaces : filteredPlaces,
            selected_place: null,
            message: "Removed a place",
            open: true
        });

        e.stopPropagation();

    }

    selectActivePlace = (e, placeID) => {
        this.setState({
            selected_place : placeID        
        })
        e.stopPropagation();
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({ open: false });
    };

    render() {

        let placeDetail;
        let recentPlaces;
        let message;
        if(this.state.recentplaces.length >0) {
           recentPlaces = ( <RecentPlaces
                places = {this.state.recentplaces}
                removePlacesHandler = {this.removePlaces}
                selectActivePlacHandler = {this.selectActivePlace}
            /> )
        }


        if(this.state.selected_place != null) {
            placeDetail =(<PlaceDetail
            places = {this.state.recentplaces}
            selected_place = {this.state.selected_place}
            />)
        }


        if(this.state.message != "") {
            message =(<Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={this.state.open}
            autoHideDuration={2000}
            onClose={this.handleClose}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{this.state.message}</span>}
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={this.handleClose}
              >
                <CloseIcon />
              </IconButton>,
            ]}
          />)

        }

        return (
        // Important! Always set the container height explicitly
            <Wrap>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <AppHeader
                        /> 
                    </Grid>
                
                    <Grid item xs={12}>
                        <SearchPlaces
                            addPlacesHandler = {this.addPlaces}
                        /> 
                    </Grid>
                    <Grid item xs={2}>
                        {message}
                        {recentPlaces}
                        {placeDetail}
                    </Grid>


                    <Grid item xs={10}>
                        <Map 
                            center = {this.state.center}
                            places = {this.state.recentplaces}
                            selected_place = {this.state.selected_place}
                            zoom = {11}
                        />
                    </Grid>
                </Grid>

            </Wrap>
        );
    }
}
 
export default MapController;