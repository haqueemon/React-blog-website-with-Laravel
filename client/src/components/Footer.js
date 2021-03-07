import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class Footer extends Component{
    render(){
        return(
            <Fragment>
                <footer>
                <Container>
                    <Row>
                    <Col lg={12} md={12} sm={12}>
                        <ul className="social-icons">
                        <li><a target="_blank" href="//www.facebook.com">Facebook</a></li>
                        <li><a target="_blank" href="//www.twitter.com">Twitter</a></li>
                        <li><a target="_blank" href="//www.linkedin.com">Linkedin</a></li>
                        </ul>
                    </Col>
                    <Col lg={12} md={12} sm={12}>
                        <div class="copyright-text">
                        <p>Copyright 2020 | Deveop By Emon</p>
                        </div>
                    </Col>
                    </Row>
                </Container>
                </footer>
            </Fragment>
        )
    }
}

export default Footer;