import { BrowserRouter, Switch, Route } from 'react-router-dom';

//complements ----------------------------------------------------------------------------
import Header from './components/Header';
import Footer from './components/Footer';
//Pages ----------------------------------------------------------------------------------
import Home from './pages/Home';
import About from './pages/About';
import HealthInsurancePage from './pages/HealthInsurancePage';
//404 ------------------------------------------------------------------------------------
import p404 from './pages/Page404';

function Routes() {
 return (
  <BrowserRouter>
   <Route path="/" component={Header} />
   <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/sobre" component={About} />
    <Route path="/convenios" component={HealthInsurancePage} />
    <Route path='/*' component={p404} />
   </Switch>
   <Route path='/' component={Footer} />
  </BrowserRouter>
 );
};

export default Routes;