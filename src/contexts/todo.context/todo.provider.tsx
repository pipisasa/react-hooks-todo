import React, { useReducer } from 'react';
import { TodoContext } from './todo.context';
import { API_URL } from '../../constants';
import Axios from 'axios';

let INITIAL_STATE = {
  data:[]
};

type ActionType = {
  type: String,
  payload?: any
}

const _reducer = async (dispatch:any, action:any)=>{
  switch(action.type){
    case "GET_DATA":
      const {data} = await Axios(`${API_URL}/todos`);
      dispatch({
        type: "GET_DATA_SUCCESS",
        payload: data,
      })
      break;
    case "DELETE_ITEM":
      Axios.delete(`${API_URL}/todos/${action.payload.id}`).then(resp=>{
        _reducer(dispatch,{
          type:"GET_DATA",
        })
      })
      break;
    case "ADD_NEW_ITEM":
      Axios.post(`${API_URL}/todos`, action.payload).then(resp=>{
        _reducer(dispatch,{
          type:"GET_DATA"
        })
      })
      break;
    case "UPDATE_ITEM":
      Axios.patch(`${API_URL}/todos/${action.payload.id}`, action.payload.data).then(resp=>{
        _reducer(dispatch,{
          type:"GET_DATA"
        })
      })
      break;
    }
    dispatch(action);
}

function reducer(state: any, action: ActionType) {
  console.log(state, 'todo');
  switch (action.type) {
    case "GET_DATA_SUCCESS":
      return {...state, data: action.payload}
    default:
      return state;
  }
}

const middleWare = (state:any, action:ActionType)=>{
  const chain = [reducer];
  return chain.reduce((st,fn)=>fn(st, action), state)
}

export const TodoProvider: React.FunctionComponent = ({ children }) => {
  const [todoState, todoDispatch] = useReducer(middleWare, INITIAL_STATE);
  return (
    <TodoContext.Provider value={{ todoState, todoDispatch:(action:any)=>_reducer(todoDispatch, action) }}>
      {children}
    </TodoContext.Provider>
  );
};
