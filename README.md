# Google Maps + Places

The Google Maps + Places application allows you to search places using Google Places API. The searched places are stored into 'Recent Places' list and marked in the map(default location marker). When you click an item into the 'Recent Places' list, a detail info of the selected place will be shown and also the location will be highlighted in the map with a pin symbol.


## Main Components

MapController - The main component of the application with child components Map, SearchPlaces, RecentPlaces.

Map - This component will render a map along with markers that are passed to the component

SearchPlaces - Provides an autocomplete to search for places using Google Places API and returns the information about the selected place.

RecentPlaces - It will display the places searched by the user. This is a stateless component that takes the list from the MapController and then generates a list with event listeners to delete a place and also triggering the PlaceDetail view

PlaceDetail - It will display the important details of the particular selected place. This is again a stateless component that takes the info returned from places API and displays the information


## Miscellaneous
A user cannot add a place which is already part of recent places list. 

## How to Run
Clone the project and unzip the files.

Go to the project folder(package.json should be there in the current directory).

Now run the command "npm install".

Get API-DEV-KEY(https://developers.google.com/maps/documentation/javascript/get-api-key).

Create an .env file and add REACT_APP_API_DEV_KEY=YOUR_API_DEV_KEY.

Enable the google API's 'Maps JavaScript API', 'Places API'(https://support.google.com/googleapi/answer/6158841)

You are ready to go. Run "npm start".

Go to http://localhost:3000/. The application should load the search bar and map centered with current location(Try refresh).

## Built With

* [React]https://reactjs.org/
* google-map-react


