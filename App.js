// App.js
import React from "react";
import Login from "./components/Login";
import Logout from "./components/LogOut";
import Chat from "./components/Chat";

const App = () => {
  return (
    <div>
      <h1>React Firebase Chat App</h1>
      <Login />
      <Logout />
      <Chat />
    </div>
  );
};

export default App;
