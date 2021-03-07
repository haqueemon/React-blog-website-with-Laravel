import React, {Component, Fragment} from 'react'
import '../assets/css/templatemo-stand-blog.css';
import '../assets/css/custom.css';
import '../assets/css/bootstrap.min.css';

import Header from "../components/Header";
import AddPost from '../components/AddPost';
import Footer from '../components/Footer';

class AddPostpage extends Component{

    componentDidMount(){
        window.scroll(0,0);
    }

    render(){
        return(
            <Fragment>

                <Header/>
                <AddPost/>
                <Footer/>
                
            </Fragment>
        )
    }
}

export default AddPostpage;