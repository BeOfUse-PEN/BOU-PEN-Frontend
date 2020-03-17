import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home  from './components/home/Home';
import Blogs from './components/home/Blogs';
import SignIn  from './components/home/SignIn';
import Contact  from './components/home/Contact';
import CourseSpecification from "./components/home/CourseSpecification";

import Navbar from "./components/comman/navbar";
import Footer from "./components/comman/Footer";

function App() {
  return (
    <React.Fragment>
    <Router>
    <Navbar/>
   <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Blogs" component={Blogs} />
      <Route path="/signIn" exact component={SignIn} />
      <Route path="/Contact" exact component={Contact} />
      <Route path="/CourseSpecification" exact component={CourseSpecification} />
      <Route path="/home" component={Home} />
   </Switch>
    <Footer/>
    </Router>
    </React.Fragment>
  );
}

export default App;
