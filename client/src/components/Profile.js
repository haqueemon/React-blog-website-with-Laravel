import React, { Component } from 'react'
import { getProfile } from '../helper/UserFunctions'
import { withRouter } from 'react-router-dom';
import {Container, Row, Col, Button} from 'react-bootstrap';

import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import ApiUrl from '../api/ApiUrl';
import axios from 'axios';
import { EMDate } from '../helper/Helper';
import { Link } from 'react-router-dom';

class Profile extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            number: '',
            tableArray:[],
        }

    }

    componentDidMount() {

        window.scroll(0,0);

        const user = {
            user_id: localStorage.user_id
        }

        if (localStorage.userlogin==='true') {

            getProfile(user).then(res => {
                this.setState({
                    name: res.user.name,
                    email: res.user.email,
                    number: res.user.number,
                })
            })

            axios.get(ApiUrl.Author+localStorage.user_id).then(response=>{
                if(response.data=='null'){
                    this.setState({
                        tableArray:[]
                    })
                    $(document).ready(function () {
                        $('#example').DataTable();
                    });
                }else{
                    this.setState({
                        tableArray:response.data
                    })
                    $(document).ready(function () {
                        $('#example').DataTable();
                    });
                }


            }).catch(error=>{
                this.setState({
                    tableArray:[],
                })
            });


        }else{
          this.props.history.push(`/login`)
        }
        
    }

    remove(id){

        if(window.confirm('Are you sure ?')){
            axios.get(ApiUrl.DeletePost+id+'/'+localStorage.user_id).then(response=>{
                if(response.data=='null'){
                    this.setState({
                        tableArray:[]
                    })
                    $(document).ready(function () {
                        $('#example').DataTable();
                    });
                }else{
                    this.setState({
                        tableArray:response.data
                    })
                    $(document).ready(function () {
                        $('#example').DataTable();
                    });
                }
            }).catch(error=>{
                this.setState({
                    tableArray:[],
                })
            });
        }

    }

    render() {

        const listData = this.state.tableArray;
        const myView = listData.map(myList=>{
            return <tr>
                <td>{myList.title}</td>
                <td>{myList.cat_name}</td>
                <td><img src={myList.image} style={{height:'70px'}} /></td>
                <td>{EMDate(myList.publish_date)}</td>
                <td>{myList.status}</td>
                <td><Button className="btn btn-xs btn-danger" onClick={this.remove.bind(this, myList.id)} >Delete</Button></td>
            </tr>
        })

        return (
            <section className="contact-us">
                <Container>
                    <Row>
                        <Col lg={3} md={3} sm={12} className="mt-5">
                            <h1 className="h3 mb-3 font-weight-normal h1-custom">Hi {this.state.name},</h1>
                            <br/>
                            <p className="profile_P"><span className="spanText">Name : </span>{this.state.name}</p>
                            <p className="profile_P"><span className="spanText">Email : </span>{this.state.email}</p>
                            <p className="profile_P"><span className="spanText">Email : </span>{this.state.email}</p>
                            <p className="profile_P"><span className="spanText">Number : </span>{this.state.number ? this.state.number : 'N/A'}</p>
                            <br/>
                            <h3><Link to="/add-post">Add New Post</Link></h3>
                        </Col>
                        <Col lg={9} md={9} sm={12} className="mt-5">
                            <table id="example" class="display">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Category</th>
                                        <th>Image</th>
                                        <th>Publish Date</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {myView}
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Container>
            </section>

        )
    }
}

export default withRouter(Profile)