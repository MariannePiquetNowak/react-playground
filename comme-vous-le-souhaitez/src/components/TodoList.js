import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ handleKeyEnter, onChange, ...props }) => {
  return (
    <div style={{ width: "400px" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>{props.children}</label>
        <input
          onChange={onChange}
          value={props.val}
          onKeyDown={handleKeyEnter}
        />
      </div>
      <TodoItem onChange={onChange} click={props.click} todos={props.todos} class={props.class}/> 
    </div>
  );
};

export default TodoList;
