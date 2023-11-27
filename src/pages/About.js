import React from 'react'

const About = () => {
    return (
        <section id="about" >
            <div id="competences">
                <h3>compétences</h3>
                <div id="competences-text">
                    <h5>Apprentissage des langages en
                        développement web :</h5>
                    <p>En auto-didacte</p>
                    <p> En centre de formation</p> <br />
                    <p>Création de :<br /> Sites web statics <br /> Sites interactifs <br />
                        Applications </p><br /><p>Familiarisée
                            à l'utilisation de : <br /> Frameworks <br />Cms avec bases de données</p>
                    <br />
                    <h5>Langages et outils:</h5>
                    <div id="languagesdev">

                        <div id="backend">
                            <h6>Back-end: </h6>
                            <p> Java JEE<br />
                                Node.js<br />
                                Php<br />
                                MySql</p>

                        </div>
                        <div id="frontend">
                            <h6>Front-end :</h6>
                            <p>HTML / CSS <br />
                                JavaScript<br />
                                Bootstrap <br />
                                Responsive web<br />
                                WordPress<br />
                                React<br />
                            </p>
                        </div>
                        <div id="outilcollab">
                            <h6>Outils collaboratifs:</h6>
                            <p>Github <br />Trello</p>

                        </div>
                        <div id="designtool">

                            <h6>Design & tools :</h6>
                            <p> UI/UX Design<br />
                                Illustrator<br />
                                Adobe Xd<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="photo" className="lazy loading">

            </div>
            <div id="presentation">
                <h3>présentation</h3>
                <div id="presentation-text">
                    <p>Je suis une développeuse web: <br /> J'ai commencé à me former en
                        2019. <br /> Actuellement,je suis active dans mon apprentissage
                        des
                        nouvelles technologies <br /> Experte pour offrir des
                        solutions.</p>
                    <p>Au préalable, mon expertise résidait dans l'administration
                        des
                        ventes et approvisionnements de boutiques de la marque des
                        sociétés pour lesquelles je travaillais. <br /> </p>
                    <p>J'ai une vaste expérience couvrant différentes fonctions, à
                        travers divers
                        niveaux de marché allant des marques internationales aux
                        entreprises de petite et taille moyenne. <br /></p>
                    <p> Cela m'a donné une
                        culture d'entreprise
                        et des compétences qui peuvent être transférées: <br />En
                        Qualité
                        de
                        consultante en développement web,<br />Afin d'analyser la
                        demande
                        <br /> Concevoir un site adapté dans des domaines variés.</p>
                    <p>Proposer des solutions numériques adaptés aux besoins</p>
                </div>
            </div>

        </section>
    )
}

export default About