import "./App.css";
import Home from "./assests/components/Home";
import Header from "./assests/components/Header";
import Contact from "./assests/components/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Services from "./assests/components/Services";
import Footer from "./assests/components/Footer";
import ThankYou from "./assests/components/ThankYou";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/checkout">
            <h1>checkout</h1>
          </Route>
          <Route path="/contact-us">
            <Header />
            <Contact />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Services />
          </Route>
          <Route path="/thankyou">
            <ThankYou />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
