import React from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Chef from '../Chef/Chef';
import Menu from '../Menu/menu';
import Recipe from '../Recipe/Recipe';




const Home = () => {
    return (
        <div id="home">

            {/* header section starts */}
            <Header></Header>
            {/* header section ends */}

            {/* banner section starts */}
            <Banner></Banner>
            {/* banner section ends */}

            {/* menu section starts */}
            <Menu></Menu>
            {/* menu section ends */}

            {/* chef section starts */}
            <Chef></Chef>
            {/* chef section ends */}

            {/* recipe section starts */}
            <Recipe></Recipe>
            {/* recipe section ends */}



            {/* about section starts */}
            <About></About>
            {/* about section ends */}

            {/* footer section starts */}
            <Footer></Footer>
            {/* footer section ends */}


        </div>
    );
};

export default Home;