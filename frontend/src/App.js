import "./App.css";
import Nav from "./components/Nav";
import Monitor from "./components/Monitor";
import Router from "./components/Router";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Monitor />
      <Router />
    </div>
  );
};

export default App;
