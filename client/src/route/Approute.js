import React from 'react'
import {Component, Fragment} from 'react'
import { Route, Switch } from 'react-router-dom';

import Home from "../pages/Home";
import Blogs from "../pages/Blogpage";
import About from "../pages/Aboutpage";
import Contact from "../pages/Contactpage";
import Single from "../pages/Single";
import Category from "../pages/Categorypost";
import Tag from "../pages/Tagpost";
import Register from '../pages/Registerpage';
import Login from '../pages/Loginpage';
import Profile from '../pages/Profilepage';
import Post from '../pages/AddPostpage';

class Approute extends Component {
    render(){
        return(
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/blog" component={Blogs} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/blog-details/:slug" component={Single} />
                    <Route exact path="/category/:slug" component={Category} />
                    <Route exact path="/tag/:slug" component={Tag} />
                    <Route exact path="/add-post" component={Post} />
                </Switch>
            </Fragment>
        )
    }
}

export default Approute;