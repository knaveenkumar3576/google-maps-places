import React,{Component} from 'react'
import { withStyles, createStyles } from '@material-ui/styles';


import Wrap from './Wrap';
import MapController from '../container/MapController';

const styles = createStyles({
    layout: {
        margin: '10px',
        padding: '10px'
    },
  });
  
class Layout extends Component {

    //state to store the selections in the side layout

    render() {
        return (
            <div className={this.props.classes.layout}>
               <MapController/> 
            </div>
        );
    }
 }


 export default withStyles(styles)(Layout); 