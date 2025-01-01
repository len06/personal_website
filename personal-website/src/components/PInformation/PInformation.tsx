import React from 'react';
import './PInformation.css';

function PInformation(){
    return(
    <div className="pinformatin-container">
        <h2 className="pinformation-header">About Me</h2>
        <div className="pinformation-double-container">
            <img src="/Carousel_images/Picture_Of_Self.jpg" alt="self_portrait" className="pinformation-img"></img>
            <div className="pinformation-textbox">
                <h1 className="pinformation-name">Wei Yan Lennard Tan</h1>
                <p className="pinformation-text">My name is Wei Yan Lennard Tan. I am a 22 year-old Computer Science (Informatik) student 
                                                at RWTH Aachen University from Malaysia with a passion for technology and creativity. I enjoy solving challenging problems
                                                through coding and design. 
                                                <br></br>
                                                In my spare time, I also like to explore new technologies, listen to music, working on personal projects and 
                                                immerse myself in movies. My goal is to contribute to impactful projects and grow as a software developer/web developer.
                </p>
            </div>
        </div>
    </div>
    )
}

export default PInformation;