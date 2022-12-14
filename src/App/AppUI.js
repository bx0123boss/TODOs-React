import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from '../Modal'
import {MyLoader} from '../MyLoader';
function AppUI() {

  const {
    error,
    loading,
    filterTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <article className="contenedor">
      <TodoCounter />
        <header>
          <TodoSearch />
        </header>

        <TodoList>
          {error && <p>Desespéarate, hubo un error...</p>}
          {loading && <MyLoader />}
          {(!loading && !filterTodos.length) && <p>¡Crea tu primer TODO!</p>}

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
        
        {!!openModal && (  
          <Modal>
         <TodoForm />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
      </article>
    </React.Fragment>
  );
}

export { AppUI };