import { useState } from 'react'
import './App.css'
import TodoContainer from './components/TodoContainer'
import TodoForm from './components/TodoForm'
import TodoFilter from './components/TodoFilter'

function App() {
  const [TodoArray, setTodoArray] = useState([])
  
  const TodoHandler = (todoitem) =>{
    setTodoArray([todoitem, ...TodoArray])
  }

  const secondDeleteHandler = (deleteIndex) =>{
    let indexToDelete = deleteIndex
    setTodoArray([...TodoArray.slice(0, indexToDelete), ...TodoArray.slice(indexToDelete + 1)])
  }

  const toggleCheckHandler = (complete, toggleIndex) =>{
    setTodoArray(
      TodoArray.map((todo, index) =>(
        index == toggleIndex ? {...todo, completed: complete} : todo
      ))
    )

  }

  return(
    <div className='todo'>
      <h1>TODO LIST</h1>
      <TodoForm todofunc= {TodoHandler}></TodoForm>
      <TodoFilter></TodoFilter>
      <TodoContainer todos = {TodoArray} deletefunc = {secondDeleteHandler} togglefunc = {toggleCheckHandler}></TodoContainer>
      
    </div>
  )
}

export default App
