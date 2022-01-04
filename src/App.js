// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider';
import AllLunch from './components/Menu/AllLunch/AllLunch';
import AllDinner from './components/Menu/AllDinner/AllDinner';

function App() {
  return (
    <div className="App">

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


            {/* Route for login  */}
            <Route path="/login">
              {/* <Login></Login> */}
            </Route>

            {/* Route for register  */}
            <Route path="/register">
              {/* <Register></Register> */}
            </Route>
            <Route path="/AllLunch">
           <AllLunch/>
          </Route>
            <Route path="/allDinner">
           <AllDinner/>
          </Route>
            <Route path="/booking/:id">
          {/* <BookingInfo/> */}
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
