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
import axios from 'axios';
import {Grid, Col, Row} from 'react-flexbox-grid';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import _ from 'lodash';
import * as actions from './../actions';
const ROOT_URL = "http://0c6a1334.ngrok.io";
class TopContributors extends Component{
    constructor(props){
        super(props);
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        axios.get(`${ROOT_URL}/user/score`)
        .then(response =>{
            this.setState({
                users:response.data.data
            });
            console.log("Contributes::");
            console.log(response.data.data)
            let userSocket3 = io(`${ROOT_URL}/user/scores`);
            userSocket3.on('score', (data) => {
                console.log("RECEIVED FROM SOCKET SCORE");
                console.log(data)
            });
        })
        .catch((err)=>{
            console.log(err);
            this.props.showMessage("Error! Couldn't get Users");
        })
    }
    render(){
        return(
            <Card style={{padding:"10px",paddingTop:"5px"}} className="dark-bg">
                <h4>Top Contributors</h4>
                {this.state.users.map((contri,i)=>(
                        <Row key={i}>
                            <Col xs={4} md={3}>
                                <img src="http://www.rit.edu/science/sites/rit.edu.science/files/root/man-placeholder_27.jpg" className="circle-img responsive-img" alt=""/>
                            </Col>
                            <Col xs={8} md={9}>
                                <br/>
                                {contri.username} ({contri.score})
                            </Col>
                        </Row>
                ))}
            </Card>

        )
    }
}

function mapStateToProps(state){
    return {
    };
}

export default connect(mapStateToProps,actions)(TopContributors);
