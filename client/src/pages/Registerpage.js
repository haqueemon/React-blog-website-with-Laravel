import React, {Component, Fragment} from 'react'
import '../assets/css/templatemo-stand-blog.css';
import '../assets/css/custom.css';
import '../assets/css/bootstrap.min.css';

import Header from "../components/Header";
import Register from "../components/Register";
import Footer from '../components/Footer';
import { withRouter } from 'react-router-dom';

class Registerpage extends Component{

    componentDidMount(){
        window.scroll(0,0);
    }

    render(){
        return(
            <Fragment>

                <Header/>
                <Register/>
                <Footer/>
                
            </Fragment>
        )
    }
}

export default withRouter(Registerpage);