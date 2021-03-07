import React, {Component, Fragment} from 'react'
import '../assets/css/templatemo-stand-blog.css';
import '../assets/css/custom.css';
import '../assets/css/bootstrap.min.css';

import Header from "../components/Header";
import Profile from "../components/Profile";
import Footer from '../components/Footer';
import { withRouter } from 'react-router-dom';

class Profilepage extends Component{

    componentDidMount(){
        window.scroll(0,0);
    }

    render(){
        return(
            <Fragment>

                <Header/>
                <Profile/>
                <Footer/>
                
            </Fragment>
        )
    }
}

export default withRouter(Profilepage);