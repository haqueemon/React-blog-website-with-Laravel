import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import ApiUrl from '../api/ApiUrl';
import { EMDate,EMExplode,EMStrToSlug } from '../helper/Helper';
import {Link} from 'react-router-dom';


class AddPost extends Component{


    constructor(){
        super();
        this.state={
            title:'',
            errorTitle:'',
            category:'',
            errorCategory:'',
            tags:'',
            errorTags:'',
            description:'',
            errorDescription:'',
            image:'',
            categories:[]
        }
        
        this.onChange = this.onChange.bind(this)
        this.onChangeFile = this.onChangeFile.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        
    }
    
    componentDidMount(){
        axios.get(ApiUrl.Categories).then(response=>{
          this.setState({
            categories:response.data
          })
        }).catch(error=>{
          this.setState({
            categories:[]
          })
        });
      }

      onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }

      onChangeFile(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
              return;
        this.createImage(files[0]);
      }

      createImage(file){
          let render = new FileReader();
          render.onload = (e) => {
              this.setState({
                  image: e.target.result
              })
          }
          render.readAsDataURL(file);
      }
  
      onSubmit(e) {  
          
        e.preventDefault();
  
        if(!this.state.title){
            this.setState({
                errorTitle: 'Please enter title',
                errorCategory:'',
                errorTags:'',
                errorDescription:'',
            })
        }else if(!this.state.category){
            this.setState({
                errorCategory: 'Please enter category',
                errorTitle: '',
                errorTags:'',
                errorDescription:'',
            })
        }else if(!this.state.tags){
            this.setState({
                errorTags: 'Please enter tags',
                errorCategory: '',
                errorTitle: '',
                errorDescription:'',
            })
        }else if(!this.state.description){
            this.setState({
                errorCategory: '',
                errorTitle: '',
                errorTags:'',
                errorDescription: 'Please enter description',
            })
        }else{
  
            const postData = {
              title: this.state.title,
              category: this.state.category,
              tags: this.state.tags,
              description: this.state.description,
              image: this.state.image,
              user_id: localStorage.user_id,
            }
  
            axios
            .post(ApiUrl.AddPost, postData, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .then(response => {
              if(response.data.returnArray['status']==='error'){
                alert(response.data.returnArray['message'])
              }else{
                alert(response.data.returnArray['message'])
                this.setState({
                    title:'',
                    errorTitle:'',
                    category:'',
                    errorCategory:'',
                    tags:'',
                    errorTags:'',
                    description:'',
                    errorDescription:'',
                })
              }
            })
            .catch(err => {
              alert('Something is went to wrong !')
            })
  
        }
  
    }
      


    render(){

        const listData = this.state.categories;
        const myView = listData.map(myList=>{
          return <option value={myList.id} >{myList.name}</option>
        })

        return(
            <Fragment>

                <section className="contact-us">
                    <Container>
                        <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="down-contact">
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                <div class="sidebar-item contact-form">
                                    <div class="sidebar-heading">
                                    <h2>Add New Post | <span className="pull-right"><Link to="/profile">Back</Link></span></h2>
                                    </div>
                                    <div class="content">
                                    <form  noValidate onSubmit={this.onSubmit} enctype="multipart/form-data">
                                        <Row>
                                        <Col lg={12} md={12} sm={12}>
                                            <fieldset>
                                            <input name="title" type="text" id="title" placeholder="Title" required="" value={this.state.title} onChange={this.onChange} />
                                            <p className="error-text">{this.state.errorTitle}</p>
                                            </fieldset>
                                        </Col>
                                        <Col lg={6} md={6} sm={12}>
                                            <fieldset>
                                            <select name="category" required="" onChange={this.onChange} >
                                                <option value="">Select category</option>
                                                {myView}
                                            </select>
                                            <p className="error-text">{this.state.errorCategory}</p>
                                            </fieldset>
                                        </Col>
                                        <Col lg={6} md={6} sm={12}>
                                            <fieldset>
                                            <input name="tags" type="text" id="tags" placeholder="Seperate tag by (,) | Ex: Database,React,Portfolio" required="" value={this.state.tags} onChange={this.onChange} />
                                            <p className="error-text">{this.state.errorTags}</p>
                                            </fieldset>
                                        </Col>
                                        <Col lg={6} md={6} sm={12}>
                                            <fieldset>
                                            <textarea name="description" rows="6" id="description" placeholder="Description" required="" value={this.state.description} onChange={this.onChange}></textarea>
                                            <p className="error-text">{this.state.errorDescription}</p>
                                            </fieldset>
                                        </Col>
                                        <Col lg={6} md={6} sm={12}>
                                            <fieldset>
                                            <input name="file" type="file" id="file"  onChange={this.onChangeFile} />
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
                            </Row>
                            </div>
                        </Col>
                        
                        </Row>
                    </Container>
                </section>

 
            </Fragment>
        )
    }
}

export default AddPost;