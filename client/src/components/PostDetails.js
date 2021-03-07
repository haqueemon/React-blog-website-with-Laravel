import React, {Component, Fragment} from 'react'
import '../assets/css/templatemo-stand-blog.css';
import '../assets/css/custom.css';
import '../assets/css/bootstrap.min.css';
import {Row, Col, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt, faTags, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import ApiUrl from '../api/ApiUrl';
import { EMDate, EMExplode, EMStrToSlug } from '../helper/Helper';
import { Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

class PostDetails extends Component{

    constructor(props){
      super();
      this.state={
        slugUrl:props.slug,
        title:'...',
        description:'...',
        image:'',
        tags:'',
        cat_name:'',
        author_name:'',
        comments:'',
        publishDate:'',
        message:'',
        post_id:'',
        messageEmpty:'',
        commentArray:[],
      }

      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)

    }

    componentDidMount(){

      const makeUrl = ApiUrl.singlePost+this.state.slugUrl;
      axios.get(makeUrl).then(response=>{
        this.setState({
          title:response.data[0]['title'],
          description:response.data[0]['description'],
          image:response.data[0]['image'],
          tags:response.data[0]['tags'],
          cat_name:response.data[0]['cat_name'],
          author_name:response.data[0]['aut_name'],
          comments:response.data[0]['comments'],
          publishDate:response.data[0]['publish_date'],
          commentArray:response.data[0]['all_comments'],
          post_id:response.data[0]['id'],
        })
      }).catch(error=>{
        this.setState({
          title:'...',
          description:'...',
          image:'',
          tags:'',
          cat_name:'',
          author_name:'',
          comments:'',
          publishDate:'',
          commentArray:[],
          post_id:'',
        })
      });

      const user = {
          user_id: localStorage.user_id
      }
      
    }

    onChange(e) {
      this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {  
        
      e.preventDefault();

      if(!this.state.message){
          this.setState({
              messageEmpty: 'Please enter message',
          })
      }else{

          const messageData = {
            message: this.state.message,
            user_id: localStorage.user_id,
            post_id: this.state.post_id,
          }

          axios
          .post(ApiUrl.AddComment, JSON.stringify(messageData), {
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          })
          .then(response => {
            if(response.data.status==='false'){
              alert(response.data.message)
            }else{
              this.setState({
                comments:response.data[0]['comments'],
                commentArray:response.data[0]['all_comments'],
                message:'',
              })
            }
          })
          .catch(err => {
            alert('Something is went to wrong !')
          })

      }

  }
    
    render(){

      const listData = this.state.commentArray;
      const commentView = listData.map(myList=>{

        let imageUrl = 'https://d32ogoqmya1dw8.cloudfront.net/images/serc/empty_user_icon_256.v2.png';
        if(myList.aut_image){
          imageUrl = myList.aut_image;
        }

        return <li>
        <div className="author-thumb">
            <img style={{height:'80px'}} src={imageUrl} alt={myList.aut_name}/>
        </div>
        <div className="right-content">
            <h4>{myList.aut_name}<span>{EMDate(myList.publish_date)}</span></h4>
            <p>{ReactHtmlParser(myList.comment_text)}</p>
        </div>
        </li>
      })


      const addComment = (

        <Col lg={12} md={12} sm={12}>
          <div className="sidebar-item submit-comment">
              <div className="sidebar-heading">
              <h2>Your comment</h2>
              </div>
              <div className="content">
              <form noValidate onSubmit={this.onSubmit}>
                  <Row>
                  <Col lg={12} md={12} sm={12}>
                      <fieldset>
                      <textarea name="message" rows="6" id="message" placeholder="Type your comment" required="" value={this.state.message} onChange={this.onChange}></textarea>
                      <p className="error-text">{this.state.messageEmpty}</p>
                      </fieldset>
                  </Col>
                  <Col lg={12} md={12} sm={12}>
                      <fieldset>
                      <button className="main-button" type="submit" >Submit</button>
                      </fieldset>
                  </Col>
                  </Row>
              </form>
              </div>
          </div>
        </Col>

      )
  
      const loginSuggest = (

        <div style={{display:'inherit'}}>
            <Col lg={12} md={12} sm={12}>
            <div className="sidebar-item submit-comment">
                <div class="sidebar-heading">
                  <h2>Your comment</h2>
                  <h4>You need to login first <Link to="/login">Login here</Link></h4>
                </div>
            </div>
          </Col>
        </div>

      )
  



        return(
            <Fragment>

            <div className="all-blog-posts">
                <Row>
                  <Col lg={12} md={12} sm={12}>
                  <div className="blog-post">
                    <div className="blog-thumb">
                      <img src={this.state.image} alt=""/>
                    </div>
                    <div className="down-content">
                      <span>{this.state.cat_name}</span>
                      <h4>{this.state.title}</h4>
                      <ul className="post-info">
                        <li><a href="#">{this.state.author_name}</a></li>
                        <li><a href="#">{this.state.publishDate}</a></li>
                        <li><a href="#">{this.state.comments} Comments</a></li>
                      </ul>
                      <p>{ReactHtmlParser(this.state.description)}</p>
                      <div className="post-options">
                        <Row>
                          <Col lg={6} md={6} sm={12}>
                            <ul className="post-tags">
                              <li><FontAwesomeIcon icon={faTags} className="icon-style" /></li>
                              {
                    
                                  EMExplode(this.state.tags).slice(0,5).map((tag, i) => 
                                      (<li><Link to={"/tag/"+EMStrToSlug(tag)}>{ i==0 ? '' : ','} {tag} </Link></li>)
                                  )
                              } 
                            </ul>
                          </Col>
                          <Col lg={6} md={6} sm={12}>
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
                  <Col lg={12} md={12} sm={12}>
                    <div className="sidebar-item comments">
                        <div className="sidebar-heading">
                        <h2>{this.state.comments} comments</h2>
                        </div>
                        <div className="content">
                        <ul>

                            {commentView}

                        </ul>
                        </div>
                    </div>
                  </Col>

                    
                  {localStorage.userlogin ? addComment : loginSuggest}



                </Row>
            </div>



                    
            </Fragment>
        )
    }
}

export default withRouter(PostDetails);