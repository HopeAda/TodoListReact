import './TodoFilter.css'

function TodoFilter(){
    return(
        <div className='todo-filter'>
            <div className="filters">
                <button className='all'>All</button>
                <button className='completed'>Completed</button>
                <button className='ongoing'>Ongoing</button>
            </div>
        </div>
    )
}


export default TodoFilter