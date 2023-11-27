import React from 'react'
import audit from '../assets/images/audit.png'
import uxDesign from '../assets/images/uxDesign.png'
import referencement from '../assets/images/referencement.png'
import devImg from '../assets/images/dev.png'
import contenu from '../assets/images/contenu.png'
import devops from '../assets/images/devops.png'

const Services = () => {
    const lazyLoading = () => {
        const lazyImgs = document.querySelectorAll('.lazy');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('loading');
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        lazyImgs.forEach(img => {
            observer.observe(img);
        });
    };
    lazyLoading();
    return (
        <div className="container sec-4">

            <h2 data-message="Services sur mesure">Services<span className="showRight-animate" ></span></h2>
            <section id="services">

                <div className="row d-flex serv-bloc" data-aos="fade-up"
                    data-aos-duration="1000">
                    <div className="col-xs-12 col-sm-3 col-md-2">
                        <img className="img-responsive career-img lazy loading"
                            src="https://via.placeholder.com/1920x968"
                            data-src={audit}
                            alt="service-1" />
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-10">
                        <div className="contant">
                            <h3>Audit et conseil</h3>
                            <p>Un projet web englobe de nombreuses compétences : graphisme
                                et
                                webdesign, ergonomie, rédaction, référencement, marketing

                            </p>
                        </div>
                    </div>
                </div>

                <div className="row d-flex serv-bloc" data-aos="fade-up"
                    data-aos-duration="800">
                    <div className="col-xs-12 col-sm-3 col-md-2">
                        <img className="img-responsive career-img lazy loading"
                            src="https://via.placeholder.com/1920x968"
                            data-src={uxDesign}
                            alt="service-2" />
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-10">
                        <div className="contant">
                            <h3>Ux Design</h3>
                            <p>L'Ux Design ou expérience utilisateur est la qualité du
                                vécu de
                                l'utilisateur dans des environnements numériques ou
                                physiques

                            </p>
                        </div>
                    </div>
                </div>

                <div className="row d-flex serv-bloc" data-aos="fade-up"
                    data-aos-duration="800">
                    <div className="col-xs-12 col-sm-3 col-md-2">
                        <img className="img-responsive career-img lazy loading"
                            src="https://via.placeholder.com/1920x968"
                            data-src={referencement} alt="service-3" />
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-10">
                        <div className="contant">
                            <h3>Référencement SEO</h3>
                            <p>Il est essentiel de réaliser un Audit de référencement pour
                                garantir un référencement naturel durable

                            </p>
                        </div>
                    </div>
                </div>

                <div className="row d-flex serv-bloc" data-aos="fade-up"
                    data-aos-duration="800">
                    <div className="col-xs-12 col-sm-3 col-md-2">
                        <img className="img-responsive career-img lazy loading"
                            src="https://via.placeholder.com/1920x968"
                            data-src={devImg}
                            alt="service-3" />
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-10">
                        <div className="contant">
                            <h3>Développement</h3>
                            <p> Les principaux langages utilisés pour créer
                                des sites ou applications web sont le HTML, le CSS, le
                                JavaScript, Java, Python, Php
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row d-flex serv-bloc" data-aos="fade-up"
                    data-aos-duration="800">
                    <div className="col-xs-12 col-sm-3 col-md-2">
                        <img className="img-responsive career-img lazy loading"
                            src="https://via.placeholder.com/1920x968"
                            data-src={contenu}
                            alt="service-3" />
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-10">
                        <div className="contant">
                            <h3>Contenu</h3>
                            <p>Le but d’une stratégie de contenu est d’attirer, d’engager
                                et
                                de fidéliser une audience spécifique et ultimement de
                                générer du
                                traffic

                            </p>
                        </div>
                    </div>
                </div>

                <div className="row d-flex serv-bloc" data-aos="fade-up"
                    data-aos-duration="800">
                    <div className="col-xs-12 col-sm-3 col-md-2">
                        <img className="img-responsive career-img lazy loading"
                            src="https://via.placeholder.com/1920x968"
                            data-src={devops}
                            alt="service-3" />
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-10">
                        <div className="contant">
                            <h3>DevOps</h3>
                            <p>Le DevOps permet la coordination et la collaboration des
                                rôles autrefois cloisonnés: le développement et l'opérationnel

                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services