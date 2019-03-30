import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 nameDiv">
                    <h1 className="name">BRIAN NICKILA</h1>
                    <div className="row">
                        <div className="col-md-12 roleDiv">
                            <h2 className="role">Full-Stack Web Developer</h2>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row infoRow">
                <div className="col-md-7 bioDiv">
                    <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut ligula elit. Maecenas
                        et finibus velit, volutpat fermentum sem. Etiam lacinia cursus erat, hendrerit dignissim turpis
                        elementum vitae. Quisque laoreet commodo ullamcorper. Aenean euismod volutpat euismod. Praesent
                        convallis consectetur diam et luctus. Fusce vitae molestie erat. Aenean sed congue purus. Proin id
                        laoreet metus. Maecenas egestas, velit et hendrerit porta, augue dolor lobortis massa, sit amet
                  vehicula dui urna et felis.</p>
                </div>
                <div className="col-md-3">
                    <div className="container techContainer">
                        <div className="row">
                            <div className="col-md-12 techHeaderDiv">
                            </div>
                        </div>
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
                </div>
                <div className="col-md-2">
                    <div className="container linkDiv">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="linkHeader"><Link className="link" to="/portfolio">WORK</Link></h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="linkHeader"><Link className="link" to="/contact">CONTACT</Link></h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="linkHeader"><a className="link" href="https://github.com/nickila">GITHUB</a></h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="linkHeader"><a className="link" href="https://www.linkedin.com/in/brian-nickila/">LINKEDIN</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;