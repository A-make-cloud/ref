import React from 'react'

const Footer = () => {
    const topButton = () => {
        const topButton = document.getElementById("top-button");

        const scrollFunction = (btn, scrollDistance) => {
            // When the user scrolls down the given distance from the top of the document, show the HTML element
            if (
                document.body.scrollTop > scrollDistance ||
                document.documentElement.scrollTop > scrollDistance
            ) {
                btn.style.opacity = "1";
                btn.style.pointerEvents = "all";
            } else {
                btn.style.opacity = "0";
                btn.style.pointerEvents = "none";
            }
        };

        const topFunction = () => {
            // When the user clicks on the button, scroll to the top of the document
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        };

        if (topButton != null) {
            topButton.innerHTML = "TOP";

            // When the user clicks on the button, scroll to the top of the document
            topButton.addEventListener("click", () => {
                topFunction();
            });
            let titles = document.querySelectorAll('div')
            let sections = document.querySelectorAll('section>div')
            // When the user scrolls down the given distance from the top of the document, show the button
            window.onscroll = () => {
                scrollFunction(topButton, 600);

                if (
                    window.innerHeight + window.scrollY >=
                    document.body.offsetHeight - 500
                ) {
                    topButton.style.border = `4px solid white`;
                } else {
                    topButton.style.border = `4px solid transparent`;
                }

                titles.forEach(sec => {
                    let top = window.scrollY;
                    let offset = sec.offsetTop - 150;
                    let height = sec.offsetHeight;
                    if (top >= offset && top < offset + height) {
                        sec.classList.add('show-animate')

                        // if want want to use repeating animation on scroll -> use this
                    } else {
                        sec.classList.remove('show-animate')

                    }
                });
                sections.forEach(sec => {
                    let topA = window.scrollY;
                    let offsetA = sec.offsetTop - 200;
                    let heightA = sec.offsetHeight;
                    if (topA >= offsetA && topA < offsetA + heightA) {

                        sec.classList.add('scrollevent')
                    } else {
                        sec.classList.remove('scrollevent')

                    }
                })
            };
        }
        return (
            <div id="top-button"
                style="opacity: 1; pointer-events: all; border: 4px solid #fff;">TOP</div>
        )
    }
    topButton()
    return (
        <>

            <footer>
                <div className="container " id="contact">
                    <section>
                        <div className="Subscribe" data-aos="fade-up"
                            data-aos-duration="1000">
                            <div className>
                                <div className="col-xs-12 col-md-6">
                                    <div className="heading">
                                        <h3>Contactez-moi</h3>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-6">
                                    <form className="form-inline">
                                        <div className="input-group">

                                            <h4 className="mb-5">Mon adresse de
                                                contact</h4>
                                            <h5 className="monemail">agnes.cloud@ik.me</h5>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="footer-logo">
                        <a href="#home"><i className="fa fa-home fa-4x"
                            style={{ color: "#000" }}
                            aria-hidden="true"></i></a>

                    </div>
                    <ul>
                        <li><a href="#home">Home </a></li>
                        <li className="semicolon">:</li>
                        <li><a href="#services">services</a></li>
                        <li className="semicolon">:</li>
                        <li><a href="#portfolio">portfolio</a></li>
                        <li className="semicolon">:</li>
                        <li><a href="#tech">technologies</a></li>
                        <li className="semicolon">:</li>
                        <li><a href="#contact">contact</a></li>

                    </ul>
                    <p>tous droits réservés © 2023 <span><a href="#portfolio">Portfolio</a></span>Crée
                        par <span><a
                            href="#home" >Agnès Cloud</a></span></p>
                </div>
            </footer >
            <div id="top-button"

                style={{ opacity: 1 }}

            ><div style={{ pointerEvents: 'all' }}>TOP</div></div>
        </>
    )
}

export default Footer