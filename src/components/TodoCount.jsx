import './TodoCount.css'

function TodoCount(props) {
    return(
        <div className='todo-count'>
            <span>
                Total: <p>{props.total}</p>
            </span>
            <span>
                Completed: <p>{props.completed}</p>
            </span>
            <span>
                Ongoing: <p>{props.incompleted}</p>
            </span>
        </div>
    )
}

export default TodoCount