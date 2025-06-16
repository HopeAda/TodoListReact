import './TodoContainer.css'
import TodoItem from './TodoItem'


function TodoContainer(props){

    const saveEdit = (text, idx) =>{
        let newText = text
        let editIndex = props.todos.findIndex((todo) => todo.id == filteredList[idx].id)
        props.saveEdit(newText, editIndex)
    }

    const handleClick = (complete, idx) =>{
        let clickIndex = props.todos.findIndex((todo) => todo.id == filteredList[idx].id)
        props.togglefunc(complete, clickIndex)
    }


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


            {filteredList.map((todo, index) => (
                <TodoItem  name = {todo.text}  key= {todo.id} deletefunc = {props.deletefunc} complete = {todo.completed}completefunc = {handleClick} idx = {index} edit= {saveEdit}>
                </TodoItem>
            ))}



        </div>
    )
}

export default TodoContainer