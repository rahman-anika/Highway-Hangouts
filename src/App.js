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
import AllLunch from './components/Menu/AllLunch/AllLunch';
import AllDinner from './components/Menu/AllDinner/AllDinner';
import AllRecipes from './components/AllRecipes/AllRecipes';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import SubmitRecipe from './components/SubmitRecipe/SubmitRecipe';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';
import Confirm from './components/Reservation/Confirm';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';



function App() {
  return (
    <div className="App">
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


            {/* Route for login  */}
            <Route path="/login">
              <Login></Login>
            </Route>

            {/* Route for register  */}
            <Route path="/register">
              <Register></Register>
            </Route>

            {/* PrivateRoute for booking confirm  */}
            <PrivateRoute path="/booking-confirm">
              <Confirm></Confirm>
            </PrivateRoute>


            {/* Route for all breakfast  */}
            <Route path="/allbreakfast">
              <AllBreakfast></AllBreakfast>
            </Route>

            {/* Route for all lunch  */}
            <Route path="/alllunch">
              <AllLunch></AllLunch>
            </Route>


            {/* Route for all dinner  */}
            <Route path="/alldinner">
              <AllDinner></AllDinner>
            </Route>

            {/* Route for all recipes  */}
            <Route path="/recipes">
              <AllRecipes></AllRecipes>
            </Route>

            {/* PrivateRoute for adding recipe  */}
            <PrivateRoute path="/submitRecipe">
              <SubmitRecipe></SubmitRecipe>
            </PrivateRoute>


            {/* Route for showing recipe details  */}
            <Route path="/recipeDetails/:serviceId">
              <RecipeDetails></RecipeDetails>
            </Route>


            {/* PrivateRoute for adding recipe  */}
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>


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
