const App = () => {
  const [name, setName] = React.useState('');
  const [textarea, setTextArea] = React.useState('Écrivez un essai à propos de votre élément du DOM préféré');

  const handleSubmit = (e) => {
    alert(`Le nom a été soumis : ${name} => ${textarea}` );
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <NameForm name="input" change={handleChange} value={name}/>
	  <EssayForm name="textarea" change={handleChange} value={textarea}/>
	  <input type="submit" value="Envoyer" />
    </form>
  );
};

const NameForm = (props) => {
  return (
    <React.Fragment>
      <label>
        Nom :
        <input type="text" value={props.value} onChange={props.change} />
      </label>
    </React.Fragment>
  );
};

const EssayForm = (props) => {
  
  return (
    <React.Fragment>
      <label>
        Essay:
        <textarea value={props.value} onChange={props.change} />
      </label>
    </React.Fragment>
  );
};

const FlavorForm = (props) => {
  const [value, setValue] = React.useState("coconut");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    alert("Votre parfum favori est : " + value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Choisissez votre parfum favori :
        <select value={value} onChange={handleChange}>
          <option value="grapefruit">Pamplemousse</option>
          <option value="lime">Citron vert</option>
          <option value="coconut">Noix de coco</option>
          <option value="mango">Mangue</option>
        </select>
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
