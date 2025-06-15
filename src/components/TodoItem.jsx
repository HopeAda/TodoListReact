import './TodoItem.css'

function TodoItem(props){
    const deleteHandler = () =>{
        props.deletefunc(props.idx)
    }

    const clickHandler = () =>{
        let complete = !props.complete
        props.completefunc(complete, props.idx)

    }


    return(
        <div className='todo-item'>
            <span onClick={clickHandler}>
                <input type="checkbox" name="box" id='box'  className='check' checked = {props.complete} onChange={clickHandler} />
                <label htmlFor = "box" className="item-name"><p>{props.name}</p></label>
            </span>
            <div className="remove" onClick={deleteHandler}> x
                {/* <i class="fa-solid fa-xmark"></i> */}
            </div>

        </div>
    )
}


export default TodoItem