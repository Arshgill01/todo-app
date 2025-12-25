import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const {todos} = props
  const tab = "All";
  const filteredTodo = tab === "All" ? todos :
  tab === "Complete" ? todos.filter(val => val.complete) :
  todos.filter(val => !val.complete);

  return <>
    {filteredTodo.map((todo, todoIndex)=>{
      return(
        <TodoCard key={todoIndex} todo={todo}/>
      )
    })}
  </>
}