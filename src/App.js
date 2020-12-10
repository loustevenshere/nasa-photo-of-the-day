import React, {useState, useEffect} from "react";
import ReactPlayer from 'react-player';
import axios from 'axios';
import "./App.css";
import Header from './components/Header';
import APOD from './components/APOD';
import Footer from './components/Footer';

function App() {
  const [nasaPic, setnasaPic] = useState([]);
  useEffect(() => {
    const fetchAPOD = () => {
      axios
      .get('https://api.nasa.gov/planetary/apod?api_key=QxocYC6yWlIXDrfI3Sa48fNm0SubRlyH8CmGZLxm')
      .then(res => {
        // console.log(res.data)
        setnasaPic(res.data)
        console.log(nasaPic);
        console.log(res.data);
      })
      .catch(err => {
        console.log('Houston, we have a problem',err)
      })
    }
    fetchAPOD();
  }, []);
  console.log(nasaPic);


  return (
    <div className="App">
      <Header nasa={nasaPic}/>
      <APOD nasa={nasaPic} />
      <Footer />
    </div>
  );
}

export default App;
