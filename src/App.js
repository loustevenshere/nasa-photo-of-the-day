import React, {useState, useEffect} from "react";
import ReactPlayer from 'react-player';
import axios from 'axios';
import "./App.css";
import Header from './components/Header';
import APOD from './components/APOD';
import Footer from './components/Footer';
import Searchbar from "./components/SearchBar";

function App() {
  const [nasaPic, setnasaPic] = useState([]);
  const [search, setSearch] = useState('');
  // const [searchValue, setsearchValue] = useState();

  useEffect(() => {
    const fetchAPOD = () => {
      axios
      .get('https://api.nasa.gov/planetary/apod?api_key=QxocYC6yWlIXDrfI3Sa48fNm0SubRlyH8CmGZLxm')
      .then(res => {
        setnasaPic(res.data)
        //console.log(nasaPic);
        //console.log(res.data);
      })
      .catch(err => {
        console.log('Houston, we have a problem',err)
      })
    }
    fetchAPOD();
  }, []);
  // console.log(nasaPic);



  return (
    <div className="App">
      <Header nasa={nasaPic}/>
      <Searchbar placeholder="2020-05-14" handleChange={(e) => setSearch(e.target.value)} search={search} onSubmit={console.log(search)} />
      <APOD nasa={nasaPic} />
      <Footer />
    </div>
  );
}

export default App;
