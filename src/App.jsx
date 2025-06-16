import { useState, useEffect } from 'react'
import './App.css'
import TodoContainer from './components/TodoContainer'
import TodoForm from './components/TodoForm'
import TodoFilter from './components/TodoFilter'
import TodoCount from './components/TodoCount'

function App() {
  const [TodoArray, setTodoArray] = useState(() => {
    const savedTodo = localStorage.getItem('todos')
    return savedTodo ? JSON.parse(savedTodo) : []
  })
  const [filterValue, setFilterValue] = useState("all")




  // Update after adding new todo
  const TodoHandler = (todoitem) =>{
    setFilterValue("all")
    setTodoArray([todoitem, ...TodoArray])
  }

  // When deleting a todo
  const secondDeleteHandler = (deleteIndex) =>{
    let indexToDelete = deleteIndex
    setTodoArray([...TodoArray.slice(0, indexToDelete), ...TodoArray.slice(indexToDelete + 1)])
  }

  // When toggling the checkbox of a todo
  const toggleCheckHandler = (complete, toggleIndex) =>{
    setTodoArray(
      TodoArray.map((todo, index) =>(
        index == toggleIndex ? {...todo, completed: complete} : todo
      ))
    )

  }

  // When filtering a todo
  const filterHandler = (value) =>{
    let filterValue = value
    setFilterValue(filterValue)
  }

  // Saving the todo array to local storage

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(TodoArray))
  }, [TodoArray])
  

  const saveEditHandler = (newText, editIndex) =>{
    setTodoArray(
      TodoArray.map((todo, index) =>
      index == editIndex ? {...todo, text : newText} : todo
    ))
  }


  const clearHandler = () =>{
    setTodoArray(
      TodoArray.filter((todo) => !todo.completed)
    )
  }

  return(
    <div className='todo'>
      <h1>TODO LIST</h1>
      <TodoForm todofunc= {TodoHandler}></TodoForm>
      <TodoFilter onFilter = {filterHandler} filterVal = {filterValue}></TodoFilter>
      <TodoContainer todos = {TodoArray} deletefunc = {secondDeleteHandler} togglefunc = {toggleCheckHandler} filter = {filterValue} saveEdit = {saveEditHandler} ></TodoContainer>
      
      <TodoCount total = {TodoArray.length} completed = {TodoArray.filter((todo) => todo.completed == true).length} incompleted = {TodoArray.filter((todo) => todo.completed == false).length} onClear = {clearHandler}></TodoCount>

    </div>
  )
}

export default App
