import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import AlertComponent from './components/AlertComponent/AlertComponent';  
function App() {
  // const [title, updateTitle] = useState(null);
  // const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <Router>
    <div className="App">
      {/* <Header title={title}/> */}
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <LoginForm />
            </Route>
            <Route path="/register">
              <RegistrationForm />
            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
          </Switch>
          {/* <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/> */}
        </div>
    </div>
    </Router>
  );
}

export default App;

//showError={updateErrorMessage} updateTitle={updateTitle}/>