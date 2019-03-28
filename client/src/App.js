import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 nameDiv">
            <h1 class="name">BRIAN NICKILA</h1>
            <div class="row">
              <div class="col-md-12 roleDiv">
                <h2 class="role">Full-Stack Web Developer</h2>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="row infoRow">
          <div class="col-md-7 bioDiv">
            <p class="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut ligula elit. Maecenas
                et finibus velit, volutpat fermentum sem. Etiam lacinia cursus erat, hendrerit dignissim turpis
                elementum vitae. Quisque laoreet commodo ullamcorper. Aenean euismod volutpat euismod. Praesent
                convallis consectetur diam et luctus. Fusce vitae molestie erat. Aenean sed congue purus. Proin id
                laoreet metus. Maecenas egestas, velit et hendrerit porta, augue dolor lobortis massa, sit amet
                  vehicula dui urna et felis.</p>
          </div>
          <div class="col-md-3">
            <div class="container techContainer">
              <div class="row">
                <div class="col-md-12 techHeaderDiv">
                  <h3 class="techHeader">TECHNOLOGIES</h3>
                </div>
              </div>
              <table class="table borderless">
                <tr class="techs">
                  <td>React</td>
                  <td>JavaScript</td>
                  <td>jQuery</td>
                </tr>
                <tr class="techs">
                  <td>MongoDB</td>
                  <td>Illustrator</td>
                  <td>HTML</td>
                </tr>
                <tr class="techs">
                  <td>CSS</td>
                  <td>Bootstrap</td>
                  <td>Mongoose</td>

                </tr>
                <tr class="techs">
                  <td>Flash</td>
                  <td>MySQL</td>
                  <td>Express</td>
                </tr>
                <tr class="techs">
                  <td>Node.js</td>
                  <td>Sequelize</td>
                  <td>Photoshop</td>
                </tr>
              </table>
            </div>
          </div>



          <div class="col-md-2">
            <div class="container">
              <div class="row">
                <div class="col-md-12 linkDiv">
                  <h3 class="link">WORK</h3>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 linkDiv">
                  <h3 class="link">CONTACT</h3>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 linkDiv">
                  <h3 class="link">GITHUB</h3>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 linkDiv">
                  <h3 class="link">LINKEDIN</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





    );
  }
}

export default App;
