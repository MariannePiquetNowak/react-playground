const App = () => {
  return <React.Fragment>coucou</React.Fragment>;
};

const NameForm = (props) => {
  const [value, setValue] = React.useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    alert("Le nom a été soumis : " + value);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
};

const EssayForm = (props) => {
  const [value, setValue] = React.useState("Écrivez un essai à propos de votre élément du DOM préféré");

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log("Test", e.target.value);
  };

  const handleSubmit = (e) => {
    alert("Un essai a été envoyé : " + value);
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Essay:
        <textarea value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
};

const FlavorForm = (props) => {

  const [value, setValue] = React.useState('coconut');

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value)
  }

  const handleSubmit = (event) => {
    alert('Votre parfum favori est : ' + value);
    event.preventDefault();
  }

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

ReactDOM.render(<FlavorForm />, document.querySelector("#app"));
