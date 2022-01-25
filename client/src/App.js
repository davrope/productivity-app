import React from 'react';
import {Router, Route, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from './actions';

import Header from './components/Header';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import ProjectNew from './components/projects/ProjectNew';
import ProjectDelete from './components/projects/ProjectDelete';
import ProjectShow from './components/projects/ProjectShow';

import history from './history';
// import StatisticsHome from './components/statistics/StatisticsHome';

class App extends React.Component{
    componentDidMount(){
        this.props.fetchUser();
    }

    render(){
        return(
            <div>
                <Router history = {history}>
                    <div className= "container">
                        <Header/>
                        <Route>
                            <Route exact path = "/" element = {<Landing/>}/>
                            <Route exact path = "/projects" element = {<Dashboard/>} />
                            <Route path = "/projects/new" element={<ProjectNew/>}/>
                            <Route path = "/projects/delete/:id" exact element = {<ProjectDelete/>}/>
                            <Route path = "/projects/:id" exact element = {<ProjectShow/>}/>
                            
                        </Route>                      
                    </div> 
                </Router>
            </div>
            
        );
    }
}

export default connect(null, actions)(App);