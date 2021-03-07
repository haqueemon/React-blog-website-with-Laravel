import React, {Component, Fragment} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import '../assets/css/templatemo-stand-blog.css';
import '../assets/css/custom.css';
import '../assets/css/bootstrap.min.css';

import Header from "../components/Header";
import Tagblogs from "../components/Tagblogs";
import Category from "../components/Category";
import Recentposts from "../components/Recentposts";
import Footer from '../components/Footer';

class Tagpost extends Component{

    constructor({match}){
        super();
        this.state={
          slugUrl:match.params.slug,
        }
    }

    componentDidMount(){
        window.scroll(0,0);
    }

    render(){
        return(
            <Fragment>

                <Header/>
                <section className="blog-posts">
                  <Container>
                    <Row>
                      <Col lg={8} md={8} sm={12}>
                        <Tagblogs slug={this.state.slugUrl}/>
                      </Col>
                      <Col lg={4} md={4} sm={12}>
                        <div class="sidebar">
                          <Row>
                            <Recentposts/>
                            <Category/>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </section>
                <Footer/>
                
            </Fragment>
        )
    }

}
export default Tagpost;