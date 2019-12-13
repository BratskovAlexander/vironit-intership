import React from "react";
import "./App.css";
// import Users from "./components/Users-component/Users-component";
import Home from "./pages/Home"
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Authorization from "./pages/AuthorizationUser";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route path='/' component={Home} />
      {/* <Route path='/authorization' component={Authorization} /> */}
        <Login />
        <Profile />
      </Switch>
    </BrowserRouter>
  );
};

export default App;