import React from 'react';
import {TodoCounter} from '../TodoCounter';
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import {TodoItem} from '../TodoItem';
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    filterTodos,
    completeTodo,
    deleteTodo,
}){
    return(
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
          {filterTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
  
        <CreateTodoButton/>
        </article>
      </React.Fragment>
    );
}

export {AppUI};