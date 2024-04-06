import axios from "axios";
import {useEffect, useState} from "react";

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:3000/');
        setUsers(res.data)
        console.log(res.data); // Assuming you want to log the response data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (<div>{users.map((user) => (
      <div key={user._id}>{user._id}</div>
  ))}</div>)
}

export default App;
