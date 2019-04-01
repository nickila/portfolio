import React, { Component } from "react";
import API from "../utils/API";
import "./Contact.css";

class Contact extends Component {
    state = {
        name: "",
        email: "",
        message: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };




    handleFormSubmit = event => {
        event.preventDefault();
        function validateEmail(email) {
            // eslint-disable-next-line
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        console.log("submit form!")
        let email = this.state.email;
        if (!this.state.name) {
            alert("Please enter your name.")
        } else if (!this.state.message) {
            alert("Please leave a message.")
        } else if (validateEmail(email) === false) {
            alert("Please enter a valid email address.")
        } else if (validateEmail(email) && this.state.name && this.state.message) {
            API.pushMessage({
                name: this.state.name,
                email: email,
                message: this.state.message
            })
            alert("Your message has been sent. Thank you.")
            this.setState({
                name: "",
                email: "",
                message: ""
            })
        } else {
            alert("Something went wrong. Please try again.")
            this.setState({
                name: "",
                email: "",
                message: ""
            })
        }
    }

    render() {
        return (
            <div className="container-fluid contact-container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="contactMe">CONTACT</h2>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea className="form-control" name="message" rows="3" value={this.state.message} onChange={this.handleInputChange}></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-dark contact-btn" onClick={this.handleFormSubmit}>SUBMIT</button>
                                    </div>

                                </form>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div >

        )
    }
}

export default Contact;