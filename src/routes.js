import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Go To Top-------------------------------------------------------------------------------
import GoToTop from './components/GoToTop';
//complements ----------------------------------------------------------------------------
import Header from './components/Header';
import Footer from './components/Footer';
//Pages ----------------------------------------------------------------------------------
import Home from './pages/Home';
import About from './pages/About';
import SpecialtiesPage from './pages/SpecialtiesPage';
import HealthInsurancePage from './pages/HealthInsurancePage';
import ContactsPage from './pages/ContactsPage';
import TestimonialPage from './pages/TestimonialPage';
//404 ------------------------------------------------------------------------------------
import p404 from './pages/Page404';

function Routes() {
 return (
  <BrowserRouter>
    <Route path="/" component={GoToTop} />
   <Route path="/" component={Header} />
   <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/sobre" component={About} />
    <Route path="/especialidades" component={SpecialtiesPage} />
    <Route path="/convenios" component={HealthInsurancePage} />
    <Route path="/contato" component={ContactsPage} />
    <Route path="/testimonial" component={TestimonialPage} />
    <Route path='/*' component={p404} />
   </Switch>
   <Route path='/' component={Footer} />
  </BrowserRouter>
 );
};

export default Routes;