// import './App.css';
import React from "react";
import {TodoCounter} from './TodoCounter';
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import {TodoItem} from './TodoItem';
import { CreateTodoButton } from "./CreateTodoButton";



const defaultTodos=[
  { text: 'Cortar cebolla', completed: true },
  { text: 'Comprar ropa', completed: false  },
  { text: 'Hacer tarea', completed: false },
  { text: 'Estudiar en Platzi', completed: false  },
  
];

function App() {
  const [todos,setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  return (
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
        <article className="contenedor">
      <header>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      </header>
    
      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
      </article>
    </React.Fragment>
  );
}

export default App;
