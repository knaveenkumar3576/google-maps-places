import React from 'react';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import PlaceListItems from '../component/PlacesList'


const RecentPlaces = (props) => {



  return (
      <List 
        component="nav"
        subheader={
          <Paper>

            <ListSubheader component="div">
              Recent Places
            </ListSubheader>
            
          </Paper>
        }
      >

      <Paper style={{maxHeight:'70vh', overflow: 'auto'}}>

          <PlaceListItems
            places = {props.places}
          />
      </Paper>

    </List>        
  );
}


export default RecentPlaces

