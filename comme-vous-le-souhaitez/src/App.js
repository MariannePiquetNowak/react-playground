// import logo from "./logo.svg";
import "./App.css";
import { useState, Fragment, useEffect } from 'react'

function App() {

  const [newTodo, setNewTodo] = useState({
        id: 1,
        title: 'ma super tâche',
        isCompleted : false,
        isEditing: false
  });


  const handleKeyEnter = (e) => {
    switch(e.key) {
      case "Enter": 
      setNewTodo({
        id: 1,
        title: "",
        isCompleted: true,
        isEditing: false
      })
      alert(`votre titre ${newTodo.title} a bien été envoyé`)
      console.log(newTodo)
        break;
      case "Escape":
        setNewTodo({
          id: 0, 
          title: "",
          isCompleted: false, 
          isEditing: false
        });
        console.log(newTodo)
        break;
      default: 
        return;
    }
  }

  const handleChange = (e) => {
    const val = e.target.value;
    setNewTodo({
      id: 1,
      title: val,
      isCompleted: true, 
      isEditing: false
    })
  }

  return (
    <div className="App">
      {/* Le composant doit afficher :
        - L'input
        - le composant qui affiche les filtres
        - La liste des todos 
      */}
      <Input type="text" onChange={handleChange} val={newTodo.title} handleKeyEnter={handleKeyEnter}>Entrer votre titre de todo</Input>
    </div>
  );
}

const Input = ({handleKeyEnter, onChange, ...props}) => {
  return (
    <Fragment>
      <label>{props.children}</label>
      <input onChange={onChange} value={props.val} onKeyDown={handleKeyEnter}/>
    </Fragment>
    
  )
}

export default App;
