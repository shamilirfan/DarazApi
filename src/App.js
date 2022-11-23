import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Advertise from './Advertise';
import Header from './Header';
import Navber from './Navber';
import Advertise2 from './Advertise2';
import Advertise3 from './Advertise3';
import FetchApi from './FetchApi';

function App() {
  return (
    <div className="App">
      <Advertise />
      <Navber />
      <Header />
      <Advertise2 />
      <Advertise3 />

      <Routes>
        <Route path="/" element={<FetchApi />} />
      </Routes>
    </div>
  );
}

export default App;



