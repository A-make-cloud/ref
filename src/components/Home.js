import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Proj from './../projects/Proj'
import Technologies from './../pages/Technologies'
import About from './../pages/About'
import Services from './../pages/Services'
import Footer from '../components/Footer'
const Home = () => {
    return (
        <body>
            <header className="top " id="home">
                {/* <Navbar /> */}
                <Banner />
                {/* <div id="godown">
                    <a href="#main"><i className="fa fa-caret-down fa-4x" aria-hidden="true" style={{ color: "#fff" }}></i></a>

                </div> */}
            </header>
            <main id="main" className="show-animate">
                <div id="main-content" className="sec-4">
                    <Proj />
                    <Technologies />
                    <About />
                    <Services />
                </div>
            </main>
            <Footer />
        </body>
    )
}

export default Home