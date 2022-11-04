import React from "react";
import { AppUI } from "./AppUI";

// const defaultTodos=[
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Comprar ropa', completed: false  },
//   { text: 'Hacer tarea', completed: false },
//   { text: 'Estudiar en Platzi', completed: false  },
  
// ];
function useLocalStorage(itemName, initialValue) {
  //Obtener localStorage de los TODOS o crear uno nuevo
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;  

  if (!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = [];
  } else{
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item,setItem] = React.useState(parsedItem);

  const saveItem = (newItem) =>{
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem
  ];
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  
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
