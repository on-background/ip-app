import logo from './logo.svg';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
    // Setting up the initial state variables
    const [ipDetails, setIpDetails] = useState([]);
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);

    // Fetching the API once when the
    // component is mounted
    useEffect(() => {
      Axios.get('/json/').then((res) => {
        setIpDetails(res.data);
        setLat(res.data.latitude);
        setLon(res.data.longitude);
      });
    }, [])

    return (
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <br/>
      <br />
    */
    <div className="App">
         <div className="left">
            <h4>What is my IPv4 address?</h4>
            <h1 id="ip">{ipDetails.ip}</h1>
            <h4>Approximate location: </h4>

            <p>{ipDetails.city}, {ipDetails.region},{ipDetails.country_name}.</p>


            <h4>Internet Service Provider(ISP):</h4>

            <p>{ipDetails.org}</p>

         </div>

    </div>
    );
}

export default App;
