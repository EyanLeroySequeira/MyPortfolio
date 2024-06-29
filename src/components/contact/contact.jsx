import React, { useState } from "react";
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faContactCard, faBook } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="contactpage" id="connect">
            <div>
            <h1 >Connect</h1>
            </div>

            <div className="contact-form-container" id="contact">
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <FontAwesomeIcon icon={faContactCard} size='l' />
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <FontAwesomeIcon icon={faEnvelope} size='l' />
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <FontAwesomeIcon icon={faBook} size='l' />
                        <label htmlFor="subject">Subject:</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="submit">
                        <button type="submit" className="submit-button">Submit</button>
                    </div>
                </form>
            </div>
        </div>

    );
};
