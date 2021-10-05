import './App.css';
import HomePage from './Components/HomePage/HomePage';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ContactUS from './Components/Contact Us/ContactUS';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ServicePage from './Components/ServiceSection/ServicePage';
import NotFound  from './Components/NotFound/NotFound';
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
