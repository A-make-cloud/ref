import React from 'react';
import top5 from '../assets/images/top5.jpg'
import framework from '../assets/images/framework.png'
import html5 from '../assets/images/html5.jpg'
import java from '../assets/images/java.png'


const Technologies = () => {

    return (
        <section id="tech" >

            <div id="technology" className="sec-4">
                <h2 className="container" data-message="Passionnée de nouvelles technologies">Technology<span className="showRight-animate"></span></h2>

                <div className="row d-flex even" data-aos="fade-up"
                    data-aos-duration="1000">

                    <div className="col-xs-12 col-sm-3 col-md-2">
                        <img className="img-responsive career-img lazy loading"
                            src="https://via.placeholder.com/1920x968"
                            data-src={top5} alt="top5" />
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-10">
                        <div className="contant">
                            <h3>Technologies récentes</h3>
                            <p>Les technologies évoluent, une
                                mise à
                                jour régulière et une
                                veille quant aux outils et
                                technologies récentes est un
                                atout
                                qu'un
                                développeur web doit posséder,
                                que
                                ce soit dans les langages de
                                programmation, l'infrastructure
                                d'hébergement,
                                la conception ou
                                les outils de programmation.
                                Java est un langage prometteur
                                et
                                parmis les plus fiables en
                                terme de sécurité.
                            </p>

                        </div>
                    </div>
                </div>

                <div className="row d-flex odd" data-aos="fade-up"
                    data-aos-duration="1000">
                    <div className="col-xs-12 col-sm-3 col-md-2">
                        <img className="img-responsive career-img lazy loading"
                            width="210px"
                            src="https://via.placeholder.com/1920x968"
                            data-src={framework}
                            alt="framework" />
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-10">
                        <div className="contant">
                            <h3>Frameworks favoris</h3>
                            <p> React.js est mon framework
                                favoris
                                pour JavaScript front-end et
                                NodeJS
                                pour le back-end: pour un
                                développement Full-Stack. <br />
                                Mon framework PHP préféré est
                                Symfony.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row d-flex even" data-aos="fade-up"
                    data-aos-duration="1000">
                    <div className="col-xs-12 col-sm-3 col-md-2">
                        <img className="img-responsive career-img lazy loading"
                            width="210px"
                            src="https://via.placeholder.com/1920x968"
                            data-src={html5} alt="html" />
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-10">
                        <div className="contant">
                            <h3>HTML5, CSS3</h3>
                            <p>HTML5 est la dernière évolution de
                                HTML,
                                le langage informatique utilisé pour
                                définir les blocs utilisés pour
                                construire des pages Web affichées
                                dans
                                un navigateur, c'est la base pour
                                créer
                                tout contenu Web. CSS3 est une
                                dernière
                                version standard de CSS : Cascading
                                Style Sheets est un langage de
                                feuille
                                de style utilisé pour décrire l'apparence
                                et la mise en forme d'un document
                                écrit
                                dans un langage de balisage.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row d-flex odd" data-aos="fade-up"
                    data-aos-duration="1000">
                    <div className="col-xs-12 col-sm-3 col-md-2">
                        <img className="img-responsive career-img lazy loading"
                            width="210px"
                            src="https://via.placeholder.com/1920x968"
                            data-src={java} alt="java" />
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-10">
                        <div className="contant">
                            <h3>Java</h3>
                            <p>Java est le premier langage de
                                programmation et la première
                                plate-forme
                                de développement. Il réduit les
                                coûts,
                                raccourcit les temps de
                                développement,
                                stimule l'innovation et améliore les
                                services applicatifs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technologies