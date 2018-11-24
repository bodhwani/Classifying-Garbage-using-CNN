import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import {Grid, Col, Row} from 'react-flexbox-grid';
import {Card} from 'material-ui/Card';
import * as actions from './../actions';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import TextField from 'material-ui/TextField';

class Map extends Component {
  constructor(props){
    super(props);
    this.state={
      coords:[

      ]
    }
  }
  componentDidMount() {

  }



  handleMarkerClick = () => {
  }

  render() {
    const coords =(this.props.coords);
    const MyMapComponent = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
      }),
      withScriptjs,
      withGoogleMap
    )((props) =>
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 12.9698464, lng: 79.15565609999999 }}
      >
        {/* { lat: Number(cor.location[1]), lng: Number(cor.location[0]) } */}
        {props.coords.map(cor=><Marker position={{ lat: Number(cor.location[1]), lng: Number(cor.location[0]) }} onClick={props.onMarkerClick} />)}
      </GoogleMap>
    )

    return (
        <MyMapComponent
          coords = {(this.props.coords)}
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}

function mapStateToProps(state){
  return {
  };
}

export default connect(mapStateToProps,actions)(Map);
