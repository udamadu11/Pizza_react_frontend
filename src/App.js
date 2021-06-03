import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Content from "./component/content/Content";
import Products from "./component/Products/Products";
import { ProductData } from "./data";
function App() {
  return (
    <Router>
      <Route path="/">
        <Content />
        <Products heading={"Choose your Favourite"} data={ProductData} />
      </Route>
    </Router>
  );
}

export default App;
