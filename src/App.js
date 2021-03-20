import "./App.css";
import Home from "./assests/components/Home";
import Header from "./assests/components/Header";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
=======
import Services from "./assests/components/Services";
import Footer from "./assests/components/Footer";
>>>>>>> af9436e60bfdbd355679e4fb02a34dd6e0d7b305

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Router>
        <Switch>
          <Route path="/checkout">
            <h1>checkout</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
=======
    <Header />
    <Home />
    <Services />
    <Footer />
>>>>>>> af9436e60bfdbd355679e4fb02a34dd6e0d7b305
    </div>
  );
}

export default App;
