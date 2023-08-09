import {Card} from "./component/Card"
import { useState } from "react"
import "./App.css"

function App(){

  const [todoList,setTodoList]=useState([])
  const [task,setTask]=useState("")

  function changetask(e){
    setTask(e.target.value)
  }

  function addTodo(){
    setTodoList([...todoList,task])
    setTask("")
  }

  function removeTodo(element){

    setTodoList(todoList.filter((ele)=>ele !== element))

  }

  return (
    <>
      <div className="searchBar">
        <input type="text" name="search" id="searchText" onChange={changetask} value={task}/>
        <button className="add" onClick={addTodo}>Add</button>
      </div>
      <div className="todoContainer">
        {todoList.map((ele,idx)=><Card index={idx+1} title={ele} key={idx} onHandle={()=>removeTodo(ele)}/>)}
      </div>
    </>
  )

}

export default App