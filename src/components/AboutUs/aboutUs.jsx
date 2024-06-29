import React, { useEffect } from "react";
import './AboutUs.css';
import photo from './profilePic.jpeg';

export const About = () => {
    return (
        <div className="aboutus" id='aboutus'>
            <div className="title">
                <h1>About me</h1>
            </div>
            <div className="aboutDetails">
                <div>
                    <img id='profilePic' src={photo} alt="photo" />
                </div>
                <div className="about_right">
                    <p className="description-text">I am a Frontend Developer with good experience in HTML, CSS, Javascript and ReactJS</p>
                    <div>
                        <div className="skills">
                            <label htmlFor="html-css">HTML/CSS</label>
                            <progress id="html-css" value="40" max="100">He;;p</progress>
                            <div className="progress-animation" style={{ width: '40%' }}></div>
                        </div>
                        <div className="skills">
                            <label htmlFor="javascript">JavaScript</label>
                            <progress id="javascript" value="80" max="100"></progress>
                            <div className="progress-animation" style={{ width: '80%' }}></div>
                        </div>
                        <div className="skills">
                            <label htmlFor="reactjs">ReactJS</label>
                            <progress id="reactjs" value="60" max="100"></progress>
                            <div className="progress-animation" style={{ width: '60%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
