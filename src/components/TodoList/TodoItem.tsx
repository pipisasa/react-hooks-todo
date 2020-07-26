import React from 'react'
import { Card, CardBody, ButtonGroup, Button } from 'reactstrap'
import { TodoItemType, ItemStatus } from '../../@types/todoItem';

type TodoItemProps = {
  item: TodoItemType,
  handleOnClick?:any
}

enum ItemStatusColor{
  warning,
  primary,
  success
}


const TodoItem: React.FunctionComponent<TodoItemProps> = ({item, handleOnClick}) => {
  const ItemButtons = [
    {
      status: 0,
      elem: ()=><Button color="warning" onClick={()=>handleOnClick("UPDATE_ITEM", {id: item.id, data:{status: 0}})}>-</Button>,
    },{
      status: 1,
      elem: ()=><Button color="primary" onClick={()=>handleOnClick("UPDATE_ITEM", {id: item.id, data:{status: 1}})}>&#10003;</Button>,
    },{
      status: 2,
      elem: ()=><Button color="success" onClick={()=>handleOnClick("UPDATE_ITEM", {id: item.id, data:{status: 2}})}>&#10003;&#10003;</Button>,
    },{
      status: "DELETE",
      elem: ()=><Button color="danger" onClick={()=>handleOnClick("DELETE_ITEM", {id: item.id})}>X</Button>
    }
  ]
  return (
    <Card className="my-3">
      <CardBody>
        <h4>{item.title}</h4>
        STATUS: <Button color={ItemStatusColor[item.status]} size="sm">{ItemStatus[item.status]}</Button>
        <ButtonGroup className="w-100 mt-3">
          {ItemButtons.filter(btn=>btn.status !== item.status).map(btn=><btn.elem key={item.id + "-todo-" + btn.status + "-" + item.status}/>)}
        </ButtonGroup>
      </CardBody>
    </Card>
  )
}

export default TodoItem
