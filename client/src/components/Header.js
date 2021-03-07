import React, {Component, Fragment} from 'react';
import '../assets/css/templatemo-stand-blog.css';
import '../assets/css/custom.css';
import '../assets/css/bootstrap.min.css';
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Header extends Component{

    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('userlogin')
        localStorage.removeItem('user_id')
        this.props.history.push('/')
    }

    render(){

    
        const loginRegLink = (

            <div style={{display:'inherit'}}>
                <Nav.Link className="nav-item c-b">
                    <NavLink exact activeStyle={{color:'#f48840'}} to="/login">Login</NavLink>
                </Nav.Link>
                <Nav.Link className="nav-item c-b">
                    <NavLink exact activeStyle={{color:'#f48840'}} to="/register">Register</NavLink>
                </Nav.Link>
            </div>

          )
      
          const userLink = (

            <div style={{display:'inherit'}}>
                <Nav.Link className="nav-item c-b">
                    <NavLink exact activeStyle={{color:'#f48840'}} to="/profile">Profile</NavLink>
                </Nav.Link>
                <Nav.Link className="nav-item c-b">
                    <NavLink exact activeStyle={{color:'#f48840'}} to="/" onClick={this.logOut.bind(this)}>Logout</NavLink>
                </Nav.Link>
            </div>

          )
      


        return(
            <Fragment>
            <header className="">
                <Container>
                    <Row>
                        <Col>
                        <Navbar collapseOnSelect expand="lg" >
                            <Navbar.Brand><NavLink to="/"><h2>React Blog<em>.</em></h2></NavLink></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                </Nav>
                                <Nav>
                                    
                                <Nav.Link className="nav-item c-b"><NavLink exact  activeStyle={{color:'#f48840'}} to="/">Home</NavLink></Nav.Link>
                                <Nav.Link className="nav-item c-b"><NavLink exact activeStyle={{color:'#f48840'}} to="/blog">Blog</NavLink></Nav.Link>
                                <Nav.Link className="nav-item c-b"><NavLink exact activeStyle={{color:'#f48840'}} to="/about">About</NavLink></Nav.Link>
                                <Nav.Link className="nav-item c-b"><NavLink exact activeStyle={{color:'#f48840'}} to="/contact">Contact</NavLink></Nav.Link>
                                {localStorage.userlogin ? userLink : loginRegLink}
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        </Col>
                    </Row>
                </Container>
            </header>

            </Fragment>
        )
    }
}

export default withRouter(Header);