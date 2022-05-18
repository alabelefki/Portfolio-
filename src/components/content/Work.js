import React from 'react';
import '../../style/main.css';
import work1 from '../../images/work1.jpg'
import work2 from '../../images/work2.jpg'
import work3 from '../../images/work3.jpg'
import work4 from '../../images/work4.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare} from '@fortawesome/free-brands-svg-icons';


function Work() {
  
  return (
   

    <div class="work">
        <div className="main-container">
            <div className='heading'>
                <span className='icon'><FontAwesomeIcon icon={ faBriefcase } /></span>
                <h2>Work</h2>
            </div>
            <div className='work-items mb-20'>
                <div className='main-item mb-20'>
                    <div className='item'>
                        <div className='image-item'>
                            <img src={ work1 } />
                            <ul>
                                <li>
                                    <a href='https://github.com/alabelefki/Agency-HTML-Template' target="_blank">
                                        <FontAwesomeIcon icon={ faGithubSquare } />
                                    </a>
                                </li>
                                <li>
                                <a href=''>
                                        <FontAwesomeIcon icon={ faLink } />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <h6>Landing page</h6>
                        <p>Created with only Html and css3.</p>
                    </div>
                    <div className='item'>
                        <div className='image-item'>
                            <img src={ work2 } />
                            <ul>
                                <li>
                                    <a href='https://github.com/alabelefki/Special-Design-Template' target="_blank">
                                        <FontAwesomeIcon icon={ faGithubSquare } />
                                    </a>
                                </li>
                                <li>
                                <a href=''>
                                        <FontAwesomeIcon icon={ faLink } />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <h6>Special Design</h6>
                        <p>A single-page Template completely Designed with HTML, CSS and JS.</p>
                    </div>
                    <div className='item'>
                        <div className='image-item'>
                            <img src={ work3 } />
                            <ul>
                                <li>
                                    <a href='https://github.com/alabelefki/Todo_List' target="_blank">
                                        <FontAwesomeIcon icon={ faGithubSquare } />
                                    </a>
                                </li>
                                <li>
                                <a href=''>
                                        <FontAwesomeIcon icon={ faLink } />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <h6>Todo List</h6>
                        <p>it is an app to organize and prioritize my tasks ( add, delete and sort todo items), it is designed using Html , CSS and JavaScript</p>
                    </div>
                    <div className='item'>
                        <div className='image-item'>
                            <img src={ work4 } />
                            <ul>
                                <li>
                                    <a>
                                        <FontAwesomeIcon icon={ faGithubSquare } />
                                    </a>
                                </li>
                                <li>
                                <a href=''>
                                        <FontAwesomeIcon icon={ faLink } />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <h6>Kasper Template</h6>
                        <p>Created with only Html and css3 .</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

     
  );
}

export default Work;



// <div className='item col-lg-4 col-sm-6'>
//                     <a className='image-link'>
//                         <figure>
//                             <img src={ photo } />
//                             <figcaption>
//                                 <h4>Book Design</h4>
//                                 <p>Graphic</p>
//                             </figcaption>
//                         </figure>
//                     </a>
//                 </div>
