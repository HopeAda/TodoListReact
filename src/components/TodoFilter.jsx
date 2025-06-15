import './TodoFilter.css'

function TodoFilter(props){

    const filter = (e) =>{
        let val = e.target.value
        props.onFilter(val)
    }

    return(
        <div className='todo-filter'>
            <div className="filters">
                <button className={props.filterVal === 'all' ? 'active' : ''} value={'all'} onClick={filter}>All</button>
                <button className={props.filterVal === 'completed' ? 'active' : ''} value={'completed'} onClick={filter}>Completed</button>
                <button className={props.filterVal === 'ongoing' ? 'active' : ''} value={'ongoing'} onClick={filter}>Ongoing</button>
            </div>
        </div>
    )
}


export default TodoFilter