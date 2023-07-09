import logo from './logo.svg';
import './App.css';
import axios from "axios";

const convert = require('xml-js');

const API_BASE_URL = "https://api.geekdo.com/xmlapi2";

function App() {

  async function getData(){
    const xml = await axios.get(`${API_BASE_URL}/family?id=317`);
    const data = convert.xml2json(xml.data, {compact: true, spaces: 2});
    const parsedData = JSON.parse(data);
    const links = parsedData.items.item.link;
    links.forEach(link => {
      console.log(link._attributes.id);
    });
  };

  getData();  

  return (
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
    </div>
  );
}

export default App;
