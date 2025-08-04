import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../styles/Stylex.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };    
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Template ID
        {
        name: formData.name,       // Pass the name from formData
        email: formData.email,     // Pass the email from formData
        message: formData.message, // Pass the message from formData
    },
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY    // Replace with your EmailJS Public Key
        ).then(
            (result) => {
                console.log('Email sent successfully:', result.text);
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Reset form
            },
            (error) => {
                console.error('Error sending email:', error.text);
                alert('Failed to send the message. Please try again.');
            }
        );
    };

    return (
        <main>
            <section className="contact-section">
                <div className="contact-section1">
                    <form onSubmit={handleSubmit}>
                        <h1>Contact Us</h1>
                        <div className="contact">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="contact">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="contact1">
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Message..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button className="cbutton" type="submit">Submit</button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Contact;
