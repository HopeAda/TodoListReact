import './TodoForm.css'
import { useState } from 'react'





function TodoForm(props){
    const [TodoText, setTodoText] = useState("")

    const inputChangeHandler = (event) =>{
        setTodoText(event.target.value)
    }

    const submitHandler = (event) =>{
        event.preventDefault()
        if (TodoText.trim()) {
            props.todofunc({
                id : Date.now(),
                text : TodoText,
                completed: false,

            })
        }
        

        setTodoText("")
    }

    return(
        <div className='todoForm'>
            <form action="" onSubmit={submitHandler}>
                <input type="text" name="todo" id="todo" placeholder='What do you want to do?' 
                value = {TodoText} onChange={inputChangeHandler} />
                <button type="submit" className='btn'>Submit</button>
            </form>
        
        </div>
    )
}

export default TodoForm