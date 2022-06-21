import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Navigation"

function App() {
  return (
    < >
    <BrowserRouter>
    < Navigation />
      
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Redirect to="/"/>
        
      </Switch>
      <About />
      <Contact />
      </BrowserRouter>
      
    </>
  );
}

export default App;
