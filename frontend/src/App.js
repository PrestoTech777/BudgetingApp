import "./App.css";
import Nav from "./components/Nav";
import Monitor from "./components/Monitor";
import Router from "./components/Router";
import Reset from "./components/Reset";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Monitor />
      <Reset />
      <Router />
    </div>
  );
};

export default App;
