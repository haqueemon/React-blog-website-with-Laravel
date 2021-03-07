import React, { Component } from 'react';
import { login } from '../helper/UserFunctions';
import {Container, Row, Col} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    
    constructor() {
        super()
        this.state = {
            email: '',
            emailEmpty: '',
            password: '',
            passwordEmpty: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {  
        
        e.preventDefault();
        
        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if(!this.state.email){
            this.setState({
                emailEmpty: 'Please enter email',
                passwordEmpty: '',
            })
        }else if(!pattern.test(this.state.email)) {
            this.setState({
                emailEmpty: 'Please enter valid email',
                passwordEmpty: '',
            })
        }else if(!this.state.password){
            this.setState({
                emailEmpty: '',
                passwordEmpty: 'Please enter password',
            })
        }else{

            const user = {
                email: this.state.email,
                password: this.state.password
            }

            login(user).then(res => {
                if (res) {
                    alert('Login Successfull')
                    this.props.history.push(`/profile`)
                }
            })
        }

    }

    render() {
        return (
            <section className="contact-us">
            <Container>
                <Row>
                    <Col lg={4} md={4} sm={12} className="mt-5 mx-auto">
                        <h1 className="h3 mb-3 text-center">
                            Please sign in
                        </h1>
                        <br/>
                        <form noValidate onSubmit={this.onSubmit} className="form-css">
                            <div className="form-group">
                                <input
                                    type="email"
                                    required="required"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                                <p className="error-text">{this.state.emailEmpty}</p>
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    required="required"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                                <p className="error-text">{this.state.passwordEmpty}</p>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-lg btn-primary btn-block"
                            >
                                Sign in
                            </button>
                        </form>
                    </Col>
                </Row>
            </Container>
            </section>
        )
    }
}

export default withRouter(Login)