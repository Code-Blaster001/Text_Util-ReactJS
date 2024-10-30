import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import About from './components/Aboutthis';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

 
function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        type: type
    });

    setTimeout(() => {
        setAlert(null);
    }, 800);
};

const toggleMode = () => {
  if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been activated", "success");
  } else {
      setMode("light");
      document.body.style.backgroundColor = "cyan";
      showAlert("Light mode has been activated", "warning");
  }
};

const toggleModePrimary = () => {
  if (mode === "light") {
      setMode("primary");
      document.body.style.backgroundColor = "#3366cc";
      showAlert("Primary mode has been activated", "success");
  } else {
      setMode("light");
      document.body.style.backgroundColor = "cyan";
      showAlert("Light mode has been activated", "warning");
  }
};
  return (
    <>
        <Router>
            <Navbar title="TextUtils" Home="Home" aboutus="About Us" mode={mode} toggleMode={toggleMode} toggleModePrimary={toggleModePrimary} key={new Date()} />
            <Alert alert={alert} />
            <div className="container my-3">
                <Switch>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/">
                        <TextForm heading="Default_Settings" def_text="Just enter text here" mode={mode} h1head="Enter Text here" />
                    </Route>
                </Switch>
            </div>
        </Router>
    </>
);

}

export default App;