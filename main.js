const App = () => {
  const [name, setName] = React.useState('');
  const [textarea, setTextArea] = React.useState('Écrivez un essai à propos de votre élément du DOM préféré');
  const [select, setSelect] = React.useState('coconut')

  const handleSubmit = (e) => {
    alert(`Le nom a été soumis : ${name} // ${textarea} // ${select}` );
    e.preventDefault();
  };

  const handleChange = (e) => {
	const targetType = e.target.type
	if(targetType === "text") {
		setName(e.target.value)
	} 
	if(targetType === "textarea") {
		setTextArea(e.target.value)
	}
	if(e.target.name === "select") {
		setSelect(e.target.value)
	}
  };

  return (
    <form 
		onSubmit={handleSubmit} 
		style={{
			display: "flex",
			flexDirection: "column",
			width: "50%"
		}}>
      <NameForm name="input" change={handleChange} value={name}/>
	  <EssayForm name="textarea" change={handleChange} value={textarea}/>

	  <FlavorForm name="textarea" change={handleChange} value={select}/>

	  <input type="submit" value="Envoyer" style={{width: "200px", marginTop: "1em"}}/>
    </form>
  );
};

const NameForm = (props) => {
  return (
    <React.Fragment>
      <label style={{display: "flex", flexDirection: "column", marginTop: "1em"}}>
        Nom :
        <input type="text" value={props.value} onChange={props.change} />
      </label>
    </React.Fragment>
  );
};

const EssayForm = (props) => {
  
  return (
    <React.Fragment>
      <label style={{display: "flex", flexDirection: "column", marginTop: "1em"}}>
        Essay:
        <textarea value={props.value} onChange={props.change} />
      </label>
    </React.Fragment>
  );
};

const FlavorForm = (props) => {

  return (
    <React.Fragment>
      <label>
        Choisissez votre parfum favori :
        <select name="select" value={props.select} onChange={props.change}>
          <option value="grapefruit">Pamplemousse</option>
          <option value="lime">Citron vert</option>
          <option value="coconut">Noix de coco</option>
          <option value="mango">Mangue</option>
        </select>
      </label>
    </React.Fragment>
  );
};



ReactDOM.render(<App />, document.querySelector("#app"));
