import React, {Component, Fragment} from 'react'
import '../assets/css/templatemo-stand-blog.css';
import '../assets/css/custom.css';
import '../assets/css/bootstrap.min.css';

import Header from "../components/Header";
import About from "../components/About";
import Footer from '../components/Footer';

class Aboutpage extends Component{

    componentDidMount(){
        window.scroll(0,0);
    }

    render(){
        return(
            <Fragment>

                <Header/>
                <About/>
                <Footer/>
                
            </Fragment>
        )
    }
}

export default Aboutpage;