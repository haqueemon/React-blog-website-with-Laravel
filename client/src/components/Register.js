import React, { Component } from 'react';
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import ApiUrl from '../api/ApiUrl';

class Register extends Component {

    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            con_password: '',
            session: '',
            nameError: '',
            emailError: '',
            passwordError: '',
            con_passwordError: '',
            errors: {}
        };

        this.inputChange = this.inputChange.bind(this);
        this.continue = this.continue.bind(this);
        
    }

    inputChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    continue(e) {

        e.preventDefault();

        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if(!this.state.name){
            this.setState({
                nameError: 'Please enter name',
                emailError: '',
                passwordError: '',
                con_passwordError: '',
            })
        }else if(!this.state.email){
            this.setState({
                nameError: '',
                emailError: 'Please enter email',
                passwordError: '',
                con_passwordError: '',
            })
        }else if(!pattern.test(this.state.email)) {
            this.setState({
                nameError: '',
                emailError: 'Please enter valid email',
                passwordError: '',
                con_passwordError: '',
            })
        }else if(!this.state.password){
            this.setState({
                nameError: '',
                emailError: '',
                passwordError: 'Please enter password',
                con_passwordError: '',
            })
        }else if(!this.state.con_password){
            this.setState({
                nameError: '',
                emailError: '',
                passwordError: '',
                con_passwordError: 'Please enter confirm password',
            })
        }else if(this.state.con_password!==this.state.password){
            this.setState({
                nameError: '',
                emailError: '',
                passwordError: '',
                con_passwordError: 'Password does not match',
            })
        }else{

            const userData = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                con_password: this.state.con_password
            }

            axios
            .post(ApiUrl.Register, JSON.stringify(userData), {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .then(response => {
                this.setState({
                    name: '',
                    email: '',
                    password: '',
                    con_password: '',
                    session: '',
                    nameError: '',
                    emailError: '',
                    passwordError: '',
                    con_passwordError: '',
                })
                alert(response.data.returnArray.message)

            })
            .catch(err => {
                console.log('Something !')
            })
        }

    };


    render () {

        return (
            <section className="contact-us">
            <Container>
                <Row>
                    <Col lg={5} md={5} sm={12} className="mt-5 mx-auto">

                        <div className="form-container">


                            <h1 className="text-center">Register your account</h1>

                            <br/>
                            <br/>

                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.inputChange} />
                                <p className="error-text">{this.state.nameError}</p>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" name="email"  value={this.state.email} onChange={this.inputChange} />
                                <p className="error-text">{this.state.emailError}</p>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.inputChange}  />
                                <p className="error-text">{this.state.passwordError}</p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Confirm Password</label>
                                <input type="password" className="form-control" name="con_password" value={this.state.con_password} onChange={this.inputChange}  />
                                <p className="error-text">{this.state.con_passwordError}</p>
                            </div>


                            <br />

                            <div className="form-group">
                                <button className="btn btn-primary btn-block" onClick={this.continue}>Submit</button>
                            </div>

                            <br/>
                            <br/>
                            <br/>

                        </div>
                    </Col>
                </Row>
            </Container>
            </section>
        )
    }
}

export default withRouter(Register)