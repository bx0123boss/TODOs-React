import React from "react";
import { AppUI } from "./AppUI";

// const defaultTodos=[
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Comprar ropa', completed: false  },
//   { text: 'Hacer tarea', completed: false },
//   { text: 'Estudiar en Platzi', completed: false  },
  
// ];
function App() {

  //Obtener localStorage de los TODOS o crear uno nuevo
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else{
    parsedTodos = JSON.parse(localStorageTodos);
  }

  //SetState de TODOS
  const [todos,setTodos] = React.useState(parsedTodos);
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

  const saveTodos = (newTodos) =>{
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  }

  //completar todos
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text===text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  //borrar todo:
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text===text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
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
