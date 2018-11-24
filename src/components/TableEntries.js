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
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import _ from 'lodash';
import * as actions from './../actions';
const ROOT_URL = "http://0c6a1334.ngrok.io";
class TableEntries extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    componentDidMount(){

    }
    render(){
        return(
            <Table
                className="dark-bg"
                selectable={false}
                displayRowCheckbox={false}>
                <TableHeader
                    displaySelectAll={false}
                    >
                        <TableRow>
                            <TableHeaderColumn>UserName</TableHeaderColumn>
                            <TableHeaderColumn>Category</TableHeaderColumn>
                            <TableHeaderColumn>Photo</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={false}>
                        {this.props.users && JSON.parse(this.props.users).map((user,i)=>(
                            <TableRow key={i}>
                                <TableRowColumn>{user.username}</TableRowColumn>
                                <TableRowColumn>{user.category}</TableRowColumn>
                                <TableRowColumn><a href={user.photo} target="_blank"><img src={user.photo} alt="" className="responsive-img"/></a></TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            )
        }
    }

    function mapStateToProps(state){
        return {
        };
    }

    export default connect(mapStateToProps,actions)(TableEntries);
