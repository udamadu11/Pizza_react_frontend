import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Content from "./component/content/Content";
function App() {
  return (
    <Router>
      <Route path="/">
        <Content />
      </Route>
    </Router>
  );
}

export default App;
