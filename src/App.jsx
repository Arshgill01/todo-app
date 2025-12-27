import { Tabs } from "./components/Tabs";
import { Header } from "./components/Header";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { useState } from "react";
function App(){

  // const todos = [
  // { input: 'Hello! Add your first todo!', complete: true },
  // { input: 'Get the groceries!', complete: false },
  // { input: 'Learn how to web design', complete: false },
  // { input: 'Say hi to gran gran', complete: true },
  // ]

  const [todos, setTodos] = useState([{ input: 'Hello! Add your first todo!', complete: true }]);

  function handleAddTodo(newTodo){
    const newTodoList = [...todos, {input: newTodo, complete: false}];
    setTodos(newTodoList);
   
  }

 // spreading out the todos -- currently one one default todo, 
    // and then creating a newtodo, which is the parameter, and the value for the complete status, which would be false in the start. 

  return(
    <>


    <Header todos={todos}/>
    <Tabs todos={todos}/>
    <TodoInput handleAddTodo={handleAddTodo}/>
    <TodoList todos={todos}/>


    </>  
  )
}

export default App;