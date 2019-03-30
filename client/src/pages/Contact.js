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
        if (validateEmail(email) && this.state.name && this.state.message) {
            API.pushMessage({
                name: this.state.name,
                email: email,
                message: this.state.message
            })
            this.setState({
                name: "",
                email: "",
                message: ""
            })
            console.log("Real Address!")
        } else {
            alert("Please enter a valid email address.")
            this.setState({
                name: "",
                email: "",
                message: ""
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-9 mx-auto">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="contactMe">CONTACT ME</h2>
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
            </div >

        )
    }
}

export default Contact;