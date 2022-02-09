const VisitCard = () => {

const [users, setUser] = React.useState([]);
const url = "https://jsonplaceholder.typicode.com/users";

const getUser = async () => {
  try {
    const results = await axios(url);
    const datas = results.data;
    setUser(datas);
  } catch (err) {console.error(err)}
}


React.useEffect(() => {
  getUser();
  console.log(users) // => Question à Julien : pourquoi ça renvoi un tableau vide ?
},[])

  return (
    <ul>
      {users.map(user => (
        <li className="container" key={user.id}>
            <h1>{user.name}</h1>
            <h4>{user.company.name}</h4>
        <div style={{width: "100%", display: "flex", justifyContent: "center" }}>
        <div className="info">
            <p><span>email:</span> {user.email}</p>
            <p><span>Phone Number:</span> {user.phone}</p>
            <p><span>Website :</span> {user.website}</p>
          </div>
        </div>
          
        </li>
      ))}
    </ul>
  )
}

ReactDOM.render(<VisitCard />, document.querySelector("#app"));
