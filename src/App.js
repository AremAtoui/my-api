import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import UserList from './Components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    try {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => setusers(res.data))
      console.log(users)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div className="App">

      <UserList />

    </div>
  );
}

export default App;
