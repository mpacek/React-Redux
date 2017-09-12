import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        console.log(this.props);
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: 50.3587991,//parseFloat(this.props.lat),
                lng: 19.9924387//parseFloat(this.props.lon)
            }
        });
    }

    render() {
        return <div ref="map" />
    };
}

export default GoogleMap;
