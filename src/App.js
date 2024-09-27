import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home";
import Transations from "./Pages/Transations";


function App() {



  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Transations />
    </Router>

  );
}

export default App;
