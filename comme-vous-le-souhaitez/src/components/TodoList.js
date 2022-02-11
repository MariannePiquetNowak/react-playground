import React, { Fragment } from "react";

const TodoList = ({ handleKeyEnter, onChange, ...props }) => {
  return (
    <div style={{ width: "30%" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>{props.children}</label>
        <input
          onChange={onChange}
          value={props.val}
          onKeyDown={handleKeyEnter}
        />
      </div>
      <h4>Liste des todos</h4>
      {props.todos.map((item) => (
        <div className={props.class}>
        <span>Todo N° {item.id}</span> 
        <h4>{item.title}</h4> 
        </div>
      ))}
    </div>
  );
};

export default TodoList;
