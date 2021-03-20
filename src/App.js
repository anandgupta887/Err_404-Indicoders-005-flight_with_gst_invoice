import "./App.css";
import Home from "./assests/components/Home";
import Header from "./assests/components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Services from "./assests/components/Services";
import Footer from "./assests/components/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/checkout">
          <Header />
            <h1>checkout</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Services />
            <Footer />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
