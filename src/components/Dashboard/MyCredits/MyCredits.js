import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import "./MyCredits.css";

const MyCredits = () => {

    // state declaration 
    const [recipes, setRecipes] = useState([]);

    // for getting logged in user 
    const { user } = useAuth();
    const email = user.email;


    // load all orders by email query from database/server

    useEffect(() => {
        fetch(`https://stark-savannah-40498.herokuapp.com/myRecipes/${email}`)
            .then((res) => res.json())
            .then((data) => setRecipes(data));
    }, [email]);

    console.log(recipes);

    let totalRecipe = recipes.length;
    let totalCredit = totalRecipe * 5;
    const discountCredit = 1000;
    let needCredit = discountCredit - totalCredit;


    return (
        <div>




            {/* My credit section starts  */}
            <h1 className="title animate__animated animate__rotateIn mt-5">My Recipe(s): {recipes.length}</h1>

            <h1 className="title animate__animated animate__rotateIn mt-5">My Total Credit(s): {recipes.length * 5}</h1>

            <p className="title animate__animated animate__rotateIn mt-5">After sharing each recipe, you'll get 5 credits. Earn 1000 credits and get 5% discount from us.</p>

            <h2 className="title animate__animated animate__rotateIn mt-5">You'll need to earn {needCredit} credits more only. </h2>


            <br />



            {/* My credit section ends  */}



        </div>

    );
};

export default MyCredits;