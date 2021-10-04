import './App.css';
import HomePage from './HomePage/HomePage';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Services from './ServiceSection/Services';
import ContactUS from './Contact Us/ContactUS';
import About from './About/About';
import Header from './Header/Header';
import Footer from './Footer/Footer';
function App() {
  return (
    <div>
      <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route exact path="/home">
          <HomePage></HomePage>
        </Route>
        <Route exact path="/service">
          <Services></Services>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/contact">
          <ContactUS></ContactUS>
        </Route>
      </Switch>
      <Footer/>
      </Router>
    </div>
  );
}
export default App;
