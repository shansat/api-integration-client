import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios'

function App() {

  const [message, setMessage] = useState()

  useEffect(() => {
    const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/message");
      console.log(response);
      setMessage(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
  }, [])


  return (
    <div className="App">
      <p>{message}</p>
    </div>
  );
}

export default App;
