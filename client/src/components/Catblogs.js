import React, {Component, Fragment} from 'react'
import '../assets/css/templatemo-stand-blog.css';
import '../assets/css/custom.css';
import '../assets/css/bootstrap.min.css';
import { Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt, faTags, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import ApiUrl from '../api/ApiUrl';
import { EMDate,EMExplode,EMStrToSlug } from '../helper/Helper';
import {Link} from 'react-router-dom'

class Catblogs extends Component{

    constructor(props){
        super();
        this.state={
            postArray:[],
            slugUrl:props.slug,
        }
    }

    componentDidMount(){
        
        const makeUrl = ApiUrl.CatPost+this.state.slugUrl;
        axios.get(makeUrl).then(response=>{
            if(response.data==='NULL'){
                this.setState({
                    postArray:[]
                })
            }else{
                this.setState({
                    postArray:response.data
                })
            }
            
        }).catch(error=>{
            this.setState({
                postArray:[],
            })
        });

    }


    render(){

        const listData = this.state.postArray;
        
        const blogHtml = listData.map((myList,i)=>{
            return <Col lg={12} md={12} sm={12}>
            <div className="blog-post">
                <div className="blog-thumb">
                <img src={myList.image} alt=""/>
                </div>
                <div className="down-content">
                <span>{myList.cat_name}</span>
                <Link to={"/blog-details/"+myList.slug}><h4>{myList.title}</h4></Link>
                <ul className="post-info">
                    <li><Link to="/blog-details/{myList.slug}">{myList.aut_name}</Link></li>
                    <li><a href="#">{EMDate(myList.publish_date)}</a></li>
                    <li><a href="#">{myList.comments} Comments</a></li>
                </ul>
                <p>{myList.description}</p>
                <div className="post-options">
                    <Row>
                    <Col lg={6} md={6} sm={6}>
                        <ul className="post-tags">
                        <li><FontAwesomeIcon icon={faTags} className="icon-style" /></li>
                        {
                    
                            EMExplode(myList.tags).slice(0,5).map((tag, i) => 
                                (<li><Link to={"/tag/"+EMStrToSlug(tag)}>{ i==0 ? '' : ','} {tag} </Link></li>)
                            )
                        } 
                        
                        </ul>
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                        <ul className="post-share">
                        <li><FontAwesomeIcon icon={faShareAlt} className="icon-style" /></li>
                        <li><a href="#">Facebook</a>,</li>
                        <li><a href="#"> Twitter</a></li>
                        </ul>
                    </Col>
                    </Row>
                </div>
                </div>
            </div>
            </Col>

        })




        return(
            <Fragment>

                <div className="all-blog-posts">
                <Row>

                    {blogHtml}

                    <Col lg={12} md={12} sm={12}>
                    <ul className="page-numbers">
                        <li><a href="#">1</a></li>
                        <li class="active"><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#"><i class="fa fa-angle-double-right"></i> <FontAwesomeIcon icon={faAngleDoubleRight} className="icon-style"  /> </a></li>
                    </ul>
                    </Col>
                </Row>
                </div>
                    
            </Fragment>
        )
    }
}

export default Catblogs;