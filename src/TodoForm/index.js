import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';
function TodoForm() {


  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {
    addTodo,
    setOpenModal,
    filterTodos,
  } = React.useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const existe = filterTodos.filter(todo => todo.text===newTodoValue);
    if(existe.length===0 && newTodoValue.length > 0) {
      addTodo(newTodoValue);
      setOpenModal(false);
    }
    else {
      alert("Cuidado! hay algo mal con el TODO");
    }
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit} >
      <label>Escribe tu nuevo To Do</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe una nueva tarea"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>

        <button
          className="TodoForm-button TodoForm-button-add"
          type="submit"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}
export { TodoForm };