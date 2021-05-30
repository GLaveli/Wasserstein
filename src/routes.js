import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';

function Routes() {
 return (
  <BrowserRouter>
   <Route path="/" component={Header} />
   <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
   </Switch>
  </BrowserRouter>
 );
};

export default Routes;