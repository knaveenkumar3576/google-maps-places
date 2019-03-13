import React,{Component} from 'react'

// import { Grid } from 'semantic-ui-react'

import Wrap from './Wrap';
import MapController from '../container/MapController';

class Layout extends Component {

    //state to store the selections in the side layout

    render() {
        return (
            <Wrap>
               <MapController /> 
            </Wrap>
        );
    }
 }

export default Layout