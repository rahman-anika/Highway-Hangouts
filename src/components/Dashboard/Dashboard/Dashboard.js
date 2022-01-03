import React from "react";
import { Button } from "react-bootstrap";
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";


import useAuth from "../../../hooks/useAuth";
import DashboardHome from "../DashboardHome/DashboardHome";
import AdminRoute from '../../../Login/AdminRoute/AdminRoute';
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import "./Dashboard.css";
import MyRecipes from "../MyRecipes/MyRecipes";
import MyCredits from "../MyCredits/MyCredits";
import MyBooking from '../MyBooking/MyBooking';
import ManageRecipes from "../ManageRecipes/ManageRecipes";
import AllBooking from "../AllBooking/AllBooking";




const Dashboard = () => {

    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();

    return (
        <div>
            <div className="dashboard-container ">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="dashboard">
                            <Link to={`${url}`}>
                                <h4 className="dashboard-menu pt-5">Dashboard</h4>
                            </Link>





                            {!admin && <Link to={`${url}/myRecipes`}>
                                <li className="dashboard-menu mt-5">My Recipe(s)</li>
                            </Link>}

                            {!admin && <Link to={`${url}/myCredits`}>
                                <li className="dashboard-menu mt-5">My Credit(s)</li>
                            </Link>}

                            {!admin && <Link to={`${url}/my-booking`}>
                                <li className="dashboard-menu mt-5">My Booking(s)</li>
                            </Link>}










                            {admin && <Link to={`${url}/makeAdmin`}>
                                <li className="dashboard-menu mt-5">Make Admin</li>
                            </Link>}


                            {admin && <Link to={`${url}/manageRecipes`}>
                                <li className="dashboard-menu mt-5">Manage Recipe(s)</li>
                            </Link>}

                            {admin && <Link to={`${url}/all-booking`}>
                                <li className="dashboard-menu mt-5">Manage All Booking(s)</li>
                            </Link>}


                            <br />
                            <br />

                            <Link to="/">
                                <Button variant="light">Back To HomePage</Button>
                            </Link>

                            <br />
                            <br />

                            <Button onClick={logout} variant="light">Logout</Button>


                        </div>
                    </div>
                    <div className="col-md-9">
                        <Switch>

                            <Route exact path={path}>
                                <DashboardHome></DashboardHome>
                            </Route>





                            <Route exact path={`${path}/myRecipes`}>
                                <MyRecipes></MyRecipes>
                            </Route>

                            <Route exact path={`${path}/myCredits`}>
                                <MyCredits></MyCredits>
                            </Route>

                            <Route exact path={`${path}/my-booking`}>
                                <MyBooking></MyBooking>
                            </Route>




                            <AdminRoute exact path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>

                            <AdminRoute exact path={`${path}/manageRecipes`}>
                                <ManageRecipes></ManageRecipes>
                            </AdminRoute>

                            <AdminRoute exact path={`${path}/all-booking`}>
                                <AllBooking></AllBooking>
                            </AdminRoute>

                        </Switch>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;