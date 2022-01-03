// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider';
import Login from './Login/Login/Login';
import Register from './Login/Register/Register';
import AllBreakfast from './components/Menu/AllBreakfast/AllBreakfast';
import Confirm from './components/Reservation/Confirm';
import Dashboard from './components/Dashboard/Dashboard';
import AllBooking from './components/Dashboard/AllBooking/AllBooking';
import MyBooking from './components/Dashboard/MyBooking/MyBooking';

function App ()
{
  return (
    <div>
      {/* Auth provider added */}
      <AuthProvider>
        <Router>

          <Switch>

            {/* Route for homepage  */}
            <Route exact path="/">
              <Home></Home>
            </Route>


            {/* Route for homepage  */}
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/booking-confirm">
              <Confirm />
            </Route>

            {/* Route for login  */}
            <Route path="/login">
              <Login></Login>
            </Route>

            {/* Route for register  */}
            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/allbreakfast">
              <AllBreakfast></AllBreakfast>
            </Route>

            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>

            <Route path="/all-booking">
              <AllBooking></AllBooking>
            </Route>

            <Route path="/my-booking">
              <MyBooking></MyBooking>
            </Route>


            {/* Route for 404  */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>


          </Switch>

        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
