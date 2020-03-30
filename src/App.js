import React from 'react';

import { BrowserRouter as Router, Route, Switch ,Redirect} from 'react-router-dom';
import Home  from './components/home/Home';
import Blogs from './components/home/Blogs';

import Contact  from './components/home/Contact';
import CourseSpecification from "./components/home/CourseSpecification";

import Navbar from "./components/comman/navbar";
import Footer from "./components/comman/Footer";

// Dashoboard Page Imports
import Dashboardpage from "./components/dashboard/Dashboardpage"
import Profilepage from "./components/profile/Profilepagee"
import Coursepage from "./components/course/coursepage"
import SignIn  from './components/userdetails/SignIn';
import Login from './components/userdetails/Login';
import Allcourses from "./components/CoursesBulk/Allcourses"
import Givetake from "./components/GiveTake/Givetake";

function App() {
  return (
    <React.Fragment>
    <Router>
    <Navbar/>
   <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profilepage} />
      <Route path="/signup" exact component={SignIn} />
      <Route path="/Login" exact component={Login} />
      <Route path="/Contact" exact component={Contact} />
      <Route path="/CourseSpecification" exact component={Coursepage} />
      <Route path="/allcourses" exact component={Allcourses} />
      <Route path="/give-n-take" exact component={Givetake} />
      <Route path="/dashboard" component={Dashboardpage} />
      <Route exact path="/home">
        <Redirect to="/dashboard" />
      </Route>
   </Switch>
    <Footer/>
    </Router>
    </React.Fragment>
  );
}

export default App;
