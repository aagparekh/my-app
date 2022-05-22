
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (type, mess) => {
    setAlert({
      type: type,
      mess: mess
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  return (
    <><Router>
      {/* <Navbar title='TextUtils' link='Link with us'/> */}
      <Navbar />
      <Alert alert={alert} />
      <div className="container">

        <Routes>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/" element={<TextForm heading='Enter Text Here' showAlert={showAlert} />}>
          </Route>
        </Routes>

      </div>
    </Router>
    </>
  );
}
export default App;
