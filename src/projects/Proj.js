import React from 'react'
import { image } from '../utils/Mydatas';
import Mydata, { mydatas } from '../utils/Mydatas';
import { colors } from "../utils/colordatas";
const Proj = () => {
    window.onload = (e) => {
        const projectCard = document.querySelectorAll('.project-card');
        projectCard.forEach((pro) => {

            pro.style.background = getRandomColor();
            // e.target.style.backgroundColor = getRandomColor();
        })
    };

    function getRandomColor() {

        let newColor = 0
        let num = 0;
        for (let i = 0; i < 6; i++) {
            num = Math.floor(Math.random() * colors.length);
            newColor = `rgb(${colors[num].rgb})`;
        }
        return newColor;
    };

    return (
        <main id="main" class="show-animate">

            <div id="main-content" class="sec-4">
                <h2 data-message="Quelques projets que j'ai réalisé">Portfolio<span class="showRight-animate"></span></h2>
                <div id="portfolio"></div>
                <section id="projects">
                    <div id="projects-container" className='item'>
                        {mydatas.map((dat) => {
                            return (
                                <div class="project-card item__content" style={{ backgroundColor: "colorStyle" }}>

                                    <div className="project-image-container">

                                        <a href={dat.deployment} target="_blank">
                                            <img className="project-image" src={dat.image} alt={dat.image} /></a></div>

                                    <a className="project-title" href={dat.deployment} target="_blank"><br />{dat.name}</a>
                                    <p className="project-summary">{dat.summary}</p>
                                    <p className="technologies">{dat.technologies}</p>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Proj