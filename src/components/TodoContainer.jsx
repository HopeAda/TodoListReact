import './TodoContainer.css'
import TodoItem from './TodoItem'


function TodoContainer(props){

    let filteredList

    if (props.filter === "all"){
        filteredList = props.todos
    } else if(props.filter === "completed"){
        filteredList = props.todos.filter((todo, index) =>(
            todo.completed === true
        )) 
    } else if(props.filter === "ongoing"){
        filteredList = props.todos.filter((todo, index) =>(
            todo.completed === false
        ))
    }

    return(
        <div className='todoContainer'>
            {/* {props.todos.map((todo, index) => (
                <TodoItem  name = {todo.text}  key= {todo.id} deletefunc = {props.deletefunc} complete = {todo.completed}completefunc = {props.togglefunc} idx = {index}></TodoItem>
            ) )} */}

            {filteredList.map((todo, index) => (
                <TodoItem  name = {todo.text}  key= {todo.id} deletefunc = {props.deletefunc} complete = {todo.completed}completefunc = {props.togglefunc} idx = {index}></TodoItem>
            ))}
        </div>
    )
}

export default TodoContainer