import React from "react";
import { AppUI } from "./AppUI";

const defaultTodos=[
  { text: 'Cortar cebolla', completed: true },
  { text: 'Comprar ropa', completed: false  },
  { text: 'Hacer tarea', completed: false },
  { text: 'Estudiar en Platzi', completed: false  },
  
];
function App() {
  const [todos,setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  //Counter del titulo
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  
  // Filtrado de elementos
  let filterTodos = [];
  if(!searchValue.length >= 1){
    filterTodos = todos;
  }
  else{
    filterTodos = todos.filter(todo => todo.text.includes(searchValue.toString().toLowerCase()));
  }

  //completar todos
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text===text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };
  //borrar todo:
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text===text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }

  return (
   <AppUI
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue} 
    setSearchValue={setSearchValue}
    filterTodos={filterTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
   />
  );
}

export default App;
