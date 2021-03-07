import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class Contact extends Component{
    
    
    onSubmit(e) {  
        
        e.preventDefault();
        alert('Working on this function ');
  
    }
      
    render(){
        return(
            <Fragment>

                <section className="contact-us">
                    <Container>
                        <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="down-contact">
                            <Row>
                                <Col lg={8} md={8} sm={12}>
                                <div class="sidebar-item contact-form">
                                    <div class="sidebar-heading">
                                    <h2>Send us a message</h2>
                                    </div>
                                    <div class="content">
                                    <form noValidate onSubmit={this.onSubmit.bind(this)}>
                                        <div class="row">
                                        <div class="col-md-6 col-sm-12">
                                            <fieldset>
                                            <input name="name" type="text" id="name" placeholder="Your name" required="" />
                                            </fieldset>
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <fieldset>
                                            <input name="email" type="text" id="email" placeholder="Your email" required="" />
                                            </fieldset>
                                        </div>
                                        <div class="col-md-12 col-sm-12">
                                            <fieldset>
                                            <input name="subject" type="text" id="subject" placeholder="Subject" />
                                            </fieldset>
                                        </div>
                                        <div class="col-lg-12">
                                            <fieldset>
                                            <textarea name="message" rows="6" id="message" placeholder="Your Message" required=""></textarea>
                                            </fieldset>
                                        </div>
                                        <div class="col-lg-12">
                                            <fieldset>
                                            <button class="">Send Message</button>
                                            </fieldset>
                                        </div>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                <div class="sidebar-item contact-information">
                                    <div class="sidebar-heading">
                                    <h2>contact information</h2>
                                    </div>
                                    <div class="content">
                                    <ul>
                                        <li>
                                        <h5>090-484-8080</h5>
                                        <span>PHONE NUMBER</span>
                                        </li>
                                        <li>
                                        <h5>info@company.com</h5>
                                        <span>EMAIL ADDRESS</span>
                                        </li>
                                        <li>
                                        <h5>123 Aenean id posuere dui, 
                                            <br></br>Praesent laoreet 10660</h5>
                                        <span>STREET ADDRESS</span>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </Col>
                            </Row>
                            </div>
                        </Col>
                        
                        </Row>
                    </Container>
                </section>

 
            </Fragment>
        )
    }
}

export default Contact;