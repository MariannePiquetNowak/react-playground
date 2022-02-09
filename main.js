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
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  )
}

const UserCard = ({user}) => {
  return (
    <li className="container">
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
  )
}

ReactDOM.render(<VisitCard />, document.querySelector("#app"));


/**
 * CORRECTION 
 */
/*
 function App(props) {
  React.useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(usersObject => setUsers(usersObject))
  }, [])

  const [users, setUsers] = React.useState([]);



  return(
      <React.Fragment>
      {
          users.map((u) =>(
              <UserCard key={u.id} user={u}/>
          ))
      }
      </React.Fragment>
  )
}

function UserCard({user}) {
  

  return (
      <ul className="user-card">
          <li>{user.name}</li>
          <li>{user.email}</li>
          <li>{user.company.name}</li>
          <li>{user.phone}</li>
          <li>{user.website}</li>
      </ul>
  )
}

*/