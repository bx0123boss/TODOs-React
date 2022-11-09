import React from "react";
import {useLocalStorage} from './useLocalStorage.js';

const TodoContext = React.createContext();


function TodoProvider(props){

    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
      
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
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
        if(todos[todoIndex].completed)
          newTodos[todoIndex].completed = false;
        else
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

      //add todos
      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text,
        });
        saveTodos(newTodos);
      };
      

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            filterTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
            todos,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};