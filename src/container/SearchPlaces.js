// Imports
import React, { Component } from 'react';

// Import Search Bar Components
import SearchBar from 'material-ui-search-bar';

// Import React Scrit Libraray to load Google object
import Script from 'react-load-script';

class SearchPlaces extends Component {
  // Define Constructor
  constructor(props) {
    super(props);

    // Declare State
    this.state = {
      city: '',
      query: ''
    };

    // Bind Functions
    // this.handleScriptLoad = this.handleScriptLoad.bind(this);
    // this.handlePlaceSelect = this.handlePlaceSelect.bind(this);

  }

  handleScriptLoad= () => {
    // Declare Options For Autocomplete
    // var options = {
    //   types: ['(cities)'],
    // };

    // Initialize Google Autocomplete
    /*global google*/ // To disable any eslint 'google not defined' errors
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      // options
    );

    // Fire Event when a suggested name is selected
    this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
  }
  
  handlePlaceSelect = () => {

    // Extract City From Address Object
    let placeObject = this.autocomplete.getPlace();

    this.props.addPlacesHandler(placeObject);

  }

  render() {

    let placesapiurl="https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_API_DEV_KEY + "&libraries=places"

    return (
      <div>
        <Script
          url={placesapiurl}
          onLoad={this.handleScriptLoad}
        />

        <SearchBar id="autocomplete" placeholder="Search" value={this.state.query}
          style={{
            margin: '0 auto',
            maxWidth: 800,
          }}
        />
        
      </div>
    );
  }
}


export default SearchPlaces;