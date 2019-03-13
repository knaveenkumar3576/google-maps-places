import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
class CustomMarker extends Component {
    state = {
        showInfoWindow: false
    };
    handleMouseOver = e => {
        this.setState({
            showInfoWindow: true
        });
    };
    handleMouseExit = e => {
        this.setState({
            showInfoWindow: false
        });
    };
    render() {
        const { showInfoWindow } = this.state;
        const { lat, lng } = this.props;
console.log(lat)

        return (
            <Marker position={{ lat, lng }} onMouseOver=
{this.handleMouseOver} onMouseOut={this.handleMouseExit}>
                {showInfoWindow && (
                    <InfoWindow>
                        <h4>{lat}</h4>
                    </InfoWindow>
                )}
            </Marker>
        );
    }
}
export default CustomMarker;