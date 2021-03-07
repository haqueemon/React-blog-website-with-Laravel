import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import loadingImage from '../asset/image/loader.svg';

class Loading extends Component{
    render(){
        return(
            <Fragment>
                <Container className="text-center">
                    <Row>
                    <Col lg={12} md={12} sm={12}>
                        <img  className="loader-size" src={loadingImage} />
                    </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Loading;