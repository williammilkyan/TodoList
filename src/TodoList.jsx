import { TodoItem } from "./TodoItem";

export function TodoList ( { todos, toggleTodo, deleteTodo } ) {
    return (
        <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          return (
          <TodoItem 
          id={todo.id} 
          completed={todo.completed}
          title={todo.title} 
          timeStamp={todo.timeStamp}
          key={todo.id} 
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          /> //{...todo} key={todo.id}
        )
        })}
        
           
      </ul>
    );
}