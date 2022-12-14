import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Signup from './Signup';
import Signin from './Signin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}
export default App;

