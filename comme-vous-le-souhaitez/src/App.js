// import logo from "./logo.svg";
import "./App.css";
import { useState } from 'react'

function App() {

  const [newTodo, setNewTodo] = useState({
        id: 1,
        title: 'ma super tâche',
        isCompleted : false,
        isEditing: false
  });

  const handleKeyEnter = (e) => {
    if(e.key === "Enter") {
      console.log('validate')
    }
  }

  return (
    <div className="App">
      {/* Le composant doit afficher :
        - L'input
        - le composant qui affiche les filtres
        - La liste des todos 
      */}
      <Input handleKeyEnter={handleKeyEnter} />
    </div>
  );
}

const Input = ({handleKeyEnter, ...props}) => {
  return (
    <input onKeyPress={handleKeyEnter}/>
  )
}

export default App;
