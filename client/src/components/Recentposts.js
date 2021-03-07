import React, {Component, Fragment} from 'react'
import '../assets/css/templatemo-stand-blog.css';
import '../assets/css/custom.css';
import '../assets/css/bootstrap.min.css';
import {Col} from 'react-bootstrap';
import axios from 'axios';
import ApiUrl from '../api/ApiUrl';
import { EMDate } from '../helper/Helper';
import {Link } from 'react-router-dom';

class Recentposts extends Component{

    constructor(){
        super();
        this.state={
            postArray:[]
        }
    }

    componentDidMount(){

        axios.get(ApiUrl.RecentPost).then(response=>{
            this.setState({
                postArray:response.data
            })
        }).catch(error=>{
            this.setState({
                postArray:[],
            })
        });

    }


    render(){

        const listData = this.state.postArray;
        const myView = listData.map(myList=>{
            return <li><Link to={"/blog-details/"+myList.slug} as={"/blog-details/"+myList.slug}>
                        <h5>{myList.title}</h5>
                        <span>{EMDate(myList.publish_date)}</span>
                    </Link></li>
        })

        return(
            <Fragment>
                <Col lg={12} md={12} sm={12}>
                    <div className="sidebar-item recent-posts mt-0">
                    <div className="sidebar-heading">
                        <h2>Recent Posts</h2>
                    </div>
                    <div class="content">
                        <ul>{myView}</ul>
                    </div>
                    </div>
                </Col>
            </Fragment>
        )
    }
}

export default Recentposts;