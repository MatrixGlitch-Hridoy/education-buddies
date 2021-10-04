import './App.css';
import HomePage from './HomePage/HomePage';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ContactUS from './Contact Us/ContactUS';
import About from './About/About';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ServicePage from './ServiceSection/ServicePage';
import NotFound  from './NotFound/NotFound';
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
          <ServicePage></ServicePage>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/contact">
          <ContactUS></ContactUS>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer/>
      </Router>
    </div>
  );
}
export default App;
