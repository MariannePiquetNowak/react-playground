import React, { Fragment, useEffect, useState } from "react";

const TodoItem = ({onChange, ...props}) => {


  return (
    <Fragment>
    <h4>Liste des todos</h4>
      {props.todos.map((item) => (
        <div key={item.id} className={props.class}>
          <span>Todo N° {item.id}</span> 
          <h4>{item.title}</h4> 

          <input onChange={onChange} id="check" type="checkbox" name="complete" />
          
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