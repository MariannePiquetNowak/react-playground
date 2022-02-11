// import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from 'react'
import TodoList from "./components/TodoList";

const todoModel = {
  id: 1,
  title: '',
  isCompleted : false,
  isEditing: false
}

function App() {

  const [newTodo, setNewTodo] = useState(todoModel);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log('useEffect todos',todos)
  }, [todos]);

  useEffect(() => {
    console.log('useEffect newTodo',newTodo)
  }, [newTodo])


  const handleKeyEnter = (e) => {
    switch(e.key) {
      case "Enter": 
        setTodos(prevState => [
          ...prevState,
          newTodo
        ])
        setNewTodo({...todoModel, id: ++todoModel.id})
        // setNewTodo(Object.assign({}, todoModel, {id: ++todoModel.id}))
        // setNewTodo(prevState => ({...prevState, id: prevState.id+1, title: ""}))
        break;

      case "Escape":
        setNewTodo(todoModel);
        break;

      default: 
        return;
    }
  }

  const handleChange = (e) => {
    const title = e.target.value;
    setNewTodo(prevstate => ({...prevstate, title}));
  }

  return (
    <div className="App">
      {/* Le composant doit afficher :
        - L'input
        - le composant qui affiche les filtres
        - La liste des todos 
      */}
      <TodoList 
        type="text" 
        onChange={handleChange} 
        val={newTodo.title} 
        handleKeyEnter={handleKeyEnter}
        todos={todos}
        class="todos"
        >
        Entrer votre titre de todo
      </TodoList>
    </div>
  );
}

export default App;