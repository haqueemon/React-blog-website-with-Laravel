import React, {Component, Fragment} from 'react'
import '../assets/css/templatemo-stand-blog.css';
import '../assets/css/custom.css';
import '../assets/css/bootstrap.min.css';

import Header from "../components/Header";
import Contact from '../components/Contact';
import Footer from '../components/Footer';

class Contactpage extends Component{

    componentDidMount(){
        window.scroll(0,0);
    }

    render(){
        return(
            <Fragment>

                <Header/>
                <Contact/>
                <Footer/>
                
            </Fragment>
        )
    }
}

export default Contactpage;