import React, {Component, Fragment} from 'react'
import '../assets/css/templatemo-stand-blog.css';
import '../assets/css/custom.css';
import '../assets/css/bootstrap.min.css';
import { Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import ApiUrl from '../api/ApiUrl';
import {EMStrToSlug} from '../helper/Helper';


class Tags extends Component{

    constructor(){
      super();
      this.state={
        tagArray:[],
      }
    }

    componentDidMount(){

      axios.get(ApiUrl.Tags).then(response=>{

        this.setState({
          tagArray:response.data,
        })

      }).catch(error=>{

        this.setState({
          tagArray:[],
        })

      });

    }

    render(){
        const listDataTag = this.state.tagArray;
        const myViewTag = listDataTag.slice(0,5).map(myList=>{
          return <li><Link to={"/tag/"+EMStrToSlug(myList)}>{myList}</Link></li>
        })


        return(
            <Fragment>
                <Col lg={12} md={12} sm={12}>
                  <div class="sidebar-item tags">
                    <div class="sidebar-heading">
                      <h2>Tag Clouds</h2>
                    </div>
                    <div class="content">
                      <ul>
                        {myViewTag}
                      </ul>
                    </div>
                  </div>
                </Col>
            </Fragment>
        )
    }
}

export default Tags;