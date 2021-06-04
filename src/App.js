import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Content from "./component/content/Content";
import Products from "./component/Products/Products";
import { ProductData } from "./data";
import { Provider } from "react-redux";
import store from "./Store/store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/">
          <Content />
          <Products heading={"Choose your Favourite"} data={ProductData} />
        </Route>
      </Router>
    </Provider>
  );
}

export default App;
