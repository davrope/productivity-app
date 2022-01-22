import axios from 'axios';
// import { STATES } from 'mongoose';
import history from '../history';
import {DELETE_PROJECT, FETCH_PROJECT, FETCH_PROJECTS, FETCH_USER, SEND_TIME, SAVE_TIME, FETCH_TODOS} from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
  
    dispatch({ type: FETCH_USER, payload: res.data });
  };

export const submitProject = (values) => async dispatch =>{
  const res = await axios.post('/api/projects', values);

  
  dispatch({type: FETCH_USER, payload: res.data});
  history.push('/');

};

export const fetchProjects =()=> async dispatch=>{
  const res = await axios.get('/api/projects');
  dispatch({type: FETCH_PROJECTS, payload:res.data});
};

export const deleteProject = id => async dispatch =>{
  await axios.delete(`/api/projects/${id}`);

  dispatch ({type:DELETE_PROJECT, payload:id});
  
  history.push('/');
  history.push('/projects');
};

export const fetchProject = (id) => async dispatch =>{
  const res = await axios.get(`/api/projects/${id}`);
  
  dispatch({type: FETCH_PROJECT, payload:res.data});

};

// Timer:
export const saveTime = (id, time, todos)=> async dispatch=>{
  const res = await axios.post(`/api/projects/${id}`, {time: time, todos:todos});

  dispatch({type: SAVE_TIME, payload: res.data});
}

export const sendTime = time =>({
  type: SEND_TIME,
  time
})


//todos:


export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    todo_id: Date.now(),
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (todo_id) => {
  return {
    type: 'TOGGLE_TODO',
    todo_id
  }
}

export const fetchTodos = todos =>{
  return{
    type: FETCH_TODOS,
    payload: todos
  }
}