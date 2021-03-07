import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class About extends Component{
    render(){
        return(
            <Fragment>
                <section className="about-us">
                <Container>
                    <Row>
                    <Col lg={12} md={12} sm={12}>
                        <img src="https://templatemo.com/templates/templatemo_551_stand_blog/assets/images/about-us.jpg" alt="" />
                        <p>Please tell your friends about TemplateMo website. Thank you. You can browse through different categories of templates such as etc. Pellentesque quis luctus libero. Maecenas pretium molestie erat, ac tincidunt leo gravida ac. Cras ullamcorper eu ipsum eu sollicitudin. Fusce vitae commodo turpis. Integer ullamcorper purus nec justo mollis fermentum. Nunc imperdiet erat nec lacinia laoreet.</p>
                        <p>Maecenas faucibus ullamcorper felis vitae finibus. Nullam at quam ut lacus aliquam tempor vel sed ipsum. Donec pellentesque tincidunt imperdiet. Mauris sit amet justo vulputate, cursus massa congue, vestibulum odio. Aenean elit nunc, gravida in erat sit amet, feugiat viverra leo. Phasellus interdum, diam commodo egestas rhoncus, turpis nisi consectetur nibh, in vehicula eros orci vel neque.</p>
                    </Col>
                    </Row>
                </Container>
                </section>
            </Fragment>
        )
    }
}

export default About;