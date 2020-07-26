import React, { useContext, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import { TodoContext } from '../../contexts/todo.context/todo.context'
import { TodoItemType } from '../../@types/todoItem';
import TodoItem from './TodoItem';

function TodoList() {
  const {todoState, todoDispatch} = useContext<any>(TodoContext);
  useEffect(()=>{
    todoDispatch({
      type: "GET_DATA"
    })
  }, [])
  const handleOnClick = (type: String, payload: any)=>{
    todoDispatch({
      type,
      payload,
    })
  }
  return (
    <Row>
      <Col md={4}>
        {todoState.data.filter((item:TodoItemType)=>item.status===0).map((item:TodoItemType)=>(
          <TodoItem key={item.id + "-TodoItem-" + item.title} item={item} handleOnClick={handleOnClick}/>
        ))}
      </Col>

      <Col md={4}>
        {todoState.data.filter((item:TodoItemType)=>item.status===1).map((item:TodoItemType)=>(
          <TodoItem key={item.id + "-TodoItem-" + item.title} item={item} handleOnClick={handleOnClick}/>
        ))}
      </Col>

      <Col md={4}>
        {todoState.data.filter((item:TodoItemType)=>item.status===2).map((item:TodoItemType)=>(
          <TodoItem key={item.id + "-TodoItem-" + item.title} item={item} handleOnClick={handleOnClick}/>
        ))}
      </Col>
    </Row>
  )
}

export default TodoList
