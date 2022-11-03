import React from "react";
import './TodoList.css';
function TodoList(props){
    return(
        <section>
        <main className="TodoList">
            {props.children}
        </main>
        </section>
    );
}

export { TodoList };