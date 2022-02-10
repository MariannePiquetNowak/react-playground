const App = () => {
	const [value, setValue] = React.useState({
		name: "test",
		textarea: "nfdlshfdkhsfklds",
		fruit: "coconut"
	});
  
	const handleSubmit = (e) => {
		alert(`Le nom a été soumis : ${value.name} // ${value.textarea} // ${value.fruit}` );
		console.log("alert")
	  	e.preventDefault();
	};
  
	const handleChange = (e) => {
		const target = e.target;
		const val = target.value;
		const name = target.name;

		setValue({
			...value,
			[name]: val
		})
	};

	return (
	  <form 
		  onSubmit={handleSubmit} 
		  style={{
			  display: "flex",
			  flexDirection: "column",
			  width: "50%"
		  }}>
		<NameForm  change={handleChange} value={value.name}/>
		<EssayForm  change={handleChange} value={value.textarea}/>
  
		<FlavorForm  change={handleChange} value={value.fruit}/>
  
		<input type="submit" value="Envoyer" style={{width: "200px", marginTop: "1em"}}/>
	  </form>
	);
  };
  
  const NameForm = (props) => {
	return (
	  <React.Fragment>
		<label style={{display: "flex", flexDirection: "column", marginTop: "1em"}}>
		  Nom :
		  <input name="name" type="text" value={props.value} onChange={props.change} />
		</label>
	  </React.Fragment>
	);
  };
  
  const EssayForm = (props) => {
	
	return (
	  <React.Fragment>
		<label style={{display: "flex", flexDirection: "column", marginTop: "1em"}}>
		  Essay:
		  <textarea name="textarea" type="textarea" value={props.value} onChange={props.change} />
		</label>
	  </React.Fragment>
	);
  };
  
  const FlavorForm = (props) => {
  
	return (
	  <React.Fragment>
		<label>
		  Choisissez votre parfum favori :
		  <select name="fruit" value={props.value} onChange={props.change}>
			<option value="grapefruit">Pamplemousse</option>
			<option value="lime">Citron vert</option>
			<option value="coconut">Noix de coco</option>
			<option value="mango">Mangue</option>
		  </select>
		</label>
	  </React.Fragment>
	);
  };

/*
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

*/

ReactDOM.render(<App />, document.querySelector("#app"));
