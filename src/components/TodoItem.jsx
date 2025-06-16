import './TodoItem.css'
import { useState } from 'react'

function TodoItem(props){
    const [isEditing, setIsEditing] = useState(false)
    const [editInput, setEditInput] = useState(props.name)

    const onEditing = () =>{
        setIsEditing(true)
    }
    const saveEdit = () =>{
        props.edit(editInput, props.idx)
        setIsEditing(false)
    }

    const deleteHandler = () =>{
        props.deletefunc(props.idx)
    }

    const clickHandler = () =>{
        let complete = !props.complete
        props.completefunc(complete, props.idx)

    }

    const editHandler = (e) =>{
        setEditInput(e.target.value)
    }
    


    return(
        <div className='todo-item'>
            {isEditing ? (
                <span className='edit-todo'>
                    <input type="text" name="" id="" value={editInput} autoFocus onChange={editHandler}/>
                    <button className="save-btn" onClick={saveEdit}>Save</button>
                </span>
            ) :
            <span className='list-item'>

                <span onClick={clickHandler}>
                    <input type="checkbox" name="box" id='box'  className='check' checked = {props.complete} onChange={clickHandler} />
                    <div className="item-name"><p>{props.name}</p></div>
                </span>
                {(!props.complete) ? 
                <div className="edit-item" onClick={onEditing}>
                    <i className="fa-solid fa-pen"></i>
                    {/* e */}
                </div> : ""}
                <div className="remove" onClick={deleteHandler}> 
                    {/* x */}
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </span>
            }


        </div>
    )
}


export default TodoItem