import React from 'react';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles, createStyles } from '@material-ui/styles';


import PlaceList from './PlacesList';


const styles = createStyles({
  listsubheader: {
    backgroundColor: 'aqua',
  },
  placelist :{
    minHeight:'30vh', 
    maxHeight:'30vh', 
    overflow: 'auto'
  }
});

const RecentPlaces = (props) => {

  return (
      <List 
        component="nav"
        subheader={
          <Paper>

            <ListSubheader className={props.classes.listsubheader} component="div">
              Recent Places
            </ListSubheader>

          </Paper>
        }
      >

      <Paper className={props.classes.placelist}>

          <PlaceList
            {...props}
          />
      </Paper>

    </List>        
  );
}

export default withStyles(styles)(RecentPlaces);
