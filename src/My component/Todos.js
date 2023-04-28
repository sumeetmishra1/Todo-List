import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  let mystyle={
    minHeight:"70vh"
  }
  return (
    <div className='container'style={mystyle}>
      <h3 className='text-center'>Todos List</h3>
      {props.todos.length===0? <h2 className=' text-center mt-5'>No Todos to display</h2>:
      props.todos.map((todo)=>{
     return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      })}
    </div>
  )
}
