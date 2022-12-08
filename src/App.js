import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Call from './Call';
import FetchApi from './FetchApi';

function App() {
  return (
    <div className="App">
      <Call />
      <Routes>
        <Route path="/" element={<FetchApi />} />
      </Routes>
    </div>
  );
}

export default App;



