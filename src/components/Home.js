import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Stats from './Stats';
import axios from 'axios';
import TopContributors from './TopContributors';
import {Grid, Col, Row} from 'react-flexbox-grid';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import _ from 'lodash';
import TableEntries from './TableEntries';
import * as actions from './../actions';
import Map from './Map';
const ROOT_URL = "http://0c6a1334.ngrok.io";

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            coords:{
                data:[],
                class:{
                    "metal": 0,
                    "glass": 0,
                    "plastic": 0,
                    "cardboard": 0,
                    "paper": 0,
                    "trash": 0
                }
            },
        }
    }
    componentDidMount(){
        this.loadCoors();
    }
    loadCoors = () =>{
        console.log("CALLED func")
        axios.get(`${ROOT_URL}/photo/coords`)
        .then(response =>{
            this.setState({
                coords:response.data
            });
            console.log("Started IO")
            let userSocket2 = io(`${ROOT_URL}`);
            userSocket2.on('connect',(data)=>{
                console.log("JOIN DATA");
                console.log(data)
            })
            userSocket2.on('coords', (data) => {
                console.log("RECEIVED FROM SOCKET");
                let coords= this.state.coords;
                coords.class=data.class;
                coords.data.push(data.data);
                console.log(data)
                this.setState({coords})
            });
        })
        .catch((err)=>{
            console.log(err);
            this.props.showMessage("Error! Couldn't get coordinates");
        })
    }

    render() {
        const styles={

        }
        return (
            <div className="home-wrap">
                <h1 style={{textAlign:"center"}}>Utopia</h1>

                    <Grid fluid>
                        <Row>
                            <Col xs={12} md={12} className="notepad-wrap">
                                <Map coords={(this.state.coords.data)}/>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Stats data={JSON.stringify(this.state.coords.class)}/>
                        <Row>
                            <Col xs={12} md={3} className="leaderboard-wrap">
                                <TopContributors/>
                            </Col>
                            <Col xs={12} md={9} className="table-wrap">
                                <TableEntries users={JSON.stringify(this.state.coords.data)}/>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            );
        }
    }

    function mapStateToProps(state){
        return {
        };
    }

    export default connect(mapStateToProps,actions)(Home);
