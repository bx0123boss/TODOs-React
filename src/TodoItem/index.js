import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

  // const onComplete= (event)=>{
  //   alert("Se completo: " + props.key);
  //   // props.className.remove('Icon-check--active');
  //   event.currentTarget.classList.toggle('Icon-check--active');
  //   const p = document.getElementById('')
  //   //event.currentTarget.classList.toggle('TodoItem-p--complete');
  // };

  // const onDelete= ()=>{
  //   alert("Borraste el : " + props.text);
  // };

  return (
    <li className="TodoItem">
      <span 
      className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}
      >
       ᄼ 
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };