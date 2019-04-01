import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container-fluid">
            <div className="row nameDiv">
                <div className="col-md-9">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="name">BRIAN NICKILA</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 roleDiv">
                                <h2 className="role">Full-Stack Web Developer</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <img className="profileImg" src="images/profile.png" alt="Brian Nickila profile" />
                </div>
            </div >
            {/* <hr className="homeHR" /> */}
            < div className="row infoRow" >
                <div className="col-md-7 bioDiv">
                    <p className="bio">Full-stack web developer creating apps and websites in a creative and user-friendly style in St. Paul, Minnesota. I have a bachelor of fine arts degree from the University of Wisconsin-Stevens Point and a certificate in full-stack web development from the University of Minnesota. When I'm not writing code, you might find me animating, playing guitar or camping. Please check out my <Link className="link" to="/portfolio">PORTFOLIO</Link> and feel free to <Link className="link" to="/contact" >CONTACT</Link> me for any reason. I'd love to hear from you.</p>
                </div>
                <div className="col-md-3">
                    <table className="table borderless">
                        <tr className="techs">
                            <td colspan="3" className="techHeader">TECHNOLOGIES</td>
                        </tr>
                        <tr className="techs">
                            <td>React</td>
                            <td>JavaScript</td>
                            <td>jQuery</td>
                        </tr>
                        <tr className="techs">
                            <td>MongoDB</td>
                            <td>Illustrator</td>
                            <td>HTML</td>
                        </tr>
                        <tr className="techs">
                            <td>CSS</td>
                            <td>Bootstrap</td>
                            <td>Mongoose</td>

                        </tr>
                        <tr className="techs">
                            <td>Flash</td>
                            <td>MySQL</td>
                            <td>Express</td>
                        </tr>
                        <tr className="techs">
                            <td>Node.js</td>
                            <td>Sequelize</td>
                            <td>Photoshop</td>
                        </tr>
                    </table>

                </div>
                <div className="col-md-2">
                    <div className="container linkDiv">
                        <div className="row">
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <a href="https://github.com/nickila"><i class="fab fa-github"></i></a>
                                <a href="https://www.linkedin.com/in/brian-nickila"><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Home;