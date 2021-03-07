import React, {Component, Fragment} from 'react'
import '../assets/css/templatemo-stand-blog.css';
import '../assets/css/custom.css';
import '../assets/css/bootstrap.min.css';
import { Col} from 'react-bootstrap';
import axios from 'axios';
import {Link} from 'react-router-dom';
import ApiUrl from '../api/ApiUrl';

class Category extends Component{

    constructor(){
      super();
      this.state={
        categoryArray:[]
      }
    }

    componentDidMount(){
      axios.get(ApiUrl.Categories).then(response=>{
        this.setState({
          categoryArray:response.data
        })
      }).catch(error=>{
        this.setState({
          categoryArray:[]
        })
      });
    }

    render(){

      const listData = this.state.categoryArray;
      const myView = listData.map(myList=>{
        return <li><Link to={'/category/'+myList.slug}>- {myList.name}</Link></li>
      })

        return(
            <Fragment>
                <Col lg={12} md={12} sm={12}>
                  <div class="sidebar-item categories">
                    <div class="sidebar-heading">
                      <h2>Categories</h2>
                    </div>
                    <div class="content">
                      <ul>
                        {myView}
                      </ul>
                    </div>
                  </div>
                </Col>
            </Fragment>
        )
    }
}

export default Category;