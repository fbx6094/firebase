import logo from "./logo.svg";
import "./App.css";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import AuthDetails from "./components/auth/AuthDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <SignUp />
      <SignIn />
      <AuthDetails />
    </div>
    </Router>
  );
}

export default App;