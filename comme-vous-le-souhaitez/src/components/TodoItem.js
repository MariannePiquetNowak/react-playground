import React, {Fragment} from "react";

const TodoItem = (props) => {
  return (
    <Fragment>
    <h4>Liste des todos</h4>
      {props.todos.map((item) => (
        <div key={item.id} className={props.class}>
          <span>Todo N° {item.id}</span> 
          <h4>{item.title}</h4> 
          <div className="btn-container">
            <button value="edit" name="edit" onClick={props.click}>Modifier</button>
            <button value="delete" name="delete" onClick={props.click}>Supprimer</button>
          </div>
        </div>
      ))}
    </Fragment>
  );
}
export default TodoItem;