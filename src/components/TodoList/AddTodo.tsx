import React, { useState, FormEvent, useContext } from 'react'
import { Input, InputGroup, InputGroupAddon, Button } from 'reactstrap'
import { TodoContext } from '../../contexts/todo.context/todo.context';

function AddTodo() {
  const [title, setTitle] = useState("");
  const { todoDispatch } = useContext<any>(TodoContext);
  const handleSubmit=(e:FormEvent)=>{
    e.preventDefault()
    todoDispatch({
      type: "ADD_NEW_ITEM",
      payload: {
        status: 0,
        title,
      }
    })
    setTitle("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup className="mb-2 mt-4">
        <Input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" required/>
        <InputGroupAddon addonType="append">
          <Button type="submit" color="primary">OK</Button>
        </InputGroupAddon>
      </InputGroup>
    </form>
  )
}

export default AddTodo
