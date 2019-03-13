import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Wrap from '../HOC/Wrap';


import Map from "../component/Map"
import SearchPlaces from "./SearchPlaces"
import RecentPlaces from "./RecentPlaces"

import classes from "./MapController.css"

import LocationSearchInput from "./LocationSearchInput"


class MapController extends Component {

    constructor(props) {
        super(props);
        this.state = {
            center : {
                lat : 88,
                lng : -112
            }, 

            recentplaces : [] 
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition( (position) => { 
            console.log(position.coords.latitude); 
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

        recentplacesCopy.push(placeObj);

        this.setState({
            recentplaces : recentplacesCopy        
        })

    }

    render() {
        return (
        // Important! Always set the container height explicitly
            <Wrap>

                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <SearchPlaces
                            addPlacesHandler = {this.addPlaces}
                        /> 
                    </Grid>
                    <Grid item xs={2}>
                        <RecentPlaces
                            places = {this.state.recentplaces}
                       /> 
                    </Grid>


                    <Grid item xs={10}>
                        <Map 
                            center = {this.state.center}
                            places = {this.state.recentplaces}
                            zoom = {11}
                        />
                    </Grid>
                </Grid>

            </Wrap>
        );
    }
}
 
export default MapController;