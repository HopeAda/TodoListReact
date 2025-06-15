import './TodoContainer.css'
import TodoItem from './TodoItem'


function TodoContainer(props){


    return(
        <div className='todoContainer'>
            {props.todos.map((todo, index) => (
                <TodoItem  name = {todo.text}  key= {todo.id} deletefunc = {props.deletefunc} complete = {todo.completed}completefunc = {props.togglefunc} idx = {index}></TodoItem>
            ) )}
        </div>
    )
}

export default TodoContainer