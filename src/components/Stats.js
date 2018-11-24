import CircularProgressbar from 'react-circular-progressbar';
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
import TopContributors from './TopContributors';
import {Grid, Col, Row} from 'react-flexbox-grid';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import _ from 'lodash';
import * as actions from './../actions';
import './circular.css';
const ROOT_URL = "http://0c6a1334.ngrok.io";

class Stats extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    name:"Metal",
                    key:"metal",
                    percentage:"30",
                    color:"bluee"
                },
                {
                    name:"Glass",
                    key:"glass",
                    percentage:"20",
                    color:"purple"
                },
                {
                    name:"Plastic",
                    key:"plastic",
                    percentage:"20",
                    color:"yellow"
                },
                {
                    name:"Cardboard",
                    key:"cardboard",
                    percentage:"10",
                    color:"greenn"
                },
                {
                    name:"Paper",
                    key:"paper",
                    percentage:"15",
                    color:"paper"
                },
                {
                    name:"Trash",
                    key:"trash",
                    percentage:"5",
                    color:"black"
                }
            ]
        }
    }

    render(){
        const data=JSON.parse(this.props.data);
        return(
            <Row>
                {data && this.state.data.map((dat,i)=>{
                    return(
                    <Col xs={12} md={2} key={i} className="center">
                        <div className="circular-bar center">
                            <CircularProgressbar
                                percentage={data[dat.key]===0?"0":Number(data[dat.key])}
                                strokeWidth="7"
                                className={dat.color}
                                initialAnimation={true}
                                textForPercentage= {(percent) => percent }
                            />
                        </div>
                        <h4 className="center">{dat.name}</h4>
                    </Col>
                )
                })}
            </Row>
        )
    }
}
function mapStateToProps(state){
    return {
    };
}

export default connect(mapStateToProps,actions)(Stats);
