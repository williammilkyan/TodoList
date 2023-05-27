

export function TodoItem ({ completed, id, title, timeStamp, toggleTodo, deleteTodo }) {
    return (
        <li>
          <label>
            <input type="checkbox" checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)} 
           />
            {title} -----{timeStamp}
          </label>
          <button
           onClick={() => deleteTodo(id)}
           className="btn btn-danger">Delete</button>  
        </li>
    )
}