// Imports
import React, { Component } from 'react';

// Import Search Bar Components
import SearchBar from 'material-ui-search-bar';
import { withStyles, createStyles } from '@material-ui/styles';

const styles = createStyles({
  searchbar : {
    margin: '0 auto',
    maxWidth: 800,
  }
});

class SearchPlaces extends Component {
  // Define Constructor
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
  }

  componentDidMount() {

    // Initialize Google Autocomplete
    /*global google*/ // To disable any eslint 'google not defined' errors
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
    );

    // Fire Event when a suggested name is selected
    this.autocomplete.addListener('place_changed', this.handlePlaceSelect);   
  }
  
  handlePlaceSelect = () => {

    // Extract City From Address Object
    let placeObject = this.autocomplete.getPlace();

    if("place_id" in placeObject) {
      this.props.addPlacesHandler(placeObject);
    }


  }

  render() {

    return (
      <div>
        <SearchBar id="autocomplete" 
          placeholder="Search Google Maps" 
          value={this.state.query} 
          className={this.props.classes.searchbar}
        />
        
      </div>
    );
  }
}



export default withStyles(styles)(SearchPlaces);