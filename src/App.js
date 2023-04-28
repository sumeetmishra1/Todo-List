
import './App.css';
import Header from "./My component/Header";
import  {Footer}  from './My component/Footer';
import  {Todos}  from './My component/Todos';
import  {AddTodo}  from './My component/AddTodo';
import React, { useState } from 'react';
import { BrowserRouter,Route ,Routes } from 'react-router-dom';
import { About } from './My component/About';
function App() {
 const onDelete =(todo)=>{
  console.log("deleted",todo);
  setTodos(todos.filter((e)=>{
    return e!==todo;
  }))
  }
  const addTodo=(title,desc)=>{
    console.log("I am adding this",title);
    let sno;
    if(todos.length===0){
      sno=0;
    }else{
     sno=todos[todos.length-1].sno +1;}
    const myTodo ={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }

  const[todos, setTodos]= useState([
    {
      sno: 1,
      title:"Go to the market",
      desc:"You need to go the market to get this job done"
    },
    {
    sno: 2,
    title:"Go to the mall",
    desc:"You need to go the market to get this job done"
  },
  {
  sno: 3,
  title:"Go to the ghat",
  desc:"You need to go the market to get this job done"
},
  ]);
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='about' element={<About/>}/>
            <Route path="/"  element={<>
            <Header/>
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
            <Footer/>
            </>}/>
          </Routes>
          </BrowserRouter>
          </>
      
  );
}

export default App;
