import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    /* ============================================================
   Sidenav
 * ============================================================*/
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
    return (
        <div>
            <header className="top " id="home">

                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)"
                        className="closebtn"
                        onClick={() => closeNav(false)}
                    > &times;</a>

                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#tech">Technology</a>
                    <a href="#contact">Contact</a>

                </div>

                <div className=" " id="top-nav">

                    <div className="col-xs-2 col-md-1">
                        <a href="#"><i className="fa fa-home fa-2x"
                            aria-hidden="true"></i></a>

                    </div>

                    <div id="myNavdesktop" className="navdesktop">
                        <a href="#home" className="page-scroll">Home</a>
                        <a href="#about" className="page-scroll">About</a>
                        <a href="#services" className="page-scroll">Services</a>
                        <a href="#portfolio" className="page-scroll">Portfolio</a>
                        <a href="#tech" className="page-scroll">Technology</a>
                        <a href="#contact" className="page-scroll">Contact</a>
                    </div>

                    <div id="mySidenav" className="sidenav">
                        <a href="javascript:void(0)"
                            className="closebtn" onclick="closeNav()">&times;</a>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#tech">Technology</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="col-xs-10 col-md-11">
                        <div className="social-icons">

                            <div id="page-content-wrapper">
                                <a
                                    href="https://www.linkedin.com/in/agnès-cloud-1a290a1b4/"
                                    target="_blank"><i
                                        className="fa fa-linkedin"
                                        aria-hidden="true"></i></a>
                                <a
                                    href="https://github.com/A-make-cloud"
                                    target="_blank"><i
                                        className="fa fa-github"
                                        aria-hidden="true"></i></a>

                                <a
                                    href="https://www.pinterest.fr/Agnes_Cloud/_saved/"
                                    target="_blank"><i
                                        className="fa fa-pinterest"
                                        aria-hidden="true"></i></a>
                                <span className="slide-menu hide"

                                    onClick={() => openNav(false)}
                                ><i
                                    className="fa fa-align-left"
                                    aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>

                </div>

                <div id="godown">
                    <a href="#main"><i className="fa fa-caret-down fa-4x" aria-hidden="true" style={{ color: "#fff" }}></i></a>

                </div>
            </header>
        </div >
    )
}

export default Navbar