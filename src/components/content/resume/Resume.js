import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from 'react-bootstrap/ProgressBar'

function Resume() {

    const [progressNow, setProgressNow] = useState(0);

    const updateProgressNowHandler = setInterval(() => {
    if (progressNow >= 70 ){
    setProgressNow(70)
    clearInterval(updateProgressNowHandler)
    }
    setProgressNow(s => s+1)
    }, 50)

  return (
   
        <div className="resume">
            <div className="main-container">
                <div className='heading'>
                    <span className='icon'><FontAwesomeIcon icon={ faGraduationCap } /></span>
                    <h2>Resume</h2>
                </div>
                <div className='row mb-70'>
                    <div className='col-lg-6'>
                        <div className='subheading'>
                            <h3>Experience</h3>
                        </div>
                        <ul className='experience'>
                            <li>
                                <span className='line-left'></span>
                                <div className='experience-content'>
                                    <h4>GRAPHISTE</h4>
                                    <h5>Logic IMMO , Hammamet</h5>
                                    <p className='info'>
                                        • Conception et realisation du support de communication <br/>
                                        • Gestion du site web et les réseaux sociaux<br/>
                                        • Mettre en oeuvre les campagnes promotionnelle<br/>
                                        • Optimiser le ciblage d'une campagne de marketing
                                    </p>
                                </div>
                                <span className='year'>
                                    <span className='to'>2022</span>
                                    <span className='from'>2021</span>
                                </span>
                            </li>
                            <li>
                                <span className='line-left'></span>
                                <div className='experience-content'>
                                    <h4>Franchise Ooredoo</h4>
                                    <h5>Conseiller Commercial , Hammamet</h5>
                                    <p className='info'>
                                        • Conseiller et assister les clients<br/>
                                        • Gérer les fichiers et les comptes des clients<br/>
                                        • Prospection de nouveaux clients
                                    </p>
                                </div>
                                <span className='year'>
                                    <span className='to'>2021</span>
                                    <span className='from'>2020</span>
                                </span>
                            </li>
                            <li>
                                <span className='line-left'></span>
                                <div className='experience-content'>
                                    <h4>Chargé logistique </h4>
                                    <h5>Conseiller Commercial , Hammamet</h5>
                                    <p className='info'>
                                        • Gestion de flux d’entrée des marchandises (qualitatif et quantitatif)<br/>
                                        • Gestion des stocks (suivi le rangement des marchandises au l'entrepot)<br/>
                                        • Saisie les bon d’entrée et des sorties des marchandises
                                    </p>
                                </div>
                                <span className='year'>
                                    <span className='to'>2019</span>
                                    <span className='from'>2018</span>
                                </span>
                            </li>
                            <li>
                                <span className='line-left'></span>
                                <div className='experience-content'>
                                    <h4>Webmaster </h4>
                                    <h5>Barclay's Group Travel , Hammamet</h5>
                                    <p className='info'>
                                        • Conception et realisation du support de communication (flyers, affiche, brochures)<br/>
                                        • Gestion du site web et les réseaux sociaux
                                    </p>
                                </div>
                                <span className='year'>
                                    <span className='to'>2018</span>
                                    <span className='from'>2017</span>
                                </span>
                            </li>
                            <li>
                                <span className='line-left'></span>
                                <div className='experience-content'>
                                    <h4>Stage de Fin d’étude  </h4>
                                    <h5>IBS , Sfax</h5>
                                    <p className='info'>
                                        • Projet : Conception et développement d'une application web pour les recherches des offres et des services.<br/>
                                        • Mots clés : PHP (CakePHP), HTML, CSS, Javascript, UML
                                    </p>
                                </div>
                                <span className='year'>
                                    <span className='to'>2017</span>
                                    <span className='from'>2017</span>
                                </span>
                            </li>
                            <li>
                                <span className='line-left'></span>
                                <div className='experience-content'>
                                    <h4>Stage d’initiation   </h4>
                                    <h5>HI Services , Hammamet</h5>
                                    <p className='info'>
                                        • Projet : Conception et développement d'une application web pour les recherches des offres d'emploi.<br/>
                                        • Mots clés : PHP, HTML, CSS, UML
                                    </p>
                                </div>
                                <span className='year'>
                                    <span className='to'>2016</span>
                                    <span className='from'>2016</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-6'>
                        <div className='subheading'>
                            <h3>EDUCATION</h3>
                        </div>
                        <ul className='experience mb-20'>
                        <li>
                                <span className='line-left'></span>
                                <div className='experience-content'>
                                    <h4>Certificate of Completion</h4>
                                    <h5>GOMYCODE , Nabeul</h5>
                                    <p className='info'>
                                        Formation Front-End Web Developement | ReactJS
                                    </p>
                                </div>
                                <span className='year'>
                                    <span className='to'>2022</span>
                                    <span className='from'>2022</span>
                                </span>
                            </li>
                            <li>
                                <span className='line-left'></span>
                                <div className='experience-content'>
                                    <h4>Licence Appliquée en Informatique</h4>
                                    <h5>Institut Supérieur d'Informatique et de Multimédia , Sfax</h5>
                                    <p className='info'>
                                        Obtention du diplôme de licence appliquée en informatique de spécialité
                                        technologie du multimédia et du web.
                                    </p>
                                </div>
                                <span className='year'>
                                    <span className='to'>2017</span>
                                    <span className='from'>2013</span>
                                </span>
                            </li>
                            <li>
                                <span className='line-left'></span>
                                <div className='experience-content'>
                                    <h4>BACCALAURÉAT</h4>
                                    <h5>Lycée Ahd eljadid Bouagroub , Nabeul</h5>
                                    <p className='info'>
                                        Obtention du diplôme national de baccalauréat section mathématiques.
                                    </p>
                                </div>
                                <span className='year'>
                                    <span className='to'>2013</span>
                                    <span className='from'>2009</span>
                                </span>
                            </li>
                        </ul>
                        <div className='skills mb-20'>
                            <div className='subheading'>
                                <h3>DESIGN SKILLS</h3>
                            </div>
                            <div className='skill-item'>
                                <h4 className='progress-title'>PHOTOSHOP</h4>
                                <div className=''>
                                    <ProgressBar 
                                    now={progressNow} />
                                </div>
                            </div>
                            <div className='skill-item'>
                                <h4 className='progress-title'>ILLUSTRATOR</h4>
                                <div className=''>
                                    <ProgressBar 
                                    now={progressNow} />
                                </div>
                            </div>
                            <div className='skill-item' style={{marginBottom: "70px"}}>
                                <h4 className='progress-title'>ADOBE PREMIERE PRO</h4>
                                <div className=''>
                                    <ProgressBar 
                                    now={progressNow} />
                                </div>
                            </div>
                            <div className='subheading'>
                                <h3>CODING SKILLS</h3>
                            </div>
                            <div className='skill-item'>
                                <h4 className='progress-title'>HTML/CSS/BOOTSTRAP</h4>
                                <div className=''>
                                    <ProgressBar 
                                    now={progressNow} />
                                </div>
                            </div>
                            <div className='skill-item'>
                                <h4 className='progress-title'>REACTJS</h4>
                                <div className=''>
                                    <ProgressBar 
                                    now={progressNow} />
                                </div>
                            </div>
                            <div className='skill-item'>
                                <h4 className='progress-title'>PHP/MYSQL</h4>
                                <div className=''>
                                    <ProgressBar 
                                    now={progressNow} />
                                </div>
                            </div>
                            <div className='skill-item'>
                                <h4 className='progress-title'>SYMFONY/CAKEPHP</h4>
                                <div className=''>
                                    <ProgressBar 
                                    now={progressNow} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </div>

  );
}

export default Resume;
