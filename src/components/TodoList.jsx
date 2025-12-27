import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const {todos, selectedTab, handleDeleteTodo} = props
  const tab = selectedTab;
  const filteredTodo = tab === "All" ? todos :
  tab === "Completed" ? todos.filter(val => val.complete) :
  todos.filter(val => !val.complete);

  return <>
    {filteredTodo.map((todo, todoIndex)=>{
      return(
        <TodoCard key={todoIndex} todo={todo} todoIndex={todoIndex} {...props}/>
      )
    })}
  </>
}